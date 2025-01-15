import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import CV1_1 from "../img/cv1.jpg";
import CV1_2 from "../img/cv1-2.jpg";
import CV1_3 from "../img/cv1-3.jpg";
import CV1_4 from "../img/cv1-4.jpg";
import CV1_5 from "../img/cv1-5.jpg";

const DefaultCarousel = () => {
    return (
        <div className="w-full relative">
            <Swiper
                modules={[Navigation, Pagination]}
                loop={true}
                navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                }}
                pagination={{
                    el: ".swiper-pagination",
                    clickable: true,
                }}
                className="default-carousel"
            >
                <SwiperSlide>
                    <div className="mx-5 sm:mx-10 lg:mx-20 bg-indigo-50 h-[300px] sm:h-[400px] lg:h-[500px] flex justify-center items-center rounded-3xl overflow-hidden">
                        <img className="rounded-3xl w-full h-full object-cover" src={CV1_1} alt="" />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="mx-5 sm:mx-10 lg:mx-20 bg-indigo-50 h-[300px] sm:h-[400px] lg:h-[500px] flex justify-center items-center rounded-3xl overflow-hidden">
                        <img className="rounded-3xl w-full h-full object-cover" src={CV1_2} alt="" />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="mx-5 sm:mx-10 lg:mx-20 bg-indigo-50 h-[300px] sm:h-[400px] lg:h-[500px] flex justify-center items-center rounded-3xl overflow-hidden">
                        <img className="rounded-3xl w-full h-full object-cover" src={CV1_3} alt="" />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="mx-5 sm:mx-10 lg:mx-20 bg-indigo-50 h-[300px] sm:h-[400px] lg:h-[500px] flex justify-center items-center rounded-3xl overflow-hidden">
                        <img className="rounded-3xl w-full h-full object-cover" src={CV1_4} alt="" />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="mx-5 sm:mx-10 lg:mx-20 bg-indigo-50 h-[300px] sm:h-[400px] lg:h-[500px] flex justify-center items-center rounded-3xl overflow-hidden">
                        <img className="rounded-3xl w-full h-full object-cover" src={CV1_5} alt="" />
                    </div>
                </SwiperSlide>
            </Swiper>

            <div className="flex items-center gap-8 lg:justify-start justify-center">
                <button
                    id="slider-button-left"
                    className="swiper-button-prev group !p-2 flex justify-center items-center border border-solid border-indigo-600 !w-12 !h-12 transition-all duration-500 rounded-full !top-2/4 !-translate-y-8 !left-5 hover:bg-indigo-600"
                    data-carousel-prev
                >
                    <svg
                        className="h-5 w-5 text-indigo-600 group-hover:text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                    >
                        <path
                            d="M10.0002 11.9999L6 7.99971L10.0025 3.99719"
                            stroke="currentColor"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>
                <button
                    id="slider-button-right"
                    className="swiper-button-next group !p-2 flex justify-center items-center border border-solid border-indigo-600 !w-12 !h-12 transition-all duration-500 rounded-full !top-2/4 !-translate-y-8 !right-5 hover:bg-indigo-600"
                    data-carousel-next
                >
                    <svg
                        className="h-5 w-5 text-indigo-600 group-hover:text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                    >
                        <path
                            d="M5.99984 4.00012L10 8.00029L5.99748 12.0028"
                            stroke="currentColor"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>
            </div>

            <div className="swiper-pagination"></div>
        </div>
    );
};

export default DefaultCarousel;
