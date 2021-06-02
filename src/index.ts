import express from "express";
import schedule from 'node-schedule';
import {sentMail} from "./db/DbRecodeForEmail";

const app = express();
const PORT = "4200";

const examTimes = [
  "Jun 01, 2021 18:00:00",
  "Jun 02, 2021 18:00:00",
  "Jun 04, 2021 18:00:00",
  "Jun 06, 2021 18:00:00",
];

for (const examTime of examTimes) {
  console.log("00000000000")
  const timeSet: string[] = ["05:00:00", "08:00:00", "12:00:00", "16:00:00", "23:00:00"];
  for (const time of timeSet) {
    schedule.scheduleJob(new Date(examTime.split(" ")[1] + " " + time), () => {
      sentMail();
    });
  }
}
app.use('/test', (req, res) => {
  res.status(200).send("\n\t\tPadma's server is running correctly.");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
