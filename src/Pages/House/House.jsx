import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";


const House = () => {
    const axiosSecure = UseAxiosSecure()
    const { data: houses = [], refetch } = useQuery({
        queryKey: ["houses"],
        queryFn: async () => {
          const res = await axiosSecure.get("/house");
          return res.data;
        },
      });
    return (
        <div className="max-w-7xl mx-auto h-[70vh] mt-20">
            <h2 className="text-5xl font-bold text-center">All Houses</h2>
            <div className="grid grid-cols-1 md:grid-cols-3">
                {
                    houses.map(house => 
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={house.image} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{house.name}</h2>
                                <p>{house.bedrooms}</p>
                                <p>{house.roomSize}</p>
                                <p>{house.rent}</p>
                                <div className="card-actions">
                                <button className="btn btn-primary">Details</button>
                                </div>
                            </div>
                            </div>
                        )
                }
            </div>
        </div>
    );
};

export default House;