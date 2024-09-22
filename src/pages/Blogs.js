import { useRef } from "react";
import Blogs from "../sections/others/Blogs";

export default function BlogPage() {
  const mainRef = useRef();

  return (
    <main ref={mainRef}>
      <Blogs />
    </main>
  );
}
