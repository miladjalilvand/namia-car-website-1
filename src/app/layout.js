
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/Footer";
import NavBar from "@/components/Navbar";
import { ThemeProvider } from "./ThemeContext";
import { LoadingProvider } from "./LoadingContext";



const vaz = localFont({
  src: "/fonts/fonts/Vazir-Variable.woff2",
  display: "swap",

});
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {



  return (  
    <html lang="en">
      <body dir="rtl"
        className={`${vaz.className}  antialiased " h-screen    `}
      >
        <LoadingProvider> 
        <ThemeProvider><NavBar/>
        <div className=" overflow-hidden 2xl:px-96">{children} </div>
        <Footer/></ThemeProvider></LoadingProvider>
 
    
      </body>
    </html>
  );
}
