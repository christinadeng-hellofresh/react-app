import AboutImage from "../../assets/about.jpg";
import data from "./data";
import Card from "../../components/Card";

const About = () => {
  return (
    <div
      className="about__container p-4 md:p-20 w-full min-h-screen"
      // style={{
      //   background: "linear-gradient(to top left, #3C5B6F, #A0C4D8)",
      // }}
    >
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="about__left w-full md:w-1/3 flex justify-center mb-8 md:mb-0">
          <div className="about__portrait w-full md:w-4/5">
            <img
              src={AboutImage}
              alt="Raymond Luk Law Office"
              className="w-full object-cover rounded-lg"
              loading="lazy"
            />
          </div>
        </div>

        {/* Right Section - Content */}
        <div className="about__right w-full md:w-2/3 p-4 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            About Raymond Luk Law Professional Corporation
          </h2>

          {/* Description Paragraphs */}
          <div className="text-sm md:text-base leading-relaxed mb-4">
            <p>
              Welcome to Raymond Luk Law, a multi-disciplinary law firm
              dedicated to providing clients with comprehensive legal solutions.
              Our team of legal professionals offers a wide range of legal
              services, including family law, real estate law, personal injury,
              wills and estates law, corporate law, notary services and more.
            </p>
            <p>
              At Luk Law, we believe in providing our clients with a
              personalized experience. We take the time to understand our
              clients' unique needs and develop unique solutions that meet their
              specific goals. Our team is committed to building lasting
              relationships with our clients, and we work hard to provide
              transparent communication and regular updates throughout each
              case.
            </p>
            <p>
              Our firm is also committed to providing our clients with
              flexibility and convenience. We offer a variety of billing
              options, including hourly rates, flat fees, and contingency fees,
              depending on the nature of the case. We also offer flexible
              scheduling options and can accommodate after-hours and weekend
              appointments upon request.
            </p>
            <p>
              We are dedicated to providing our clients with the legal guidance
              and support they need to achieve their goals. Contact us today to
              schedule a consultation and learn more about how we can assist you
              with your legal needs.
            </p>
          </div>

          {/* Button */}
          <button className="btn primary w-full md:w-auto">
            Get in touch today
          </button>
        </div>
      </div>

      <div className="about__cards flex flex-col md:flex-row w-full items-center justify-between mt-8">
        {data.map((item) => (
          <Card
            key={item.id}
            className="about__card w-full md:w-1/3 mb-4 md:mb-0 md:mr-4 last:mr-0"
          >
            <span className="about__card-icon text-3xl mb-2">{item.icon}</span>
            <h5 className="text-lg font-semibold">{item.title}</h5>
            <small className="text-sm">{item.desc}</small>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default About;
