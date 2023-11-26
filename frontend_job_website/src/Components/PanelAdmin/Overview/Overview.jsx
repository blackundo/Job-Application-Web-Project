<<<<<<< HEAD
import NumberCounter from "react-countup";
=======
>>>>>>> 676d1e3ba76ba2ce92afb318650fea72a2fba505
function Overview() {
  return (
    <div className="col-span-10 w-full  px-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-[#2B3674] ">Overview</h1>
        <div className="flex items-center justify-center gap-5 text-sm">
          <span>2023-10-26 ~ 2023-11-01</span>
          <span className="text-[#A3AED0] ">
            (UTC + 07:00) Ho Chi Minh Time 📅
          </span>
        </div>
      </div>
      <div className="pt-10">
        <span className="text-lg text-[#2B3674] font-bold">Chart</span>
        <div className="flex w-full items-center justify-evenly  h-[5rem] px-10 gap-4">
          <div className="flex flex-col items-start justify-center h-full w-full border-l-[5px] pl-5 shadow-lg rounded-l-lg border-[#000084] bg-[#F8F8FC]">
            <span className="text-xl font-normal text-[#8790aa]">Revenue</span>
<<<<<<< HEAD
            <span className="text-xl font-bold text-[#000084]">
              <NumberCounter
                start={100}
                end={169}
                duration={2}
                prefix="$"
                suffix="K"
              />
            </span>
=======
            <span className="text-xl font-bold text-[#000084]">$ 169k</span>
>>>>>>> 676d1e3ba76ba2ce92afb318650fea72a2fba505
          </div>
          <div className="flex flex-col items-start justify-center h-full w-full border-l-[5px] pl-5 shadow-lg rounded-l-lg border-[#1CB8FF] bg-[#F8F8FC]">
            <span className="text-xl font-normal text-[#A3AED0]">
              Total Job
            </span>
<<<<<<< HEAD
            <span className="text-xl font-bold text-[#000084]">
              <NumberCounter start={30} end={56} duration={1.7} suffix="K" />
            </span>
          </div>
          <div className="flex flex-col items-start justify-center h-full w-full border-l-[5px] pl-5 shadow-lg rounded-l-lg border-[#00A15C] bg-[#F8F8FC]">
            <span className="text-xl font-normal text-[#A3AED0]">Job Done</span>
            <span className="text-xl font-bold text-[#000084]">
              <NumberCounter start={1} end={15} duration={1.5} suffix="K" />
            </span>
=======
            <span className="text-xl font-bold text-[#000084]">56k</span>
          </div>
          <div className="flex flex-col items-start justify-center h-full w-full border-l-[5px] pl-5 shadow-lg rounded-l-lg border-[#00A15C] bg-[#F8F8FC]">
            <span className="text-xl font-normal text-[#A3AED0]">Job Done</span>
            <span className="text-xl font-bold text-[#000084]">15K</span>
>>>>>>> 676d1e3ba76ba2ce92afb318650fea72a2fba505
          </div>
          <div className="flex flex-col items-start justify-center h-full w-full border-l-[5px] pl-5 shadow-lg rounded-l-lg border-[#EA4300] bg-[#F8F8FC]">
            <span className="text-xl font-normal text-[#A3AED0]">
              Job Close
            </span>
<<<<<<< HEAD
            <span className="text-xl font-bold text-[#000084]">
              <NumberCounter start={10} end={35} duration={1} suffix="K" />
            </span>
=======
            <span className="text-xl font-bold text-[#000084]">35K</span>
>>>>>>> 676d1e3ba76ba2ce92afb318650fea72a2fba505
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overview;
