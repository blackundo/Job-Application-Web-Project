import { Stomp } from "@stomp/stompjs";
import { useState, useEffect } from "react";
import SockJS from "sockjs-client";
// import Stomp from "stompjs";
function Socket() {
  const [stompClient, setStompClient] = useState(null);
  useEffect(() => {
    // const socket = new SockJS(
    //   "https://5955-2405-4802-706c-4890-f4b8-2eb2-d347-75e.ngrok-free.app/ws",
    //   {
    //     withCredentials: true,
    //   }
    // );
    // const stompClient = Stomp.over(socket);
    var stompClient = Stomp.over(function () {
      return new WebSocket(
        "ws://5955-2405-4802-706c-4890-f4b8-2eb2-d347-75e.ngrok-free.app/ws"
      );
    });

    stompClient.connect(
      {},
      () => {
        setStompClient(stompClient);
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

  return <div>{stompClient ? "Connected" : "Disconnected"}</div>;
}

export default Socket;
