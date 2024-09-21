import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./sections/home/Navbar";
import FooterHome from "./sections/footer/Footer";
import Home from "./pages/Home";
import ServicesPage from "./pages/Services";
import BlogPage from "./pages/Blogs";
import ContactPage from "./pages/Contact";
import AboutPage from "./pages/About";
import LawPage from "./pages/Law";
import ToolsPage from "./pages/Tools";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/tools" element={<ToolsPage />} />
        <Route path="/real-estate-law" element={<LawPage />} />
        <Route path="/family-law" element={<LawPage />} />
        <Route path="/personal-injury-law" element={<LawPage />} />
        <Route path="/wills-and-estates" element={<LawPage />} />
        <Route path="/corporate-law" element={<LawPage />} />
        <Route path="/immigration-law" element={<LawPage />} />
        <Route path="/other-services" element={<LawPage />} />
      </Routes>
      <FooterHome />
    </>
  );
};

export default App;
