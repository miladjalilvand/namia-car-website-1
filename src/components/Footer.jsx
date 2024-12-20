"use client"

import { useTheme } from "@/app/ThemeContext";
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
const Footer = () => {

    const { theme, toggleTheme } = useTheme();
  const currentTheme = themes[theme];
    return (<div className={`pb-2 flex flex-col items-center
     justify-center w-full   pt-4 border-t-2 border-y-gray  border-x-2
     md:flex-row md:justify-between md:p-2   `}
     style={{
      backgroundColor: currentTheme.background,
      color: currentTheme.color,
    }}
     
     >
        <div className="text-sm text-center">تمامی حقوق مادی و معنوی این سایت متعلق به نمایندگی مدیران خودرو ۳۵۰ می باشد.
        </div>
        <div className="font-bold text-sm">Powered by </div>



    </div>);
}

export default Footer;
