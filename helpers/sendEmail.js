const sgMail = require('@sendgrid/mail');
require('dotenv').config();

const { SENDGRID_API_KEY } = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

const sendEmail = async (mail) => {
  const email = { ...mail, from: "andrew.savon.dev@gmail.com" };
  await sgMail.send(email);
};

module.exports = sendEmail;