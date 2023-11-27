import{j as e,r as n,C as g,N as u,F as f}from"./index-7aecd9f1.js";const h="/assets/imgProfile-2b27acac.svg",j="/assets/Archive-432644cc.svg";function p(){return e.jsx("div",{className:"flex items-center justify-center w-full h-full",children:e.jsx("div",{className:"flex flex-col items-center justify-center w-[27rem] h-[20rem] gap-2",children:e.jsxs("div",{className:"flex flex-col items-center justify-center",children:[e.jsx("img",{src:j,alt:""}),e.jsx("span",{children:"Welcome to messages section"}),e.jsx("small",{children:"You don`&apos`t have any messages stored"})]})})})}const v="/assets/Inbox-b8682aa0.svg",b="_btn1_cdxdm_1",M="_btn2_cdxdm_19",i={btn1:b,btn2:M};function N({box:a,setBox:t}){return e.jsx(e.Fragment,{children:a===null?e.jsx("div",{className:"flex items-center justify-center w-full h-full",children:e.jsxs("div",{className:"flex flex-col items-center justify-center w-[27rem] h-[20rem] gap-2",children:[e.jsxs("div",{className:"flex flex-col items-center justify-center",children:[e.jsx("img",{src:v,alt:""}),e.jsx("span",{children:"Welcome to messages section"}),e.jsx("small",{children:"When the employer contacts you, You'll see the message here"})]}),e.jsxs("div",{className:"flex flex-col items-center justify-center gap-2",children:[e.jsx("button",{className:i.btn1,children:"Find a job"}),e.jsx("button",{className:i.btn2,children:"Create Your CV"})]})]})}):e.jsxs("div",{className:"flex items-center  justify-start gap-3 p-2 bg-slate-300 rounded-t-lg",children:[e.jsx("span",{className:"text-2xl font-bold cursor-pointer",onClick:()=>t(null),children:"<"}),e.jsxs("div",{className:"flex flex-col items-center justify-start",children:[e.jsx("span",{className:"font-bold",children:a.name}),e.jsx("small",{className:"text-green-600 font-bold",children:"Online"})]})]})})}const y="_ListOfMessengers_76v36_3",w={ListOfMessengers:y},S="/assets/spam-2b20955a.svg";function T(){return e.jsx("div",{className:"flex items-center justify-center w-full h-full",children:e.jsx("div",{className:"flex flex-col items-center justify-center w-[27rem] h-[20rem] gap-2",children:e.jsxs("div",{className:"flex flex-col items-center justify-center",children:[e.jsx("img",{src:S,alt:""}),e.jsx("small",{children:"You don't have any messages in your spam folder"})]})})})}const r=[{id:1,name:"Dat1",lastSender:"You",lastMessage:"Nice to meet you",lastMessageTime:"1"},{id:2,name:"Trung1",lastSender:"FPT",lastMessage:"Set up an appointment",lastMessageTime:"5"},{id:3,name:"Huy1",lastSender:"Rick",lastMessage:"interview on December 12",lastMessageTime:"10"},{id:4,name:"Cuong1",lastSender:"Rick",lastMessage:"interview on December 12",lastMessageTime:"10"},{id:5,name:"Thai1",lastSender:"Rick",lastMessage:"interview on December 12",lastMessageTime:"10"},{id:6,name:"Moi1",lastSender:"Rick",lastMessage:"interview on December 12",lastMessageTime:"10"},{id:7,name:"Phuc1",lastSender:"Rick",lastMessage:"interview on December 12",lastMessageTime:"10"},{id:8,name:"Dat2",lastSender:"You",lastMessage:"Nice to meet you",lastMessageTime:"1"},{id:9,name:"Trung2",lastSender:"FPT",lastMessage:"Set up an appointment",lastMessageTime:"5"},{id:10,name:"Huy2",lastSender:"Rick",lastMessage:"interview on December 12",lastMessageTime:"10"},{id:11,name:"Cuong2",lastSender:"Rick",lastMessage:"interview on December 12",lastMessageTime:"10"},{id:12,name:"Thai2",lastSender:"Rick",lastMessage:"interview on December 12",lastMessageTime:"10"},{id:13,name:"Moi2",lastSender:"Rick",lastMessage:"interview on December 12",lastMessageTime:"10"},{id:14,name:"Phuc2",lastSender:"Rick",lastMessage:"interview on December 12",lastMessageTime:"10"}];function k(){const[a,t]=n.useState("ib"),[c,l]=n.useState(null),o=s=>{l(null),t(s.target.value)},m=s=>{const d=r.find(x=>x.id===s);l(d)};return e.jsx("div",{className:"",children:e.jsxs("div",{className:"grid grid-cols-8 gap-5 ",children:[e.jsx("div",{className:" col-span-2  border p-2 rounded-lg",children:e.jsxs("div",{children:[e.jsx("span",{children:"Message"}),e.jsx("div",{className:"px-2",children:e.jsxs("select",{name:"",id:"",className:"w-full  rounded-lg h-9 outline-none border border-slate-400",onChange:s=>o(s),children:[e.jsx("option",{value:"ib",children:"Inbox"}),e.jsx("option",{value:"ar",children:"Archive"}),e.jsx("option",{value:"sp",children:"Spam"})]})}),a==="ib"&&e.jsx("div",{className:`mt-5 border-t-2 flex flex-col items-start  gap-2 overflow-y-auto h-[calc(100vh-13rem)] ${w.ListOfMessengers}`,children:r.map(s=>e.jsxs("div",{className:"flex items-center justify-start bg-slate-200 rounded-lg gap-3 py-2 hover:bg-slate-300 cursor-pointer transition-colors w-full",onClick:()=>m(s.id),children:[e.jsx("img",{src:h,alt:"",className:"rounded-full h-14 w-14"}),e.jsxs("div",{className:"flex items-center justify-between w-full",children:[e.jsxs("div",{className:"flex flex-col items-start justify-center",children:[e.jsx("span",{className:"text-lg font-semibold",children:s.name}),e.jsxs("small",{className:"text-[0.625rem] line-clamp-1",children:[e.jsxs("strong",{className:"text-slate-400",children:[s.lastSender,":"," "]}),s.lastMessage]})]}),e.jsxs("small",{className:"text-slate-400 flex flex-none",children:[s.lastMessageTime," sec"]})]})]},s.id))})]})}),e.jsxs("div",{className:"col-span-6 border rounded-lg ",children:[a==="ib"&&e.jsx(N,{box:c,setBox:l}),a==="ar"&&e.jsx(p,{}),a==="sp"&&e.jsx(T,{})]})]})})}function C(){const a=g();return console.log(a),e.jsx("div",{className:"flex items-center justify-center",children:e.jsxs("div",{className:"xl:w-[1200px] lg:w-[1000px] md:w-[900px] sm:w-[700px] ",children:[e.jsx(u,{}),e.jsx(k,{}),e.jsx(f,{})]})})}export{C as default};
