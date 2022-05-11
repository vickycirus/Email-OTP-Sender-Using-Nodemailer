var nodemailer = require('nodemailer');

//Generating Random Otp
var otp = Math.random();
otp = otp * 1000000;
otp = parseInt(otp);


var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    //   Enter sender username and app password
    user: '',
    pass: ''
  }
});

var mailOptions = {
    // Enter sender email address
  from: '',
//   Enter receiver email address
  to: '',
  subject: 'OTP for Company',
  html: '<div style="font-family: Helvetica,Arial,sans-serif;min-width:1000px;overflow:auto;line-height:2"><div style="margin:50px auto;width:70%;padding:20px 0"><div style="border-bottom:1px solid #eee"><a href="" style="font-size:1.4em;color: #00466a;text-decoration:none;font-weight:600">Company</a></div><p style="font-size:1.1em">Hi,</p><p>Thank you for choosing your Company. Use the following OTP to complete your Sign Up procedures. OTP is valid for 15 minutes</p><h2 style="background: #00466a;margin: 0 auto;width: max-content;padding: 0 10px;color: #fff;border-radius: 4px;">'+otp+'</h2><p style="font-size:0.9em;">Regards,<br />CompanyName</p><hr style="border:none;border-top:1px solid #eee" /><div style="float:right;padding:8px 0;color:#aaa;font-size:0.8em;line-height:1;font-weight:300"><p>Company name</p><p>ADDRESS</p><p>COUNTRY</p></div></div></div>'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});




        
   
