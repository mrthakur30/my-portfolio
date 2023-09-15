import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
function Projects() {

  const projects = [
    {
      title : "WebRTC Video Call App" ,
      deployLink : "https://reddit-clone-next-js-fullstack.vercel.app/sign-up",
      repoLink : "https://github.com/mrthakur30/Reddit-Clone-Next.js-Fullstack" ,
      image : "7.png",
      techStack : ["webRTC" , "Socket.io", "Next.js", "Typescript", "Tailwind"] ,
      description : "Used webRTC to implement video calling and socket.io as signaling server"
    },
    {
      title : "Reddit Clone - Next.js" ,
      deployLink : "https://web-rtc-nextjs-two.vercel.app/",
      repoLink : "https://github.com/mrthakur30/webRTC-nextjs" ,
      image : "6.png",
      techStack : ["Next.js 13" ,"Prisma", "Typescript", "Tailwind"] ,
      description : "Its a reddit clone where can create and join communities and post what they want"
    },
    
    {
      title : "Email Waitlist Site" ,
      deployLink : "https://frontend-code-doctor.vercel.app/",
      repoLink : "https://github.com/mrthakur30/frontend-code-doctor" ,
      image : "8.png",
      techStack : ["Next.js", "Express", "Tailwind", "Framer Motion"] ,
      description : "A webpage for getting user email data for wait list and admin dashboard"
    },
    {
      title : "Spotify Stats" ,
      deployLink : "https://youtu.be/VSYh1GM-6y8/",
      repoLink : "https://github.com/mrthakur30/spotify-stats-api-react" ,
      image : "1.png" ,
      techStack : ["React" ,"Tailwind" , "Redux Toolkit","Spotify API" ] ,
      description : "Made using Spotify API, user can see his top 15 played tracks and artists "
    },
    {
      title : "Tok Tik" ,
      deployLink : "https://unrivaled-paletas-0ca3dd.netlify.app/",
      repoLink : "https://github.com/mrthakur30/youtube-clone-assignment" ,
      image : "2.png" ,
      techStack : ["React" ,"Tailwind" , "Vite"] ,
      description : "A video player displaying pages using paginated API and can play videos using HTML5 video"
    },
    {
      title : "Candidate Hiring Site" ,
      deployLink : "https://animated-paletas-6e9ffe.netlify.app/",
      repoLink : "https://github.com/mrthakur30/mnc-hiring-site" ,
      image : "5.png",
      techStack : ["HTML" ,"CSS", "Javascript", "Firebase"] ,
      description : "User can hire candidates based on role and location and save them in list"
    },
    {
      title : "Notes App" ,
      deployLink : "https://thriving-youtiao-c254b0.netlify.app/",
      repoLink : "https://github.com/mrthakur30/notes-react-app-redux-tailwind" ,
      image : "4.png" ,
      techStack : ["React" ,"Tailwind" , "Redux Toolkit"] ,
      description : "Google Keep Clone while learning React"
    },

  ];

 

  return (
    <motion.main
      className="py-28 min-h-full flex px-4  flex-col justify-center items-center  bg-blue-400"
      initial={{ y: -200, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -200, opacity: 0 }}
      transition={{
        type: "spring",
        stiffness: 160,
        damping: 50,
      }}
      >

    <div className=" flex font-space bg-white pt-8 px-4  pb-14 rounded-md bg-opacity-50 flex-col justify-center items-center  ">
        <p className=" text-3xl font-extrabold pb-11">Projects</p>
          <div className=" flex flex-col justify-center items-center  mx-auto    p-2 gap-10 md:gap-y-16  md:gap-x-14">

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
