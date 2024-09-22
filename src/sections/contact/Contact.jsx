import { Timeline } from "flowbite-react";
import {
  HiOutlineCalendar,
  HiOutlineLightBulb,
  HiOutlineClipboardList,
  HiOutlineCheckCircle,
} from "react-icons/hi"; // Icons from HeroIcons
import "./contact.css";
import Form from "./Form";

const Contact = () => {
  return (
    <section id="contact">
      <div className="flex flex-col md:flex-row shadow-lg">
        <div
          className="contact_section w-full h-screen md:w-1/3 bg-blue-900 flex items-center justify-center"
          style={{
            background: "linear-gradient(to top left, #3C5B6F, #A0C4D8)",
          }}
        >
          <h2 className="text-center text-white text-3xl">
            Get In Touch Today
          </h2>
        </div>
        <div className="contact_section w-full md:w-2/3 h-screen flex items-center justify-center">
          <div className="w-full max-w-md">
            <h3 className="text-center pb-4 text-xl">
              Submit Your Inquiry Here
            </h3>
            <Form />
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="w-full py-24 shadow-lg relative z-10">
        <h2 className="text-center text-2xl font-bold mb-8 p-8">Our Process</h2>
        <div className="flex justify-center">
          {/* Horizontal timeline on desktop, vertical on mobile */}
          <Timeline horizontal className="w-full md:w-10/12">
            {/* Step 1 */}
            <Timeline.Item className="mx-8" style={{ flexBasis: "20%" }}>
              <Timeline.Point
                icon={() => (
                  <div
                    className="p-4 rounded-full"
                    style={{
                      background:
                        "linear-gradient(to top left, #3C5B6F, #A0C4D8)",
                    }}
                  >
                    <HiOutlineCalendar className="text-white text-4xl" />
                  </div>
                )}
              />
              <Timeline.Content className="ml-8">
                <Timeline.Title>Free Initial Consultation</Timeline.Title>
                <Timeline.Time>Schedule a call with staffs</Timeline.Time>
              </Timeline.Content>
            </Timeline.Item>

            {/* Step 2 */}
            <Timeline.Item className="mx-8" style={{ flexBasis: "20%" }}>
              <Timeline.Point
                icon={() => (
                  <div
                    className="p-4 rounded-full"
                    style={{
                      background:
                        "linear-gradient(to top left, #3C5B6F, #A0C4D8)",
                    }}
                  >
                    <HiOutlineLightBulb className="text-white text-4xl" />
                  </div>
                )}
              />
              <Timeline.Content className="ml-8">
                <Timeline.Title>Appointments</Timeline.Title>
                <Timeline.Time>
                  In person or virtual appointment with lawyer * First 15 min
                  for free
                </Timeline.Time>
              </Timeline.Content>
            </Timeline.Item>

            {/* Step 3 */}
            <Timeline.Item className="mx-8" style={{ flexBasis: "20%" }}>
              <Timeline.Point
                icon={() => (
                  <div
                    className="p-4 rounded-full"
                    style={{
                      background:
                        "linear-gradient(to top left, #3C5B6F, #A0C4D8)",
                    }}
                  >
                    <HiOutlineClipboardList className="text-white text-4xl" />
                  </div>
                )}
              />
              <Timeline.Content className="ml-8">
                <Timeline.Title>Work & Ongoing Communication</Timeline.Title>
                <Timeline.Time>
                  Start on the paper work and provide timeline
                </Timeline.Time>
              </Timeline.Content>
            </Timeline.Item>

            {/* Step 4 */}
            <Timeline.Item className="mx-8" style={{ flexBasis: "20%" }}>
              <Timeline.Point
                icon={() => (
                  <div
                    className="p-4 rounded-full"
                    style={{
                      background:
                        "linear-gradient(to top left, #3C5B6F, #A0C4D8)",
                    }}
                  >
                    <HiOutlineCheckCircle className="text-white text-4xl" />
                  </div>
                )}
              />
              <Timeline.Content className="ml-8">
                <Timeline.Title>Result</Timeline.Title>
                <Timeline.Time>
                  Delivery the best result for our customers
                </Timeline.Time>
              </Timeline.Content>
            </Timeline.Item>
          </Timeline>
        </div>
      </div>
    </section>
  );
};

export default Contact;
