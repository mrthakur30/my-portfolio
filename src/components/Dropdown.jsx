import { useState } from "react";
import { Link } from "react-router-dom";

export default function Dropdown() {
  const [open, setOpen] = useState(false);
  function clickHandler(e){
    e.preventDefault();
    setOpen(false);
  }
  const links = [
    {
      link: "/",
      linkTag: "Home",
    },
    {
      link: "/skills",
      linkTag: "Skills",
    },
    {
      link: "/projects",
      linkTag: "Projects",
    },
    {
      link: "/about",
      linkTag: "About",
    },
  ];
  return (
    <div className="absolute z-40 md:hidden right-2  top-1 ">
      <button
        onClick={() => setOpen(!open)}
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        className=" focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center text-gray-900 "
        type="button"
      >
        {" "}
        Menu{" "}
        {open ?
         <svg
         className='w-4 h-4 ml-2'
         aria-hidden="true"
         fill="none"
         stroke="currentColor"
         viewBox="0 0 24 24"
         xmlns="http://www.w3.org/2000/svg"
       >
         <path d="M19 9l-7 7-7-7"></path>
       </svg>
         :
         <svg
         className='w-4 h-4 ml-2 rotate-180'
         aria-hidden="true"
         fill="none"
         stroke="currentColor"
         viewBox="0 0 24 24"
         xmlns="http://www.w3.org/2000/svg"
       >
         <path d="M19 9l-7 7-7-7"></path>
       </svg>
         }
      </button>

      {open && (
        <div
          id="dropdown"
          className=" z-50   bg-white divide-y divide-gray-100 rounded-lg text-black shadow "
        >
          <ul
            className="py-2 text-sm text-gray-700 "
            aria-labelledby="dropdownDefaultButton"
          >
           
              {links.map((item,index)=> <li key={index} onClick={clickHandler}><Link  to={item.link}  className="block px-4 py-2">{item.linkTag}</Link> </li>)}
              
           
          </ul>
        </div>
      )}
    </div>
  );
}
