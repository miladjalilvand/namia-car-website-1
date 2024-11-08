"use client";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react"; // وارد کردن useRef و useState

export default function MotD({ params }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null); // استفاده از useRef برای دسترسی به عنصر

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        // بررسی اینکه آیا عنصر در نمای کاربر است یا نه
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // برای بررسی وضعیت هنگام بارگذاری صفحه

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.div
      ref={ref} // اضافه کردن ref به div
      initial={{ opacity: 0, y: 100 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }} // انیمیشن بر اساس isVisible
      transition={{ duration: 0.5 }}
    >
      <div>
        <div className="text-3xl" >{params || 'error'}</div> {/* اگر params موجود بود، نمایش داده شود، در غیر این صورت 'error' نمایش می‌یابد */}
      </div>
    </motion.div>
  );
}
