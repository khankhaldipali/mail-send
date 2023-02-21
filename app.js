var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'khankhaldipali007@gmail.com',
    pass: 'wmyelhwrooqjnxbo'
  }
});

var mailOptions = {
  from: 'khankhaldipali007@gmail.com',
  to: 'rutvikuvadiya281@gmail.com,dhameliyanensi165@gmail.com',
  subject: 'Sending Email using Node.js',
//   text: 'That was easy!'
  html: '<h1>hi dear</h1><p>That was easy!</p>'

};8

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});