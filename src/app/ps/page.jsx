"use client";

import { Pagination } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Products() {
  const [page, setPage] = useState(1); // Start page from 1
  const [data, setData] = useState(null);
  const perItemsInPage = 9;

  useEffect(() => {
    const fetching = async () => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=${perItemsInPage}`
      );
      const data = await res.json();
      setData(data);
    };

    fetching();
  }, [page]);

  return (
    <div className="flex flex-col bg-fuchsia-100">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-12">
        {data &&
          data.map((val) => (
            <Link key={val.id} href={`/ps/${val.id}`} >
            <div key={val.id} className="p-4 border rounded-lg shadow-sm bg-white hover:bg-gray-400 hover:opacity-85">
              <Image
                loading="lazy"
                src={val.thumbnailUrl}
                alt={val.title}
                width={150}
                height={150}
                className="object-cover rounded-md" // Ensures the image is well-cropped and consistent
                onError={(e) => (e.target.src = '/fallback-image.jpg')} // Fallback in case of broken image
              />
              <p className="mt-2 text-sm text-gray-700">{val.title}</p>
            
              
           
            </div>   </Link>
          ))}
      </div>

      {/* Pagination */}
      {/* <Pagination
  total={10}
  renderItem={({ value, isActive, onNext, onPrevious }) => (
    <button
      className={isActive ? "active" : ""}
      onClick={() => setPage(value)}
    >
      {value}
    </button>
  )}
/> */}
      <Pagination
  
      
      // showShadow loop color="danger" dotsJump={10} boundaries={10}
        aria-label="Pagination"
        total={Math.ceil(500 / perItemsInPage)}
        page={page}
        onChange={(newPage) => setPage(newPage)}
        className="mt-6"
      />
    </div>
  );
}
