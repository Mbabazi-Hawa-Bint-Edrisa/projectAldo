// import "./NavbarStyles.css";

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItems";
import logo from './images/edited logo.png';


// const Navbar = () => {
//   const [clicked, setClicked] = useState(false);

//   const handleClick = () => {
//     setClicked(!clicked);
//   };

//   return (
//     <nav className="NavbarItems">
//       <Link to="/">
//         <img src={logo} alt="Logo" className="navbar-logo" />
//       </Link>

//       <div className="menu-icons" onClick={handleClick}>
//         <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
//       </div>

//       <ul className={clicked ? "nav-menu active" : "nav-menu"}>
//         {MenuItems.map((item, index) => {
//           return (
//             <li key={index}>
//               <Link className={item.cName} to={item.url}>
//                 <i className={item.icon}></i>
//                 {item.title}
//               </Link>
//             </li>
//           );
//         })}

//         <li>
//           <Link className="nav-links-acc" to="/signup">
//             Sign up
//           </Link>
//         </li>
//       </ul>
//     </nav>
//   );
// };


const Navbar = () => {

    const [state, setState] = useState(false)

    // Replace javascript:void(0) paths with your paths
    const navigation = [
        { title: "Features", path: "javascript:void(0)" },
        { title: "Integrations", path: "javascript:void(0)" },
        { title: "Customers", path: "javascript:void(0)" },
        { title: "Pricing", path: "javascript:void(0)" }
    ]

    return (
        <nav className="bg-white border-b w-full md:static md:text-sm md:border-none">
            <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
                <div className="flex items-center justify-between md:block">
                    <a href="javascript:void(0)">
                        <img
                            src={logo}
                            width={120}
                            height={50}
                            alt="Float UI logo"
                            className="scale-80 md:scale-100"
                        />
                    </a>
                    <div className="md:hidden">
                        <button className="text-gray-500 hover:text-gray-800"
                            onClick={() => setState(!state)}
                        >
                            {
                                state ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                    </svg>
                                )
                            }
                        </button>
                    </div>
                </div>
                <div className={`flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${state ? 'block' : 'hidden'}`}>
                    <ul className="justify-end items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
                        {
                            MenuItems.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <Link className="flex gap-4 md:gap-1 items-center transition-all duration-100 ease-linear hover:bg-teal-500 hover:text-teal-50 text-teal-900  py-2 px-2 rounded" to={item.url}>
                                            <i className={item.icon}></i>
                                            <p className="">{item.title}</p>
                                        </Link>
                                     </li>
                                )
                            })
                        }
                        <span className='hidden w-px h-6 bg-gray-300 md:block'></span>
                        <div className='space-y-3 items-center gap-x-6 md:flex md:space-y-0'>
                            <li>
                                <a href="/login" className="block py-3 text-center text-gray-700 hover:text-indigo-600 border rounded-lg md:border-none">
                                    Log in
                                </a>
                            </li>
                            <li>
                                <a href="/signup" className="block py-3 px-4 font-medium text-center text-white bg-teal-600 hover:bg-teal-500 transition-all duration-100 ease-linear active:bg-indigo-700 active:shadow-none rounded-lg shadow md:inline">
                                    Sign up
                                </a>
                            </li>
                        </div>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;

