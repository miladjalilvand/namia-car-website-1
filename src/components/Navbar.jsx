"use client";
import { useTheme } from "@/app/ThemeContext";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaFileContract, FaMoon, FaPersonBooth, FaPhone, FaSun } from "react-icons/fa";
import { IoPersonCircleOutline } from "react-icons/io5";
import { motion } from "framer-motion";

const themes = {
  light: {
    background: 'white',
    color: 'black',
  },
  dark: {
    background: 'black',
    color: 'white',
  },
};

const NavBar = () => {
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
    changeNav(false);
    router.push(`/${path}`);
  };

  const pushcp = () => {
    toggleTheme();
    changeNav(false);
    router.push(`http://localhost:3000/${currentPath}`);
  };

  useEffect(() => {
    console.log(`#BACKGROUND NAV : ${currentTheme.background}`);
  }, [currentTheme]);

  return (
    <div className="flex flex-row z-50">
                  <div className=" z-50">
             <div 
              className="flex flex-col  fixed space-y-px pt-4 cursor-pointer
                self-center"
              onClick={handleClick}> 
                <motion.div
                className="w-5 h-1 bg-black self-start"
                animate={{ rotate: isRotated ? -45 : 0, y: isRotated ? 4 : 0, x: isRotated ? -6 : 0 }}
                transition={{ duration: 1 }}
                style={{ originX: 0, originY: 0 }}
            ></motion.div>

            <motion.div
                animate={{ rotate: isRotated ? 45 : 0 }}
                transition={{ duration: 1 }}
                style={{ originX: 0.5, originY: 0 }}
                className="w-10 h-1 bg-black"
            ></motion.div>

            <motion.div
                animate={{ rotate: isRotated ? -45 : 0 }}
                transition={{ duration: 1 }}
                style={{ originX: 0.5, originY: 0.5 }}
                className="w-5 h-1 bg-black self-end"
            ></motion.div></div>


              
            </div>
      {isOpen ? (
        <div className="flex ">
          <div className="fixed z-40 flex flex-col w-full bg-red-800 opacity-90 min-h-screen md:w-1/3">
            <div className="flex flex-row items-start justify-between p-4">
              <div className="flex flex-row space-x-2">

                <h1 onClick={() => pushin('/')} className="cursor-pointer text-white">
                  *Logo
                </h1>
              </div>
              <div onClick={pushcp} className="md:hidden flex items-center justify-center cursor-pointer w-8 h-8 md:h-12 md:w-12">
                {theme === "light" ? <FaMoon color="grey" /> : <FaSun color="white" />}
              </div>
            </div>
            <div className="flex-1 p-4 border-b-4 border-red-500">
              <div>search</div>
              <div className="flex flex-col items-center text-white font-extrabold space-y-2">
                <div className="cursor-pointer" onClick={() => pushin('about')}>about</div>
                <div>item</div>
                <div>item</div>
                <div>item</div>
              </div>
            </div>
            <div className="p-4 text-white">footer</div>
          </div>
          <div onClick={() => changeNav(false)} className="fixed md:w-screen z-30 md:h-screen bg-black opacity-70"></div>
        </div>
      ) : (
        <div className="fixed border-b-2 z-40
         border-black w-full" style={{ backgroundColor: currentTheme.background }}>
          <div dir="ltr" className="flex flex-row space-x-0 justify-between" style={{ backgroundColor: currentTheme.background }}>
            <div className="flex">
              <div className="w-8 h-8 md:h-12 md:w-12 bg-red-600 flex items-center justify-center cursor-pointer">
                <FaPhone color="white" />
              </div>
              <div onClick={toggleTheme} className="hidden md:flex items-center justify-center cursor-pointer w-8 h-8 md:h-12 md:w-12">
                {theme === "light" ? <FaMoon color="grey" /> : <FaSun color="white" />}
              </div>
              <div className="w-1 md:w-4"></div>
              <div className="md:hidden flex items-center justify-center cursor-pointer">
                <IoPersonCircleOutline color="grey" />
              </div>
              <div className="hidden md:flex flex-row items-center justify-center rounded mt-1 h-8 p-1" style={{ backgroundColor: currentTheme.background, color: currentTheme.color }}>
                ورود <IoPersonCircleOutline color="grey" />
              </div>
              <div className="flex ml-4 justify-center rounded mt-1 h-6 p-1 bg-red-700 text-sm text-white cursor-pointer md:text-xl pb-4 px-2 md:pb-8">
                طرح تعویض
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
