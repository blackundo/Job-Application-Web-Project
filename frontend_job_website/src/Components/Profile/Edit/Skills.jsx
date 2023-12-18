import LoadingComponent from "../../LoadingComponent/LoadingComponent";
import { ToastCustom } from "../../ToastCustom/ToastCustom";

function Skills({
  selectedSkills,
  setQuerySkills,
  queySkills,
  skills,
  setSelectedSkills,
}) {
  const maxSkills = 7;
  const handleToggleSkill = (skill) => {
    if (
      selectedSkills.length === maxSkills &&
      !selectedSkills.includes(skill)
    ) {
      ToastCustom.warning("Maximum 7 skills can be selected", {
        autoClose: 2000,
      });
      return;
    }
    const updatedSelectedSkills = selectedSkills.includes(skill)
      ? selectedSkills.filter((s) => s !== skill)
      : [...selectedSkills, skill];

    setSelectedSkills(updatedSelectedSkills);
  };
  const handleRemoveSkill = (removedSkill) => {
    setSelectedSkills(selectedSkills.filter((skill) => skill !== removedSkill));
  };

  return (
    <div>
      <label htmlFor="skills">Skills</label>
      <div className="grid grid-cols-3 gap-3 text-sm overflow-auto">
        {selectedSkills.map((sk) => {
          return (
            <input
              key={sk}
              type="text"
              placeholder="Selected Skills"
              value={sk}
              readOnly
              className="w-full cursor-pointer px-2 "
              onClick={() => handleRemoveSkill(sk)}
            />
          );
        })}
      </div>

      <input
        type="text"
        value={queySkills}
        onChange={(e) => setQuerySkills(e.target.value)}
        className="w-full my-3"
        placeholder="Search..."
      />

      <div className="overflow-y-scroll h-52 border p-2 rounded-lg shadow-lg">
        {skills.length === 0 ? (
          <LoadingComponent />
        ) : (
          <div className="skills-container grid grid-cols-3   place-content-center place-items-center gap-3  ">
            {skills.map((skill) => (
              <div
                key={skill}
                className={`skill-item  h-10 w-full rounded-md p-1 flex items-center justify-center line-clamp-1 overflow-auto ${
                  selectedSkills.includes(skill)
                    ? "bg-blue-400 cursor-alias"
                    : "border-slate-300 border shadow-lg cursor-pointer"
                }`}
                onClick={() => handleToggleSkill(skill)}
              >
                {skill}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Skills;
