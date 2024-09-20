import Navbar from "../sections/home/Navbar";
import About from "../sections/about/About";
import Testimonials from "../sections/testimonials/Testimonials";
import TeamAbout from "../sections/about/TeamAbout";
import Contact from "../sections/contact/Contact";
import Footer from "../sections/footer/Footer";
import FloatingNav from "../sections/floating-nav/FloatingNav";
import { useRef, useState, useEffect } from "react";

export default function AboutPage() {
  const mainRef = useRef();

  return (
    <main ref={mainRef}>
      <About />
      <TeamAbout />
      <Testimonials />
    </main>
  );
}
