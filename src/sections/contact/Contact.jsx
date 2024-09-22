import { Timeline, Table } from "flowbite-react";
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
      <div className="w-full py-48 shadow-lg relative z-10 bg-gray-100">
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

      <div className="w-full py-24 shadow-lg">
        <h2 className="text-center text-2xl font-bold mb-8 p-8">
          Office Hours
        </h2>
        <div className="flex justify-center">
          <div className="w-full max-w-6xl bg-white rounded-lg p-8 flex">
            {/* Office Hours Table Column */}
            <div className="w-2/3 pr-4 ">
              <Table>
                <Table.Head>
                  <Table.HeadCell
                    className="text-white"
                    style={{
                      background: "#3C5B6F",
                    }}
                  >
                    Day
                  </Table.HeadCell>
                  <Table.HeadCell
                    className="text-white"
                    style={{
                      background: "#3C5B6F",
                    }}
                  >
                    Office Hours
                  </Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                  <Table.Row>
                    <Table.Cell>Monday</Table.Cell>
                    <Table.Cell>9:00 AM - 5:00 PM</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Tuesday</Table.Cell>
                    <Table.Cell>9:00 AM - 5:00 PM</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Wednesday</Table.Cell>
                    <Table.Cell>9:00 AM - 5:00 PM</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Thursday</Table.Cell>
                    <Table.Cell>9:00 AM - 5:00 PM</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Friday</Table.Cell>
                    <Table.Cell>9:00 AM - 5:00 PM</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Saturday</Table.Cell>
                    <Table.Cell>Closed</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Sunday</Table.Cell>
                    <Table.Cell>Closed</Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </div>

            {/* Additional Information Column */}
            <div className="w-1/3 pl-4">
              <h3 className="text-xl font-bold mb-4">Additional Information</h3>
              <p className="text-gray-600">
                Please note that appointments are available both in-person and
                virtually. You can schedule your consultation via our contact
                form or call us directly during office hours.
              </p>
              <p className="mt-4 text-gray-600">
                For urgent matters, please reach out via email, and we will
                respond as soon as possible. Weekend appointments may be
                available upon request.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
