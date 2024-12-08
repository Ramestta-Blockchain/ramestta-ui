
"use client"


import dynamic from "next/dynamic";





const Ramesttasdkcmp = dynamic(
  () => import("@/ui/ramesttasdk/ramesttasdkcmp"),
  {
    ssr: false,
  }
)

const Ramesttasdk = () => {

  return (
    <Ramesttasdkcmp />
  );
}
export default Ramesttasdk;