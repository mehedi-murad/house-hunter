import { useEffect, useState } from "react";
import { FaEye, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const ListOfHouses = () => {
    const axiosSecure = UseAxiosSecure()
    const { data: houses = [], refetch } = useQuery({
        queryKey: ["houses"],
        queryFn: async () => {
          const res = await axiosSecure.get("/house");
          return res.data;
        },
      });

    const handleDelete = id =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/house/${id}`)
                .then(res => {
                    if(res.data.deletedCount > 0){
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your house has been deleted.",
                            icon: "success"
                          });
                          refetch()
                    }
                })
            
            }
          });
      }
    return (
        <div>
            <div className="">
                <h2 className="uppercase text-5xl font-bold text-center mt-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">List of Houses</h2>
                <div className="divider max-w-7xl mx-auto"></div>
            </div>
            <div>
            <div className="overflow-x-auto">
                        <table className="table table-zebra">
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>Photo</th>
                                <th>Address</th>
                                <th>Flat Info</th>
                                <th>Name</th>
                                <th>Available Date</th>
                                <th>Description</th>
                                <th>Details</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                houses.map((house, index) => 
                                    <tr key={house._id}>
                                        <th>{index + 1}</th>
                                        <th>
                                            <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={house.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                            </div>
                                        </th>

                                        <td>
                                            <div>
                                                <p className="text-xl font-semibold">{house.address}</p>
                                                <p className="text-xs text-gray-500">{house.city}</p>
                                            </div>
                                        </td>
                                        <td>
                                            <div>
                                                <p><span className="font-bold">Room Description:</span> {house.bedrooms}</p>
                                                <p><span className="font-bold">Flat Size:</span> {house.roomSize}</p>
                                                <p><span className="font-bold">Flat Rent:</span> {house.rent}</p>
                                                <p><span className="font-bold">Phone:</span> {house.phone}</p>
                                            </div>
                                        </td>
                                        <td>{house.name}</td>
                                        <td>{house.date}</td>
                                        <td>{house.desc}</td>
                                        <td>
                                            <Link to={`/dashboard/updateDoctor/${house._id}`}>
                                                <FaEye></FaEye>
                                            </Link>
                                            
                                        </td>
                                        <td className="text-red-700" alt="Delete"><button onClick={()=>handleDelete(house._id)}>
                                            <FaTrash></FaTrash>
                                            </button>
                                            </td>
                                    </tr>
                                    )
                            }
                            
                            </tbody>
                        </table>
                        </div>
            </div>
        </div>
    );
};

export default ListOfHouses;