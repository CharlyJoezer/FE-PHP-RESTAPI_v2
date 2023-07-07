import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import css from "../Home/Slider.module.css"

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
            src="https://images.tokopedia.net/img/cache/1208/NsjrJu/2023/7/3/4ad660ce-e4cc-46a6-a3c1-398c141d794b.jpg.webp?ect=4g"
            alt="https://images.tokopedia.net/img/cache/1208/NsjrJu/2023/7/3/4ad660ce-e4cc-46a6-a3c1-398c141d794b.jpg.webp?ect=4g"
          />
        </SwiperSlide>
        <SwiperSlide className={css.swiper_slide}>
          <img
            src="https://images.tokopedia.net/img/cache/1208/NsjrJu/2023/7/3/b2b5502e-3627-4c3b-8eac-f7c02175d371.jpg.webp?ect=4g"
            alt="https://images.tokopedia.net/img/cache/1208/NsjrJu/2023/7/3/b2b5502e-3627-4c3b-8eac-f7c02175d371.jpg.webp?ect=4g"
          />
        </SwiperSlide>
        <SwiperSlide className={css.swiper_slide}>
          <img
            src="https://images.tokopedia.net/img/cache/1208/NsjrJu/2023/6/30/d8089e55-2112-4427-ace3-ce36f6dcc7d8.jpg.webp?ect=4g"
            alt="https://images.tokopedia.net/img/cache/1208/NsjrJu/2023/6/30/d8089e55-2112-4427-ace3-ce36f6dcc7d8.jpg.webp?ect=4g"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
