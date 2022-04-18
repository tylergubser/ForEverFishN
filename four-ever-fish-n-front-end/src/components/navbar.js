import React from 'react'
import { NavLink } from "react-router-dom";
import loginSVG from "./images/loginSVG.svg"
import homeSVG from "./images/homeSVG.svg"
import mapSVG from "./images/mapSVG.svg"
import hookSVG from "./images/hookSVG.svg"


function Navbar() {
    return (
        <header class="shadow-sm">
            <div
                class="flex items-center justify-between h-16 max-w-screen-xl px-4 mx-auto"
            >
                <div class="flex flex-1 w-0 lg:hidden">
                    <h1 className='text-center'> East Coast Fishing Co.</h1>
                </div>

                <div class="flex items-center space-x-4">

                    <form class="hidden mb-0 lg:flex">
                        <h1> East Coast Fishing Co.</h1>
                    </form>
                </div>



                <ul
                    class="items-center justify-center hidden space-x-8 text-sm font-medium lg:flex lg:flex-1 lg:w-0"
                >
                    <li class="relative">
                        <div class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out">
                            <img src={homeSVG} alt="home icon" className="w-5 h-5 mr-3" />
                            <NavLink to="/Home">Home</NavLink>
                        </div>
                    </li>
                    <li class="relative">
                        <div class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out">
                            <img src={mapSVG} alt="home icon" className="w-5 h-5 mr-3" />
                            <NavLink to="/Map">Map</NavLink>
                        </div>
                    </li>
                    <li class="relative">
                        <div class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out">
                            <img src={hookSVG} alt="home icon" className="w-5 h-5 mr-3 " />
                            <NavLink to="/About">About</NavLink>
                        </div>
                    </li>

                </ul>

                <div class="items-center hidden space-x-4 lg:flex">
                    <div
                        class="px-5 py-2 text-sm font-medium text-gray-600 bg-gray-100 rounded-lg"
                        href=""
                    >
                        <NavLink to="/Login">Login</NavLink>
                    </div>
                    <div
                        class="px-5 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg"
                        href=""
                    >
                        Sign up
                    </div>
                </div>
            </div>
            
            {/* mobile view */}
            <div class="border-t border-gray-100 lg:hidden">
                <ul
                    class="flex items-center justify-center p-4 overflow-x-auto text-sm font-medium"
                >
                    <li class="relative">
                        <div class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out">
                            <img src={homeSVG} alt="home icon" className="w-5 h-5 mr-3" />
                            <NavLink to="/Home">Home</NavLink>
                        </div>
                    </li>
                    <li class="relative">
                        <div class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out">
                            <img src={mapSVG} alt="home icon" className="w-5 h-5 mr-3" />
                            <NavLink to="/Map">Map</NavLink>
                        </div>
                    </li>
                    <li class="relative">
                        <div class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out">
                            <img src={hookSVG} alt="home icon" className="w-5 h-5 mr-3 " />
                            <NavLink to="/About">About</NavLink>
                        </div>
                    </li>
                </ul>
            </div>
            {/* end ofmobile view */}
        </header>
    )
}

export default Navbar