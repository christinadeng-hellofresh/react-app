import { Tabs } from "flowbite-react";
import { CiBookmarkCheck } from "react-icons/ci";
import "./tabs.css";
import { Accordion } from "flowbite-react";

export function ServicesTabs({ tabs }) {
  return (
    <Tabs aria-label="Tabs with icons" className="pt-6">
      {tabs.map((item) => (
        <Tabs.Item
          active
          title={item.label}
          icon={CiBookmarkCheck}
          key={item.key}
        >
          <div className="p-8">
            <h2 className="font-medium text-gray-800 dark:text-white pb-8">
              {item.label}
            </h2>
            {item.desc && <p>{item.desc}</p>}
            {item.details && (
              <div
                className="service__details"
                dangerouslySetInnerHTML={{
                  __html: item.details,
                }}
              />
            )}
            {item.content?.map((content) => (
              <Accordion>
                <Accordion.Panel>
                  <Accordion.Title>
                    <h5>{content.title}</h5>
                  </Accordion.Title>
                  <Accordion.Content>
                    <div
                      className="service__content text-gray-700 dark:text-gray-800"
                      dangerouslySetInnerHTML={{
                        __html: content.desc,
                      }}
                    />
                    <div className="flex flex-row justify-between">
                      {content.subtitle?.map((subtitle) => (
                        <div className="flex-col">
                          {subtitle.title && (
                            <h6 className="border-gray-800 border-b-2 border-solid py-5 px-10 rounded-sm text-gray-800 uppercase">
                              {subtitle.title}
                            </h6>
                          )}
                          <div
                            className="service__subtitle"
                            dangerouslySetInnerHTML={{
                              __html: subtitle.desc,
                            }}
                          />
                        </div>
                      ))}
                    </div>
                  </Accordion.Content>
                </Accordion.Panel>
              </Accordion>
            ))}
          </div>
          {/* <div className="flex flex-col lg:flex-row">
              <p>{item.desc}</p>
              <img
                className="tabs_image pt-8 lg:pl-12"
                src={image}
                width="unset"
              />
            </div> */}
        </Tabs.Item>
      ))}
    </Tabs>
  );
}
export default ServicesTabs;
