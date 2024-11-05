"use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const items = [
  { image: '/assets/1.jpg', title: 'Item 1', subtitle: 'This is the first item' },
  { image: '/assets/2.jpg', title: 'Item 2', subtitle: 'This is the second item' },
  { image: '/assets/3.jpg', title: 'Item 3', subtitle: 'This is the third item' },
  { image: '/assets/4.jpg', title: 'Item 4', subtitle: 'This is the fourth item' },
];

const ItemSlidesImage = ({theme}) => {
  // ایجاد آرایه‌ای از refها برای هر آیتم
  const itemRefs = useRef(items.map(() => React.createRef()));

  return (
    <div>
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
          <motion.div
            key={key}
            ref={itemRefs.current[key]} // استفاده از ref مخصوص هر آیتم
            initial={{ x: "100%" }} // موقعیت شروع (خارج از صفحه)
            animate={{ x: isInView ? "0%" : "100%" }} // حرکت به مرکز
            transition={{ duration: 1, type: "spring" }}
            className={`flex flex-col justify-center items-center h-96 p-4 ${
              key % 2 === 0 ? "bg-red-700 text-white" : `bg-${theme.background} text-${theme.color}`
            }`}
          >
            <PicCon src={val.image} />
            <ContentImage title={val.title} subtitle={val.subtitle} />
          </motion.div>
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
    <Image src={src} alt="Item Image" width={200} height={200} className="rounded-lg" />
  );
}
