
"use client"

import dynamic from "next/dynamic";





const Whitepapercmp = dynamic(
  () => import("@/ui/whitepaper/whitepapercmp"),
  {
    ssr: false,
  }
)

const Whitepaper = () => {

  return (
    <Whitepapercmp />
  );
}
export default Whitepaper;