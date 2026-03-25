//components
import Circles from "../../components/Circles";

//icons
import { BsArrowRight } from 'react-icons/bs'

//framer
import { motion } from "framer-motion";

//variants
import { fadeIn } from "../../variants";

// react
import { useState } from "react";

function Contact() {
  const [fields, setFields] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const handleChange = (e) =>
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          name: fields.name,
          email: fields.email,
          subject: `Portfolio contact: ${fields.subject || "New message"}`,
          message: fields.message,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setFields({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        throw new Error(data.message || "Submission failed");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <div className='h-full bg-primary/30'>
      <div className='container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full'>
        {/* text & form */}
        <div className='flex flex-col w-full max-w-[700px]'>
          {/* text */}
          <motion.h2
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className='h2 text-center mb-12'
          >
            Let&apos;s <span className='text-accent'>connect.</span>
          </motion.h2>

          {/* success message */}
          {status === "success" && (
            <motion.p
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center text-accent mb-6 text-sm tracking-widest uppercase"
            >
              ✓ Message sent — I&apos;ll be in touch soon!
            </motion.p>
          )}

          {/* error message */}
          {status === "error" && (
            <motion.p
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center text-red-400 mb-6 text-sm tracking-widest uppercase"
            >
              Something went wrong. Please try again.
            </motion.p>
          )}

          {/* form */}
          <motion.form
            onSubmit={handleSubmit}
            variants={fadeIn('up', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className='flex-1 flex flex-col gap-6 w-full mx-auto'
          >
            {/* input group */}
            <div className='flex gap-x-6 w-full'>
              <div className="relative w-[340px]">
                <input
                  type="text"
                  name="name"
                  required
                  value={fields.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className="peer w-full p-2.5 border border-white/25 rounded-[5px] bg-transparent outline-none text-white text-base placeholder-transparent transition-all duration-500 focus:border-accent valid:border-accent"
                />
                <span className="absolute left-2.5 top-2.5 text-white/25 text-base uppercase pointer-events-none transition-all duration-500 peer-focus:text-accent peer-valid:text-accent peer-focus:translate-x-[10px] peer-valid:translate-x-[10px] peer-focus:-translate-y-[21px] peer-valid:-translate-y-[21px] peer-focus:text-[0.70em] peer-valid:text-[0.70em] peer-focus:px-[10px] peer-valid:px-[10px] peer-focus:bg-primary peer-valid:bg-primary peer-focus:border-l peer-valid:border-l peer-focus:border-r peer-valid:border-r peer-focus:border-accent peer-valid:border-accent peer-focus:tracking-[0.2em] peer-valid:tracking-[0.2em]">
                  Name
                </span>
              </div>
              <div className="relative w-[340px]">
                <input
                  type='email'
                  name="email"
                  placeholder='email'
                  required
                  value={fields.email}
                  onChange={handleChange}
                  className="peer w-full p-2.5 border border-white/25 rounded-[5px] bg-transparent outline-none text-white text-base placeholder-transparent transition-all duration-500 focus:border-accent valid:border-accent"
                />
                <span className="absolute left-2.5 top-2.5 text-white/25 text-base uppercase pointer-events-none transition-all duration-500 peer-focus:text-accent peer-valid:text-accent peer-focus:translate-x-[10px] peer-valid:translate-x-[10px] peer-focus:-translate-y-[21px] peer-valid:-translate-y-[21px] peer-focus:text-[0.70em] peer-valid:text-[0.70em] peer-focus:px-[10px] peer-valid:px-[10px] peer-focus:bg-primary/90 peer-valid:bg-primary/90 peer-focus:border-l peer-valid:border-l peer-focus:border-r peer-valid:border-r peer-focus:border-accent peer-valid:border-accent peer-focus:tracking-[0.2em] peer-valid:tracking-[0.2em]">
                  Email
                </span>
              </div>
            </div>

            <div className="relative w-full">
              <input
                type='text'
                name="subject"
                placeholder='subject'
                required
                value={fields.subject}
                onChange={handleChange}
                className="peer w-full p-2.5 border border-white/25 rounded-[5px] bg-transparent outline-none text-white text-base placeholder-transparent transition-all duration-500 focus:border-accent valid:border-accent"
              />
              <span className="absolute left-2.5 top-2.5 text-white/25 text-base uppercase pointer-events-none transition-all duration-500 peer-focus:bg-accent peer-valid:bg-accent peer-focus:text-white peer-valid:text-white peer-focus:translate-x-[10px] peer-valid:translate-x-[10px] peer-focus:-translate-y-[21px] peer-valid:-translate-y-[21px] peer-focus:text-[0.70em] peer-valid:text-[0.70em] peer-focus:px-[10px] peer-valid:px-[10px] peer-focus:border-l peer-valid:border-l peer-focus:border-r peer-valid:border-r peer-focus:border-accent peer-valid:border-accent peer-focus:rounded-[2px] peer-valid:rounded-[2px] peer-focus:tracking-[0.2em] peer-valid:tracking-[0.2em]">
                Subject
              </span>
            </div>

            <textarea
              name="message"
              placeholder='message'
              value={fields.message}
              onChange={handleChange}
              required
              className='textarea'
            />

            <button
              type="submit"
              disabled={status === "loading"}
              className='btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group disabled:opacity-50 disabled:cursor-not-allowed'
            >
              <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500'>
                {status === "loading" ? "Sending…" : "Let's talk"}
              </span>
              <BsArrowRight
                className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]'
              />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;