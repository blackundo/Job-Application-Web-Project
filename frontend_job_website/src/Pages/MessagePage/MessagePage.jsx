import { useParams } from "react-router-dom";
import FooterHome from "../../Components/Home/FooterHome";
import Navbar from "../../Components/Home/Navbar";
import Message from "../../Components/Message/Message";

function MessagePage() {
  const params = useParams();
  console.log(params);
  return (
    <div className="flex items-center justify-center">
      <div className="xl:w-[1200px] lg:w-[1000px] md:w-[900px] sm:w-[700px] ">
        <Navbar />
        <Message />
        <FooterHome />
      </div>
    </div>
  );
}

export default MessagePage;
