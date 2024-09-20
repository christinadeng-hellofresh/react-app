import Navbar from "./sections/home/Navbar";
import FooterHome from "./sections/footer/Footer";
// import FloatingNav from './sections/floating-nav/FloatingNav';
// import Theme from './theme/Theme';
// import { useThemeContext } from './context/theme-context';
// import {useRef, useState, useEffect} from 'react'
import Home from "./pages/Home";
import ServicesPage from "./pages/Services";
import BlogPage from "./pages/Blogs";
import ContactPage from "./pages/Contact";
import AboutPage from "./pages/About";
import LawPage from "./pages/Law";
import ToolsPage from "./pages/Tools";

const App = () => {
  // const mainRef = useRef();
  // const [showFloatingNav, setShowFloatingNav] = useState(true);
  // const [siteYPostion, setSiteYPosition] = useState(0)

  // const showFloatingNavHandler = () => {
  //   setShowFloatingNav(true);
  // }

  // const hideFloatingNavHandler = () => {
  //   setShowFloatingNav(false);
  // }

  // // check if floating nav should be shown or hidden
  // const floatingNavToggleHandler = () => {
  //   // check if we scrolled up or down at least 20px
  //   if(siteYPostion < (mainRef?.current?.getBoundingClientRect().y - 20) || siteYPostion > (mainRef?.current?.getBoundingClientRect().y + 20)) {
  //     showFloatingNavHandler();
  //   } else {
  //     hideFloatingNavHandler();
  //   }

  //   setSiteYPosition(mainRef?.current?.getBoundingClientRect().y);
  // }

  // useEffect(() => {
  //   const checkYPosition = setInterval(floatingNavToggleHandler, 2000);

  //   // cleanup function
  //   return () => clearInterval(checkYPosition);
  // }, [siteYPostion])

  let component;

  switch (window.location.pathname) {
    case "/":
      component = <Home />;
      break;
    case "/services":
      component = <ServicesPage />;
      break;
    case "/about":
      component = <AboutPage />;
      break;
    case "/blog":
      component = <BlogPage />;
      break;
    case "/contact":
      component = <ContactPage />;
      break;
    case "/tools":
      component = <ToolsPage />;
      break;
    case "/real-estate-law":
    case "/family-law":
    case "/personal-injury-law":
    case "/wills-and-estates":
    case "/corporate-law":
    case "/immigration-law":
    case "/other-services":
      component = <LawPage />;
  }

  return (
    <>
      <Navbar />
      {component}
      <FooterHome />
    </>
  );
};

export default App;
