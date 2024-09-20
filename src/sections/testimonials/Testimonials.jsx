import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination } from "swiper";
import testimonials from "./data";
import Testimonial from "./Testimonial";
import "./testimonials.css";
import { Rating } from "flowbite-react";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h2>Customer Reviews</h2>
      <p>These are unbiased testmonials from some of my clients</p>
      <Rating className="flex justify-center">
        <Rating.Star />
        <Rating.Star />
        <Rating.Star />
        <Rating.Star />
        <Rating.Star />
        <p className="ml-2 text-sm font-bold text-gray-900 dark:text-white">
          5.0
        </p>
        <span className="mx-1.5 h-1 w-1 rounded-full bg-gray-500 dark:bg-gray-400" />
        <a
          href="https://g.co/kgs/F198tRU"
          className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white"
        >
          40 reviews
        </a>
      </Rating>
      <div className="container">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          breakpoints={{
            601: { slidesPerView: 2 },
            1025: { slidesPerView: 3 },
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          autoplay={true}
          className="mySwiper"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <Testimonial testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
