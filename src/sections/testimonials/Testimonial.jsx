import Card from "../../components/Card";
import { FaRegFaceLaugh } from "react-icons/fa6";

const Testimonial = ({ testimonial }) => {
  return (
    <Card className="light">
      <p className="testimonial_quote">{testimonial.quote}</p>
      <div className="testimonial__client">
        <div className="testimonial__client-avatar">
          <FaRegFaceLaugh />
        </div>
        <div className="testimonial__client-details">
          <h6>{testimonial.name}</h6>
        </div>
      </div>
    </Card>
  );
};

export default Testimonial;
