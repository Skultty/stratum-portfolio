import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Navigation } from "swiper";
import EffectCarousel from "./swiper-js/effect-carousel.esm.js";
import "swiper/css";
import "swiper/css/a11y";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "./css/effect-carousel.css";
import "./css/MySwiper.css";
import yoda from "../assets/yoda.jpg";

export default function Portfolio() {
  const swiperParameters = {
    modules: [A11y, Autoplay, Navigation, EffectCarousel],
    grabCursor: true,
    autoplay: { enabled: true },
    effect: "carousel",
    loopedSlides: 10,
    navigation: true,
    slidesPerView: "auto",
    loop: true,
  };
  return (
    <section id="portfolio" className="h-screen bg-gray flex flex-col items-center justify-center">
      <Swiper {...swiperParameters}>
        <SwiperSlide>
          <img
            className="swiper-slide-image swiper-carousel-animate-opacity"
            src={yoda}
          />

          <div className="swiper-slide-content swiper-carousel-animate-opacity">
            <div className="swiper-slide-title">Yoda</div>

            <div className="swiper-slide-text">
              XD
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <img
            className="swiper-slide-image swiper-carousel-animate-opacity"
            src={yoda}
          />

          <div className="swiper-slide-content swiper-carousel-animate-opacity">
            <div className="swiper-slide-title">Yoda</div>

            <div className="swiper-slide-text">
              XD
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <img
            className="swiper-slide-image swiper-carousel-animate-opacity"
            src={yoda}
          />

          <div className="swiper-slide-content swiper-carousel-animate-opacity">
            <div className="swiper-slide-title">Yoda</div>

            <div className="swiper-slide-text">
              XD
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <img
            className="swiper-slide-image swiper-carousel-animate-opacity"
            src={yoda}
          />

          <div className="swiper-slide-content swiper-carousel-animate-opacity">
            <div className="swiper-slide-title">Yoda</div>

            <div className="swiper-slide-text">
              XD
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <img
            className="swiper-slide-image swiper-carousel-animate-opacity"
            src={yoda}
          />

          <div className="swiper-slide-content swiper-carousel-animate-opacity">
            <div className="swiper-slide-title">Yoda</div>

            <div className="swiper-slide-text">
              XD
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <img
            className="swiper-slide-image swiper-carousel-animate-opacity"
            src={yoda}
          />

          <div className="swiper-slide-content swiper-carousel-animate-opacity">
            <div className="swiper-slide-title">Yoda</div>

            <div className="swiper-slide-text">
              XD
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <img
            className="swiper-slide-image swiper-carousel-animate-opacity"
            src={yoda}
          />

          <div className="swiper-slide-content swiper-carousel-animate-opacity">
            <div className="swiper-slide-title">Yoda</div>

            <div className="swiper-slide-text">
              XD
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <img
            className="swiper-slide-image swiper-carousel-animate-opacity"
            src={yoda}
          />

          <div className="swiper-slide-content swiper-carousel-animate-opacity">
            <div className="swiper-slide-title">Yoda</div>

            <div className="swiper-slide-text">
              XD
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <img
            className="swiper-slide-image swiper-carousel-animate-opacity"
            src={yoda}
          />

          <div className="swiper-slide-content swiper-carousel-animate-opacity">
            <div className="swiper-slide-title">Yoda</div>

            <div className="swiper-slide-text">
              XD
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <img
            className="swiper-slide-image swiper-carousel-animate-opacity"
            src={yoda}
          />

          <div className="swiper-slide-content swiper-carousel-animate-opacity">
            <div className="swiper-slide-title">Yoda</div>

            <div className="swiper-slide-text">
              XD
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
