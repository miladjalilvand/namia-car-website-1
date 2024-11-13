"use client";

import { Pagination } from "@nextui-org/react";
import Image from "next/image";
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
    <div className="flex flex-col">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-12">
        {data &&
          data.map((val) => (
            <div key={val.id} className="p-4 border rounded-lg shadow-sm">
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
            </div>
          ))}
      </div>

      {/* Pagination */}
      
      <Pagination
      showControls showShadow loop color="danger"
        aria-label="Pagination"
        total={Math.ceil(500 / perItemsInPage)}
        page={page}
        onChange={(newPage) => setPage(newPage)}
        className="mt-6"
      />
    </div>
  );
}
