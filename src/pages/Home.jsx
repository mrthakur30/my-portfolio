import { motion } from "framer-motion";
import mukul from "../assets/mukul.png";
function App() {
  return (
  
    <motion.main
      className="bg-red-400 flex flex-col-reverse  md:flex md:flex-row h-full gap-20  justify-center items-center "
      initial={{ y: 200, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 200, opacity: 0 }}
      transition={{
        type: "spring",
        stiffness: 160,
        damping: 50,
      }}
    >
        <div className=" bg-transparent flex-col md:w-1/2 w-3/4   text-white flex transition duration-200 justify-center ">
          
          <motion.p
          initial={{ x: 700, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 700, opacity: 0 }}
          transition={{
            type: "spring",
            stiffness: 160,
            damping: 50,
          }}
           className=" md:text-5xl text-3xl font-fredoka text-transparent tracking-widest transition  bg-clip-text  bg-gradient-to-l  from-orange-400 to-indigo-200">{"Hi, I'm Mukul Thakur"}</motion.p>
          <motion.p
           initial={{ x: -700, opacity: 0 }}
           animate={{ x: 0, opacity: 1 }}
           exit={{ x: -700, opacity: 0 }}
           transition={{
             type: "spring",
             stiffness: 160,
             damping: 50,
           }}
           className=" md:text-7xl text-4xl font-fredoka text-transparent tracking-wider bg-clip-text bg-gradient-to-r  from-pink-400 to-green-200">Frontend Developer</motion.p>
          <div className="border rounded-sm p-2 tracking-wider flex-col items-center justify-center font-space text-md mt-6 text-black ">
          <p>Passionate about development, learning new skills   on weekends. I am from Himachal currently in 2nd year pursuing B.Tech from NIT Hamirpur in ECE</p>
          </div>
        </div>
        <motion.img
         whileHover={{ scale: 1.1 }}
         whileTap={{ scale: 0.8 }}
         className="glow-container z-10 hover:shadow-2xl hover:shadow-red-400  transition-shadow duration-200  inline-block h-1/4 md:h-2/5  rounded-full"
         src={mukul}
         alt="Mukul Thakur"
         />

    </motion.main>
  );
}

export default App;
