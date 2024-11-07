"use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const items = [
  { image: '/assets/svg/agency.svg', title: 'Item 1', subtitle: 'This is the first item' },
  { image: '/assets/svg/parts.svg', title: 'Item 2', subtitle: 'This is the second item' },
  { image: '/assets/svg/price-list.svg', title: 'Item 3', subtitle: 'This is the third item' },
  { image: '/assets/svg/services.svg', title: 'Item 4', subtitle: 'This is the fourth item' },
];

const ItemSlidesImage = ({ theme }) => {
  const itemRefs = useRef(items.map(() => React.createRef()));

  return (
    <div style={{backgroundColor:theme.background }}>
      {items.map((val, key) => {
        const isInView = useInView(itemRefs.current[key], { threshold: 0.5 });

        useEffect(() => {
          if (isInView) {
            console.log(`Element ${key} has entered the viewport!`);
          } else {
            console.log(`Element ${key} has left the viewport!`);
          }
        }, [isInView, key]);

        return (
          <div
          key={key}
          className="flex flex-col md:flex-row items-center justify-around h-screen "
          style={ { 
            direction : key%2 === 0 ? "ltr": "rtl" ,
                backgroundColor: key % 2 === 0 ? "rgb(185, 28, 28)" : theme.background,
                color: key % 2 === 0 ? "white" : theme.color,
              }}
        >
       <motion.div
  key={key}
  ref={itemRefs.current[key]}
  initial={{

    x: key % 2 === 0 ? "-100%" : "100%", // برای key زوج از سمت چپ شروع می‌شود و برای key فرد از سمت راست
    y: "-50%", // مقدار ثابت برای y
  }}
  animate={{
    x: isInView ? "0%" : key % 2 === 0 ? "-100%" : "100%", // انیمیشن برای انتقال به وسط
    y: isInView ? "0%" : "-50%", // انیمیشن برای انتقال به وسط
  }}
  transition={{ duration: 0.3, ease: "circInOut" }} // تنظیم زمان و نوع انیمیشن
>
  <PicCon src={val.image} />
</motion.div>

          <div className="flex-col">
          <AnimatedText ind={key} button={false} text={val.subtitle} isInView={isInView} theme={[theme , key]} />
          <AnimatedText ind={key} button={true} text={"hi i am"} isInView={isInView} textButton={val.title} theme={theme} />

          </div>
          {/* <ContentImage title={val.title} subtitle={val.subtitle} /> */}
        </div>
        
          // <motion.div
          //   key={key}
          //   ref={itemRefs.current[key]}
          //   initial={{ x: "100%" }}
          //   animate={{ x: isInView ? "0%" : "100%" }}
          //   transition={{ duration: 1, type: "spring" }}
          //   className="flex flex-col justify-center items-center h-96 p-4"
          //   style={{
          //     backgroundColor: key % 2 === 0 ? "rgb(185, 28, 28)" : theme.background,
          //     color: key % 2 === 0 ? "white" : theme.color,
          //   }}
          // >
          //   <PicCon src={val.image} />
          //   <ContentImage title={val.title} subtitle={val.subtitle} />
          // </motion.div>
        );
      })}
    </div>
  );
};

export default ItemSlidesImage;

function ContentImage({ title, subtitle }) {
  return (
    <div className="flex flex-col items-center justify-center mt-2">
      <div className="text-lg font-bold">{title}</div>
      <div className="text-sm">{subtitle}</div>
    </div>
  );
}

function PicCon({ src }) {
  return (
    <Image src={src} alt="Item Image" width={400} height={400} className="rounded-lg m-4" />
  );
}
const AnimatedText = ({ text, isInView, button , ind , textButton , theme }) => {
  const words = text.split(' '); // جمله را به کلمات تقسیم می‌کنیم

  return (
    <div className="flex flex-col">
      <div className="flex flex-wrap">
        {!button && words.map((word, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: "-10px" }} // شروع با opacity صفر و حرکت از بالا
            animate={{
              opacity: isInView ? 1 : 0, // اگر در نمایش باشد، نمایش داده شود
              y: isInView ? 0 : "-10px", // اگر در نمایش باشد، به موقعیت اصلی برسد
            }}
            transition={{
              delay: index * 0.3, // هر کلمه با تأخیر متفاوت وارد شود
              duration: 0.5,
            }}
            className="mr-2 font-extrabold text-3xl "
            
            style={{color : theme[0] == "light" && theme[1] % 2 ===0 ? "white" : theme == "light" && theme[1] % 2 ===0? 'red' : theme[1] % 2 !== 0 && 'red'   }}
          >
            {word}
          </motion.span>
        ))}
      </div>
      {button && (
        <motion.div
          initial={{ opacity: 0, y: "-10px" }} // شروع با opacity صفر و حرکت از بالا
          animate={{
            opacity: isInView ? 1 : 0, // اگر در نمایش باشد، نمایش داده شود
            y: isInView ? 0 : "-10px", // اگر در نمایش باشد، به موقعیت اصلی برسد
          }}
          transition={{
            delay: words.length * 0.3, // هر کلمه با تأخیر متفاوت وارد شود
            duration: 0.5,
          }}
        >
         <div
         className="w-1/2"
         style={{backgroundColor:ind%2 == 0 ? "white" : "rgb(185, 28, 28)" ,
          color:ind%2 != 0 ? "white" : "rgb(185, 28, 28)"
          }}>{textButton}</div>
        </motion.div>
      )}
    </div>
  );
};