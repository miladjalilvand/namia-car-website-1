
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/Footer";
import NavBar from "@/components/Navbar";
import { ThemeProvider } from "./ThemeContext";



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
        className={`${vaz.className}  antialiased " h-screen `}
      >
        <ThemeProvider><NavBar/>
        <div className="pt-0 ">{children} </div>
        <Footer/></ThemeProvider>
 
    
      </body>
    </html>
  );
}
