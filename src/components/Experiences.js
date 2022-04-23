import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import Card from "./Card";
import data from "../data";

export default function Experiences() {
  const cards = data.map((item) => {
    return (
      <SwiperSlide key={item.id}>
        <Card {...item} />
      </SwiperSlide>
    );
  });
  return (
    <div className="experiences">
      <Swiper spaceBetween={18} slidesPerView="auto">
        {cards}
      </Swiper>
    </div>
  );
}
