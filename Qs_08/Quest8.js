var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'vinojan02abhimanyu@gmail.com',
    pass: 'abhimanyu001'
  }
});

var mailOptions = {
  from: 'vinojan02abhimanyu@gmail.com',
  to: 'linojan199512@gmail.com',
  subject: 'Testing my nodemailer module',
  text: 'This is easy !'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});