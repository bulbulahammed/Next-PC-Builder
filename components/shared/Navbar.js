import Logo from "@/assets/images/logo.png";
import Image from "next/image";
import Link from "next/link";



const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52  text-white">
                        <li><a>Menu 1</a></li>
                        <li><a>Menu 2</a></li>
                    </ul>
                </div>
                <div className="btn btn-ghost text-xl">
                    <Link href="/">
                        <Image
                            src={Logo}
                            width={200}
                            height={200}
                            alt="Logo"
                        />
                    </Link>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Menu 1</a></li>
                    <li><a>Menu 2</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <button className="btn bg-white rounded text-black hover:text-white">Login</button>
            </div>
        </div>
    );
};

export default Navbar;