
"use client"


import dynamic from "next/dynamic";





const Getstartedcmp = dynamic(
  () => import("@/ui/getstarted/getstartedcmp"),
  {
    ssr: false,
  }
)

const Getstarted = () => {

  return (
    <Getstartedcmp />
  );
}
export default Getstarted;