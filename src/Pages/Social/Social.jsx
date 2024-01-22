import building1 from "../../assets/building/building1.jpg"
import building2 from "../../assets/building/building2.jpg"
import building3 from "../../assets/building/building3.jpg"
import building4 from "../../assets/building/building4.jpg"
import building5 from "../../assets/building/building5.jpg"
import building6 from "../../assets/building/building6.jpg"
import building7 from "../../assets/building/building7.jpg"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Button } from "@nextui-org/react"
import { useEffect } from "react"
import Aos from "aos"

const Social = () => {
    useEffect(()=>{
        Aos.init({duration:3000})
    },[])
    return (
        <div className="max-w-7xl mx-auto py-20">
            <h2 className="text-5xl font-bold text-center mb-10">Follow Our Social Media</h2>
            <div data-aos="fade-up" className="flex flex-col md:flex-row gap-6 justify-between items-center">
                <Swiper
                    slidesPerView={6}
                    spaceBetween={30}
                    pagination={{
                    clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide className="mb-14">
                        <img className="w-40 h-32 rounded-xl" src={building1} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="w-40 h-32 rounded-xl" src={building2} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="w-40 h-32 rounded-xl" src={building3} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="w-40 h-32 rounded-xl" src={building4} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="w-40 h-32 rounded-xl" src={building5} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="w-40 h-32 rounded-xl" src={building6} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="w-40 h-32 rounded-xl" src={building7} alt="" />
                    </SwiperSlide>
                </Swiper>
                {/* <img className="w-40 h-32 rounded-xl" src={building1} alt="" />
                <img className="w-40 h-32 rounded-xl" src={building4} alt="" />
                <img className="w-40 h-32 rounded-xl" src={building2} alt="" />
                <img className="w-40 h-32 rounded-xl" src={building3} alt="" />
                <img className="w-40 h-32 rounded-xl" src={building5} alt="" />
                <img className="w-40 h-32 rounded-xl" src={building6} alt="" />
                <img className="w-40 h-32 rounded-xl" src={building7} alt="" /> */}
            </div>
            <div className="flex justify-center mt-10">
                <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg px-8">
                    See more Photos
                </Button>
            </div>
        </div>
    );
};

export default Social;