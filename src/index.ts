import * as express from "express";
import * as schedule from 'node-schedule';
import {sentMail} from "./db/DbRecodeForEmail";

const app = express();
const PORT = "4200";


//Hard coded exam dates. Will get from trainings
const examTimes = [
  "Jun 01, 2021 18:00:00",
  "Jun 02, 2021 18:00:00",
  "Jun 04, 2021 18:00:00",
  "Jun 06, 2021 18:00:00",
];

for (const examTime of examTimes) {
  console.log("-------- test executing of this function ---------");
  //TODO: Add the email sending time list.
  //In here I send emails 5.00 AM, 8.00 AM, 12.00 PM, 4.00 PM, 5.00 PM, 6.00 PM, 11.00 PM
  const timeSet: string[] = ["05:00:00", "08:00:00", "12:00:00", "16:00:00", "17:00:00", "18:00:00", "23:00:00"];
  for (const time of timeSet) {
    schedule.scheduleJob(new Date(examTime.split(" ")[1] + " " + time), () => {
      sentMail();  // TODO: call sending email function here.
    });
  }
}
app.use('/test', (req, res) => {
  res.status(200).send("\n\t\tPadma's server is running correctly.");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
