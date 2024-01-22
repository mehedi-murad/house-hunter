import { Input } from "@nextui-org/react";
import Aos from "aos";
import { useEffect } from "react";
import { FaLocationArrow } from "react-icons/fa";


const Subscribe = () => {
    useEffect(()=>{
        Aos.init({duration:3000})
    },[])
    return (
        <div className="max-w-7xl mx-auto py-10">
            <div data-aos="fade-up" className="flex justify-around items-center gap-6 bg-gray-100 p-8 rounded-xl">
            <div className="flex justify-center items-center gap-5">
                <div className="bg-[#6A027B] rounded-full p-4 text-white text-xl">
                    <FaLocationArrow />
                </div>
                <p className="font-semibold text-2xl">Subscribe to our newsletter <br />
                & get <span className="text-[#6A027B] font-bold">10% discount!</span> on first booking</p>
            </div>
            <div>
                <div className="flex w-full flex-wrap md:flex-nowrap gap-4 border-2 border-purple-700 rounded-xl">
                    <Input type="email" label="Email" />
                </div>
            </div>
        </div>
        </div>
    );
};

export default Subscribe;