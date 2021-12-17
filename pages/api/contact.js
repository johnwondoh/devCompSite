
export default function (req, res) {
    require('dotenv').config()
    // let nodemailer = require('nodemailer')
    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
            user: 'kwikcoderinfo@gmail.com',
            pass: process.env.NEXT_PUBLIC_YOUR_KEY,
        },
        secure: true,
    })

    const mailData = {
        from: 'kwikcoderinfo@gmail.com',
        to: 'johnwondoh@gmail.com',
        subject: `${req.body.topic} | Message From ${req.body.name}`,
        text: req.body.enquiry + " | Sent from: " + req.body.email + " | Phone Number: " + req.body.phone,
        html: `<div style="white-space: pre-wrap">${req.body.enquiry}</div><p>Sent from:
        ${req.body.email}</p><p>Phone number:
        ${req.body.phone}</p>`
    }

    transporter.sendMail(mailData, function (err, info) {
        if (err)
            console.log(err)
        else
            console.log(info)
    })
    res.status(200)
}