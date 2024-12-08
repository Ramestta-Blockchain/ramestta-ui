
"use client"


import dynamic from "next/dynamic";





const Transparencysheetcmp = dynamic(
  () => import("@/ui/transparencysheet/transparencysheetcmp"),
  {
    ssr: false,
  }
)

const Transparencysheet = () => {

  return (
    <Transparencysheetcmp />
  );
}
export default Transparencysheet;