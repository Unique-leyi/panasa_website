require('dotenv').config();


import logo from  '../../src/assets/images/panasa-logo.png';

//Defining the styles
const container = `flex justify-center items-center flex-col shadow-md shadow-[#f2f2f2] overflow-hidden rounded-md`;


export default function handler(req, res) {
  let nodemailer = require('nodemailer');

  //creating a transporter object

  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 465,
    auth: {
      user: process.env.EMAIL_TEST_USER,
      pass: process.env.EMAIL_TEST_PASS,
    },

    secure: true,
  });
  //Formatting the Mail

  const mailData = {
    from: process.env.EMAIL_TEST_USER,
    to: `${req.body.email}, $`,
    subject: `Message from ${req.body.fullname}`,
    text: `${req.body.message}`,
    html: `<div class=${container}>
                <div class="bg-[#0a200af1] p-6">
                    <div class='grid grid-cols-2'>
                        <img src={${logo}} alt='OSSA Logo' class="w-28 h-28"/>
                        <h3 class="text-white text-lg font-montserrat font-bold">Message From ${req.body.fullname}</h3>
                    </div>
                </div>

                <div class="p-4 my-12">
                    <p>${req.body.message}</p>
                </div>

                <div class="bg-primary flex flex-end items-end flex-col p-4 w-full">
                    <h5 class='text-sm font-semibold'>Thanks for Contacting Us!</h5>
                    <h5 class='text-sm font-semibold'>We'll get back you shortly</h5>
                </div>
            </div>`
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