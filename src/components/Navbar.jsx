"use client";
import { useTheme } from "@/app/ThemeContext";
import { useRouter , usePathname } from "next/navigation";
import { useState } from "react";
import { FaFileContract, FaMoon, FaPersonBooth, FaPhone, FaSun } from "react-icons/fa";
import { IoPersonCircleOutline } from "react-icons/io5";

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
  const router = useRouter();
  const { theme, toggleTheme } = useTheme();
  const currentTheme = themes[theme];
  const [isOpen, changeNav] = useState(false);
  const currentPath = usePathname();
  const pushin = (path) => {
    console.log(`this is the cp : ${currentPath}`);
    changeNav(false);
    router.push(`/${path}`);
  };

  const pushcp =()=>{
   toggleTheme();
   changeNav(false);
    router.push(`http://localhost:3000/${currentPath}`);
  };

  return (
    <div>
      {isOpen ? (
        <div className="flex">
          <div className={`fixed z-30 flex flex-col w-full bg-red-800 opacity-90 min-h-screen md:w-1/3`}>
            {/* بالای محتوا */}
            <div className="flex flex-row items-start justify-between p-4">
              <div className="flex flex-row space-x-2">
                <h1 onClick={() => changeNav((prev) => !prev)} className="cursor-pointer text-white">
                  *Close
                </h1>
                {/* تغییرات اینجا */}
                <h1 onClick={() => pushin('/')} className="cursor-pointer text-white">
                  *Logo
                </h1>
              </div>
              <div onClick={pushcp} className={`hidden md:flex items-center justify-center cursor-pointer w-8 h-8 md:h-12 md:w-12`}>
                {theme === "light" ? (<FaMoon color="grey" />) : (<FaSun color="white" />)}
              </div>
            </div>

            {/* محتوای وسط */}
            <div className="flex-1 p-4 border-b-4 border-red-500">
              <div>search</div>
              <div className="flex  flex-col items-center text-white font-extrabold space-y-2">
                <div className="cursor-pointer" onClick={() => pushin('about')}>about</div> {/* اضافه کردن به صفحه about */}
                <div>item</div>
                <div>item</div>
                <div>item</div>
              </div>
            </div>

            {/* فوتر */}
            <div className="p-4 text-white">footer</div>
          </div>
          <div onClick={()=>changeNav(false)} className="fixed md:w-screen z-20 md:h-screen bg-black opacity-70">Overlay</div>
        </div>
      ) : (
        <div className={`fixed border-b-2 border-black w-full bg-${currentTheme.background}`}>
          <div dir="ltr" className="flex flex-row space-x-0 justify-between">
            <div className="flex">
              <div className="w-8 h-8 md:h-12 md:w-12 bg-red-600 flex items-center justify-center cursor-pointer">
                <FaPhone color="white" />
              </div>

              <div onClick={toggleTheme} className={`hidden md:flex items-center justify-center cursor-pointer w-8 h-8 md:h-12 md:w-12`}>
                {theme === "light" ? (<FaMoon color="grey" />) : (<FaSun color="white" />)}
              </div>

              <div className="w-1 md:w-4"></div>
              <div className="md:hidden flex items-center justify-center cursor-pointer">
                <IoPersonCircleOutline color="grey" />
              </div>
              <div className={`hidden md:flex flex-row space items-center justify-center rounded mt-1 h-8 p-1 bg-${currentTheme.background} text-${currentTheme.color} text-sm cursor-pointer md:text-xl md:w-36`}>
                ورود <IoPersonCircleOutline color="grey" />
              </div>

              <div className="flex ml-4 justify-center rounded mt-1 h-6 p-1 bg-red-700 text-sm text-white cursor-pointer md:text-xl pb-4 px-2 md:pb-8">
                طرح تعویض
              </div>
            </div>
            <div className="flex z-50">
              <div>Logo</div>
              <div className="cursor-pointer" onClick={() => changeNav((prev) => !prev)}>MENU</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
