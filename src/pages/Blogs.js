import { useRef, useState, useEffect } from "react";
import Blogs from "../sections/blogs/Blogs";
import About from "../sections/about/About";
import Services from "../sections/home/Services";
import Testimonials from "../sections/testimonials/Testimonials";
import Contact from "../sections/contact/Contact";
import Footer from "../sections/footer/Footer";

export default function BlogPage() {
  const mainRef = useRef();

  return (
    <main ref={mainRef}>
      <Blogs />
    </main>
  );
}
