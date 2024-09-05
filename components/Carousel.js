import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './styles.css';
import { Mousewheel, Pagination } from 'swiper/modules';

export default function Carousel() {
    return (
        <div className="carousel-container max-w-4xl mx-auto p-1">
            <Swiper
                direction={'vertical'}
                slidesPerView={1}
                spaceBetween={100}
                mousewheel={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Mousewheel, Pagination]}
                className="mySwiper rounded"
            >
                <SwiperSlide>
                    <img src='https://stablo.web3templates.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F05951a0ec1a6ffc54f615ab160649e92fea982d0-800x764.png%3Frect%3D0%2C0%2C800%2C468%26w%3D800%26auto%3Dformat&w=640&q=75' alt="Slide 1" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src='https://images.unsplash.com/photo-1725137359224-b2a84b2c1a28?q=70&w=640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></img>
                </SwiperSlide>
                <SwiperSlide>
                    <img src='https://stablo.web3templates.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F2fda477a7e32f813abb9a8ef425939e6a91c7973-987x1481.png%3Frect%3D0%2C279%2C987%2C607%26w%3D987%26auto%3Dformat&w=750&q=75' alt="Slide 2" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src='https://images.unsplash.com/photo-1719937051124-91c677bc58fc?q=80&w=1744&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></img>
                </SwiperSlide>
            </Swiper>

            <div className="carousel-info mt-4 text-center">
                <h2 className="text-2xl font-bold mb-2">Architectural Engineering Wonders of the Modern Era for Your Inspiration</h2>
                <div className="flex justify-center items-center space-x-4">
                    <span className="text-gray-600">Posted on: <span className="font-semibold">October 5, 2024</span></span>
                    <div className="flex items-center">
                        <img src="https://stablo.web3templates.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4a21e3f085ed310d00fbbd294eb2392cde7f9acc-3648x3648.jpg%3Fw%3D2000%26auto%3Dformat&w=256&q=75" alt="Author Profile" className="w-10 h-10 rounded-full mr-2" />
                        <span className="text-gray-600">By: <span className="font-semibold">Fadhil Rabbani</span></span>
                    </div>
                </div>
            </div>
        </div>
    );
}
