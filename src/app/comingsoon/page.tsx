
"use client"


import dynamic from "next/dynamic";





const Comingsooncmp = dynamic(
  () => import("@/ui/comingsoon/comingsooncmp"),
  {
    ssr: false,
  }
)

const Comingsoon = () => {

  return (
    <Comingsooncmp />
  );
}
export default Comingsoon;