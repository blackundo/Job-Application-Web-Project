package com.vn.BackEnd_Job_Website.Respository;

import com.vn.BackEnd_Job_Website.Model.ChatRoom;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ChatRoomRepository extends JpaRepository<ChatRoom, Integer> {
    @Query(value = "select c from ChatRoom c where c.senderID.id = :senderId and c.recipientID.id = :recipientId")
    Optional<ChatRoom> findBySenderIDAndRecipientID(Integer senderId, Integer recipientId);
    @Query(value = "select c from ChatRoom c where c.chatID = :id")
    Optional<ChatRoom> findByChatID(String id);

}
