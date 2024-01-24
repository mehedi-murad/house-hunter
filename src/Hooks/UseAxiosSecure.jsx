import axios from "axios";

const axiosSecure = axios.create({
    baseURL: "https://house-hunter-server-omega.vercel.app"
})
const UseAxiosSecure = () => {
    return axiosSecure;
};

export default UseAxiosSecure;