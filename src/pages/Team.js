import Testimonials from "../sections/testimonials/Testimonials";
import TeamAbout from "../sections/about/TeamAbout";
import { useRef } from "react";

export default function TeamPage() {
  const mainRef = useRef();

  return (
    <main ref={mainRef}>
      <TeamAbout />
      <Testimonials />
    </main>
  );
}
