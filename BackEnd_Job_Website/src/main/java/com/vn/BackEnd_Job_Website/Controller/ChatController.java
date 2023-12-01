package com.vn.BackEnd_Job_Website.Controller;

import com.vn.BackEnd_Job_Website.Dto.ChatNotification;
import com.vn.BackEnd_Job_Website.Dto.MessagePayload;
import com.vn.BackEnd_Job_Website.Model.Account;
import com.vn.BackEnd_Job_Website.Model.ChatRoom;
import com.vn.BackEnd_Job_Website.Model.Message;
import com.vn.BackEnd_Job_Website.Respository.AccountRepository;
import com.vn.BackEnd_Job_Website.Respository.ChatRoomRepository;
import com.vn.BackEnd_Job_Website.Respository.MessageRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Controller
@RequiredArgsConstructor
public class ChatController {
    private final SimpMessagingTemplate messagingTemplate;
    private final MessageRepository messageRepository;
    private final ChatRoomRepository chatRoomRepository;
    private final AccountRepository accountRepository;


    private Optional<String> getChatRoomId(
            Account senderId,
            Account recipientId,
            boolean createNewRoomIfNotExists
    ) {
        return chatRoomRepository
                .findBySenderIDAndRecipientID(senderId.getId(), recipientId.getId())
                .map(ChatRoom::getChatID)
                .or(() -> {
                    if(createNewRoomIfNotExists) {
                        var chatId = createChatId(senderId, recipientId);
                        return Optional.of(chatId);
                    }

                    return  Optional.empty();
                });
    }


    private String createChatId(Account senderId, Account recipientId) {
        var chatId = String.format("%s_%s", senderId.getId(), recipientId.getId());

        ChatRoom senderRecipient = ChatRoom
                .builder()
                .chatID(chatId)
                .senderID(senderId)
                .recipientID(recipientId)
                .build();

        ChatRoom recipientSender = ChatRoom
                .builder()
                .chatID(chatId)
                .senderID(recipientId)
                .recipientID(senderId)
                .build();

        chatRoomRepository.save(senderRecipient);
        chatRoomRepository.save(recipientSender);

        return chatId;
    }


    public List<Message> findChatMessages(Account senderId, Account recipientId) {
        var chatId = getChatRoomId(senderId, recipientId, false);
        List<Message> list = messageRepository.findByChatRoomID("1_4");
//        System.out.println(list.toString());
        return list;
//        return chatId.map(messageRepository::findByChatRoomID).orElse(new ArrayList<>());
    }

    @MessageMapping("/chat")
    public void processMessage(@Payload MessagePayload payload) {
        var sender = accountRepository.findById(payload.senderId()).orElseThrow();
        var recipient = accountRepository.findById(payload.recipientId()).orElseThrow();

        var chatId = getChatRoomId(sender, recipient, true).orElseThrow();

        ChatRoom chatRoom = chatRoomRepository.findByChatID(chatId).orElseThrow();
        Message message = new Message();
        message.setChatRoomID(chatRoom);
        message.setContent(payload.content());
        messageRepository.save(message);

        Message savedMsg = messageRepository.save(message);
        messagingTemplate.convertAndSendToUser(
                String.valueOf(recipient.getId()), "/queue/messages",
                new ChatNotification(
                        savedMsg.getId(),
                        savedMsg.getChatRoomID().getSenderID().getId(),
                        savedMsg.getChatRoomID().getRecipientID().getId(),
                        savedMsg.getContent()
                )
        );
    }


    @GetMapping("/messages/{senderId}/{recipientId}")
    public ResponseEntity<List<Message>> findChatMessages(@PathVariable Integer senderId,
                                                          @PathVariable Integer recipientId) {
        var sender = (Account) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        var recipient = accountRepository.findById(recipientId).orElseThrow();
        return ResponseEntity
                .ok(findChatMessages(sender, recipient));
    }
}
