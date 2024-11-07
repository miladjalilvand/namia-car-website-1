"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import MotD from './ItemHome';
import { motion } from 'framer-motion';
import { LayoutGroup } from 'framer-motion';

const images = [
  '/assets/1.jpg',
  '/assets/2.jpg',
  '/assets/3.jpg',
  '/assets/4.jpg',
];

export default function ImageSliderHomePage({theme}) {
    const [currentImage, setCurrentImage] = useState(0);


    

    useEffect(() => {
       
        const interval = setInterval(() => {
            nextImage();
        }, 5000); 
        return () => clearInterval(interval); 

       

    }, []);
    
    const nextImage = () => {
        setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    };
    
    const prevImage = () => {
        setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
    };

    const handleCircleClick = (index) => {
        setCurrentImage(index);
    };

    return (
        <div className={`flex flex-col  md:flex-row justify-center items-center  md:mt-0 
        `}
        style={{backgroundColor :theme.background , color : theme.color}}
        >
            <div className="relative md:w-1/2 md:h-1/2 h-96  ">
              <motion.div 
              key={currentImage}
               initial={{ y: 100, opacity: 0 }} // Start slightly below with transparency
               animate={{ y: 0, opacity: 1 }}   // Move up to its original position and become fully visible
               transition={{ duration: 1, ease: "easeOut" }} // Adjust duration and easing as desired
              > <Image 

                    src={images[currentImage]} 
                    alt={`تصویر ${currentImage + 1}`} 
                    width={10000} 
                    height={240} 
                    // style={{ objectFit: "cover", height: "100%", width: "100%" }}
                />
                </motion.div>

                {/* دکمه‌های بعدی و قبلی */}
                <div className="  absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2    ">
                    <button onClick={prevImage} className="bg-gray-700 text-white px-4 py-2  hover:bg-gray-800">
                    &lt;
                    </button>
                    <button onClick={nextImage} className="bg-gray-700 text-white px-4 py-2  hover:bg-gray-800">
                    &gt;
                    </button>
                </div>
            </div>
           
            <div className="flex md:w-1/7 h-full items-center justify-center pt-7">
                <CursorImage currentIndex={currentImage} onCircleClick={handleCircleClick} />
            </div>
            <div className={`hidden md:flex w-1/2 h-full items-center justify-center   `}>
                <Title value={`تصویر ${currentImage + 1}`} />
            </div>
        </div>
    );
}

function Title({ value }) {
  return (
    <>
      <MotD params={value} key={value} />
    </>
  );
}

function CursorImage({ currentIndex, onCircleClick }) {
    const circles = [0, 1, 2, 3];

    return (
        <ul className="flex flex-row md:flex-col  -space-x-px justify-center items-center p-6">
            {circles.map((val, ind) => (
                <li key={ind}>
                    <div
                        onClick={() => onCircleClick(ind)}
                        className={`rounded-full cursor-pointer m-1 ${
                            currentIndex === ind ? 'w-4 h-4 bg-gray-600' : 'w-3 h-3 bg-gray-300'
                        }`}
                    />
                </li>
            ))}
        </ul>
    );
}
