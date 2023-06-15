/* eslint-disable react/prop-types */

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
function SocialCard({ name, link, imgURL }) {
  return (
    <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
      <a rel="noreferrer" target="_blank" href={link}>
        <div className="flex flex-row bg-slate-50 border-2 gap-2  border-gray-400 hover:border-white  rounded-md p-1  transition-all duration-200  hover:bg-stone-100 items-center ">
          <img className="inline-block h-14   rounded-md" src={imgURL} />
          <span className="text-lg font-bold">{name}</span>
        </div>
      </a>
    </motion.div>
  );
}

export default SocialCard;
