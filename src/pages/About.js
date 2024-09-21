import About from "../sections/about/About";
import Testimonials from "../sections/testimonials/Testimonials";
import TeamAbout from "../sections/about/TeamAbout";
import { useRef } from "react";

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
