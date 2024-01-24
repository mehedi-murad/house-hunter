import { Button, Input, Select, SelectItem } from "@nextui-org/react";
import { Link } from "react-router-dom";
import image from "../../../assets/others/animated.png"
import Swal from "sweetalert2";

const Register = () => {
    const handleSubmit = e => {
        e.preventDefault()

        const form = e.target;
        const name = form.name.value;
        const role = form.role.value;
        const phone = form.phone.value;
        const email = form.email.value;
        const password = form.password.value;

        const registration = {
            name, role, phone, email, password
        }

        fetch('https://house-hunter-server-omega.vercel.app/register',{
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(registration)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                form.reset()
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "Registration Successfully",
                  showConfirmButton: false,
                  timer: 1500
                });
            }
        })
    }
    return (
        <div className="flex justify-between items-center min-h-screen p-20 gap-10">
            <div className="flex-1">
                <img src={image} alt="" />
            </div>
            <div className="flex-1 bg-[#7828C8] px-10 py-20 space-y-8 text-white rounded-xl">
                <h2 className="text-3xl text-center font-bold">Signup</h2>
        
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input type="text" name="name" placeholder="Name" className="input input-bordered input-primary w-full" />
                    <select className="text-gray-400 select select-primary w-full" name="role">
                        <option disabled selected>Choose an Option</option>
                        <option>House Owner</option>
                        <option>House Renter</option>
                    </select>
                    <input type="text" name="phone" placeholder="Phone" className="input input-bordered input-primary w-full" />
                    <input type="email" name="email" placeholder="Email" className="input input-bordered input-primary w-full" />
                    <input type="password" name="password" placeholder="Password" className="input input-bordered input-primary w-full text-gray-700" />
                    
                    <div>
                        {/* <input type="submit" value="Add House" className="btn bg-cyan-400 btn-block mt-4" /> */}
                        <button className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg px-10 py-2 mt-20 rounded-full">Signup</button>
                    </div>
                </form>
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