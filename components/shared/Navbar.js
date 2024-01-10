import Logo from "@/assets/images/logo.png";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";



const Navbar = () => {
    const { data: session } = useSession()
    console.log("Session From Navbar",session);
    return (
        <div className="navbar">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2  rounded-box w-52">
                    <li><Link href="/pcbuilder">PC BUILDER</Link></li>
                    <li>
                        <details>
                            <summary>
                                Components
                            </summary>
                            <ul className="p-2 rounded-t-none bg-gray-200 divide-y divide-slate-400">
                                <li><Link href="/PCcomponents/processor">Processor</Link></li>
                                <li><Link href="/PCcomponents/motherBoard">Mother Board</Link></li>
                                <li><Link href="/PCcomponents/ram">RAM</Link></li>
                                <li><Link href="/PCcomponents/powerSupply">Power Supply</Link></li>
                                <li><Link href="/PCcomponents/storage">Storage</Link></li>
                                <li><Link href="/PCcomponents/monitor">Monitor</Link></li>
                                <li><Link href="/PCcomponents/processor">Others</Link></li>
                            </ul>
                        </details>
                    </li>
                    </ul>
                </div>
                <div className="btn btn-ghost text-xl">
                    <Link href="/">
                        <Image
                            src={Logo}
                            alt="Logo"
                            height={0}
                            width={0}
                            priority={true}
                            style={{width:'200px', height: "auto" }}
                        />
                    </Link>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-black">
                    <li><Link href="/pcbuilder">PC BUILDER</Link></li>
                    <li>
                        <details>
                            <summary>
                                Components
                            </summary>
                            <ul className="p-2 rounded-t-none bg-gray-200 divide-y divide-slate-400">
                                <li><Link href="/PCcomponents/processor">Processor</Link></li>
                                <li><Link href="/PCcomponents/motherBoard">Mother Board</Link></li>
                                <li><Link href="/PCcomponents/ram">RAM</Link></li>
                                <li><Link href="/PCcomponents/powerSupply">Power Supply</Link></li>
                                <li><Link href="/PCcomponents/storage">Storage</Link></li>
                                <li><Link href="/PCcomponents/monitor">Monitor</Link></li>
                                <li><Link href="/PCcomponents/processor">Others</Link></li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
            <div className="navbar-end">
                {
                    session?.user?(
                        <button  className="btn bg-white rounded text-black hover:text-white" onClick={()=> signOut()}>
                            Log Out
                        </button>
                    ):(                        
                      <Link href="/login">
                          <button className="btn bg-white rounded text-black hover:text-white">Login</button>
                     </Link>
                 
                    )
                }
            </div>
        </div>
    );
};

export default Navbar;

