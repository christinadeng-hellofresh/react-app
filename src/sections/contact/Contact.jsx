import { Timeline, Table } from "flowbite-react";
import officeHour from "../../assets/office-hour.jpg";
import {
  HiOutlineCalendar,
  HiOutlineLightBulb,
  HiOutlineClipboardList,
  HiOutlineCheckCircle,
} from "react-icons/hi";
import "./contact.css";
import Form from "./Form";

const Contact = () => {
  return (
    <div id="contact">
      <div className="flex flex-col md:flex-row shadow-lg relative z-20">
        <div className="contact_section w-full pt-48 pb-10 md:h-screen md:w-1/3 md:bg-[#3C5B6F] flex items-center justify-center">
          <h3 className="text-center text-gray-800 md:text-white text-2xl md:text-3xl font-semibold">
            Get In Touch Today
          </h3>
        </div>

        <div className="contact_section w-full md:w-2/3 h-auto flex items-center justify-center p-8 md:p-32">
          <div className="w-full max-w-md">
            <h3 className="text-center pb-4 text-lg md:text-xl hidden md:block">
              Submit Your Inquiry Here
            </h3>
            <Form />
          </div>
        </div>
      </div>

      <div className="w-full py-24 shadow-lg relative z-10 bg-gray-100">
        <h2 className="text-center text-2xl font-semibold mb-8 p-8">
          Office Hours
        </h2>
        <div className="flex justify-center">
          <div className="w-full max-w-6xl rounded-lg flex flex-col lg:flex-row">
            <div className="w-full lg:w-3/5 shadow-md">
              <Table className="text-center">
                <Table.Head>
                  <Table.HeadCell
                    className="text-white"
                    style={{ background: "#3C5B6F" }}
                  >
                    Day
                  </Table.HeadCell>
                  <Table.HeadCell
                    className="text-white"
                    style={{ background: "#3C5B6F" }}
                  >
                    Office Hours
                  </Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y text-sm tracking-widest font-semibold">
                  {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].map(
                    (day) => (
                      <Table.Row key={day}>
                        <Table.Cell>{day}</Table.Cell>
                        <Table.Cell>10:00 AM - 6:00 PM</Table.Cell>
                      </Table.Row>
                    )
                  )}
                  <Table.Row>
                    <Table.Cell>Saturday</Table.Cell>
                    <Table.Cell>By appointment only</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Sunday</Table.Cell>
                    <Table.Cell>By appointment only</Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </div>

            <div className="w-full lg:w-2/5 pl-10">
              <img
                src={officeHour}
                alt="A welcoming office space for consultations"
                className="w-full rounded-md mb-4 sm:pt-10 md:pt-0"
              />
              <p className="text-gray-600">
                If you would like to visit us in person for legal consultation,
                please call us to book an appointment.
              </p>
            </div>
          </div>
        </div>

        <p className="text-gray-600 text-center pt-10 italic">
          Holiday hours may vary. Closed Monday, October 14, 2024, for
          Thanksgiving Holiday.
        </p>
      </div>

      <div className="w-full py-40 shadow-lg relative z-10 overflow-x-scroll">
        <h2 className="text-center text-2xl font-semibold mb-8 p-8">
          Our Process
        </h2>
        <div className="flex justify-center">
          {/* Horizontal timeline on desktop, vertical on mobile */}
          <Timeline horizontal className="w-full md:w-10/12">
            {/* Step 1 */}
            <Timeline.Item
              className="mx-20 my-8 md:mx-8"
              style={{ flexBasis: "20%" }}
            >
              <Timeline.Point
                icon={() => (
                  <div
                    className="p-4 rounded-full"
                    style={{
                      background: "#3C5B6F",
                    }}
                  >
                    <HiOutlineCalendar className="text-white text-4xl" />
                  </div>
                )}
              />
              <Timeline.Content className="ml-12">
                <Timeline.Title>Free Initial Consultation</Timeline.Title>
                <Timeline.Time>Schedule a call with staffs</Timeline.Time>
              </Timeline.Content>
            </Timeline.Item>

            {/* Step 2 */}
            <Timeline.Item
              className="mx-20 my-8 md:mx-8"
              style={{ flexBasis: "20%" }}
            >
              <Timeline.Point
                icon={() => (
                  <div
                    className="p-4 rounded-full"
                    style={{
                      background: "#3C5B6F",
                    }}
                  >
                    <HiOutlineLightBulb className="text-white text-4xl" />
                  </div>
                )}
              />
              <Timeline.Content className="ml-12">
                <Timeline.Title>Appointments</Timeline.Title>
                <Timeline.Time>
                  In person or virtual appointment with lawyer * First 15 min
                  for free
                </Timeline.Time>
              </Timeline.Content>
            </Timeline.Item>

            {/* Step 3 */}
            <Timeline.Item
              className="mx-20 my-8 md:mx-8"
              style={{ flexBasis: "20%" }}
            >
              <Timeline.Point
                icon={() => (
                  <div
                    className="p-4 rounded-full"
                    style={{
                      background: "#3C5B6F",
                    }}
                  >
                    <HiOutlineClipboardList className="text-white text-4xl" />
                  </div>
                )}
              />
              <Timeline.Content className="ml-12">
                <Timeline.Title>Work & Communication</Timeline.Title>
                <Timeline.Time>
                  Start on the paper work and provide timeline
                </Timeline.Time>
              </Timeline.Content>
            </Timeline.Item>

            {/* Step 4 */}
            <Timeline.Item
              className="mx-20 my-8 md:mx-8"
              style={{ flexBasis: "20%" }}
            >
              <Timeline.Point
                icon={() => (
                  <div
                    className="p-4 rounded-full"
                    style={{
                      background: "#3C5B6F",
                    }}
                  >
                    <HiOutlineCheckCircle className="text-white text-4xl" />
                  </div>
                )}
              />
              <Timeline.Content className="ml-12">
                <Timeline.Title>Result</Timeline.Title>
                <Timeline.Time>
                  Delivery the best result for our customers
                </Timeline.Time>
              </Timeline.Content>
            </Timeline.Item>
          </Timeline>
        </div>
      </div>
    </div>
  );
};

export default Contact;
