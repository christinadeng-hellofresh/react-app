import Nav from "../sections/home/Navbar";
import About from "../sections/about/About";
import Services from "../sections/home/Services";
import Testimonials from "../sections/testimonials/Testimonials";
import Contact from "../sections/contact/Contact";
import Footer from "../sections/footer/Footer";
import FloatingNav from "../sections/floating-nav/FloatingNav";
import { useRef, useState, useEffect } from "react";
import Intro from "../sections/Intro/Intro";

export default function ServicesPage() {
  return (
    <main className="pt-16">
      <Intro />
      <Services />
    </main>
  );
}
