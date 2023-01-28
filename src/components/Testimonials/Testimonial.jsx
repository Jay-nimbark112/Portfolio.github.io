import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/gap11.jpg";
import profilePic2 from "../../img/gap14.jpg";
import profilePic3 from "../../img/gap12.jpg";
import profilePic4 from "../../img/gap13.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "If you are looking for an all-things-branding graphic designer, then look no further. With over four years of professional experience and a Bachelors of Arts degree in Media Studies, I am capable of bringing your brand full-circle with my verse skills ranging from photography and videography.  ",
    },
    {
      img: profilePic2,
      review:
        "I am a diligent, committed to quality and highly skilled Web Developer, I provide an exceptional service built on trust and a determination to deliver client satisfaction.Self-motivated, I do whatever it takes to meet your deadlines and needs.",
    },
    {
      img: profilePic3,
      review:
        "I work hard on every project to deliver exceptional results to clients of all sizes. Using cutting edge technology tools, I am ready to transform your project, turning an idea into reality.",
    },
    {
      img: profilePic4,
      review:
        "I am an expert in Search Engine Optimization as well as in Software Automation Solutions. and give your website to next level SEO.",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
