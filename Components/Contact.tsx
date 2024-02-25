"use client";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect } from "react";
import { sendEmail } from "@/actions/sendEmail";
import SubmitButton from "./SubmitButton";
import { toast } from "react-hot-toast";


const Contact = () => {
  const { ref, inView } = useInView({ threshold: 0.5 }); // Using the useInView hook to check if the section is in view
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext(); // Using the useInView hook to check if the section is in view
  

  useEffect(() => {
    // Using the useInView hook to check if the section is in view
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection("Contact"); // Using the useInView hook to check if the section is in view
    }
  }, [inView, setActiveSection, timeOfLastClick]);

  return (
    // // w-[min(100%,38)] MEANS ON THE WIDER VIEWPORT, THE WIDTH WILL BE 38REM AND ON THE SMALLER VIEWPORT, THE WIDTH WILL BE 100%
    <motion.section
      ref={ref}
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{ opacity: 0 }}
      transition={{ delay: 0.2, duration: 0.9 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className="text-gray-700 -mt-5 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:example@gmail.com">
          example@gmail.com
        </a>{" "}
        {""} or through this form.
      </p>

      <form
        className="mt-10 flex flex-col dark:text-black/80"
        action={async (formData) => {
        const {data, error} = await sendEmail(formData);
        if (error) {
          toast.error(error); 
          return;
        } 
          toast.success("Your message has been sent");
        }} // USING ASYNC FUNCTION TO SEND EMAIL
      >
        <input
          name="senderEmail"
          className="h-14 border rounded-lg border-black/10 px-4 dark:bg-white/90 dark:focus:bg-white/100 transition-all dark:outline-none"
          type="email"
          placeholder="Your email"
          required
          maxLength={500}
        ></input>{" "}
        {/* YOU CAN STYLE PLACEHOLDER JUST BY ADDING PADDING */}
        <textarea
          name="message"
          className="h-52 my-3 rounded-lg border border-black/10 p-4 dark:bg-white/90 dark:focus:bg-white/100 transition-all dark:outline-none"
          placeholder="Your message"
          required
          maxLength={5000}
        ></textarea>
       <SubmitButton />
      </form>
    </motion.section>
  );
};
export default Contact;
