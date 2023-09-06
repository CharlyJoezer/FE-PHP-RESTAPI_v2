import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import css from "../Home/Slider.module.css";

const Slider = () => {
  return (
    <>
      <Swiper
        modules={[Pagination, Scrollbar, A11y, Autoplay]}
        autoplay={true}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        className={css.slides}
      >
        <SwiperSlide className={css.swiper_slide}>
          <img
            src="https://imgop.itemku.com/?url=https%3A%2F%2Fd1x91p7vw3vuq8.cloudfront.net%2Fplaceholder%2F2023710%2Fv2m0v12za6fn4fsdu4v7i.png&w=1033&q=75"
            alt="https://imgop.itemku.com/?url=https%3A%2F%2Fd1x91p7vw3vuq8.cloudfront.net%2Fplaceholder%2F2023710%2Fv2m0v12za6fn4fsdu4v7i.png&w=1033&q=75"
          />
        </SwiperSlide>
        <SwiperSlide className={css.swiper_slide}>
          <img
            src="https://imgop.itemku.com/?url=https%3A%2F%2Fd1x91p7vw3vuq8.cloudfront.net%2Fplaceholder%2F202378%2Fntmw8utv7vudyydbech5m.png&w=1033&q=75"
            alt="https://imgop.itemku.com/?url=https%3A%2F%2Fd1x91p7vw3vuq8.cloudfront.net%2Fplaceholder%2F202378%2Fntmw8utv7vudyydbech5m.png&w=1033&q=75"
          />
        </SwiperSlide>
        <SwiperSlide className={css.swiper_slide}>
          <img
            src="https://imgop.itemku.com/?url=https%3A%2F%2Fd1x91p7vw3vuq8.cloudfront.net%2Fplaceholder%2F2023626%2Fhcwk6kzassaifektri2bdi.jpg&w=1033&q=75"
            alt="https://imgop.itemku.com/?url=https%3A%2F%2Fd1x91p7vw3vuq8.cloudfront.net%2Fplaceholder%2F2023626%2Fhcwk6kzassaifektri2bdi.jpg&w=1033&q=75"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
