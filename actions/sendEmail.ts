"use server";

import { Resend } from "resend";
import { validateString } from "@/lib/utilities";
import { getErrorMessages } from "@/lib/utilities";
import ContactFormEmail from "@/email/contact-form-email";
import React from "react";


const resend = new Resend(process.env.RESEND_API_KEY);



export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  

  // SIMPLE SERVER SIDE VALIDATION
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }

  console.log("Running on server side");
  console.log(formData.get("senderEmail"));
  console.log(formData.get("message"));

  let data;

  try {
    await resend.emails.send({
    from: "Contact form <onboarding@resend.dev>",
    to: "kenjiroll@icloud.com",
    subject: "New message from your portfolio",
    reply_to: senderEmail as string,
    react: React.createElement(ContactFormEmail, { message: message as string, senderEmail: senderEmail as string }), // TIGHT WAY IN TS!!!!! 
    // react: <ContactFormEmail message={message as string} senderEmail={senderEmail as string} />, WE CONT NOT TYPE LIKE THAT BECAUSE IT IS NOT JSX OR TSX FILE
  });
  } catch (error: unknown) {
    
    return {
      error: getErrorMessages(error), // FUNCTION CHECKING IF THIRD PARTY API "LIKE RESEND FOR EXAMPLE" THROWING AND ERROR
    }
   
  }

  return { data };

  
};
