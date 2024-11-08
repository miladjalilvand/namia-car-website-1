"use client";
import { useTheme } from "@/app/ThemeContext";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaFileContract, FaMoon, FaPersonBooth, FaPhone, FaSearch, FaSun } from "react-icons/fa";
import { IoPersonCircleOutline } from "react-icons/io5";
import { AnimatePresence,motion } from "framer-motion";
import Link from "next/link";
const links = [
  { name: "خانه", url: "/" },
  { name: "محصولات", url: "about" },
  { name: "شرایط فروش", url: "services" },
  { name: "قطعات", url: "contact" },
  { name: "تماس با ما ", url: "blog" }
];
const themes = {
  light: {
    background: 'white',
    color: 'black',
  
  },
  dark: {
    background: '#141414',
    color: 'white',
  },
};

const NavBarTE = () => {

  
  const [isRotated, setIsRotated] = useState(false);


  const router = useRouter();
  const { theme, toggleTheme } = useTheme();
  const currentTheme = themes[theme];
  const [isOpen, changeNav] = useState(false);
  const currentPath = usePathname();

  const handleClick = () => {
    setIsRotated(!isRotated);
    changeNav(!isOpen);

};
  const pushin = (path) => {
    handleClick();
    changeNav(false);
    router.push(`/${path}`);
  };

  const pushcp = () => {
    toggleTheme();
    handleClick();
    router.push(`http://localhost:3000${currentPath}`);
  };

  useEffect(() => {
    console.log(`#BACKGROUND NAV : ${currentTheme.background}`);
  }, [currentTheme]);

  return (
    <div className="flex flex-row z-50">
      
                  <div className=" z-50 ">
                    
             <div 
              className="flex flex-col  fixed space-y-px pt-4 cursor-pointer
                self-center "
              onClick={handleClick}> 
                <motion.div
                className="w-5 h-1  self-start"
                animate={{ rotate: isRotated ? -45 : 0, y: isRotated ? 4 : 0, x: isRotated ? -6 : 0 }}
                transition={{ duration:  0.5 }}
                style={{ originX: 0, originY: 0 ,backgroundColor:isOpen ? "white" :currentTheme.color }}
            ></motion.div>

            <motion.div
                animate={{ rotate: isRotated ? 45 : 0 }}
                transition={{ duration:  0.5 }}
                style={{ originX: 0.5, originY: 0 , backgroundColor:isOpen ? "white" :currentTheme.color }}
                className="w-10 h-1 "
            ></motion.div>

            <motion.div
                animate={{ rotate: isRotated ? -45 : 0 }}
                transition={{ duration: 0.5 }}
                style={{ originX: 0.5, originY: 0.5 , backgroundColor:isOpen ? "white" :currentTheme.color }}
                className="w-5 h-1  self-end"
                
            ></motion.div></div>


              
            </div>
        
      
        <div className="flex z-40 ">

          <motion.div 
  initial={{ x: !isOpen ? "100%" : "0%" }} // شروع از سمت راست یا وسط بسته به وضعیت isOpen
  animate={{ x: isOpen ? "0%" : "100%" }} // اگر isOpen باشد، به وسط می‌آید؛ اگر نباشد، به سمت راست می‌رود
// هنگام بسته شدن به سمت راست حرکت می‌کند
  transition={{ duration: 0.5, ease: "easeInOut" }}
        
          className="fixed z-40 flex flex-col w-full bg-red-800 opacity-90 min-h-screen md:w-1/3">
            <div className="flex flex-row items-start justify-between p-4 pr-8">
              <div className="flex flex-row space-x-2">


              </div>
              <div className="">logo</div>
            
              <div onClick={pushcp} className="md:hidden flex items-center justify-center cursor-pointer w-8 h-8 md:h-12 md:w-12">
                {theme === "light" ? <FaMoon color="grey" /> : <FaSun color="white" />}
              </div>
            </div>
            <div className="flex-1 p-4 border-b-4 border-red-500">
            <div className="flex items-center bg-black bg-opacity-60 p-1 rounded-sm w-full">
  <FaSearch color="white" size={24} />
  <input
    type="text"
    placeholder="جستجو"
    className="bg-transparent text-blue-50 placeholder-blue-50 focus:outline-none ml-2 w-full"
  />
</div>

              <div className="flex flex-col items-center text-white font-extrabold space-y-2 pt-2">
                {/* <div className="cursor-pointer" onClick={() => pushin('about')}>about</div> */}
               {isOpen && links.map((val , key)=>(
   <motion.div
   initial={{opacity:0.1}}
   animate={{opacity:1}}
   transition={{duration:3}}
   key={key} 
   className="cursor-pointer" onClick={() => pushin(val.url)}>{val.name}</motion.div>
               ))}
              </div>
            </div>
           <div className="flex flex-row">
           <div className="p-4 text-white cursor-pointer">طرح تعویض</div>
            <div className="p-4 text-white cursor-pointer">تست درایو</div>
            <div className="p-4 text-white cursor-pointer">وبلاگ</div>
           </div>
          </motion.div>
        {  (isOpen && <div onClick={() => handleClick()} className="fixed md:w-screen z-30 md:h-screen bg-black opacity-70"></div>)}
        </div>
      (
        <div className="fixed  z-30 
         w-full "
         style={{
           boxShadow: `0 1px 3px ${currentTheme=="light" ? "black" :"grey"}`,
          backgroundColor: `${currentTheme=="light" ? "black" :"grey"}`,
          // borderBottom: `1px solid ${currentTheme.color}` // Correctly setting width, style, and color for bottom border
        }}>
          <div dir="ltr" className="flex flex-row space-x-0 justify-between items-center" style={{ backgroundColor: currentTheme.background }}>
            <div className="flex">
              <div className="w-8 h-8 md:h-12 md:w-12 bg-red-600 flex items-center justify-center cursor-pointer">
                <FaPhone color="white" />
              </div>
              <div onClick={toggleTheme} className="hidden md:flex items-center justify-center cursor-pointer w-8 h-8 md:h-12 md:w-12">
                {theme === "light" ? <FaMoon color="grey" /> : <FaSun color="white" />}
              </div>
              <div className="w-1 md:w-4"></div>
              <div className="md:hidden flex items-center justify-center cursor-pointer">
              <IoPersonCircleOutline size={24} color="grey" />


              </div>
              <div className="hidden md:flex flex-row items-center justify-center cursor-pointer rounded mt-1 h-8 p-1 self-center space-x-1 " style={{ backgroundColor: currentTheme.background, color: currentTheme.color }}>
                <h3 className="text-gray-500">ورود</h3> <IoPersonCircleOutline size={24}  color="grey" />
              </div>
              <div className="flex ml-2 pt-1  justify-center rounded h-6   bg-red-700 text-xs text-white cursor-pointer md:text-sm px-2 md:pb-2 self-center">
                طرح تعویض
              </div>
            </div>

            <h1 onClick={() => router.push('/')} className="cursor-pointer text-black pr-12">
                  *Logo
                </h1>
          </div>
        </div>
      )
    </div>
  );
};

export default NavBarTE;


// "use client";
// import { motion } from "framer-motion";
// import { useState } from "react";

// export default function TestMenu() {
//   const [open, setOpen] = useState(false);

//   const hndl = () => {
//     setOpen(!open);
//   };

//   return (
//     <div className="flex-col overflow-hidden">
//       <motion.div
//         initial={{ x: open ? "0": "100%" }}
//         animate={{ x: open ? "0%" : "100%" }}
//         transition={{ duration: 0.5 }}
//         className="pt-40 w-40 h-96 bg-black"
//       ></motion.div>
//       <button onClick={hndl}>click: {open ? "Open" : "Closed"}</button>
//     </div>
//   );
// }
