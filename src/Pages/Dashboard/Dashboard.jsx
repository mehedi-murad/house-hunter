import React from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className='flex'>
            <div className='bg-[#7828C8] w-96 p-10 min-h-screen text-gray-900'>
                <ul className='space-y-4'>
                    <li className='bg-white p-4 rounded-xl font-semibold'>
                        <NavLink to="/dashboard/houseList" className="flex items-center gap-4">
                        <FaAngleDoubleRight></FaAngleDoubleRight>List of Houses
                        </NavLink>
                    </li>
                    <li className='bg-white p-4 rounded-xl font-semibold'>
                        <NavLink to="/dashboard/bookings" className="flex items-center gap-4">
                        <FaAngleDoubleRight></FaAngleDoubleRight>Manage Bookings
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className='flex-1'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;