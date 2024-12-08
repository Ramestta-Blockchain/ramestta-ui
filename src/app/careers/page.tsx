
"use client"


import dynamic from "next/dynamic";





const Careercmp = dynamic(
  () => import("@/ui/career/careercmp"),
  {
    ssr: false,
  }
)

const Career = () => {

  return (
    <Careercmp />
  );
}
export default Career;