
"use client"


import dynamic from "next/dynamic";





const Developersupportprogramcmp = dynamic(
  () => import("@/ui/developersupportprogram/developersupportprogramcmp"),
  {
    ssr: false,
  }
)

const Developersupportprogram = () => {

  return (
    <Developersupportprogramcmp />
  );
}
export default Developersupportprogram;