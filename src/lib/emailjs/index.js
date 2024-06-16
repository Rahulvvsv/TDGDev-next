import emailjs from '@emailjs/browser';
import { Resend } from 'resend';


function objectToFormData(obj) {
  const formData = new FormData();
  
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      formData.append(key, obj[key]);
    }
  }
  
  return formData;
}


export const Emailer = async (data) =>{
  // console.log(data);
const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    emailjs.send(serviceId, templateId,data, {
        publicKey: publicKey,
      })
      .then(
        () => {
          //console.log('SUCCESS!');
        },
        (error) => {
          //console.log('FAILED...', error.text);
        },
      );
  };


export const ContactEmailer = async (data) =>{
  //console.log(data);
const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_CONTACT_ID;
    emailjs.send(serviceId, templateId,data, {
        publicKey: publicKey,
      })
      .then(
        () => {
          //console.log('SUCCESS!');
        },
        (error) => {
          //console.log('FAILED...', error.text);
        },
      );
  };

  export const ServiceEmailer = async (data) =>{
  //console.log(data);
const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_SERVICE_ID;
    emailjs.send(serviceId, templateId,data, {
        publicKey: publicKey,
      })
      .then(
        () => {
          //console.log('SUCCESS!');
        },
        (error) => {
          //console.log('FAILED...', error.text);
        },
      );
  };


export const Emailer2 = async (data) =>{

    const resend = new Resend('re_6fBdwRFw_CtuJ9w4RW9cQaLdzQvBmwZUj');

    resend.emails.send({
    from: 'rahulwork120@gmail.com',
    to: 'vuppalarahul12@gmail.com',
    subject: 'Hello World',
    html: '<p>Congrats on sending your <strong>first email</strong>!</p>',
    });
}
