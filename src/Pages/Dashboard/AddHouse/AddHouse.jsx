import { useState } from "react";
import Swal from "sweetalert2";


const AddHouse = () => {
    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
  
        const name = form.name.value;
        const address = form.address.value;
        const city = form.city.value;
        const bedrooms = form.bedrooms.value;
        const roomSize = form.roomSize.value;
        const image = form.image.value;
        const date = form.date.value;
        const rent = form.rent.value;
        const phone = form.phone.value;
        const desc = form.desc.value;
        const houses = {
            name, address, city, bedrooms, roomSize, image, date, rent, phone, desc
        }
        
  
        fetch('https://house-hunter-server-omega.vercel.app/house',{
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(houses)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                form.reset()
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "House Added Successfully",
                  showConfirmButton: false,
                  timer: 1500
                });
            }
        })
      };
    return (
        <div>
            <div className="max-w-2xl mx-auto space-y-10 py-10">
                <h2 className="text-3xl font-bold text-center">Add your House</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input type="text" name="name" placeholder="Name" className="input input-bordered input-primary w-full" />
                    <input type="text" name="address" placeholder="Address" className="input input-bordered input-primary w-full" />
                    <input type="text" name="city" placeholder="City" className="input input-bordered input-primary w-full" />
                    <input type="text" name="bedrooms" placeholder="Bedrooms" className="input input-bordered input-primary w-full" />
                    <input type="text" name="roomSize" placeholder="Roomsize" className="input input-bordered input-primary w-full" />
                    <input type="text" name="image" placeholder="Image" className="input input-bordered input-primary w-full" />
                    <input type="date" name="date" className="input input-bordered input-primary w-full" />
                    <input type="text" name="rent" placeholder="Rent" className="input input-bordered input-primary w-full" />
                    <input type="text" name="phone" placeholder="Phone" className="input input-bordered input-primary w-full" />
                    <textarea className="textarea textarea-primary w-full" name="desc" placeholder="Description"></textarea>
                    <div>
                        {/* <input type="submit" value="Add House" className="btn bg-cyan-400 btn-block mt-4" /> */}
                        <button className="btn w-full">ADD HOUSE</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddHouse;