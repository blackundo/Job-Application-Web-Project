function createData(
  CompanyID,
  CompanyName,
  CompanyLink,
  Status,
  Founding,
  Post,
  Spending,
  Country
) {
  return {
    CompanyID,
    CompanyName,
    CompanyLink,
    Status,
    Founding,
    Post,
    Spending,
    Country,
  };
}

export const rows = [
  createData(
    "100114",
    "Ecomdy",
    "https://ecomdy.com",
    "true",
    "12/02/2020",
    19,
    "N/A",
    "VietNam"
  ),
  createData(149536, "Dr", "8hAH39", "false", "12/2/2020", 90, "III", "Libya"),
  createData(
    303902,
    "Honorable",
    "r9ls9S",
    "true",
    "12/2/2020",
    2,
    "Sr",
    "Peru"
  ),
  createData(750601, "Mrs", "vbDaDt", "true", "12/2/2020", 22, "Sr", "Bolivia"),
  createData(927055, "Dr", "oz12w4", "false", "12/2/2020", 86, "IV", "Nepal"),
  createData(316771, "Mr", "6hV4z9", "false", "12/2/2020", 2, "III", "Russia"),
  createData(
    901759,
    "Rev",
    "s94S2o",
    "true",
    "12/2/2020",
    3,
    "Jr",
    "Indonesia"
  ),
  createData(
    114864,
    "Mrs",
    "L64Lo3",
    "true",
    "12/2/2020",
    97,
    "Jr",
    "Kyrgyzstan"
  ),
  createData(894428, "Mrs", "4ii1cr", "true", "12/2/2020", 73, "II", "China"),
  createData(
    684652,
    "Mrs",
    "awzb0t",
    "true",
    "12/2/2020",
    17,
    "III",
    "United States"
  ),
  createData(331468, "Dr", "5abeZJ", "true", "12/2/2020", 6, "II", "Sweden"),
  createData(979423, "Mrs", "Db9dKG", "true", "12/2/2020", 19, "II", "Nigeria"),
].sort((a, b) => (a.Post > b.Post ? -1 : 1));
