
"use client"


import dynamic from "next/dynamic";





const Tokencmp = dynamic(
  () => import("@/ui/token/tokencmp"),
  {
    ssr: false,
  }
)

const Token = () => {

  return (
    <Tokencmp />
  );
}
export default Token;