// "use client"

// import { useTheme } from "@/app/ThemeContext"


// const themes = {
//     light: {
//       background: 'white',
//       color: 'black',
//     },
//     dark: {
//       background: 'black',
//       color: 'white',
//     },
//   };

//   const ThemeButton=({children})=>{
//     const {toggleTheme , theme} = useTheme();
//     const currentTheme= themes[theme];

//     return(
//         <div onClick={toggleTheme} className={`w-screen h-64 flex flex-1 cursor-pointer justify-center font-bold bg-${currentTheme.background} text-${currentTheme.color}`}>
//             {children}
//         </div>
//     );

//   }

//   export default ThemeButton;