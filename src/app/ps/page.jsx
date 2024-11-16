"use client";

import { Pagination } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function Products() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [page, setPage] = useState(parseInt(searchParams.get('page') ?? '1', 10)); // Ensure page is an integer
  const [data, setData] = useState(null);
  const perItemsInPage = 9;

  // UseEffect to load data when the page number changes
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

  // Handle page change in pagination
  const handlePageChange = (newPage) => {
    setPage(newPage);
    router.push(`/ps?page=${newPage}`, undefined, { shallow: true });
  };

  return (
    <div className="flex flex-col bg-fuchsia-100">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-12">
        {data &&
          data.map((val) => (
            <Link key={val.id} href={`/ps/${val.id}`}>
              <div
                className="p-4 border rounded-lg shadow-sm bg-white hover:bg-gray-400 hover:opacity-85"
              >
                <Image
                  loading="lazy"
                  src={val.thumbnailUrl}
                  alt={val.title}
                  width={150}
                  height={150}
                  className="object-cover rounded-md"
                  onError={(e) => (e.target.src = "/fallback-image.jpg")}
                />
                <p className="mt-2 text-sm text-gray-700">{val.title}</p>
              </div>
            </Link>
          ))}
      </div>

      {/* Pagination */}
      <Pagination
        initialPage={page}  // Use page as the initialPage
        aria-label="Pagination"
        total={Math.ceil(500 / perItemsInPage)}
        page={page}
        onChange={handlePageChange} // Handle page change
        className="mt-6"
      />
    </div>
  );
}
