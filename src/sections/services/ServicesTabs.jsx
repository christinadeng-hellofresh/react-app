import { Tabs } from "flowbite-react";
import { CiBookmarkCheck } from "react-icons/ci";
import residentialRealEstate from "../../assets/service/real-estate/residential-real-estate.jpg";
import commercialRealEstate from "../../assets/service/real-estate/commercial-real-estate.jpg";
import assignment from "../../assets/service/real-estate/assignment.jpeg";
import preCon from "../../assets/service/real-estate/pre-con.jpg";
import commercialLease from "../../assets/service/real-estate/commercial-leasing.jpg";
import faq from "../../assets/service/real-estate/faq.jpg";
import mortgageRefinance from "../../assets/service/real-estate/mortgage-refinance.jpg";
import privateLending from "../../assets/service/real-estate/private-lending.jpg";
import titleTransfer from "../../assets/service/real-estate/title-transfer.jpg";
import divorce from "../../assets/service/family-law/divorce.jpg";
import childSupport from "../../assets/service/family-law/child-support.jpg";
import coHabitation from "../../assets/service/family-law/co-habitation-agreements.jpg";
import marriageContract from "../../assets/service/family-law/marriage-contracts.jpg";
import parentingTime from "../../assets/service/family-law/parenting-time.jpg";
import separationAgreement from "../../assets/service/family-law/separation-agreements.jpg";
import spousalSupport from "../../assets/service/family-law/spousal-support.jpg";
import wills from "../../assets/service/wills/wills.jpg";
import powerOfAttorney from "../../assets/service/wills/power-of-attorney.jpg";
import powerOfAttorneyForPersonalCare from "../../assets/service/wills/power-of-attorney-personal-care.jpg";
import probateEstateAdministration from "../../assets/service/wills/probate-and-estate-administration.jpg";
import slip from "../../assets/service/personal-injury/slip.jpg";
import motorVehicle from "../../assets/service/personal-injury/motor-vehicle.jpeg";

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
  "divorce.jpg": divorce,
  "child-support.jpg": childSupport,
  "co-habitation-agreements.jpg": coHabitation,
  "marriage-contracts.jpg": marriageContract,
  "parenting-time.jpg": parentingTime,
  "separation-agreements.jpg": separationAgreement,
  "spousal-support.jpg": spousalSupport,
  "wills.jpg": wills,
  "power-of-attorney.jpg": powerOfAttorney,
  "power-of-attorney-personal-care.jpg": powerOfAttorneyForPersonalCare,
  "probate-and-estate-administration.jpg": probateEstateAdministration,
  "slip.jpg": slip,
  "motor-vehicle.jpeg": motorVehicle,
};

export function ServicesTabs({ tabs }) {
  return (
    <div className="p-8 max-w-screen-2xl mx-auto">
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
              <h2 className="font-semibold text-gray-900 pb-8">{item.label}</h2>
              <div className="flex flex-col md:flex-row gap-8">
                {images[item.imageSrc] && (
                  <div className="flex-shrink-0 w-full md:w-1/3 mx-auto pb-8">
                    <img
                      src={images[item.imageSrc]}
                      alt={item.title}
                      className="rounded-lg w-full h-auto object-cover mx-auto"
                    />
                  </div>
                )}
                <div className="w-full">
                  {item.desc && (
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                      {item.desc}
                    </p>
                  )}
                  {item.details && (
                    <div>
                      <h4 className="border-b-2 border-gray-800 py-4 uppercase text-gray-800">
                        {item.detailsTitle}
                      </h4>
                      <div
                        className="service__details text-white text-base tracking-wide font-light bg-[#3C5B6F] bg-opacity-70 shadow-2xl px-8 py-10 rounded-xl h-auto"
                        dangerouslySetInnerHTML={{
                          __html: item.details,
                        }}
                      />
                    </div>
                  )}
                </div>
              </div>
              <div className="grid grid-cols-1 gap-8">
                {item.content?.map((content, index) => (
                  <div key={index} className="mb-6">
                    <h3 className="font-semibold text-gray-800 italic pb-4">
                      {content.title}
                    </h3>
                    <div
                      className={`flex flex-col md:flex-row gap-8 ${
                        index % 2 === 1 && images[content.imageSrc]
                          ? "md:flex-row-reverse"
                          : ""
                      }`}
                    >
                      {images[content.imageSrc] && (
                        <div className="flex-shrink-0 w-full md:w-1/3 mx-auto">
                          <img
                            src={images[content.imageSrc]}
                            alt={content.title}
                            className="rounded-lg h-auto object-cover mx-auto"
                          />
                        </div>
                      )}
                      <div className="flex flex-col w-full">
                        {content.desc && (
                          <div
                            className="service__content text-base text-gray-700 pt-4"
                            dangerouslySetInnerHTML={{
                              __html: content.desc,
                            }}
                          />
                        )}
                        {content.subtitle?.length > 0 && (
                          <div
                            className={`grid grid-cols-1 ${
                              content.subtitle?.length > 1
                                ? "lg:grid-cols-2"
                                : ""
                            } gap-6`}
                          >
                            {content.subtitle?.map(
                              (subtitle, subtitleIndex) => (
                                <div
                                  key={subtitleIndex}
                                  className="flex flex-col h-full"
                                >
                                  <h4 className="border-b-2 border-gray-800 py-4 uppercase text-gray-800">
                                    {subtitle.title}
                                  </h4>
                                  <div
                                    className="service__subtitle text-white text-base tracking-wide font-light bg-[#3C5B6F] bg-opacity-70 shadow-2xl px-8 py-10 rounded-xl h-full"
                                    dangerouslySetInnerHTML={{
                                      __html: subtitle.desc,
                                    }}
                                  />
                                </div>
                              )
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                    <hr className="h-px mt-8 bg-gray-300 border-0" />
                  </div>
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
