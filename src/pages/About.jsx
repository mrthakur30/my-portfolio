import { motion } from "framer-motion";
import SocialCard from "../components/SocialCard";
function About() {
  const socials = [
    {
      name: "Github",
      link: "https://github.com/mrthakur30",
      imgURL:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAAB3CAMAAAAO5y+4AAAAaVBMVEX///8XFRUAAAATERH09PTp6ekQDQ0GAAC4uLj39/e8vLzw8PD8/PzAwMALBwe0tLSUlJSfn5+Ih4fg4OB2dnYjIiLQ0NArKirY2Nh/fn7LysppaGhMS0thYWE4NzcdHByop6dVVFRBQUEOIdwWAAAE0ElEQVRoge1a2ZaqOhBtKgyiiCAgo4r8/0ceQAKZIAnQ59x1F/utWyqbJDXsFPn5OXDgwIEDBw7owrOiLMsiy/trjOY1KBuY8CqDs/nLnN41t1sqxzYm2E7Hnl9/b+ZF3BIgQwTU/lIWv0Fq1ukc6Uid1nsvuBmmYC+QDksOaXDZkdW7qbAOzPVuG519FFm/zNVjH9oAHGXWDj7cd2C9VKDF2gEaayttoTlZPOXrNtp6MXTmgSDcQnvXX2OMLZu8gbYlzv8J7XriYBvt2qW+baVtiWt92mw7bUusnbpcYwqgrsgp52eqVCLQLRPPabrILrJz8Fqugt/ptfXolD3S6UH46NHWxCoPfhndJcyt6Ij6J8k40MsfkU0wwHn476VlHlbAGeWV4yPMipNyQfAiiDR4S9KpiD2KSvBbrqR6xvcgDMPgHj+rpP2PD89sfMqjrJ/qtFfSEAH506kp68hyif+4VnSLmxv5UEo6oUaJqHzCzq7UX3jAk7T3G1UBcqZC19dYqAExNQDc5BY9Gn9XXvulZlXQmcrXDMEWJa0VFHf4Q1shpM3b0MnNV/IQi03M4MqNKHjcCCoxHHJWqn6BUXAjBApWKVsB4KTJe2V57bfc6MK9rL5s4BQDyHVtzdiovCsHOhKVBAATAzppbgIrGpxSasLUOr9ZQUuV7+/bywzYKFop/B/sMLJIOtEGKFl5qmSiQhqLjCuCfGPEYLS3NIJj5nndnIHBxDDEkuc/dAToC9EBGVtclvfLe1H7guxs8fF5WAkVF/Zrmdelwwglaw/QJjMBSXExWXfeideA5Q7Tf4XX0FG/JKwUbeF11vpVZGzhNWBtz5GtDLq8O+UNGa+bMMuztjsSsg66HEdeReerlWWQK4R+JakvTNlHycrOLuPO0sLP9nD2qr+y/WLl1cpCmLPD1BID1v/1OxQdPLYzANI8wEnQNR7Na3+pCePQ1HFfFS47XYUTEq+59c+hJTeG/KDCeqJuS+aH90012cL36TST5VkwgoJZLDCrNWgFrXKpquvAnSI7w1L1DOxye2uoVrVkUApkWxIUp1w7Alo7UbIdgs9+naPingJ+iSSUaY8oTISdREXHvKDe+NtPMQM8lA1GFT7m9Jb1CCskbtoipJgBhtoAcV+LruMckA+QVmXOligzL7tmoT/TNVXOeNZ7aHW++rCjGu9I9DUsmOXsLN7KmhTnrOHzExVZwi4Ye76npqvSVPliFL92f25138S+CbssXCeFfE8N5TCegp1e5xSTm84IkHR2nfW6QWP0f+P2CvSLcGD7ChOtnm64vHH0GP3f0Qe318W5miu4eHnemlV03DEssKIgLuOgmMmXpxlefXk2+rSSkhXUoJ5W3ZdH4C1Tysxi3hWSoY2eFyY+yx8W8sJLt5Pb45I4eLWkzSQRr5OsvFNhvTFxGkqCX8DrqOdHFhdcBe22IMRBGOSfmTTA80K64QaJOV1m6L84gj+z2RwvVJuuzLis2lLkhXiVSxEIwVfgpfOGv+02wxePFEQfKed5EaS73JRxc+LuyIxfEbwO5FvXGOPRjMpJxmtDs9O1oO+4+CLUMq8Nqe7HFxluSV+Dl3gBkrXtnyU8yi6CxUnI6n4q91xhEu6tntXP9W0vbzpw4MCBAwf+9/gDAPw29HjkRogAAAAASUVORK5CYII=",
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/mukul-thakur-461bb7200/",
      imgURL:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAAaVBMVEUAd7X///8AcLEEebb7/f4Debb9/v79/v8DeLY8l8Y7lsYAbbCcyuKlz+WQxN+Lwd0KfbiDvdvl8fcAc7O+3OwgiL6x1ehFnMlytNZqsNQZhLzF4O7w9/tSo81gqtGp0ebc7PUsjsJ8udngaOvIAAADg0lEQVRoge2abZeqIBCAGV7EjXItKjc1y/7/j7xD7m5AWHdD+uScs3s8kDzOIMwMDoGrSJ4lEC6H0ckVkUEiyeQPBC+ar+pjcqm+GsQMEAntUSuaQJQ+toZC8F+7U4KJBMKE6ltUwkAqJUgiEapCAJGwpSwVgxBGtyAJh4NKCVEH4AStRZNZC+1F0V5orgXN00FyukBzZekh2XsgbzFXCMIGSQlhTCsjegrMCEQQVXfF8rOrFYm3YxjCdFnw6zbdFkJHr6AgROjdGYAbATjXOlaXEISRcgN88GEZh3NJIuclBBF0BfzXr3EoYve1ACTXPViuOAO+izRYAMLUxVLEqBK7RQcggp48yHJ6SG5cjAWRsI/0A0FN9g6Ew2p6TZhae+a6pDDXwn67UKt++rcL3+Gts072sW4gDOn5L4VjRBa7rwT3LkarDMNvmeEf8EV0tDSyC9O++dZku4uPyEb8CdO6KrbNtvjQOt5rjXnGnGGkrKmibALfP+7jBQ6fs0lCvnHIn4Tlj2KBsTkJX4cGYgLH1yiD8n+A/LcgACevrHe7ujRXQYXCEFHaIsLNZjgMnMrjstm0nLebZnXodSi6Cbvfz3Zzk3Y97I/ozOxmE2Dkql5vnCS0OQbe+WAgoZbOjcUPpLBbeU0I7dprZi4xlZYyM8ENNP3d6h2DcPkj/Ab5vDVjkllrgg/DpfNA+HN59D3DKMTahW3ILbxoa3Ru/D75x59Uni6vQ3hZOL7N8j9+ePMqRMLmACNnGHce6FUItrcgA4ThCdwU9HUIjDLuVImAjB/4+EFnjCZXba6xv/SU8oLOOEhmvQgu5GRPShQER25Pl667nFrXeBmc7ZUSA8FxLyU1mSWtTw7Fm5S4ia/Ud5KsnVtM34dlrwiIxNkV31ZhhG1sXTh01sy/DkG7W55SqC9npcLXJBBvHEzPLFU4rCeBgBeHs7MDKaaA4A5ZWggvdXKzs5chGTSOn2XKTZlX02jiJnnGOU8O8ZO8u146CWTpQdYzZIbMkBkyQ2bIDJkhA+QmDsRqDkCs3tXTqH4FtiyDxx6BkMiW/ZO4K6eH/eom+27oy2nnNB+8DPfo9j5JgswBk/PVnj1sfnzTKMScPVpf7fMnzU97JzqDfCxvhMxfsf8Ake8pX3hLIUbqkhJtSkpSF8ccTXGMKSXqk5f5vKVg6Xpkkbz06j1FZJC6HO4fbRVnSvd35FUAAAAASUVORK5CYII=",
    },
    {
      name: "Twitter",
      link: "https://twitter.com/mrthakur30",
      imgURL:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAAB3CAMAAAAO5y+4AAAAXVBMVEX///8dofIAnfIAm/EAmfEVn/IAl/Hg8P202/rx+f75/f/T6fzD4vuf0fiFxffq9f5MsPQppPJru/XZ7fxXtPWNyfen1fnL5vt3wPY+qvQAlPFkuPWZzvg9rPN2vPZv+CZ4AAAC8UlEQVRoge2Z6ZKqMBCFoTut7CHsDuD7P+YFRmcchQQatOpW5fupJIeT7nQWHMdisVgsFovFYrFYLP8/Z69s0yKLI/+DooGXEgIRAYJqwse/ZPQ+2egC5P4AkMn7P34MLN0sWPFQgg+qk7Jbj78Heakw5cjWX+2Kd0P3BfT8ukwRXFFzdDPChCM7WB7iPeo3HFlnaCoMLWMxJ3uDLmvi9EIojK+cz7q9m1ajrNw81N7UKRaaly5II1sMol5Bcrn5PCV8t7+cl54INXap9RIFgOFS40USuPXgegtPNKAZZndMLVxqqqH86RWb2fLnX3SyI6LaLuvEv6OIaq7u5JrofjfrGLJO9Bg9zF6jHOmyeQA4bodhPP3pBJtnZc+gy10TnsIHmP1NzkqbVm7OlHXi537ppLoH05XeL1s3mOkXxKWrb9ltiC9b9zGjH6UB+qaKQllrZd3FcmOmX5gpNGiDq/S6mwvkL2fXNEUXIcXdaoXDghDyhRXX7PUSSydPuX5ZW5yRBBD7a8bUhStXd5qexB1nXm0eCU/m3jW6rC3dBD+nRvjTN9HXXz09a083IXWbRQPA28LuNsw7oNwIFDfCpHZUySGluYYp2yM7LHXM+Sv2nj9rl2WZvSj8IIvTdstQ7pUdLRenrZ5xV1aNTLPfLzfaNR5fjeTUp70y7Cxe7O7Y4twpYHNKH2DXfCiYs3vIZVK2OaniI2QdubFYUn+I7OZiCQck1U34+YbqA6M8IdXq5MKdC8ITMa3zTCl/mzGLH6cojNo7l91ZAhlVrV6YdpwBdXj6KUXu9kujFeStfpzfIysT0A8yvCG2zjkh0+VNevgVv6xS48qPR+wwRq3p7YNzXTVKGKsGKv5p6En3+iVQCERDVEcIywOrRd6KdSVq7ipvF2ELxqUIsH1DrcgTpRtnQpUc7PWO72VqNsYEqLK3fh7z665Q040VTXzfXbVd+IFvckEeVV3TFmlaZEnn1eeDlzuLxWKxWCwWi8VisXyaf3jsH8eZomRXAAAAAElFTkSuQmCC",
    },
    {
      name: "Leetcode",
      link: "https://leetcode.com/mukulx/",
      imgURL:
        "data:image/png;base64,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",
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/mukulxt/",
      imgURL:
        "data:image/jpeg;base64,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",
    },
  ];
  return (
    <motion.div
    initial={{ y: -200, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -200, opacity: 0 }}
      transition={{
        type: "spring",
        stiffness: 160,
        damping: 50,
      }}
    className="min-h-full flex  flex-col items-center justify-center bg-purple-400"
    >  
    <div 
    className="flex font-space p-4 border-2  border-green-200 bg-white bg-opacity-60 rounded-md flex-col justify-center items-center"
    >
    <p className="text-3xl font-extrabold pb-11">Socials</p>
      <div 
      className=" grid md:grid-cols-4 grid-cols-2 p-2 gap-5 md:gap-y-24  md:gap-x-12"
      >
        {socials.map((item, index)=>{
          return <SocialCard key={index} name = {item.name} imgURL={item.imgURL} link={item.link} />
        })}
      </div>
    </div>
      
    </motion.div>
  );
}

export default About;
