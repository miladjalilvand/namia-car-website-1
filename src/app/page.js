"use client"
import ItemSlidesImage from "@/components/cardSlide";
import CarsPicker from "@/components/CarsPicker";
import ImageSliderHomePage from "@/components/ImageSliderHomePage";
import MotDImage from "@/components/MotiMG";
import {  FaGoogle} from "react-icons/fa";
import { useTheme } from "./ThemeContext";
import { useLoading } from "./LoadingContext";
import ImageSlidersCars from "@/components/newSlideCarsHome";



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
export default function Home() {

  const {loading ,changeLoading } =useLoading();
  const { theme, toggleTheme } = useTheme();
  const currentTheme = themes[theme];
  return (
  <div className="flex flex-col  pb-0   ">
     {loading && (
        <div className="fixed z-50 flex h-screen w-screen items-center justify-center bg-black opacity-70">
          <div className="w-16 h-16 border-4 border-white border-dashed rounded-full animate-spin"></div>
        </div>
      )}

        

{/* <div className="h-1/2"><ImageSlidersCars/></div> */}
<ImageSliderHomePage theme={currentTheme}/>
<CarsPicker/>
<ItemSlidesImage  theme={currentTheme}/>

</div>
  );
}
