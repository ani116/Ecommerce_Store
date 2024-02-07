import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import logo from "../assets/logo.png"
import { useSelector } from "react-redux";

const Navbar = () => {

    const {cart} = useSelector( (state) => state );

    return(
        <div className="rounded-lg bg-gradient-to-r from-violet-500 to-fuchsia-500 py-3 ">

            <div className="flex flex-row justify-between w-11/12 max-w-[1080px] m-auto items-center ">
                <div>
                    <img src={logo} alt="" className="max-sm:w-8"></img>
                </div>

                <div className="">
                    <ul className="flex flex-row gap-4 text-white font-bold text-lg ">
                        <li>
                            <NavLink to="/" className="hover:text-black transition-all delay-75 max-sm:text-[0.5rem]">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/Mens" className="hover:text-black transition-all delay-75  max-sm:text-[0.5rem]">Men's</NavLink>
                        </li>
                        <li>
                            <NavLink to="/Womens" className="hover:text-black transition-all delay-75  max-sm:text-[0.5rem]">Women's</NavLink>
                        </li>
                        <li>
                            <NavLink to="/Electronics" className="hover:text-black transition-all delay-75  max-sm:text-[0.5rem]">Electronics</NavLink>
                        </li>
                        <li>
                            <NavLink to="/Jewellery" className="hover:text-black transition-all delay-75  max-sm:text-[0.5rem]">Jewellery</NavLink>
                        </li>
                    </ul>
                </div>

                <div className="flex gap-2">
                    
                    <div className="relative">
                        <NavLink to="/Cart"> <FaShoppingCart className="text-3xl text-white max-sm:text-xl" /> </NavLink>
                    </div>
                    <div className="absolute text-white right-[23.3rem] font-bold top-[1.5rem] bg-green-400 h-5 w-5 rounded-full lg:flex flex-row justify-center text-center items-center hidden">
                        {cart.length}
                    </div>

                </div>
            </div>

        </div>
    )
};

export default Navbar; 