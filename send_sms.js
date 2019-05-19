const auth = require('./../secrets.json') 
const accountSid = auth.twilio_accountSid;
const authToken = auth.twilio_authToken;
const client = require('twilio')(accountSid, authToken);

module.exports = (text) => { 
	client.messages
  .create({
     body:  text,
     from: '+16292069913',
     to: '+16154035117'
   })
  .then(message => console.log(message.sid));
 }
 