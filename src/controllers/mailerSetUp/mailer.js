var nodemailer = require('nodemailer');
const { keys } = require('./key');
const mailer=(userEmail,userName)=>{
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: keys.user,
            pass: keys.pass
        }
        });
    
        var mailOptions = {
        from: '2019ucs0103@iitjammu.ac.in',
        to: userEmail,
        subject: 'sign up/login successfully',
        text: `welcome ${userName}`
        };
    
        transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
        });
}
module.exports={
    mailer
}