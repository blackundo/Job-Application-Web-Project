import { GoArrowLeft } from "react-icons/go";
import styles from "./Information.module.css";
import { useNavigate } from "react-router-dom";
import { ToastCustom } from "../../ToastCustom/ToastCustom";
import { useEffect, useState } from "react";
import axios from "axios";
import { debounce } from "lodash";
import Skills from "./Skills";
import fetchedSkills from "../../../api/FetchAPISkill";
import axiosPrivate from "../../../api/axios";
import { toast } from "react-toastify";
function Information() {
  const [fullName, setFullName] = useState("");
  const [age, setAge] = useState("");
  const [fieldName, setFieldName] = useState("");
  const [gender, setGender] = useState("");
  const [universityOrCollege, setUniversityOrCollege] = useState("");
  const [city, setCity] = useState("");
  const [exp, setExp] = useState("");
  const [skills, setSkills] = useState([]);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [queySkills, setQuerySkills] = useState("Java");

  const navigate = useNavigate();

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
            <label htmlFor="numPhone">Phone Number</label>
            <input type="text" placeholder="+325235258" />
            <label htmlFor="numPhone">Gender</label>
            <div className="flex items-center justify-start gap-3">
              <div className="flex items-center justify-center gap-2">
                <input
                  type="radio"
                  name="gender"
                  value={"male"}
                  className="w-4"
                  onChange={() => setGender(0)}
                />
                male
              </div>
              <div className="flex items-center justify-center gap-2">
                <input
                  type="radio"
                  name="gender"
                  value={"female"}
                  onChange={() => setGender(1)}
                  className="w-4"
                />
                Female
              </div>
              <div className="flex items-center justify-center gap-2">
                <input
                  type="radio"
                  name="gender"
                  value={"xxx"}
                  className="w-4"
                />
                xxx
              </div>
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
              setSelectedSkills={setSelectedSkills}
            />

            <div className="flex flex-col items-start justify-center gap-1 ">
              {/* <div className="flex items-center gap-3">
                <input type="checkbox" className="w-[1.56rem] h-[1.56rem] " />
                <label htmlFor="publicNumberPhone">
                  Show my number on JobHunter
                </label>
              </div> */}
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
          <div className="flex flex-col  gap-4">
            {/* <div className="flex flex-col items-start justify-center pt-5  gap-2  pb-2">
              <label htmlFor="email" className="text-lg font-bold">
                Email
              </label>
              <input
                type="email"
                placeholder="dat@gmail.com"
                className={`w-full h-[2.75rem] px-3 outline-none border border-black rounded-md `}
              />
            </div> */}
            {/* <div className="flex flex-col items-start justify-center">
              <span className="font-bold text-lg">Work location</span>
              <span>This helps connect you to nearby jobs</span>
            </div>
            <div className="flex flex-col items-start justify-center">
              <span className="font-bold text-lg">Country</span>
              <div className="flex items-start justify-between w-full">
                <span>Vietnam</span>
                <span className="text-blue-400 text-lg font-semibold cursor-pointer">
                  Change
                </span>
              </div>
            </div>
            <div>
              <div className="flex flex-col items-start justify-center">
                <span className="text-lg font-normal">Street address</span>
                <span className="text-slate-400">Show only to you</span>
              </div>
              <input
                type="text"
                placeholder="Nguyen Van Linh"
                className="border outline-none border-black w-full rounded-lg h-[2.75rem] px-3"
              />
            </div>
            <div>
              <div className="flex flex-col items-start justify-center">
                <span className="text-lg font-normal">City, State</span>
              </div>
              <input
                type="text"
                placeholder="Da Nang"
                className="border outline-none border-black w-full rounded-lg h-[2.75rem] px-3"
              />
            </div>
            <div>
              <div className="flex flex-col items-start justify-center">
                <span className="text-lg font-normal">Postal Code</span>
              </div>
              <input
                type="text"
                placeholder="50000"
                className="border outline-none border-black w-full rounded-lg h-[2.75rem] px-3"
              />
            </div>
            <div className="flex flex-col gap-3 resettle">
              <span>Resettlement</span>
              <div className="flex items-center justify-start gap-3">
                <input
                  type="checkbox"
                  className="w-6 h-6 "
                  onClick={handleDisplayResettle}
                />
                <span>Yes, I am willing to resettle</span>
              </div>
              {resettle && (
                <div className="flex flex-col items-start justify-center pl-10 gap-2 subResettle">
                  <label
                    htmlFor=""
                    className="flex gap-2 items-center justify-center"
                  >
                    <input
                      type="radio"
                      name="resettle"
                      id=""
                      className="w-5 h-5"
                    />
                    Any where
                  </label>
                  <label
                    htmlFor=""
                    className="flex gap-2 items-center justify-center"
                  >
                    <input
                      type="radio"
                      name="resettle"
                      id=""
                      className="w-5 h-5"
                    />
                    Just close...
                  </label>
                </div>
              )}
            </div> */}
          </div>
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
