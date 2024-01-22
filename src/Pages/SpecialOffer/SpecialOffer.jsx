import { Button } from "@nextui-org/react";
import offerImg from "../../assets/building/building3.jpg"
import background from "../../assets/banner/banner2.jpg"
import { useEffect } from "react";
import Aos from "aos";


const SpecialOffer = () => {
    useEffect(()=>{
        Aos.init({duration:3000})
    },[])
    return (
        <div style={{ backgroundImage: `url(${background})` }}>
            <div className="max-w-7xl mx-auto py-20">
            <div>
                <h2 className="text-5xl font-bold text-center">Special Offer!</h2>
            </div>
            <div className="flex flex-col md:flex-row gap-6 justify-between items-center mt-20">
                <div data-aos="fade-right" className="md:w-[700px] space-y-3 p-4">
                    <h2 className="text-3xl font-bold">Special offers for <br /><span className="text-[#6A027B] text-5xl">First Booking!</span></h2>
                    <hr style={{width:"15%"}}></hr>
                    <p className="text-justify text-gray-400">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis molestiae in iste at! Exercitationem voluptas cumque cum temporibus, cupiditate, ipsam ab ex explicabo quis quaerat architecto quibusdam nisi dignissimos facere aspernatur harum minima possimus velit repellendus aperiam, fugiat pariatur in delectus? Facere commodi illo dicta ea tenetur animi officiis qui.</p>
                    <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg px-8">
                    View Offers
                    </Button>
                </div>
                <div data-aos="fade-left" className="p-4">
                    <img className="w-[450px] rounded-xl" src={offerImg} alt="" />
                </div>
            </div>
        </div>
        </div>
    );
};

export default SpecialOffer;