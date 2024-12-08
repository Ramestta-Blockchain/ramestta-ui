
"use client"


import dynamic from "next/dynamic";





const Privacyandpolicycmp = dynamic(
  () => import("@/ui/privacyandpolicy/privacyandpolicycmp"),
  {
    ssr: false,
  }
)

const Privacyandpolicy = () => {

  return (
    <Privacyandpolicycmp />
  );
}
export default Privacyandpolicy;