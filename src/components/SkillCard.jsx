
import { motion } from 'framer-motion';

// eslint-disable-next-line react/prop-types
function SkillCard({image,link,index}) {
  return (
    <motion.div
    initial={{x:10 , scale:0.8 , opacity: 0 }}
    animate={{x:0, scale:1 , opacity: 1 }}
    exit={{x:10 ,scale:0.8 , opacity: 0}}
    transition={{
      type: "spring",
      delay:`${(index+1)*0.04}`,
      stiffness:100,
      bounce:300
    }}
    >
     <motion.div
       whileHover={{ scale: 1.2 }}
       whileTap={{ scale: 0.8 }}
    className="flex flex-row bg-slate-50 border-2  border-gray-400 hover:border-white  rounded-md p-1  transition-all duration-200  hover:bg-stone-100 items-center gap-2">
        <img  className="inline-block h-14   rounded-md"src={link}/>
        <span className="text-lg font-bold">{image}</span>
    </motion.div>
    </motion.div>
   
  )
}

export default SkillCard