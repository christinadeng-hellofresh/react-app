import AboutImage from "../../assets/about.jpg";
import data from "./data";
import Card from "../../components/Card";
import "./about.css";

const About = () => {
  return (
    <div
      className="about__container p-20 w-full h-screen"
      style={{
        background: "var(--color-light)",
      }}
    >
      <div className="about__left">
        <div className="about__portrait">
          <img src={AboutImage} alt="About Image" />
        </div>
      </div>
      <div className="about__right">
        <h2>About Raymond Luk Law Professional Corporation</h2>
        <div className="about__cards">
          {data.map((item) => (
            <Card key={item.id} className="about__card">
              <span className="about__card-icon">{item.icon}</span>
              <h5>{item.title}</h5>
              <small>{item.desc}</small>
            </Card>
          ))}
        </div>
        <p>
          Welcome to Raymond Luk Law, a multi-disciplinary law firm dedicated to
          providing clients with comprehensive legal solutions. Our team of
          legal professionals offers a wide range of legal services, including
          family law, real estate law, personal injury, wills and estates law,
          corporate law, notary services and more.
        </p>
        <p>
          At Luk Law, we believe in providing our clients with a personalized
          experience. We take the time to understand our clients' unique needs
          and develop unique solutions that meet their specific goals. Our team
          is committed to building lasting relationships with our clients, and
          we work hard to provide transparent communication and regular updates
          throughout each case.
        </p>
        <p>
          Our firm is also committed to providing our clients with flexibility
          and convenience. We offer a variety of billing options, including
          hourly rates, flat fees, and contingency fees, depending on the nature
          of the case. We also offer flexible scheduling options and can
          accommodate after-hours and weekend appointments upon request.
        </p>
        <p>
          We are dedicated to provide our clients with the legal guidance and
          support they need to achieve their goals. Contact us today to schedule
          a consultation and learn more about how we can assist you with your
          legal needs.
        </p>
        <a className="btn primary">Get in touch today</a>
      </div>
    </div>
  );
};

export default About;
