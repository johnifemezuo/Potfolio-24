"use client";

import { useRef, useState } from "react";
import { ArrowRight } from "..";
import { SMTPClient } from "emailjs";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formValidatorSchema } from "./formValidatorSchema";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
export const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const form = useRef<any>();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formValidatorSchema) });

  const submitForm = (data: any, e: any) => {
    const payload = {
      fullName: data.fullName,
      message: data.message,
      email: data.email,
    };

    setLoading(true);

    emailjs
      .sendForm(
        "service_pxee39y",
        "template_wgwotpx",
        form.current,
        "m3kPUW7xG4gJ0A0ov"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          toast.success(
            `Success!! Thanks ${data.fullName}, I will get back to you Asap `,
            {
              duration: 5000,
              position: "top-center",
              className: "text-sm md:text-base",
            }
          );
          setLoading(false);
        },
        (error) => {
          setLoading(false);

          console.log(error.text);
          toast.error("Sorry, something is wrong", {
            duration: 4000,
            position: "bottom-center",
          });
        }
      );
  };

  return (
    <div className="w-full border border-border-color rounded-2xl p-4 md:p-6 lg:p-12 relative">
      <div className="space-y-4">
        <h1 className="text-2xl md:text-5xl lg:text-8xl font-extralight text-white ">
          Lets Connect.
        </h1>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-extralight text-white max-w-[600px]">
          If you have a general or project enquiry, please leave a message —
          available now.
        </h1>

        <div className="pt-12 md:pt-10 lg:space-y-3">
          <p className="text-zinc-400 font-extralight text-lg lg:text-2xl">
            Email
          </p>
          <div className="flex--items space-x-4">
            {/* <ArrowRight className="w-5 md:w-10 rotate-9 text-white" /> */}
            <h1 className="tracking-tighter text-xl sm:text-lg text-white md:text-xl lg:text-2xl pt-1 group-hover:translate-x-5 transition-transform duration-500">
              ifemezuojohn@gmail.com
            </h1>
          </div>
        </div>
      </div>

      <form
        ref={form}
        onSubmit={handleSubmit(submitForm)}
        className="mt-8 lg:mt-0 xl:absolute bottom-0 inset-x-0 xl:px-12 xl:pb-12 gap-5 grid"
      >
        <div className="md:flex--items space-y-5 md:space-y-0 md:space-x-6">
          <input
            type="text"
            {...register("fullName", {
              required: "Please add a name",
              minLength: 4,
            })}
            placeholder="Full name"
            className="input  placeholder:text-sm md:placeholder:text-xl"
          />

          <input
            type="text"
            {...register("email", {
              required: "email is required, Thank you",
            })}
            placeholder="Your email"
            className="input  placeholder:text-sm md:placeholder:text-xl"
          />
        </div>
        <textarea
          {...register("message", {
            required: "Leave a message, Thank you",
          })}
          name="message"
          placeholder="Enter Message here"
          className="input h-[150px] placeholder:text-sm md:placeholder:text-xl"
        />

        <button
          disabled={loading}
          className={`rounded-xl w-full border   border-white transition-colors duration-500 py-4 font-extralight lg:py-5 text-white text-base lg:text-xl ${
            loading
              ? "bg-zinc-400 text-white"
              : "hover:bg-white hover:text-zinc-600"
          }`}
        >
          {loading ? "Loading..." : "Submit"}
        </button>
      </form>
    </div>
  );
};
