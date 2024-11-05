"use client";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const ExampleComponent = () => {

  useEffect(()=>{},[]);
  console.log("TEST . . .");
  const router = usePathname();
  const [currentPath, setCurrentPath] = useState('');

  useEffect(() => {
    // بررسی وجود router.pathname
    if (router.pathname) {
      setCurrentPath(router.pathname); // نتیجه: "/about"
      console.log(router.pathname); // چاپ کردن مسیر در کنسول
    }
  }, [router.pathname]);

  return (
    <div>
      <h1 className="pt-64">Welcome to {currentPath || "Home"}</h1> {/* نمایش مسیر فعلی */}
    </div>
  );
};

export default ExampleComponent;
