import { Input } from "@nextui-org/react";
import { Link } from "react-router-dom";
import image from "../../../assets/others/animated.png"

const Login = () => {
    return (
        <div>
            <div className="flex justify-between items-center gap-10 p-20 min-h-screen">
            <div className="flex-1 bg-[#7828C8] px-10 py-20 space-y-8 text-white rounded-xl">
                <h2 className="text-3xl text-center font-bold">Login</h2>
                <Input type="email" label="Email" />
                <Input type="password" label="Password" />
                <button className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg px-10 py-2 mt-20 rounded-full">Login</button>
                <div>
                    <p>Don't Have an Account? please <span className="font-bold underline text-orange-500">
                        <Link to="/signup">
                            Register
                        </Link>
                        </span></p>
                </div>
            </div>
            <div className="flex-1">
                <img src={image} alt="" />
            </div>
        </div>
        </div>
    );
};

export default Login;