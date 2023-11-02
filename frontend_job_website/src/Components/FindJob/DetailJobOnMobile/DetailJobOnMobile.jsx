import imageCp from "../../../Assets/imageCP.png";
import logo from "../../../Assets/EcomdyLogo.svg";
import styles from "./DetailJobOnMobile.module.css";
import { FaSuitcase } from "react-icons/fa";
import { LiaMoneyCheckAltSolid } from "react-icons/lia";
import { BiSolidFlagAlt, BiTimer } from "react-icons/bi";
import { AiFillHeart } from "react-icons/ai";
function DetailJobOnMobile() {
  return (
    <div>
      <div className="relative h-40">
        <img src={imageCp} alt="" className="absolute w-full" />
        <img
          src={logo}
          alt=""
          className="absolute left-4 bottom-3 w-20 h-20 bg-white rounded-lg drop-shadow-2xl"
        />
      </div>
      <div className="pt-3">
        <span className="text-2xl font-bold">Description Jobs</span>
        <br />
        <span className="font-sans text-sm text-[#2D2D2D]">
          Da Nang, Quy Nhon
        </span>
      </div>
      <div className="pt-4 px-3">
        <div>
          <h1 className="text-lg font-bold">Job details</h1>
          <p className="text-[0.68rem] text-[#2D2D2D] italic">
            Here’s how the job details align with your job preferences.Manage
            job preferences anytime in your profile
          </p>
        </div>
        <div className="border-b-2 border-slate-400 pb-5 flex flex-col items-start justify-center gap-3">
          <div className={styles.detailsJobs}>
            <div>
              <FaSuitcase />
              <h3>Job type</h3>
            </div>
            <button>Full-time</button>
          </div>
          <div className={styles.detailsJobs}>
            <div>
              <LiaMoneyCheckAltSolid />
              <h3>Salary</h3>
            </div>
            <button>8.000.000VND - 15.000.000VND</button>
          </div>
          <div className={styles.detailsJobs}>
            <div>
              <BiTimer />
              <h3>Deadline</h3>
            </div>
            <button>12/12/2003</button>
          </div>
        </div>
        <div>
          <div className={styles.title}>
            <h2>Introduction</h2>
            <span>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro
              dolore nulla labore, laboriosam praesentium excepturi doloribus
              distinctio quae, delectus sunt quod, voluptate voluptatibus? Nihil
              fuga rem animi voluptates hic dolores. Nobis magnam odit deserunt,
              doloremque deleniti eum commodi blanditiis quis, quia mollitia
              maiores porro tenetur, sed impedit dicta at quas in vel tempora!
              Eligendi provident modi ullam, nobis dolor velit. Aut quod quae
              voluptatibus, obcaecati inventore voluptates dolorem unde
              asperiores, suscipit sit blanditiis est aliquid, laboriosam esse?
              Eum inventore recusandae ab at porro quisquam cumque hic sit! Ab,
              debitis itaque? Expedita quas incidunt architecto veritatis veniam
              eveniet harum sit aliquam blanditiis doloremque, nulla ipsam
              dignissimos aspernatur similique fugit iusto quo ex aut molestias?
              Consectetur culpa maxime aliquid repellat ex cupiditate? Sed dolor
              modi corporis iste dicta excepturi laboriosam unde debitis
              repellendus ullam, minus reprehenderit quam voluptates quaerat
              quasi, odio velit odit non aliquid dolorum neque dolore
              blanditiis. Vitae, magni eligendi.
            </span>
          </div>
        </div>
        <div className={styles.title}>
          <h2>Salary</h2>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas
            impedit eius harum nostrum et itaque delectus modi error, facilis
            atque neque quaerat labore hic explicabo architecto quas ipsam
            reprehenderit asperiores. Impedit suscipit dicta quae quo eveniet
            quas ipsum nemo, fugit modi molestias, magnam facere numquam
            voluptatem nostrum accusantium quia accusamus iure tempora
            voluptatibus blanditiis repellat. Dolorem, nostrum. Illum, aperiam
            provident? Eius aut autem numquam quasi quo voluptatibus dolore
            maiores impedit tempora consequuntur iste provident, asperiores unde
            perferendis dignissimos quibusdam vel eveniet sit praesentium nihil
            nemo. Facere, officiis placeat? Sed, et.
          </span>
        </div>
        <div className={styles.title}>
          <h2>Contact zalo</h2>
          <span>0283943573</span>
        </div>
        <div className={styles.title}>
          <h2>Working lcation</h2>
          <span>Da Nang</span>
        </div>
        <div className={styles.title}>
          <h2>Type of work</h2>
          <span>Time agreement</span>
        </div>
        <div className={styles.title}>
          <h2>RequirementL</h2>
          <span>ID card, cover letter</span>
        </div>
        <div className={styles.title}>
          <h2>Benefits</h2>
          <span>Healthcase</span>
        </div>
        <div className={styles.title}>
          <h2>Experience</h2>
          <span>No Work experience required</span>
        </div>
        <div className={styles.title}>
          <h2>Degree</h2>
          <span>Information Technology</span>
        </div>
        <div className={styles.title}>
          <h2>Number to recruit</h2>
          <span>150</span>
        </div>
        <div className={styles.title}>
          <h2>Gender</h2>
          <span>No required</span>
        </div>
      </div>
      <div className={`${styles.btn} px-3`}>
        <button>Apply now</button>
        <button>
          <AiFillHeart />
          Save this job
        </button>
        <button>
          <BiSolidFlagAlt />
          Employer Report
        </button>
      </div>
    </div>
  );
}

export default DetailJobOnMobile;
