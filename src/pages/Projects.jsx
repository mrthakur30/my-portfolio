import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
function Projects() {

  const projects = [
    {
      title : "Spotify Stats" ,
      deployLink : "https://dashing-bublanina-abf290.netlify.app/",
      repoLink : "https://github.com/mrthakur30/spotify-stats-api-react" ,
      image : "1.png" ,
      techStack : ["React" ,"Tailwind" , "Redux Toolkit","Spotify API" ] ,
      description : "Made using Spotify API, user can see his top 15 played tracks and artists "
    },
    {
      title : "Youtube Clone" ,
      deployLink : "https://unrivaled-paletas-0ca3dd.netlify.app/",
      repoLink : "https://github.com/mrthakur30/youtube-clone-assignment" ,
      image : "2.png" ,
      techStack : ["React" ,"Tailwind" , "Vite"] ,
      description : "A video player displaying pages using paginated API and can play videos using HTML5 video"
    },
    {
      title : "Notes App" ,
      deployLink : "https://thriving-youtiao-c254b0.netlify.app/",
      repoLink : "https://github.com/mrthakur30/notes-react-app-redux-tailwind" ,
      image : "4.png" ,
      techStack : ["React" ,"Tailwind" , "Redux Toolkit"] ,
      description : "Google Keep Clone while learning React"
    },
    {
      title : "Meme Editor" ,
      deployLink : "https://neon-hamster-077e99.netlify.app/",
      repoLink : "https://github.com/mrthakur30/meme-gen-react" ,
      image : "3.png",
      techStack : ["React" ,"Tailwind" , "API"] ,
      description : "Put text random meme image fetched from API"
    },
    {
      title : "Cart App" ,
      deployLink : "https://snazzy-manatee-be4304.netlify.app/",
      repoLink : "https://github.com/mrthakur30/redux-toolkit-cart" ,
      image : "5.png",
      techStack : ["React" ,"Redux"] ,
      description : "Made using Spotify API, user can see his top 15 played tracks and artists "
    },
  ];

 

  return (
    <motion.main
      className="py-28 min-h-full flex px-2  flex-col justify-center items-center  bg-blue-400"
      initial={{ x: -200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -200, opacity: 0 }}
      transition={{
        type: "spring",
        stiffness: 160,
        damping: 50,
      }}
      >

    <div className=" flex font-space bg-white pt-8  pb-14 rounded-md bg-opacity-50 flex-col justify-center items-center  ">
        <p className=" text-3xl font-extrabold pb-11">Projects</p>
          <div className=" flex flex-col justify-center items-center  mx-auto    p-2 gap-5 md:gap-y-16  md:gap-x-14">

           {projects.map((item,index)=> 
              <ProjectCard 
                key={index} 
                title={item.title} 
                deployLink={item.deployLink} 
                repoLink={item.repoLink} 
                image={item.image} 
                techStack={item.techStack} 
                description={item.description}
                index={index}
               />) }

          </div>
      </div>
    
    </motion.main>
  );
}

export default Projects;
