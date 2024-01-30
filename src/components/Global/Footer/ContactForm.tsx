import { ArrowRight } from "..";

export const ContactForm = () => {
  return (
    <div className="w-full border border-border-color rounded-2xl p-4 md:p-6 lg:p-12 relative">
      <div className="space-y-4">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-extralight text-white max-w-[500px]">
          If you have a general or project enquiry, please drop me an email or fill the form —
          available now.
        </h1>

        <div className="pt-12 md:pt-20 lg:space-y-3">
          <p className="text-zinc-400 font-extralight text-lg lg:text-2xl">Email</p>
          <div className="flex--items space-x-4">
            <ArrowRight className="w-5 md:w-10 rotate-9 text-white" />
            <h1 className="tracking-tighter text-xl sm:text-lg text-white md:text-xl lg:text-2xl pt-1 group-hover:translate-x-5 transition-transform duration-500">
              Johnifemezuo@gmail.com
            </h1>
          </div>
        </div>
      </div>

      <form action="" className="mt-8 lg:mt-0 xl:absolute bottom-0 inset-x-0 xl:px-12 xl:pb-12 gap-5 grid">
        <div className="md:flex--items space-y-5 md:space-y-0 md:space-x-6">
          <input type="text" placeholder="Full name" className="input" />

          <input type="text" placeholder="Your email" className="input" />
        </div>
        <textarea
          name="message"
          placeholder="Message"
          className="input h-[150px] lg:h-[180px]"
          id=""
        />

        <button className="rounded-xl w-full border hover:bg-white hover:text-zinc-600 border-white transition-colors duration-500 py-4 font-extralight lg:py-5 text-white text-base lg:text-xl">
          Submit
        </button>
      </form>
    </div>
  );
};
