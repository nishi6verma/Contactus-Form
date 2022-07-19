const express = require('express');
const app = express();

const nodemailer = require("nodemailer");

const PORT = process.env.PORT || 19006;

app.get('/', (req, res)=>{
    res.send('hello!!')
})

app.use(express.static('components'));
app.use(express.json())

app.get('/', (req, res)=>{
    res.sendFile(_dirname + '/components/contact.js')
})

app.post('/', (req, res)=>{
    console.log(req.body);

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'nishi6verma@gmail.com',
            pass: 'saibaba3@'
        }
    })
    const mailOptions = {
        from:req.body.email,
        to: 'nishi6verma@gmail.com'
        subject: 'Message from ${req.body.email}: ${req.body.subject}'
        text: req.body.message
    }

    transporter.sendMail(mailOptions, (error, info)=>{
        if(error){
            console.log(error);
            res.send('error');
        }else{
            console.log('Email sent: ' + info.response);
            res.send('success')
        }
    })
})

app.listen(PORT, ()=>{
    console.log{'Server running on port ${PORT}'}
})