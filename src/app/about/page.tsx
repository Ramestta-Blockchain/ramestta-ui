
"use client"


import dynamic from "next/dynamic";





const Aboutcmp = dynamic(
  () => import("@/ui/about/aboutcmp"),
  {
    ssr: false,
  }
)

const About = () => {

  return (
    <Aboutcmp />
  );
}
export default About;