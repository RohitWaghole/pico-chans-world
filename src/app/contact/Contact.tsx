import React, { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const formData = { from_name: email, message };
    const data = { from_name: email };

    // send thank you message to user
    await emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_TEMPLATE_ID || "",
        data,
        process.env.NEXT_PUBLIC_USER_ID || ""
      )
      .then(
        (response) => {
          toast.success("Message sent successfully!");
          setEmail("");
          setMessage("");
        },
        (error) => {
          toast.error("Failed to send message!");
        }
      );

    //   send response to pico chan
    await emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_PICO_ID || "",
        formData,
        process.env.NEXT_PUBLIC_USER_ID || ""
      )
      .then(
        (response) => {},
        (error) => {}
      );

    setEmail("");
    setMessage("");
  };

  return (
    <div className="absolute text-white z-10 w-full h-full flex items-center justify-center">
      <div className="glassmorph p-4 sm:w-[30%] w-[90%] flex flex-col gap-10">
        <p className="text-3xl w-full text-center">Contact me</p>
        <form
          onSubmit={handleSubmit}
          className="text-xl leading-8 sm:leading-10 flex flex-col gap-4"
        >
          <div className="flex flex-col">
            <label htmlFor="email" className="">
              Email :
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="glassmorph px-2 py-1"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="message" className="">
              Your message :
            </label>
            <textarea
              name="message"
              id="message"
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="glassmorph px-2 py-1"
            ></textarea>
          </div>
          <button
            type="submit"
            className="glassmorph px-4 py-1 w-full flex justify-center items-center"
          >
            Send Message
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ContactForm;
