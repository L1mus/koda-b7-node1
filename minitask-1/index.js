import moment from "moment";
import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const handleDataInputPromise = async () => {
  try {
    const rl = readline.createInterface({ input, output });
    const answer = await rl.question(
      "Masukan Tanggal dengan format DD-MM-YYYY: ",
    );
    dateConversion(answer);
    rl.close();
  } catch (err) {
    console.log("Gagal Mengambil data", err);
  }
};

handleDataInputPromise();

const dateConversion = (str) => {
  console.log(!moment(str, "DD-MM-YYYY").isValid());
  if (moment(str, "DD-MM-YYYY").isValid()) {
    return console.log("Format tanggal Salah");
  }
  const format = moment(str, "DD-MM-YYYY").format("DD/MM/YYYY");
  return console.log(`Format Tanggal setelah di konversi ${format}`);
};
