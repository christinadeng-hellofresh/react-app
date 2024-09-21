import "./contact.css";
import Form from "./Form";

const Contact = () => {
  return (
    <section id="contact" className="pt-8 flex flex-row">
      <div className="contact_section w-1/3 h-screen bg-blue-900 content-center">
        <h2 className="text-center">Get In Touch Today</h2>
        {/* <div className="container contact__image">
          <img src={Image} alt="process" />
        </div>
        <TimeTable className="container table__container" /> */}
      </div>
      <div className="contact_section w-2/3 h-screen content-center">
        <h3 className="text-center pb-4">Submit Your Inquiry Here</h3>
        <Form />
        {/* <div className="container contact__image">
          <img src={Image} alt="process" />
        </div>
        <TimeTable className="container table__container" /> */}
      </div>
    </section>
  );
};

export default Contact;
