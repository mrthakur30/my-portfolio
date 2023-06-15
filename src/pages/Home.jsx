import { motion } from "framer-motion";
import mukul from "../assets/mukul.png";
function App() {
  return (
    <motion.main
      className="bg-red-400 flex flex-col-reverse mb-12 md:flex md:flex-row min-h-full gap-20  justify-center items-center "
      initial={{ y: 200, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 200, opacity: 0 }}
      transition={{
        type: "spring",
        stiffness: 160,
        damping: 50,
      }}
    >
     
      <div className="  bg-white bg-opacity-20  p-4 rounded-md flex-col md:w-1/2 w-3/4   text-white flex transition duration-200 justify-center ">
        <motion.p
          initial={{ x: 700, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 700, opacity: 0 }}
          transition={{
            type: "spring",
            stiffness: 160,
            damping: 50,
          }}
          className=" md:text-5xl text-3xl font-fredoka font-semibold text-transparent tracking-widest transition  bg-clip-text  bg-gradient-to-l  from-orange-400 to-indigo-200"
        >
          {"Hi, I'm Mukul Thakur"}
        </motion.p>
        <motion.p
          initial={{ x: -700, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -700, opacity: 0 }}
          transition={{
            type: "spring",
            stiffness: 160,
            damping: 50,
          }}
          className=" md:text-7xl text-4xl font-fredoka font-semibold text-transparent tracking-wider bg-clip-text bg-gradient-to-r  from-pink-400 to-green-200"
        >
          Frontend Developer
        </motion.p>

        <div className=" rounded-sm py-4 tracking-wider flex-col items-center justify-center font-fredoka  text-md mt-6 text-gray-200 ">
          <p>
            Passionate about development, learning new skills on weekends. I am
            from Himachal currently in 2nd year pursuing B.Tech from NIT
            Hamirpur in ECE
          </p>
        </div>

        <div className="md:flex-row flex-col flex gap-6  mt-10">
          
          <a
            rel="noreferrer"
            target="_blank"
            href="https://github.com/mrthakur30/"
          >
            <div className=" flex  bg-white border-1 rounded-md p-2 text-black font-fredoka font-light border-black justify-center items-center">
              <img
                className="h-6 rounded-full"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAAB3CAMAAAAO5y+4AAAAaVBMVEX///8XFRUAAAATERH09PTp6ekQDQ0GAAC4uLj39/e8vLzw8PD8/PzAwMALBwe0tLSUlJSfn5+Ih4fg4OB2dnYjIiLQ0NArKirY2Nh/fn7LysppaGhMS0thYWE4NzcdHByop6dVVFRBQUEOIdwWAAAE0ElEQVRoge1a2ZaqOhBtKgyiiCAgo4r8/0ceQAKZIAnQ59x1F/utWyqbJDXsFPn5OXDgwIEDBw7owrOiLMsiy/trjOY1KBuY8CqDs/nLnN41t1sqxzYm2E7Hnl9/b+ZF3BIgQwTU/lIWv0Fq1ukc6Uid1nsvuBmmYC+QDksOaXDZkdW7qbAOzPVuG519FFm/zNVjH9oAHGXWDj7cd2C9VKDF2gEaayttoTlZPOXrNtp6MXTmgSDcQnvXX2OMLZu8gbYlzv8J7XriYBvt2qW+baVtiWt92mw7bUusnbpcYwqgrsgp52eqVCLQLRPPabrILrJz8Fqugt/ptfXolD3S6UH46NHWxCoPfhndJcyt6Ij6J8k40MsfkU0wwHn476VlHlbAGeWV4yPMipNyQfAiiDR4S9KpiD2KSvBbrqR6xvcgDMPgHj+rpP2PD89sfMqjrJ/qtFfSEAH506kp68hyif+4VnSLmxv5UEo6oUaJqHzCzq7UX3jAk7T3G1UBcqZC19dYqAExNQDc5BY9Gn9XXvulZlXQmcrXDMEWJa0VFHf4Q1shpM3b0MnNV/IQi03M4MqNKHjcCCoxHHJWqn6BUXAjBApWKVsB4KTJe2V57bfc6MK9rL5s4BQDyHVtzdiovCsHOhKVBAATAzppbgIrGpxSasLUOr9ZQUuV7+/bywzYKFop/B/sMLJIOtEGKFl5qmSiQhqLjCuCfGPEYLS3NIJj5nndnIHBxDDEkuc/dAToC9EBGVtclvfLe1H7guxs8fF5WAkVF/Zrmdelwwglaw/QJjMBSXExWXfeideA5Q7Tf4XX0FG/JKwUbeF11vpVZGzhNWBtz5GtDLq8O+UNGa+bMMuztjsSsg66HEdeReerlWWQK4R+JakvTNlHycrOLuPO0sLP9nD2qr+y/WLl1cpCmLPD1BID1v/1OxQdPLYzANI8wEnQNR7Na3+pCePQ1HFfFS47XYUTEq+59c+hJTeG/KDCeqJuS+aH90012cL36TST5VkwgoJZLDCrNWgFrXKpquvAnSI7w1L1DOxye2uoVrVkUApkWxIUp1w7Alo7UbIdgs9+naPingJ+iSSUaY8oTISdREXHvKDe+NtPMQM8lA1GFT7m9Jb1CCskbtoipJgBhtoAcV+LruMckA+QVmXOligzL7tmoT/TNVXOeNZ7aHW++rCjGu9I9DUsmOXsLN7KmhTnrOHzExVZwi4Ye76npqvSVPliFL92f25138S+CbssXCeFfE8N5TCegp1e5xSTm84IkHR2nfW6QWP0f+P2CvSLcGD7ChOtnm64vHH0GP3f0Qe318W5miu4eHnemlV03DEssKIgLuOgmMmXpxlefXk2+rSSkhXUoJ5W3ZdH4C1Tysxi3hWSoY2eFyY+yx8W8sJLt5Pb45I4eLWkzSQRr5OsvFNhvTFxGkqCX8DrqOdHFhdcBe22IMRBGOSfmTTA80K64QaJOV1m6L84gj+z2RwvVJuuzLis2lLkhXiVSxEIwVfgpfOGv+02wxePFEQfKed5EaS73JRxc+LuyIxfEbwO5FvXGOPRjMpJxmtDs9O1oO+4+CLUMq8Nqe7HFxluSV+Dl3gBkrXtnyU8yi6CxUnI6n4q91xhEu6tntXP9W0vbzpw4MCBAwf+9/gDAPw29HjkRogAAAAASUVORK5CYII="
              />
              <p>Github</p>
            </div>
          </a>

          <a
            rel="noreferrer"
            target="_blank"
            href="https://leetcode.com/mukulx/"
          >
            <div className="flex bg-white border-1 rounded-md p-2 text-black font-fredoka font-light border-black justify-center items-center">
              <img
                className="h-6 rounded-full"
                src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
              />
              <p>Leetcode - </p>
              <p className="font-normal">166 ✅</p>
            </div>
          </a>

        </div>
      </div>
      <motion.img
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.8 }}
        className="glow-container z-10 hover:shadow-2xl hover:shadow-red-400 md:mt-0  mt-12 transition-shadow duration-200  inline-block  h-48  md:h-72 rounded-full"
        src={mukul}
        alt="Mukul Thakur"
      />
    </motion.main>
  );
}

export default App;
