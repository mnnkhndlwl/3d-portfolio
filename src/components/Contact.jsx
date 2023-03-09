import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles.js";
import EarthCanvas  from "./canvas/Earth.jsx";
import SectionWrapper from "./utils/SectionWrapper";
import { slideIn } from "./utils/motion";
import { Contacts } from "./constants/constants.js";

const Contact = () => {

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] p-8 rounded-2xl'
      >
        <h2 className={`mb-10 ${styles.sectionHeadText}`}>Contact Me</h2>
        <div class="grow-0 shrink-0 basis-auto w-full lg:w-7/12">
        <div class="flex flex-wrap">
        {Contacts.map((contact) => (
          <div onClick={() => window.open(contact.contact_link, "_blank")} className="cursor-pointer mb-12 grow-0 shrink-0 basis-auto w-full lg:w-6/12 px-3 lg:px-6">
            <div className="flex items-start">
              <div className="shrink-0">
                <div className="p-4 bg-white rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24"><path d={contact.icon} /></svg>
                </div>
              </div>
              <div className="grow ml-6">
                <p className="font-bold mb-1">{contact.name}</p>
                <p className="text-gray-500">{contact.contact_link}</p>
              </div>
            </div>
          </div>
        ))}
        </div>
      </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");