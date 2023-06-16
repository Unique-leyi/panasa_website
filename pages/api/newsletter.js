require('dotenv').config();


//Defining the styles
const container = `flex justify-center items-center flex-col shadow-md shadow-[#f2f2f2] overflow-hidden rounded-md`;


export default function handler(req, res) {
  let nodemailer = require('nodemailer');

  const output = `<div class=${container}>
  <div class="bg-[#0a200af1] p-6">
      <div class='grid grid-cols-2'>
          <h3>Newsletter Subscription: ${req.body.newsletter}</h3>
      </div>
  </div>
</div>`;

  //creating a transporter object

  const transporter = nodemailer.createTransport({
    host: "panafricanscrabble.com",
    port: 587,
    auth: {
      user: process.env.NEWSLETTER_USER,
      pass: process.env.NEWSLETTER_PASS,
    },

    tls: {
      rejectUnauthorized: false,
    },
    secure: false,

  });
  //Formatting the Mail

  const mailData = {
    from: `"PANASA Contact" <${process.env.NEWSLETTER_USER}>`,
    to: `${process.env.NEWSLETTER_USER}`,
    subject: `Newsletter Subscription Request: ${req.body.newsletter}`,
    replyTo: req.body.newsletter,
    html: output,
  } 


  //Sending the Mail
    transporter.sendMail(mailData, (err, info) => {

      if(err)
        console.log(err)
      else
        console.log(info)
    })


  res.status(200).json({success: 'Message Sent Sucessfully!'});

  console.log(req.body);

}