import logo from '../assets/logo dark.png'
import { MdArrowOutward } from "react-icons/md";

const NavBar = () => {
    return (
        <div className="navbar">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-[#020043]">
                        <li><a>Home</a></li>
                        <li><a>Service</a></li>
                        <li><a>Blog</a></li>
                        <li><a>About Us</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost "><img className='w-full h-[30px]' src={logo} alt="" /></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-[#020043]">
                    <li><a>Home</a></li>
                    <li><a>Service</a></li>
                    <li><a>Blog</a></li>
                    <li><a>About Us</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn btn-ghost border rounded-2xl border-[#020043] text-[#020043]">Appointment <MdArrowOutward></MdArrowOutward></a>
            </div>
        </div>
    );
};

export default NavBar;