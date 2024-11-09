// app/posts/page.js
"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";

export default function PostsPage() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPosts, setTotalPosts] = useState(0);
  const postsPerPage = 10;

  useEffect(() => {
    async function fetchPosts() {
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_limit=${postsPerPage}`);
      const data = await res.json();
      setPosts(data);
      const total = res.headers.get('x-total-count'); // دریافت تعداد کل پست‌ها از هدر
      setTotalPosts(total);
    }
    fetchPosts();
  }, [currentPage]);

  const totalPages = Math.ceil(totalPosts / postsPerPage);

  // پیمایش به صفحه بعد یا قبل
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <h1>پست‌ها</h1>
  
        {posts.map((post) => (
          <div 
          className="bg-gray-300 hover:bg-gray-200 cursor-pointer m-3 p-2 rounded-sm"
          key={post.id}>
          <Link href={`/products/${post.id}`}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </Link>
          </div>
        ))}


      {/* دکمه‌های پیمایش */}
      <button onClick={prevPage} disabled={currentPage === 1}>قبلی</button>
      <button onClick={nextPage} disabled={currentPage === totalPages}>بعدی</button>

      <p>
        صفحه {currentPage} از {totalPages}
      </p>
    </div>
  );
}
