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
    <Footer
      container
      className="pt-16 pb-8 bg-gray-100 text-gray-300"
      id="footer"
    >
      <div className="w-full">
        {/* Main Flex Container for Brand, Map, and Contact/Services */}
        <div className="flex flex-wrap md:flex-nowrap justify-between gap-8">
          {/* Brand and Map Section */}
          <div className="flex flex-col md:w-1/3 w-full space-y-6">
            {/* Brand Logo */}
            <div className="flex-shrink-0">
              <Footer.Brand
                src={footerData.icon}
                alt="Law Society"
                className="max-w-xs h-auto"
              />
            </div>
            {/* Map */}
            <div className="rounded-lg overflow-hidden shadow-lg">
              <iframe
                title="map"
                aria-label="Google Map showing the location of Raymond Luk Law Office"
                className="w-full h-64 md:h-48 border-0"
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=HSBC%20Tower,%20Liberty%20Square%203601%20Highway%207,%20Unit%20803%20Markham,%20ON%20L3R%200M3+(Raymond%20Luk%20Law)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                allowFullScreen=""
              ></iframe>
            </div>
          </div>

          {/* Contact and Services Section */}
          <div
            className="flex flex-col md:flex-row w-full md:w-2/5 space-y-6 md:space-y-0 md:space-x-12"
            style={{
              color: "#3C5B6F",
            }}
          >
            {/* Contact Us */}
            <div className="flex-grow sm:w-3/5">
              <Footer.Title title="Contact Us" className="underline" />
              <Footer.LinkGroup col>
                {footerData.contacts.map((item) => (
                  <Footer.Link href="#" key={item.title}>
                    {item.title}
                  </Footer.Link>
                ))}
              </Footer.LinkGroup>
            </div>
            {/* Areas of Practice */}
            <div className="flex-grow sm:w-2/5">
              <Footer.Title title="Areas of Practice" className="underline" />
              <Footer.LinkGroup col>
                {footerData.services.map((item) => (
                  <Footer.Link href="#" key={item.service}>
                    {item.service}
                  </Footer.Link>
                ))}
              </Footer.LinkGroup>
            </div>
          </div>
        </div>

        {/* Social Icons Section */}
        <div className="w-full pt-8 flex justify-start space-x-8">
          {[BsFacebook, BsInstagram, BsTwitter, BsGithub, BsDribbble].map(
            (Icon, index) => (
              <Footer.Icon
                href="#"
                icon={Icon}
                key={index}
                style={{
                  color: "#3C5B6F",
                }}
              />
            )
          )}
        </div>

        {/* Footer Text */}
        <div className="w-full text-gray-500 mt-4">
          <p>{footerData.corporation}</p>
          <p className="text-sm">{footerData.disclaimer}</p>
        </div>
      </div>
    </Footer>
  );
};

export default FooterHome;
