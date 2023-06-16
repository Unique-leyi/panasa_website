require('dotenv').config();


//Defining the styles
const container = `flex justify-center items-center flex-col shadow-md shadow-[#f2f2f2] overflow-hidden rounded-md`;
const logo = require("../../src/assets/images/panasa-logo.png");
const Image = require("next/image");


export default function handler(req, res) {
  let nodemailer = require('nodemailer');


  const output = `<div style="margin: 1.4rem auto; max-width: 50%;">
            <divstyle="display: flex; justify-content: space-around; align-items: center; background-color: #4b8787; border-radius: 2rem; border: 0.4rem solid rgb(17, 24, 39);">
                <div style="display: flex; justify-content: center; align-items: center;  flex-direction: column; row-gap: 0.75rem; overflow: hidden;">
                    <div style="position: relative; width: 5rem; height: 5rem; border-radius: 4rem;border: 2px solid white; padding: 2rem;">
                        <img src=${require("../../src/assets/images/panasa-logo.png")} alt="Panasa-logo" style="width: 100%; height: auto; object-fit: "cover" />
                    </div>
                    <h4 class="text-deep text-sm font-bold" style="color: rgb(17, 24, 39); font-size: 0.875rem; line-height: 1.25rem; font-weight: bold;">PANASA</h4> 
                </div>

                <div style="display: flex; align-items: center; flex-direction: column;">
                    <h3 style="font-size: 1.25rem; line-height: 1.75rem; font-weight; bold; color: white;">President's Cup 2023 Invoice Receipt</h3>
                </div>

           </div>


            <div style="margin-block: 1rem; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 2rem;">
                
                <div class="">
                    <div style="padding: 0.5rem 0.75rem; background-color: rgb(17, 24, 39); border-radius: 0.375rem; display: flex; column-gap: 0.75rem; flex-direction: column;">
                        <h3 style="font-weight: bold; font-size: 1.125rem; line-height: 1.75rem; color: white;">Participant Bio Details</h3>
                    </div>
                    <div class="py-4 grid grid-cols-2 gap-4" style="padding-block: 1rem; display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1rem;">
                    <div style="padding: 0.4rem;">

                    <h4 style="margin-bottom: 0.3rem; font-0size: 1rem;">Full Name:</h4>
                      <p style="color: black; font-size: 0.75rem; line-height: 1.25rem;">${req.body.surname}  ${req.body.firstname}</p>
                    </div>

                    <h4 style="margin-bottom: 0.3rem; font-0size: 1rem;">Email:</h4>
                      <p style="color: black; font-size: 0.75rem; line-height: 1.25rem;">${req.body.email}</p>
                    </div>

                    <h4 style="margin-bottom: 0.3rem; font-0size: 1rem;">Sex:</h4>
                      <p style="color: black; font-size: 0.75rem; line-height: 1.25rem;">${req.body.sex}</p>
                    </div>

                    <h4 style="margin-bottom: 0.3rem; font-0size: 1rem;">Country:</h4>
                      <p style="color: black; font-size: 0.75rem; line-height: 1.25rem;">${req.body.country}</p>
                    </div>
                  
                    <h4 style="margin-bottom: 0.3rem; font-0size: 1rem;">Wespa Rating:</h4>
                      <p style="color: black; font-size: 0.75rem; line-height: 1.25rem;">${req.body.wespa_rating}</p>
                    </div>

                    <h4 style="margin-bottom: 0.3rem; font-0size: 1rem;">Panasa Rating:</h4>
                      <p style="color: black; font-size: 0.75rem; line-height: 1.25rem;">${req.body.panasa_rating}</p>
                    </div>
                    

                    

                    ${req.body.phone_no != undefined ? <h4>Phone Number: ${req.body.phone_no}</h4> : ""}
                    <h4>Panasa Ratings: ${req.body.panasa_rating}</h4>
                    <h4>Wespa Ratings: ${req.body.wespa_rating}</h4>
                    <h4>Amount Payable: ${req.body.amount_payed}</h4>
                    ${req.body.room_mate != undefined ? <h4>Room Mate: ${req.body.room_mate}</h4> : ""}
                    <h4>Final Fling: ${req.body.final_fling}</h4>

                    </div>


                     <div>
                        <div class="py-2 bg-deep p-3 rounded-md flex gap-x-3 flex-col">
                            <h3 class="font-bold text-lg text-white">Payments</h3>
                        </div>

                        <div class="">
                            <div class="py-4 grid grid-cols-2 gap-4">
                                <div class="flex flex-col my-2">
                                    <h4 class="text-black font-semibold">Payment Method:</h4>
                                    <h4 class="text-sm text-[rgba(0,0,0,0.89)]">PayPal</h6>
                                </div>

                                <div class="flex flex-col my-2">
                                    <h4 class="text-black font-semibold">Amount:</h4>
                                    <h4 class="text-sm text-[rgba(0,0,0,0.89)]"> ${req.body.registration_band}</h6>
                                </div>

                                <div class="flex flex-col my-2">
                                    <h4 class="text-black font-semibold">Status</h4>
                                    <h4 class="text-sm text-[rgba(0,0,0,0.89)]">Status: <span class=${req.body.status ? "bg-[#15fa5a]" : "bg-[#facc15]"} text-sm p-2 font-bold rounded-md text-deep>${req.body.status ? "Payed" : "Pending"}</span></h3>
                                </div>

                            </div>
                        </div>
                     </div>
                </div>
            </div>

        </div>`;



  //creating a transporter object

  const transporter = nodemailer.createTransport({
    host: "panafricanscrabble.com",
    port: 587,
    auth: {
      user: process.env.PRES_EMAIL_USER,
      pass: process.env.PRES_EMAIL_PASS,
    },

    tls: {
      rejectUnauthorized: false,
    },
    secure: false,

  });
  //Formatting the Mail
  
  const mailData = {
    from: ` PANASA PRESIDENT'S CUP  <${process.env.PRES_EMAIL_USER}>`,
    to: [`${req.body.email}`,`${process.env.PRES_EMAIL_USER}`],
    subject: `${req.body.surname} ${req.body.firstname} Form Registration`,
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


  res.status(200).json({success: 'Message Sent Sucessfully!'})

  
  console.log(req.body);
}











