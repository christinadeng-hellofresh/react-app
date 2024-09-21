import { footer } from "./data";
import "./footer.css";

import { Footer } from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";

const FooterHome = () => {
  const footerData = footer;
  return (
    <Footer container>
      <div className="w-full">
        <div className="flex flex-wrap justify-between">
          <div className="flex flex-col">
            <div>
              <Footer.Brand src={footerData.icon} alt="Law Society" />
            </div>
            <div className="flex">
              <iframe src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=HSBC%20Tower,%20Liberty%20Square%203601%20Highway%207,%20Unit%20803%20Markham,%20ON%20L3R%200M3+(Raymond%20Luk%20Law)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
            </div>
          </div>
          <div className="flex sm:flex-col md:flex-row">
            <div>
              <Footer.Title title="Contact Us" />
              <Footer.LinkGroup col>
                {footerData.contacts.map((item) => (
                  <Footer.Link href="#">{item.title}</Footer.Link>
                ))}
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Areas of Practices" />
              <Footer.LinkGroup col>
                {footerData.services.map((item) => (
                  <Footer.Link href="#">{item.service}</Footer.Link>
                ))}
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <div className="w-full pb-8 sm:flex sm:items-center sm:justify-between">
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon href="#" icon={BsGithub} />
            <Footer.Icon href="#" icon={BsDribbble} />
          </div>
        </div>
        <div className="text-gray-600 pt-3">
          {footerData.corporation} <br /> {footerData.disclaimer}
        </div>
      </div>
    </Footer>
  );
};

export default FooterHome;
