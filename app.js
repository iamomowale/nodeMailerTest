/**
 * npm install nodemailer -- npm i nodemailer
 * require nodemailer
 * 
 * 1. Setup nodemailer transporter
 * 2. Set up nodemailer message content
 * 3. then use sendMail method
 */
const nodemailer = require('nodemailer')
require('dotenv').config()


 const transporter = nodemailer.createTransport( {
    service: 'gmail',
    auth: {
        user: process.env.USER,
        pass: process.env.PASS
    }

})

const contents = {
    from: process.env.USER,
    to: 'yramoni@seamfix.com',
    subject: 'Node Mailer Test',
    text: 'Dear Omowale, This automated email was sent from Node-Mailer module'
}

transporter.sendMail(contents, function (err, info){
    if(err){
        console.log(err)
        return;
    }
    console.log(`Sent ${info.response}`)
})