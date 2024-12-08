
"use client"


import dynamic from "next/dynamic";





const Statscmp = dynamic(
  () => import("@/ui/stats/statscmp"),
  {
    ssr: false,
  }
)

const Stats = () => {

  return (
    <Statscmp />
  );
}
export default Stats;