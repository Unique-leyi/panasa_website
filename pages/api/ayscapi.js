require('dotenv').config();


//Defining the styles
const container = `flex justify-center items-center flex-col shadow-md shadow-[#f2f2f2] overflow-hidden rounded-md`;
const logo = require("../../src/assets/images/panasa-logo.png");

export default function handler(req, res) {
  let nodemailer = require('nodemailer');

  const output = `<div class=${container}>
  <div class="p-6"  style="background-color: whitesmoke; box-shadow: 0 0 8px rgba(0,0,0,0.4)">
      <div class='grid grid-cols-2'>
          <img src=${logo} alt='Panasa Logo' class="w-28 h-28"/>
          <h2>African Youth Cup (Expression of Interest)</h2>
          <h3>Message From ${req.body.surname}  ${req.body.firstname}</h3>
          <h3>Email: ${req.body.email}</h3>
          <h3>Sex: ${req.body.sex}</h3>
          <h3>Age: ${req.body.age}</h3>
          <h3>Amount Payable: ${req.body.amount_payed}</h3>
      </div>
  </div>

</div>`;

  //creating a transporter object

  const transporter = nodemailer.createTransport({
    host: "panafricanscrabble.com",
    port: 587,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },

    tls: {
      rejectUnauthorized: false,
    },
    secure: false,

  });
  //Formatting the Mail

  const mailData = {
    from: `"PANASA AYSC" <${process.env.EMAIL_USER}>`,
    to: `${process.env.EMAIL_USER}`,
    subject: `Message from ${req.body.surname} ${req.body.firstname}`,
    // replyTo: req.body.email,
    text: `${req.body.surname}`,
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