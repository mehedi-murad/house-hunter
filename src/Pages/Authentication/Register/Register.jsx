import { Button, Input, Select, SelectItem } from "@nextui-org/react";
import { Link } from "react-router-dom";
import image from "../../../assets/others/animated.png"

const Register = () => {
    return (
        <div className="flex justify-between items-center min-h-screen p-20 gap-10">
            <div className="flex-1">
                <img src={image} alt="" />
            </div>
            <div className="flex-1 bg-[#7828C8] px-10 py-20 space-y-8 text-white rounded-xl">
                <h2 className="text-3xl text-center font-bold">Signup</h2>
                <Input type="text" label="Full Name" />
                <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                    <Select
                        label="Choose an option" 
                        className="w-full text-gray-800" 
                    >
                        <SelectItem>House Owner</SelectItem>
                        <SelectItem>House Renter</SelectItem>
                    </Select>
                    </div>
                <Input type="number" label="Phone Number" />
                <Input type="email" label="Email" />
                <Input type="password" label="Password" />
                <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg px-8 ">
                    Signup
                </Button>
                <div>
                    <p>Already Have an Account? please <span className="font-bold underline text-orange-500">
                        <Link to="/login">
                            Login
                        </Link>
                        </span></p>
                </div>
            </div>
        </div>
    );
};

export default Register;