import { Button } from "@nextui-org/react";
import background from "../../assets/banner/banner1.jpg"

const Banner = () => {
    return (
        <div style={{ backgroundImage: `url(${background})`, backgroundSize:"cover" }}>
            <div className="max-w-7xl mx-auto py-20">
            <div className="text-center ">
                <h2 className="text-2xl font-bold mt-10">You're Just One Click Away <br /> We're <br /><span className="text-5xl text-[#7828C8] tracking-widest">HOUSE HUNTER</span></h2>
                <p className="mt-16 text-[#124232] font-semibold">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis molestiae in iste at! Exercitationem voluptas cumque cum temporibus, cupiditate, ipsam ab ex explicabo quis quaerat architecto quibusdam nisi dignissimos facere aspernatur harum minima possimus velit repellendus aperiam, fugiat pariatur in delectus? Facere commodi illo dicta ea tenetur animi officiis qui.</p>
                <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg px-10 mt-20">
                    Explore 
                </Button>
            </div>
            <div className="flex flex-col md:flex-row gap-6 justify-between items-center mt-20">
                <div data-aos="fade-right" className="md:w-[700px] space-y-3 p-4">
                    
                </div>
            </div>
        </div>
        </div>
    );
};

export default Banner;