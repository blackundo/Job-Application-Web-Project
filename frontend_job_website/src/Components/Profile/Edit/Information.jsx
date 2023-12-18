import { GoArrowLeft } from "react-icons/go";
import styles from "./Information.module.css";
import { useNavigate } from "react-router-dom";
import { ToastCustom } from "../../ToastCustom/ToastCustom";
import { useEffect, useState } from "react";
import { debounce } from "lodash";
import Skills from "./Skills";
import fetchedSkills from "../../../api/FetchAPISkill";
import axiosPrivate from "../../../api/axios";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { informationUser } from "../../../Utils/TokenToProfile";
const user = JSON.parse(localStorage.getItem("Profile"))?.user;
function Information() {
  const [fullName, setFullName] = useState(user.fullName);
  const [age, setAge] = useState(user.age);
  const [fieldName, setFieldName] = useState(user.fieldName);
  const [gender, setGender] = useState(user.gender);
  const [universityOrCollege, setUniversityOrCollege] = useState(
    user.universityOrCollege
  );
  const [city, setCity] = useState(user.city);
  const [exp, setExp] = useState(user.exp);
  const [skills, setSkills] = useState([]);
  const [selectedSkills, setSelectedSkills] = useState(
    user.skill === null ? [] : user?.skill.split(", ")
  );
  const [queySkills, setQuerySkills] = useState("Java");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // useEffect(() => {
  //   console.log(user.skill.split(", "));
  // }, []);
  const handleUpdateProfile = async () => {
    const loadingToastId = toast.loading("Please wait...", {
      autoClose: false,
    });
    const formattedSkills = selectedSkills.join(", ");

    const data = {
      fullname: fullName,
      age,
      fieldName,
      gender,
      universityOrCollege,
      city,
      exp,
      skills: formattedSkills,
    };
    const accessToken = JSON.parse(localStorage.getItem("Token")).access_token;
    await axiosPrivate
      .put("/api/profile/candidate/update", data, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((res) => {
        toast.dismiss(loadingToastId);

        dispatch(informationUser(accessToken));
        ToastCustom.success("Update Success!", {
          autoClose: 2500,
        });
        console.log(res.data);
      })
      .catch((err) => {
        ToastCustom.error("Update error!", {
          autoClose: 2500,
        });
        console.log(err);
      });
    toast.dismiss(loadingToastId);
  };

  const TOKEN_SKILL = JSON.parse(localStorage.getItem("access_token_skills"));
  const fetchSkills = debounce(() => {
    fetchedSkills
      .get(
        `https://emsiservices.com/skills/versions/latest/skills?&limit=100&fields=name&q=${queySkills}`,
        {
          headers: {
            Authorization: `Bearer ${TOKEN_SKILL}`,
          },
        }
      )
      .then((res) => {
        const fetchedSkills = res.data.data.map((data) => data.name);
        setSkills(fetchedSkills);
      })
      .catch((err) => {
        console.log(err);
      });
  }, 500);

  useEffect(() => {
    fetchSkills();
    return () => fetchSkills.cancel();
  }, [fetchSkills, queySkills]);

  return (
    <div className="flex items-center justify-center max-md:mt-[5.625rem] ">
      <div className="w-[34.81rem] max-md:w-[25rem] max-sm:w-[20rem] flex items-center justify-center">
        <div className="w-full pt-3">
          <span className="text-2xl font-bold cursor-pointer">
            <GoArrowLeft onClick={() => navigate(-1)} />
          </span>
          <span className="font-bold text-[1.75rem]">Contact information</span>
          <div className={`flex flex-col w-full gap-3 ${styles.form}`}>
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              placeholder="John Doe"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
            <label htmlFor="age">Age</label>
            <input
              type="text"
              placeholder="25"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
            <label htmlFor="fieldName">Field Name</label>
            <input
              type="text"
              placeholder="Software Developer"
              value={fieldName}
              onChange={(e) => setFieldName(e.target.value)}
            />
            {/* <label htmlFor="numPhone">Phone Number</label>
            <input type="text" placeholder="+325235258" value={phoneNumber} /> */}
            <label htmlFor="numPhone">Gender</label>
            <div className="flex items-center justify-start gap-3">
              <div className="flex items-center justify-center gap-2">
                <input
                  type="radio"
                  name="gender"
                  value={0}
                  className="w-4"
                  checked={gender ? "" : "checked"}
                  onClick={() => setGender(0)}
                />
                Male
              </div>
              <div className="flex items-center justify-center gap-2">
                <input
                  type="radio"
                  name="gender"
                  value={1}
                  checked={gender ? "checked" : ""}
                  onClick={() => setGender(1)}
                  className="w-4"
                />
                Female
              </div>
              {/* <div className="flex items-center justify-center gap-2">
                <input
                  type="radio"
                  name="gender"
                  value={"xxx"}
                  className="w-4"
                />
                xxx
              </div> */}
            </div>
            <label htmlFor="universityOrCollege">University or College</label>
            <input
              type="text"
              placeholder="University of XYZ"
              value={universityOrCollege}
              onChange={(e) => setUniversityOrCollege(e.target.value)}
            />
            <label htmlFor="city">City</label>
            <input
              type="text"
              placeholder="Your City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <label htmlFor="exp">Experience</label>
            <input
              type="text"
              placeholder="5 years"
              value={exp}
              onChange={(e) => setExp(e.target.value)}
            />
            <Skills
              selectedSkills={selectedSkills}
              setQuerySkills={setQuerySkills}
              queySkills={queySkills}
              skills={skills}
              setSelectedSkills={setSelectedSkills || {}}
            />

            <div className="flex flex-col items-start justify-center gap-1 ">
              <small className="text-[0.624rem] text-[#858585] ">
                By submitting the form with this box checked, you confirm that
                you are the primary user and registrant of the entered phone
                number and that you agree to receive calls (including using
                artificial voice or pre-recording), text messages and WhatsApp
                messages from Indeed, and employers using Indeed at the phone
                number provided at above.
              </small>
            </div>
          </div>
          <div className="flex flex-col  gap-4"></div>
          <div className="flex items-center justify-center pt-8">
            <button
              className="border p-1 w-28 bg-slate-400 text-xl font-bold text-white rounded-lg hover:bg-sky-400"
              onClick={handleUpdateProfile}
            >
              save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Information;
