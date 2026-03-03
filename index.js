import moment from "moment";

const dateConversion = (day, month, year) => {
  const autoFormat = `${day}-${month}-${year}`;
  if (!moment(autoFormat, "DD-MM-YYYY").isValid()) {
    return console.log("Format tanggal Salah");
  }
  return console.log(moment(autoFormat, "DD-MM-YYYY").format("DD/MM/YYYY"));
};
// prettier-ignore
dateConversion(14,12,1999);
dateConversion(7, 2, 2099);
dateConversion(32, 14, 1999);
dateConversion(15, 10, 12449);
