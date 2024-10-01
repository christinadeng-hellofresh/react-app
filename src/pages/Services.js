import { useRef } from "react";
import Services from "../sections/home/Services";
import Intro from "../sections/services/Intro";

export default function ServicesPage() {
  const mainRef = useRef();

  return (
    <main ref={mainRef} style={{ overflow: "hidden" }}>
      <Intro />
      <Services />
    </main>
  );
}
