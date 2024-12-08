
"use client"


import dynamic from "next/dynamic";





const Brandresourcescmp = dynamic(
  () => import("@/ui/brandresources/brandresourcescmp"),
  {
    ssr: false,
  }
)

const Brandresources = () => {

  return (
    <Brandresourcescmp />
  );
}
export default Brandresources;