import avt from "../../Assets/imgProfile.svg";
import Archive from "./Archive/Archive";
import Inbox from "./Inbox/Inbox";
import styles from "./Message.module.css";

import { useState } from "react";
import Spam from "./Spam/Spam";

const ListOfMessengers = [
  {
    id: 1,
    name: "Dat1",
    lastSender: "You",
    lastMessage: "Nice to meet you",
    lastMessageTime: "1",
  },
  {
    id: 2,
    name: "Trung1",
    lastSender: "FPT",
    lastMessage: "Set up an appointment",
    lastMessageTime: "5",
  },
  {
    id: 3,
    name: "Huy1",
    lastSender: "Rick",
    lastMessage: "interview on December 12",
    lastMessageTime: "10",
  },
  {
    id: 4,
    name: "Cuong1",
    lastSender: "Rick",
    lastMessage: "interview on December 12",
    lastMessageTime: "10",
  },
  {
    id: 5,
    name: "Thai1",
    lastSender: "Rick",
    lastMessage: "interview on December 12",
    lastMessageTime: "10",
  },
  {
    id: 6,
    name: "Moi1",
    lastSender: "Rick",
    lastMessage: "interview on December 12",
    lastMessageTime: "10",
  },
  {
    id: 7,
    name: "Phuc1",
    lastSender: "Rick",
    lastMessage: "interview on December 12",
    lastMessageTime: "10",
  },
  {
    id: 8,
    name: "Dat2",
    lastSender: "You",
    lastMessage: "Nice to meet you",
    lastMessageTime: "1",
  },
  {
    id: 9,
    name: "Trung2",
    lastSender: "FPT",
    lastMessage: "Set up an appointment",
    lastMessageTime: "5",
  },
  {
    id: 10,
    name: "Huy2",
    lastSender: "Rick",
    lastMessage: "interview on December 12",
    lastMessageTime: "10",
  },
  {
    id: 11,
    name: "Cuong2",
    lastSender: "Rick",
    lastMessage: "interview on December 12",
    lastMessageTime: "10",
  },
  {
    id: 12,
    name: "Thai2",
    lastSender: "Rick",
    lastMessage: "interview on December 12",
    lastMessageTime: "10",
  },
  {
    id: 13,
    name: "Moi2",
    lastSender: "Rick",
    lastMessage: "interview on December 12",
    lastMessageTime: "10",
  },
  {
    id: 14,
    name: "Phuc2",
    lastSender: "Rick",
    lastMessage: "interview on December 12",
    lastMessageTime: "10",
  },
];

function Message() {
  const [option, setOption] = useState("ib");
  const [chat, setChat] = useState(null);
  const handleChangeOption = (e) => {
    setChat(null);
    setOption(e.target.value);
  };
  const handleOnClick = (id) => {
    const box = ListOfMessengers.find((m) => m.id === id);
    setChat(box);
  };

  return (
    <div className="">
      <div className="grid grid-cols-8 gap-5 ">
        <div className=" col-span-2  border p-2 rounded-lg">
          <div>
            <span>Message</span>
            <div className="px-2">
              <select
                name=""
                id=""
                className="w-full  rounded-lg h-9 outline-none border border-slate-400"
                onChange={(e) => handleChangeOption(e)}
              >
                <option value="ib">Inbox</option>
                <option value="ar">Archive</option>
                <option value="sp">Spam</option>
              </select>
            </div>
            {option === "ib" && (
              <div
                className={`mt-5 border-t-2 flex flex-col items-start  gap-2 overflow-y-auto h-[calc(100vh-13rem)] ${styles.ListOfMessengers}`}
              >
                {ListOfMessengers.map((b) => {
                  return (
                    <div
                      className="flex items-center justify-start bg-slate-200 rounded-lg gap-3 py-2 hover:bg-slate-300 cursor-pointer transition-colors w-full"
                      key={b.id}
                      onClick={() => handleOnClick(b.id)}
                    >
                      <img
                        src={avt}
                        alt=""
                        className="rounded-full h-14 w-14"
                      />
                      <div className="flex items-center justify-between w-full">
                        <div className="flex flex-col items-start justify-center">
                          <span className="text-lg font-semibold">
                            {b.name}
                          </span>
                          <small className="text-[0.625rem] line-clamp-1">
                            <strong className="text-slate-400">
                              {b.lastSender}:{" "}
                            </strong>
                            {b.lastMessage}
                          </small>
                        </div>
                        <small className="text-slate-400 flex flex-none">
                          {b.lastMessageTime} sec
                        </small>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
        <div className="col-span-6 border rounded-lg ">
          {option === "ib" && <Inbox box={chat} setBox={setChat} />}
          {option === "ar" && <Archive />}
          {option === "sp" && <Spam />}
        </div>
      </div>
    </div>
  );
}

export default Message;
