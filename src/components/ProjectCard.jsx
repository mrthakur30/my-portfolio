import { motion } from "framer-motion";
import { Link } from "react-router-dom";
function ProjectCard({
  title,
  deployLink,
  repoLink,
  image,
  techStack,
  description,
  index
}) {
  return (
    <motion.div
    initial={{y:10 , scale:0.8 , opacity: 0 }}
    animate={{y:0, scale:1 , opacity: 1 }}
    exit={{y:10 ,scale:0.8 , opacity: 0}}
    transition={{
      type: "spring",
      delay:`${(index)*0.1}`,
      stiffness:100,
      bounce:300
    }}
    className="border-2 flex md:flex-row flex-col  hover:bg-blue-100 hover:bg-opacity-50 duration-200  md:w-9/12 p-3  border-green-200 bg-white bg-opacity-60 rounded-md relative">
     
      <img
       className="h-80 object-cover w-auto rounded-md"
       src={image}
       />
      <div className="p-1 justify-between flex md:flex-col ">
        <a rel="noreferrer" target="_blank" href={deployLink} className="text-xl hover:text-blue-500  hover:underline  hover:underline-offset-2 px-2 text-slate-800 font-light">{title}</a>
        <div className="flex md:flex-row top-4 right-5 justify-center items-center gap-3">
          <span className="hover:bg-blue-100 p-0.5 transition rounded duration-200 ">
            <a rel="noreferrer" target="_blank" href={deployLink}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="blue"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                />
              </svg>
            </a>
          </span>

          <span className="hover:bg-white rounded  transition duration-150 ">
            <a rel="noreferrer" target="_blank" href={repoLink}>
              <img
                className="h-7 rounded-full"
                src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
              />
            </a>
          </span>
        </div>
      </div>

      <div>
        <p className="p-2 text-slate-600  font-light">{description}</p>
        <div className="grid  grid-cols-2">
        
        {techStack.map((item, index) => (
          <span
          key={index}
          className=" flex  justify-self-center duration-200 text-purple-400  hover:border-white border-2 hover:bg-purple-400 hover:text-white border-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"        >
         {item}
        </span>
        ))}
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
