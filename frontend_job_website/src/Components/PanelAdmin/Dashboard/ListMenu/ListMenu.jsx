import { AiOutlineNotification } from "react-icons/ai";
import { HiOutlinePresentationChartLine } from "react-icons/hi";
import { FaRegAddressCard } from "react-icons/fa6";
import { GrGroup } from "react-icons/gr";
import { BsCardChecklist } from "react-icons/bs";
import { BiUserPin } from "react-icons/bi";
import { IoWalletOutline } from "react-icons/io5";
import { useState } from "react";
import styles from "./ListMenu.module.css";
import { Link } from "react-router-dom";
const menus = {
  Notification: false,
  Dashboard: false,
  CompanyManager: false,
  CandidateManager: false,
  JobManager: false,
  AccountManager: false,
  PaymentManager: false,
};
function ListMenu({ open }) {
  const [selected, setSelected] = useState({ ...menus });
  const handleOnclickMenu = (e, name) => {
    setSelected({
      ...menus,
      [name]: true,
    });
  };
  const {
    Notification,
    Dashboard,
    CompanyManager,
    CandidateManager,
    JobManager,
    AccountManager,
    PaymentManager,
  } = selected;
  return (
    <ul className={`${styles.menu}`}>
<<<<<<< HEAD
      {open && (
        <Link
          to={"Notification"}
          className={`${Notification ? styles.selected : ""}`}
          onClick={(e) => handleOnclickMenu(e, "Notification")}
        >
          <div>
            <AiOutlineNotification />
          </div>
          <span>Notification</span>
        </Link>
      )}
      {!open && (
        <>
          <Link to={"Notification"}>
            <AiOutlineNotification />
          </Link>
          <Link to={"dashboard"}>
            <HiOutlinePresentationChartLine />
          </Link>
          <Link to={"companyManager"}>
            <FaRegAddressCard />
          </Link>
          <Link to={"candidateManager"}>
            <GrGroup />
          </Link>
          <Link to={"jobManager"}>
            <BsCardChecklist />
          </Link>
          <Link to={"accountManager"}>
            <BiUserPin />
          </Link>
          <Link to={"paymentManager"}>
            <IoWalletOutline />
          </Link>
        </>
      )}

      {open && (
        <Link
          to={"dashboard"}
          className={`${Dashboard ? styles.selected : ""}`}
          onClick={(e) => handleOnclickMenu(e, "Dashboard")}
        >
          <div>
            <HiOutlinePresentationChartLine />
          </div>
          <span>Dashboard</span>
        </Link>
      )}
      {open && (
        <Link
          to={"companyManager"}
          className={`${CompanyManager ? styles.selected : ""}`}
          onClick={(e) => handleOnclickMenu(e, "CompanyManager")}
        >
          <div>
            <FaRegAddressCard />
          </div>
          <span>Company Manager</span>
        </Link>
      )}
      {open && (
        <Link
          to={"candidateManager"}
          className={`${CandidateManager ? styles.selected : ""}`}
          onClick={(e) => handleOnclickMenu(e, "CandidateManager")}
        >
          <div>
            <GrGroup />
          </div>
          <span> Candidate Manager</span>
        </Link>
      )}
      {open && (
        <Link
          to={"jobManager"}
          className={`${JobManager ? styles.selected : ""}`}
          onClick={(e) => handleOnclickMenu(e, "JobManager")}
        >
          <div>
            <BsCardChecklist />
          </div>
          <span>Job Manager</span>
        </Link>
      )}
      {open && (
        <Link
          to={"accountManager"}
          className={`${AccountManager ? styles.selected : ""}`}
          onClick={(e) => handleOnclickMenu(e, "AccountManager")}
        >
          <div>
            <BiUserPin />
          </div>
          <span>Account Manager</span>
        </Link>
      )}
      {open && (
        <Link
          to={"paymentManager"}
          className={`${PaymentManager ? styles.selected : ""}`}
          onClick={(e) => handleOnclickMenu(e, "PaymentManager")}
        >
          <div>
            <IoWalletOutline />
          </div>
          <span>Payment Manager</span>
        </Link>
      )}
=======
      <li
        className={`${Notification ? styles.selected : ""}`}
        onClick={(e) => handleOnclickMenu(e, "Notification")}
      >
        <div>
          <AiOutlineNotification />
        </div>
        {open && <Link to={"Notification"}>Notification</Link>}
      </li>
      <li
        className={`${Dashboard ? styles.selected : ""}`}
        onClick={(e) => handleOnclickMenu(e, "Dashboard")}
      >
        <div>
          <HiOutlinePresentationChartLine />
        </div>
        {open && <Link to={"dashboard"}>Dashboard</Link>}
      </li>

      <li
        className={`${CompanyManager ? styles.selected : ""}`}
        onClick={(e) => handleOnclickMenu(e, "CompanyManager")}
      >
        <div>
          <FaRegAddressCard />
        </div>
        {open && <Link to={"companyManager"}>Company Manager</Link>}
      </li>
      <li
        className={`${CandidateManager ? styles.selected : ""}`}
        onClick={(e) => handleOnclickMenu(e, "CandidateManager")}
      >
        <div>
          <GrGroup />
        </div>
        {open && <Link to={"candidateManager"}> Candidate Manager</Link>}
      </li>

      <li
        className={`${JobManager ? styles.selected : ""}`}
        onClick={(e) => handleOnclickMenu(e, "JobManager")}
      >
        <div>
          <BsCardChecklist />
        </div>
        {open && <Link to={"jobManager"}>Job Manager</Link>}
      </li>

      <li
        className={`${AccountManager ? styles.selected : ""}`}
        onClick={(e) => handleOnclickMenu(e, "AccountManager")}
      >
        <div>
          <BiUserPin />
        </div>
        {open && <Link to={"accountManager"}>Account Manager</Link>}
      </li>

      <li
        className={`${PaymentManager ? styles.selected : ""}`}
        onClick={(e) => handleOnclickMenu(e, "PaymentManager")}
      >
        <div>
          <IoWalletOutline />
        </div>
        {open && <Link to={"paymentManager"}>Payment Manager</Link>}
      </li>
>>>>>>> 676d1e3ba76ba2ce92afb318650fea72a2fba505
    </ul>
  );
}

export default ListMenu;
