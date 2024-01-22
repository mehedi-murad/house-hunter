
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <div className="bg-[#7828C8] py-14">
            <div className="max-w-7xl mx-auto text-white">
                <div className="flex flex-col md:flex-row gap-6 justify-between items-center mb-20">
                    <div>
                        <h2>HOUSE HUNTER</h2>
                    </div>
                    <div>
                        <ul className="flex justify-center items-center gap-8">
                            <li>
                                <Link>
                                    Home 1
                                </Link>
                            </li>
                            <li>
                                <Link>
                                    Home 1
                                </Link>
                            </li>
                            <li>
                                <Link>
                                    Home 1
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="flex justify-center gap-8">
                        <FaInstagram></FaInstagram>
                        <FaFacebook></FaFacebook>
                        <FaYoutube></FaYoutube>
                    </div>
                </div>
                <hr />
                <div>
                    <p className="text-center text-gray-300 text-sm mt-8">Copywrite by <Link>
                        HOUSE HUNTER
                    </Link></p>
                </div>
            </div>
        </div>
    );
};

export default Footer;