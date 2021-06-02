import nodemailer from 'nodemailer';

export const sentMail = () => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'javaloganalyzer@gmail.com',
      pass: 'loganalyzer2020'
    }
  });
  const mailOptions = {
    from: 'javaloganalyzer@gmail.com', // sender address
    to: 'padmaisuru@gmail.com', // list of receivers
    subject: 'DbRecodeForEmail Email test', // Subject line
    html: `
<html>
<head></head>
<body>

<div style="font-size: .9em; width: 100%; background-color: #f1f1f1;
    font-family: Helvetica,Arial, sans-serif; text-align: center; padding-bottom: 30px;">

    <div style="width: 700px; max-width: 100%; padding: 10px 0 20px; margin: 0 auto 35px; background-color: #ffffff;">

        <p style="font-size: 1.2em; font-weight: 500; color: #e06666;">- READ BEFORE APPLY -</p>

        <p style="font-size: 1.2em; margin: 30px; color: #37474F; font-weight: 500;">
            You already know why
        
            is so hot.<br/>

            But there is REAL LACK of SEs with basic knowledge in this tech stack. <br/>

            is to put you on the RIGHT PATH.<br/>
            Not a course, but Industrial training with experience.<br/>
            Done by a software company on a busy schedule.<br/>
            Help you to become one of the
            <span style="font-weight: bold;">TOP PAID</span>
            SE in the world.<br/>
        </p>

        <p style="font-size: 1.1em; margin: 30px; color: #37474F; font-weight: 500;">
            Duration: 10-12 weeks<br/>
            More than Rs. 100,000 worth program<br/>
            Get early discounts at SoftVessel website<br/>
        </p>

        <p style="font-size: 1.2em; margin: 30px 0 0 0; color: #37474F; font-weight: 500;">
            <span style="font-size: .75em; font-style: italic;">First-come, first-serve basis</span><br/>
            Limited Seats Available <span style="font-size: .75em;">(Last day April 25, 2021 00:00 IST)</span><br/>
        </p>



        <p style="font-size: 1em; margin: 30px 0 0 0; color: #37474F;">
            Minimum requirements:<br/>
            Following an IT Degree / Working as SE<br/>
            Personal Laptop with at least 8GB RAM<br/>
            20 hours of team + own working hours / week<br/><br/>

            Venue:<br/>
            SoftVessel (Pvt) Ltd., Colombo 8. OR remote
        </p>



        <p style="font-size: .9em; margin: 0 color: #263238;">
            SoftVessel (Pvt) Ltd. No. 60, Cotta Rd, Colombo 8, Sri Lanka, 00800<br/>
            Mob: +94 779 510 260 Tel: +94 112 680 360 Email:
     
            <span style="color: #455A64;">
                If you prefer not to receive emails from softvessel you may reply with “Unsubscribe”
            </span>
        </p>
    </div>
</div>

</body>
</html>`// plain text body
  };
  transporter.sendMail(mailOptions, function (err: any, info: any) {
    if (err)
      console.log(err)
    else
      console.log(info);
  });
}

