import { useState } from "react";
import { Tabs } from "flowbite-react";
import { CiBookmarkCheck } from "react-icons/ci";
import { Accordion } from "flowbite-react";
import residentialRealEstate from "../../assets/service/real-estate/residential-real-estate.jpg";
import commercialRealEstate from "../../assets/service/real-estate/commercial-real-estate.jpg";
import assignment from "../../assets/service/real-estate/assignment.jpeg";
import preCon from "../../assets/service/real-estate/pre-con.jpg";
import commercialLease from "../../assets/service/real-estate/commercial-leasing.jpg";
import faq from "../../assets/service/real-estate/faq.jpg";
import mortgageRefinance from "../../assets/service/real-estate/mortgage-refinance.jpg";
import privateLending from "../../assets/service/real-estate/private-lending.jpg";
import titleTransfer from "../../assets/service/real-estate/title-transfer.jpg";

const images = {
  "residential-real-estate.jpg": residentialRealEstate,
  "commercial-real-estate.jpg": commercialRealEstate,
  "assignment.jpeg": assignment,
  "pre-con.jpg": preCon,
  "commercial-leasing.jpg": commercialLease,
  "faq.jpg": faq,
  "mortgage-refinance.jpg": mortgageRefinance,
  "private-lending.jpg": privateLending,
  "title-transfer.jpg": titleTransfer,
};

export function ServicesTabs({ tabs }) {
  const [openAccordions, setOpenAccordions] = useState([0, 1]);

  const toggleAccordion = (index) => {
    if (openAccordions.includes(index)) {
      setOpenAccordions(openAccordions.filter((i) => i !== index));
    } else {
      setOpenAccordions([...openAccordions, index]);
    }
  };

  return (
    <div className="bg-gray-50 py-12 px-4 lg:px-20 rounded-lg shadow-lg">
      <Tabs aria-label="Tabs with icons" variant="underline">
        {tabs.map((item) => (
          <Tabs.Item
            active
            title={item.label}
            icon={CiBookmarkCheck}
            key={item.key}
            className="py-4"
          >
            <div className="p-6 md:p-10 bg-white shadow-lg rounded-lg">
              <h3 className="font-semibold text-2xl md:text-3xl text-gray-900 dark:text-white pb-8">
                {item.label}
              </h3>
              <div className="flex flex-col md:flex-row gap-8">
                {images[item.imageSrc] && (
                  <div className="flex-shrink-0">
                    <img
                      src={images[item.imageSrc]}
                      alt={item.title}
                      className="rounded-lg w-full md:w-48 object-cover"
                    />
                  </div>
                )}
                <div>
                  {item.desc && (
                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                      {item.desc}
                    </p>
                  )}
                </div>
              </div>
              {item.details && (
                <div
                  className="service__details text-lg md:text-xl text-gray-700 dark:text-gray-400 mb-8 leading-relaxed text-white bg-[#3C5B6F] bg-opacity-70 shadow-xl p-6 mt-6 rounded-lg"
                  dangerouslySetInnerHTML={{
                    __html: item.details,
                  }}
                />
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {item.content?.map((content, index) => (
                  <Accordion key={index} className="mb-8">
                    <Accordion.Panel>
                      <Accordion.Title onClick={() => toggleAccordion(index)}>
                        <h5 className="font-semibold text-xl md:text-2xl text-gray-800 dark:text-white">
                          {content.title}
                        </h5>
                      </Accordion.Title>
                      {openAccordions.includes(index) && (
                        <Accordion.Content>
                          <div className="flex flex-col md:flex-row gap-8">
                            {images[content.imageSrc] && (
                              <div className="flex-shrink-0">
                                <img
                                  src={images[content.imageSrc]}
                                  alt={content.title}
                                  className="rounded-lg w-full md:w-48 object-cover"
                                />
                              </div>
                            )}
                            <div>
                              <div
                                className="service__content text-lg md:text-xl text-gray-700 dark:text-gray-400 mb-8 leading-relaxed"
                                dangerouslySetInnerHTML={{
                                  __html: content.desc,
                                }}
                              />
                            </div>
                          </div>
                          <div className="mt-8">
                            <div
                              className={`grid gap-6 ${
                                content.subtitle?.length > 1
                                  ? "grid-cols-1 md:grid-cols-2"
                                  : "grid-cols-1"
                              }`}
                            >
                              {content.subtitle?.map(
                                (subtitle, subtitleIndex) => (
                                  <div
                                    key={subtitleIndex}
                                    className="w-full mt-6"
                                  >
                                    <h6 className="border-b-2 border-gray-800 dark:border-gray-500 py-4 text-lg font-semibold uppercase text-gray-800 dark:text-white text-center">
                                      {subtitle.title}
                                    </h6>
                                    <div
                                      className="service__subtitle text-white bg-[#3C5B6F] bg-opacity-70 shadow-xl p-6 mt-6 rounded-lg"
                                      dangerouslySetInnerHTML={{
                                        __html: subtitle.desc,
                                      }}
                                    />
                                  </div>
                                )
                              )}
                            </div>
                          </div>
                        </Accordion.Content>
                      )}
                    </Accordion.Panel>
                  </Accordion>
                ))}
              </div>
            </div>
          </Tabs.Item>
        ))}
      </Tabs>
    </div>
  );
}

export default ServicesTabs;
