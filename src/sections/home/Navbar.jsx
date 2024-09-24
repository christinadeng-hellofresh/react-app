import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Dropdown, Navbar } from "flowbite-react";
import {
  AiOutlineClose,
  AiOutlineHome,
  AiOutlineTool,
  AiOutlineRead,
  AiOutlineComment,
  AiOutlineAudit,
  AiOutlineTranslation,
  AiOutlineTeam,
} from "react-icons/ai";

const iconMap = {
  AiOutlineClose: <AiOutlineClose size={24} />,
  AiOutlineHome: <AiOutlineHome size={24} />,
  AiOutlineTeam: <AiOutlineTeam size={24} />,
  AiOutlineTool: <AiOutlineTool size={24} />,
  AiOutlineComment: <AiOutlineComment size={24} />,
  AiOutlineTranslation: <AiOutlineTranslation size={24} />,
  AiOutlineRead: <AiOutlineRead size={24} />,
  AiOutlineAudit: <AiOutlineAudit size={24} />,
};

const Nav = () => {
  const { t, i18n } = useTranslation("navbar");
  const navbar = t("navbar", { returnObjects: true });
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  const closeNavbar = () => {
    setIsOpen(false);
  };

  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isMobile = window.innerWidth < 768;

      if (!isMobile) {
        setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
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
      className={`fixed content-center w-full h-24 top-0 z-50 transition-all duration-700 ${
        visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      } bg-white shadow-2xl`}
    >
      <Navbar.Brand href="/">
        <span className="text-xl font-semibold px-4 md:px-2 lg:px-8">
          {navbar.title}
        </span>
      </Navbar.Brand>
      <div className="flex items-center gap-4 px-4 sm:px-8 md:px-0 lg:px-8">
        {/* Ensure toggle is visible on all sizes */}
        <Navbar.Toggle aria-label="Toggle navigation" onClick={toggleNavbar} />
      </div>

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

        {navbar.links.map((item) => (
          <Navbar.Link
            href={item.url}
            key={item.key}
            className="text-base sm:text-xl md:text-sm tracking-tighter antialiased cursor-pointer"
          >
            {item.dropdown ? (
              <Dropdown
                inline
                label={
                  <div className="flex items-center">
                    {iconMap[item.icon]}
                    <span className="ml-2">{item.label}</span>{" "}
                    {/* Adjusted margin for padding */}
                  </div>
                }
                dismissOnClick={true}
                className="w-2/3 md:w-1/3"
              >
                {item.dropdown.map((subItem) => (
                  <Dropdown.Item
                    href={subItem.url}
                    key={subItem.key}
                    className="text-lg tracking-tighter font-medium"
                    onClick={() => {
                      if (subItem.key === "en" || subItem.key === "zh") {
                        changeLanguage(subItem.key);
                      }
                    }}
                  >
                    <span className="ml-2">{subItem.label}</span>{" "}
                    {/* Adjusted margin for padding */}
                  </Dropdown.Item>
                ))}
              </Dropdown>
            ) : (
              <div className="flex items-center">
                {iconMap[item.icon]}
                <span className="ml-2">{item.label}</span>{" "}
              </div>
            )}
          </Navbar.Link>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Nav;
