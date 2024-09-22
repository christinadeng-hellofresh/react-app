import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Dropdown, Navbar } from "flowbite-react";
import {
  AiOutlineClose,
  AiOutlineHome,
  AiOutlineInfoCircle,
  AiOutlineTool,
  AiOutlineRead,
  AiOutlineComment,
  AiOutlineAudit,
  AiOutlineTranslation,
} from "react-icons/ai";

const iconMap = {
  AiOutlineClose: <AiOutlineClose size={16} />,
  AiOutlineHome: <AiOutlineHome size={16} />,
  AiOutlineInfoCircle: <AiOutlineInfoCircle size={16} />,
  AiOutlineTool: <AiOutlineTool size={16} />,
  AiOutlineComment: <AiOutlineComment size={16} />,
  AiOutlineTranslation: <AiOutlineTranslation size={16} />,
  AiOutlineRead: <AiOutlineRead size={16} />,
  AiOutlineAudit: <AiOutlineAudit size={16} />,
};

const Nav = () => {
  // Language
  const { t, i18n } = useTranslation("navbar");
  const navbar = t("navbar", { returnObjects: true });
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  // Mobile Toggle
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  const closeNavbar = () => {
    setIsOpen(false);
  };

  // Scrolling Effect
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (prevScrollPos > currentScrollPos) {
        setVisible(true);
      } else {
        setVisible(false);
      }
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <Navbar
      fluid
      rounded
      className={`overflow-x-visible fixed content-center w-full h-20 top-0 z-50 transition-all duration-700 ${
        visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      } bg-white shadow-2xl`}
    >
      <Navbar.Brand href="/">
        <span className="text-lg font-semibold px-4 md:px-2 lg:px-8">
          {navbar.title}
        </span>
      </Navbar.Brand>
      <div className="flex items-center gap-4 sm:px-8 md:px-0 lg:px-8">
        <Navbar.Toggle aria-label="Toggle navigation" onClick={toggleNavbar} />
      </div>

      {/* Collapse Menu */}
      <Navbar.Collapse
        className={`fixed top-0 left-0 w-full h-screen md:relative md:h-auto md:w-auto bg-white z-50 transition-transform duration-500 ease-in-out transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 flex flex-col justify-start p-6`}
      >
        <div
          className="absolute top-5 right-5 cursor-pointer md:hidden"
          onClick={closeNavbar}
        >
          <AiOutlineClose className="h-6 w-6 text-gray-800" />
        </div>

        {/* Navigation Links */}
        {navbar.links.map((item) => (
          <Navbar.Link
            href={item.url}
            key={item.key}
            className="text-lg sm:text-xl md:text-xs lg:text-md tracking-tighter font-medium cursor-pointer"
          >
            {item.dropdown ? (
              <Dropdown
                inline
                label={
                  <div className="flex items-center">
                    {iconMap[item.icon]}
                    <span className="ml-1">{item.label}</span>
                  </div>
                }
                dismissOnClick={true}
                className="w-2/3 md:w-1/3"
              >
                {item.dropdown.map((subItem) => (
                  <Dropdown.Item
                    href={subItem.url}
                    key={subItem.key}
                    className="text-sm tracking-tighter font-medium"
                    onClick={() => {
                      if (subItem.key === "en" || subItem.key === "zh") {
                        changeLanguage(subItem.key);
                      }
                    }}
                  >
                    {iconMap[subItem.icon]}
                    <span className="ml-1">{subItem.label}</span>
                  </Dropdown.Item>
                ))}
              </Dropdown>
            ) : (
              <div className="flex items-center">
                {iconMap[item.icon]}
                <span className="ml-1">{item.label}</span>
              </div>
            )}
          </Navbar.Link>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Nav;
