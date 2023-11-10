function createData(
  candidateId,
  fullName,
  universityOrCollege,
  Status,

  jobApply,
  spending,
  country
) {
  return {
    candidateId,
    fullName,
    universityOrCollege,
    Status,

    jobApply,
    spending,
    country,
  };
}

export const rows = [
  createData(
    "100114",
    "Do Phuoc Dat",
    "FPT Polytechnic College",
    "true",
    25,
    "N/A",
    "VietNam"
  ),
  createData(
    "212133",
    "Tran Van B",
    "FPT Polytechnic",
    "false",
    10,
    "N/A",
    "VietNam"
  ),
  createData("1233", "Nguyen thi Thuy", "RMIT", "true", 10, "N/A", "VietNam"),
].sort((a, b) => (a.jobApply > b.jobApply ? -1 : 1));
