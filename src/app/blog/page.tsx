
"use client"


import dynamic from "next/dynamic";





const Blogcmp = dynamic(
  () => import("@/ui/blog/blogcmp"),
  {
    ssr: false,
  }
)

const Blog = () => {

  return (
    <Blogcmp />
  );
}
export default Blog;