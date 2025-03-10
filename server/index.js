const express = require("express");
const axios = require("axios");
const randomString = require('randomstring');
const nodemailer = require('nodemailer')
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

//store generated otps and corresponding email address
const otpCache = {};


//Generate OTP
function generateOTP() {
    return randomString.generate({ length: 4, charset: 'numeric' });
}

const transporter = nodemailer.createTransport(
    {
        secure: true,
        host: 'smtp.gmail.com',
        port: 465,
        auth: {
            user: 'rrajamrit.21@gmail.com',
            pass: 'xcobftovonwvfpsg'
        }
    }
);

function sendOTP(to, sub, msg) {
    transporter.sendMail({
        to: to,
        subject: sub,
        html: msg
    });
}

// sendOTP("21205@iiitu.ac.in", "OTP for login", `Your OTP is aayga thoda der mei`);






app.post('/reqOTP', (req, res) => {
    const { email } = req.body;
    const otp = generateOTP();
    otpCache[email] = otp;

    sendOTP(email, "OTP for login", `Your OTP is ${otp}`);

    res.cookie('otpcache', otpCache, { maxAge: 3000, httpOnly: true });
    res.status(200).send({ message: 'OTP sent successfully' });
});


app.post('/verify', (req, res) => {
    const { email, otp } = req.body;
    if(!otpCache.hasOwnProperty(email))
    {
        return res.status(400).send({message: 'Email not found'});
    }

    if(otpCache[email] === otp.trim())
    {
        delete otpCache[email];
        return res.status(200).send({message: 'OTP verified succesfully'})
    }
    else{
        return res.status(400).send({message: 'Invalid OTP. Please enter the correct OTP.'})
    }
})















app.listen(3001, () => {
    console.log("server is running");
});
