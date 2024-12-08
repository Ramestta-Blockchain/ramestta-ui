
"use client"


import dynamic from "next/dynamic";





const Contactcmp = dynamic(
  () => import("@/ui/contact/contactcmp"),
  {
    ssr: false,
  }
)

const Contact = () => {

  return (
    <Contactcmp />
  );
}
export default Contact;