// pages/api/sendEmail.js

const nodemailer = require('nodemailer');

const GET = () => {
  return { id: 100, name: 'Jay' };
};

const POST = async (formData) => {
  const { name, surname, message, service, email, phone } = formData;

  // Configure nodemailer with your email provider
  const transporter = nodemailer.createTransport({
    host: 'your-smtp-host',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'your-email@example.com',
      pass: 'your-email-password'
    }
  });

  // Setup email data
  const mailOptions = {
    from: 'your-email@example.com',
    to: 'recipient@example.com',
    subject: 'New Form Submission',
    text: `
      Name: ${name}
      Surname: ${surname}
      Message: ${message}
      Service: ${service}
      Email: ${email}
      Phone: ${phone}
    `
  };

  try {
    // Send email
    await transporter.sendMail(mailOptions);
    return { message: 'Email sent successfully' };
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Internal server error');
  }
};

module.exports = { GET, POST };
