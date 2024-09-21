import { useRef } from "react";
import Blogs from "../sections/blogs/Blogs";

export default function BlogPage() {
  const mainRef = useRef();

  return (
    <main ref={mainRef}>
      <Blogs />
    </main>
  );
}
