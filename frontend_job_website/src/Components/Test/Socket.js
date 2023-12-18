import { Stomp } from "@stomp/stompjs";
import { useState, useEffect } from "react";
// import Stomp from "stompjs";
function Socket() {
  const [stompClient, setStompClient] = useState(null);
  const [connected, setConnected] = useState(false);
  useEffect(() => {
    var stompClient = Stomp.over(function () {
      return new WebSocket("ws://api.modundo.com/ws");
    });

    stompClient.connect(
      {},
      () => {
        setConnected(true);
        setStompClient(stompClient);
        stompClient.subscribe("/user/" + 22 + "/queue/messages", (message) => {
          console.log(message);
          onMessageReceived(message);
        });
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
    const body = JSON.parse(message.body);
    console.log(body);
    console.log("Received message:", message);
  };

  const sendMessage = (msg) => {
    console.log("Sending message:", msg);
    if (msg.trim() !== "" && stompClient) {
      const message = {
        senderId: 22, // Replace with your sender ID
        recipientId: 31, // Replace with your recipient ID
        content: msg,
        //  timestamp: new Date(),
      };

      if (connected) {
        stompClient.send("/app/chat", {}, JSON.stringify(message), (error) => {
          if (error) {
            console.error("Error sending message:", error);
          } else {
            console.log("Message sent successfully");
          }
        });
      } else {
        console.log("Disconnected");
      }
    }
  };

  return (
    <div>
      {stompClient ? (
        <div>
          <span> Connected</span>
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
