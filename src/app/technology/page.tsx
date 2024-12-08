
"use client"


import dynamic from "next/dynamic";





const Technologycmp = dynamic(
  () => import("@/ui/technology/technologycmp"),
  {
    ssr: false,
  }
)

const Technology = () => {

  return (
    <Technologycmp />
  );
}
export default Technology;