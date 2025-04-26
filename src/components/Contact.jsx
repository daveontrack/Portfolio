// import React from "react";
// import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";  // Material Design icons

// const Contact = () => {
//   return (
//     <div className="bg-black text-white py-20" id="contact">
//       <div className="container mx-auto px-8 md:px-16 lg:px-24">
//         <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
//         <div className="flex flex-col md:flex-row items-center md:space-x-12">
//           <div className="flex-1">
//             <h3
//               className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r
//             from-green-400 to-blue-500 mb-4"
//             >
//               Let's Talk
//             </h3>
//             <p>
//               I'm open to discussing web development projects or partnership
//               opportunities.
//             </p>
//             <div className="mb-4 mt-8">
//               <MdEmail className="inline-block text-green-400 mr-2" /> {/* Changed icon */}
//               <a
//                 href="https://mail.google.com/mail/u/0/#inbox"
//                 className="hover:underline"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 Dawitberiso406@gmail.com
//               </a>
//             </div>

//             <div className="mb-4">
//               <MdPhone className="inline-block text-green-400 mr-2" /> {/* Changed icon */}
//               <span>+251906639740</span>
//             </div>
//             <div className="mb-4">
//               <MdLocationOn className="inline-block text-green-400 mr-2" /> {/* Changed icon */}
//               <span>Harar, Ethiopia</span>
//             </div>
//           </div>
//           <div className="flex-1 w-full">
//             <form className="space-y-4">
//               <div>
//                 <label htmlFor="name" className="block mb-2">
//                   Your Name
//                 </label>
//                 <input
//                   type="text"
//                   className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
//                     focus:border-green-400"
//                   placeholder="Enter Your Name"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="email" className="block mb-2">
//                   Email
//                 </label>
//                 <input
//                   type="text"
//                   className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
//                     focus:border-green-400"
//                   placeholder="Enter Your Email"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="message" className="block mb-2">
//                   Message
//                 </label>
//                 <textarea
//                   className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
//                     focus:border-green-400"
//                   rows="5"
//                   placeholder="Enter Your Message"
//                 />
//               </div>
//               <button
//                 className="bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline
//             transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full"
//               >
//                 Send
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;

import React, { useState } from "react";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";

const Contact = () => {
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbxnGRdXwtJNZ-op6ur_xFDzrxWrfaFBVeyu6bG2RJiYQWrRawCbeIj69PSYWtfzm2DB3g/exec";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [msg, setMsg] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(scriptURL, { method: "POST", body: new FormData(e.target) })
      .then((response) => {
        setMsg("Message sent successfully!");
        setTimeout(() => setMsg(""), 3000); 
        setFormData({ name: "", email: "", message: "" }); 
      })
      .catch((error) => {
        console.error("Error!", error.message);
        setMsg("Something went wrong. Please try again.");
      });
  };

  return (
    <div className="bg-black text-white py-20" id="contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="flex-1">
            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-4">
              Let's Talk
            </h3>
            <p>
              I'm open to discussing web development projects or partnership
              opportunities.
            </p>
            <div className="mb-4 mt-8">
              <MdEmail className="inline-block text-green-400 mr-2" />
              <a
                href="mailto:Dawitberiso406@gmail.com"
                className="hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Dawitberiso406@gmail.com
              </a>
            </div>
            <div className="mb-4">
              <MdPhone className="inline-block text-green-400 mr-2" />
              <span>+251906639740</span>
            </div>
            <div className="mb-4">
              <MdLocationOn className="inline-block text-green-400 mr-2" />
              <span>Harar, Ethiopia</span>
            </div>
          </div>

          <div className="flex-1 w-full">
            <form
              className="space-y-4"
              name="submit-to-google-sheet"
              onSubmit={handleSubmit}
            >
              <div>
                <label htmlFor="name" className="block mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
                  placeholder="Enter Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
                  placeholder="Enter Your Email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
                  rows="5"
                  placeholder="Enter Your Message"
                />
              </div>
              <button
                type="submit"
                className="bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full"
              >
                Send
              </button>

              {/* Message box */}
              {msg && <p className="text-green-400 mt-4">{msg}</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
