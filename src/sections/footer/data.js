import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineDribbble } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import disclaimerLogo from "../../assets/disclaimer-logo.png";

export const links = [
  { id: 1, link: "#", title: "Home" },
  { id: 2, link: "#about", title: "About" },
  { id: 3, link: "#services", title: "Services" },
  { id: 4, link: "#portfolio", title: "Portfolio" },
  { id: 5, link: "#contact", title: "Contact" },
];

export const socials = [
  { id: 1, link: "https://instagram.com", icon: <AiOutlineInstagram /> },
  { id: 2, link: "https://twitter.com", icon: <AiOutlineTwitter /> },
  { id: 3, link: "https://dribbble.com", icon: <AiOutlineDribbble /> },
  { id: 4, link: "https://github.com", icon: <AiFillGithub /> },
];

export const footer = {
  icon: disclaimerLogo,
  corporation: "© 2024 by Raymond Luk Law Professional Corporation ",
  disclaimer:
    "DISCLAIMER: The information obtained on this site is not intended to be legal advice. Please consult a legal professional for advice regarding your individual situation. Please be advised that contacting the firm does not create a solicitor-client nor a legal relationship of any kind. Please do not send any confidential information until such relationship has been established and a retainer has been signed",
  services: [
    { service: "Real Estate Law", link: "" },
    { service: "Family Law", link: "" },
    { service: "Will & Estates", link: "" },
    { service: "Personal Injury Law", link: "" },
    { service: "Immigration Law", link: "" },
    { service: "Notary Services", link: "" },
  ],
  contacts: [
    { id: 1, link: "#", title: "English: 905-667-6496" },
    { id: 2, link: "#about", title: "中文: 905 -667-6499" },
    { id: 3, link: "#services", title: "Email: info@luklawpc.com" },
    { id: 4, link: "#portfolio", title: "Fax: 905-849-3583" },
    {
      id: 5,
      link: "#contact",
      title:
        "HSBC Tower, Liberty Square, 3601 Highway 7, Unit 803, Markham, ON, L3R 0M3",
    },
  ],
};
