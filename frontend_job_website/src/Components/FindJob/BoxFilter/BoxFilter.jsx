import { useEffect, useState } from "react";

function BoxFilter({ onSubmit }) {
  const [filters, setFilters] = useState({
    DatePost: "l24h",
    Salary: "",
    JobType: "FULL_TIME",
    Location: "",
    Company: "",
  });

  useEffect(() => {
    onSubmit(filters);
  }, [filters]);

  const handleFilterChange = (filterName, value) => {
    setFilters((prev) => ({
      ...prev,
      [filterName]: value,
    }));
  };
  return (
    <div className="flex items-center justify-center">
      <div className="xl:w-[1200px] lg:w-[1000px] md:w-[900px] sm:w-[700px]">
        <div className="grid grid-cols-[repeat(15,minmax(0,1fr))] gap-2 py-3 max-md:grid-cols-6">
          <select
            name="DatePost"
            id="DatePost"
            className="bg-slate-200 h-11 rounded-lg col-span-3 text-sm max-md:col-span:2"
            onChange={(e) => handleFilterChange("DatePost", e.target.value)}
          >
            <option value="">All</option>
            <option value="l24h">Last 24 hours</option>
            <option value="l3d">Last 3 days</option>
            <option value="l7days">Last 7 days</option>
            <option value="l14days">Last 14 days</option>
            <option value="since">Since your previous visit</option>
          </select>
          <select
            name="Salary"
            id="Salary"
            className="bg-slate-200 h-11 rounded-lg col-span-3 text-sm max-md:col-span:2"
            onChange={(e) => handleFilterChange("Salary", e.target.value)}
          >
            <option value="">Any Salary</option>
            <option value="100">100$/month</option>
            <option value="200">200$/month </option>
            <option value="400">400$/month</option>
            <option value="600">600$/month </option>
            <option value="1000">1000$/month</option>
            <option value="1500">1500$/month </option>
            <option value="2000">2000$/month</option>
          </select>
          <select
            name="JobType"
            id="JobType"
            className="bg-slate-200 h-11 rounded-lg col-span-3 text-sm max-md:col-span:2"
            onChange={(e) => handleFilterChange("JobType", e.target.value)}
          >
            <option value="">All</option>
            <option value="FULL_TIME">Full-time</option>
            <option value="PART_TIME">part-time</option>
            <option value="Internship">Internship</option>
          </select>
          {/* <select
          name="Location"
          id="Location"
          className="bg-slate-200 h-11 rounded-lg col-span-4"
        >
          <option value="">All Location</option>
          <option value="">(Location)(X)</option>
        </select> */}
          <select
            name="Company"
            id="Company"
            className="bg-slate-200 h-11 rounded-lg col-span-3 text-sm max-md:col-span:2"
            onChange={(e) => handleFilterChange("Company", e.target.value)}
          >
            <option value="">All Company</option>
            <option value="">KMS Technology (X)</option>
            <option value="">Client Jobs (X)</option>
            <option value="">KMS Healthcare (X)</option>
            <option value="">Ubisoft (X)</option>
            <option value="">Rikkeisoft (X)</option>
          </select>
          <select
            name=""
            id=""
            className="bg-slate-200 h-11 rounded-lg col-span-3 text-sm  max-md:col-span-2"
            onChange={(e) => handleFilterChange("location", e.target.value)}
          >
            <option value="">All Location</option>
            <option value="">Da Nang</option>
            <option value="">Hue</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default BoxFilter;
