import React from 'react'
import { NavLink } from "react-router-dom";
import loginSVG from "./images/loginSVG.svg"
import homeSVG from "./images/homeSVG.svg"
import mapSVG from "./images/mapSVG.svg"
import hookSVG from "./images/hookSVG.svg"


function navbar() {
    return (
        <div class="w-60 h-full shadow-md bg-white px-1 absolute">
            <div class="pt-4 pb-2 px-6">
                <div>
                    <div class="flex items-center">
                        <div class="shrink-0">
                            <img src="https://m.media-amazon.com/images/I/31NXhN9iZoL._AC_SY355_.jpg" class="rounded-full w-10" alt="Avatar" />
                        </div>
                        <div class="grow ml-3">
                            <p class="text-sm font-semibold text-blue-600">COMPANY NAME</p>
                        </div>
                    </div>
                </div>
            </div>
            <ul class="relative">
                <li class="relative">
                    <div class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out">
                        <img src={loginSVG} alt="login icon" className="w-5 h-5 mr-3" />
                        <NavLink to="/Login">Log in</NavLink>
                    </div>
                </li>
                <li class="relative">
                    <div class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out">
                        <img src={homeSVG} alt="home icon" className="w-5 h-5 mr-3" />
                        <NavLink to="/Home">Home</NavLink>
                    </div>
                </li>
                <li class="relative">
                    <div class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out">
                        <img src={mapSVG} alt="home icon" className="w-5 h-5 mr-3" />
                        <span>Map</span>
                    </div>
                </li>
                <li class="relative">
                    <div class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out">
                        <img src={hookSVG} alt="home icon" className="w-5 h-5 mr-3 " />
                        <span>About</span>
                    </div>
                </li>
            </ul>
            <div class="text-center bottom-0 absolute w-full font-light text-gray-700 text-sm">
                <hr class="m-0" />
                <p class="py-2">Designed by:</p>
                <a href="https://www.linkedin.com/in/v12v0/" className=""> Vi V. | </a>
                <a href="https://www.linkedin.com/in/stephen-talley-the-developer/"  className="text-sm" > Stephen T. | </a>
                <a href="https://www.linkedin.com/in/echernicky/" className=""> Evan C. | </a>
                <a href="http://www.linkedin.com/in/tyler-gubser" className=""> Tyler G.</a>
            </div>
        </div>
    )
}

export default navbar