import { Stomp } from "@stomp/stompjs";
import { useState, useEffect } from "react";
// import Stomp from "stompjs";
function Socket() {
  const [stompClient, setStompClient] = useState(null);
  useEffect(() => {
    var stompClient = Stomp.over(function () {
      return new WebSocket("ws://api.modundo.com/ws");
    });

    stompClient.connect(
      {},
      () => {
        setStompClient(stompClient);
        stompClient.subscribe("/user/" + 1 + "/queue/messages", (message) =>
          onMessageReceived(message)
        );
      },
      (error) => {
        console.error(error);
      }
    );

    return () => {
      if (stompClient !== null) {
        stompClient.disconnect();
      }
    };
  }, []);
  const onMessageReceived = (message) => {
    // Xử lý tin nhắn nhận được ở đây
    console.log("Received message:", message);
  };

  const sendMessage = (msg) => {
    if (msg.trim() !== "" && stompClient) {
      const message = {
        senderId: 1, // Replace with your sender ID
        recipientId: 4, // Replace with your recipient ID
        content: msg,
        timestamp: new Date(),
      };

      stompClient.send("/app/chat", {}, JSON.stringify(message));
    }
  };

  return (
    <div>
      {stompClient ? (
        <div>
          Connected
          <button onClick={() => sendMessage("Hello, WebSocket!")}>
            Send Message
          </button>
        </div>
      ) : (
        "Disconnected"
      )}
    </div>
  );
}

export default Socket;
