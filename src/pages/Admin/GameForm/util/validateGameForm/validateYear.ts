const validateYear = (year: string) => {
  if (year) {
    if (Number(year) < 1958) {
      return "year invalid";
      console.log("🔗 https://www.bnl.gov/about/history/firstvideo.php");
    }
    if (Number(year) > new Date().getFullYear()) return "year invalid";
    if (isNaN(Number(year))) return "must be a number (duh)";

    return "";
  } else {
    return "year is required";
  }
};

export default validateYear;
