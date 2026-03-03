import moment from "moment";
import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const handleDataInputPromise = async () => {
  try {
    const rl = readline.createInterface({ input, output });
    const answer = await rl.question(
      "Masukan Tanggal dengan format DD-MM-YYYY: ",
    );
    if (!moment(answer, "DD-MM-YYYY").isValid()) {
      return console.log("Format tanggal Salah");
    } else {
      console.log(
        `Format Tanggal setelah di konversi ${dateConversion(answer)}`,
      );
    }
    rl.close();
  } catch (err) {
    console.log("Gagal Mengambil data", err);
  }
};

handleDataInputPromise();

const dateConversion = (str) => {
  return moment(str, "DD-MM-YYYY").format("DD/MM/YYYY");
};
