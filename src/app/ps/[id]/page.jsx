"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const itemsIndex = [
  "item 1",
  "item 2",
  "item 3",
  "item 4",
  "item 5",
  "item 6",
  "item 7",
  "item 8",
  "item 9",
];

export default function Item({ params }) {
  const [item, setItem] = useState(null);
  const [isScrolled, setScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0); // ذخیره موقعیت اسکرول قبلی

  // استفاده از useEffect برای رصد تغییرات اسکرول
  useEffect(() => {
    const handleScroll = () => {

      if (window.scrollY < lastScrollY) {
        setScrolled(false);
      } else {
        setScrolled(true);
      }
      // به روز رسانی موقعیت اسکرول
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    // حذف event listener زمانی که کامپوننت از صفحه حذف می‌شود
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]); // وابستگی به تغییرات lastScrollY

  useEffect(() => {
    const fetchItem = async () => {
      const { id } = await params;
      const res = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`);
      const data = await res.json();
      setItem(data);
    };

    fetchItem();
  }, [params]);

  // تابع اسکرول نرم و قرار دادن المنت در وسط صفحه
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth", // اسکرول نرم
        block: "center",    // قرار دادن المنت در وسط صفحه
      });
    }
  };

  return (
    <div className="flex flex-col">
      {/* کانتینر برای ایجاد اسکرول افقی */}
      <div className="fixed overflow-x-auto w-full bg-black text-white z-10">
        <div className="flex flex-row min-w-max justify-around items-center px-4 h-10">
          {itemsIndex.map((val, ind) => (
            <div
              key={ind}
              className="cursor-pointer"
              onClick={() => scrollToSection(`section-${ind}`)} // اسکرول به سکشن خاص
            >
              {val}
            </div>
          ))}
        </div>
      </div>

      {/* سکشن‌ها */}
      {itemsIndex.map((val, ind) => (
        <div
          id={`section-${ind}`} // شناسه هر سکشن
          key={ind}
          className="flex flex-col mt-12 cursor-pointer h-60 bg-gray-400 m-4 items-center justify-center"
        >
          {val}
        </div>
      ))}

      {item ? (
        <div className="flex flex-col mt-16">
          <h1>{item.id}</h1>
          <p>{item.title}</p>
          <Image
            loading="lazy"
            src={item.thumbnailUrl}
            alt={item.url}
            width={150}
            height={150}
            className="object-cover rounded-md"
          />
        </div>
      ) : (
        <p>Loading...</p>
      )}

      {/* نمایش وضعیت اسکرول */}
      <div>isScrolled : {isScrolled ? "True" : "False"}</div>

      {/* فوتر در صورت اسکرول به سمت بالا */}
      {isScrolled && (
        <div className="fixed bottom-0 left-0 w-full h-6 bg-fuchsia-900 flex">
          <div className="w-1/2 bg-red-400 text-center flex items-center justify-center">
            a
          </div>
          <div className="w-1/2 bg-purple-100 text-center flex items-center justify-center">
            a
          </div>
        </div>
      )}
    </div>
  );
}
