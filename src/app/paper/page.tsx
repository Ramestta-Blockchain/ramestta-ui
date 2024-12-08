
"use client"


import dynamic from "next/dynamic";





const Papercmp = dynamic(
  () => import("@/ui/paper/papercmp"),
  {
    ssr: false,
  }
)

const Paper = () => {

  return (
    <Papercmp />
  );
}
export default Paper;