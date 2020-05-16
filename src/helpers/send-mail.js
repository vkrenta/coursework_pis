import { createTransport } from 'nodemailer';

const sendLetter = ({ to, subject, text, html, cc, bcc }) => {
  const transporter = createTransport({
    host: 'smtp.ukr.net',
    port: 2525,
    secure: true,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  const letter = {
    from: `Football Coursework <${process.env.MAIL_USER}>`,
    to,
    subject,
    text,
    html,
    cc,
    bcc,
  };

  return transporter.sendMail(letter);
};

export default sendLetter;
