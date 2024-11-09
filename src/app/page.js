"use client"
import ItemSlidesImage from "@/components/cardSlide";
import CarsPicker from "@/components/CarsPicker";
import ImageSliderHomePage from "@/components/ImageSliderHomePage";
import MotDImage from "@/components/MotiMG";
import {  FaGoogle} from "react-icons/fa";
import { useTheme } from "./ThemeContext";


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

  const { theme, toggleTheme } = useTheme();
  const currentTheme = themes[theme];
  return (
  <div className="flex flex-col  pb-0   ">


<ImageSliderHomePage theme={currentTheme}/>
<CarsPicker/>
<ItemSlidesImage  theme={currentTheme}/>
</div>
  );
}
