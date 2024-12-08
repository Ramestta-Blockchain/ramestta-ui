
"use client"


import dynamic from "next/dynamic";





const Supportcmp = dynamic(
  () => import("@/ui/support/supportcmp"),
  {
    ssr: false,
  }
)

const Support = () => {

  return (
    <Supportcmp />
  );
}
export default Support;