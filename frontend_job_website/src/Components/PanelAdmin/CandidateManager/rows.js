function createData(
  candidateId,
  fullName,
  universityOrCollege,
  Status,
  jobApply,
  country
) {
  return {
    candidateId,
    fullName,
    universityOrCollege,
    Status,
    jobApply,
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

    "VietNam"
  ),
  createData(
    "212133",
    "Tran Van B",
    "FPT Polytechnic",
    "false",
    10,

    "VietNam"
  ),
  createData("1233", "Nguyen thi Thuy", "RMIT", "true", 10, "VietNam"),
].sort((a, b) => (a.jobApply > b.jobApply ? -1 : 1));
