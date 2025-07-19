import React, { useState } from 'react'
import logo from '../../public/logo.png'
import ring from '../../public/ring.png'
import profile from '../../public/profile.png'
import { NavLink, Outlet } from 'react-router-dom';
import { HiMenuAlt1, HiX } from "react-icons/hi";

function Header() {
    const [isMenu, setisMenu] = useState(false);
    return (
        <section>
            <div className='border-b border-gray-300'>
                <div className='max-w-[1300px] mx-auto flex items-center justify-between py-5 font-onest'>
                    <div><img src={logo} alt="" /></div>
                    <nav className='hidden md:flex'>
                        <ul className='flex gap-3 '>
                            <li className='hover:text-blue-800'><NavLink to='/'>Dashboard</NavLink></li>
                            <li className='hover:text-blue-800'><NavLink to='/Incidents'>Incidents</NavLink></li>
                            <li className='hover:text-blue-800'><NavLink to='/Location'>Locations</NavLink></li>
                            <li className='hover:text-blue-800'><a href="">Activities</a></li>
                            <li className='hover:text-blue-800'><a href="">Documents</a></li>
                            <li className='hover:text-blue-800'><NavLink to='/Cypher'>Cypher AI</NavLink></li>
                        </ul>
                    </nav>
                    <div>
                        <div className='gap-3 hidden md:flex'>
                            <div><img src={ring} alt="" /></div>
                            <div className='flex gap-4 items-center'>
                                <img src={profile} alt="" className='w-[40px] h-[40px]' />
                                <div>
                                    <h3>Shajib Ahmed</h3>
                                    <p>Sajib99design@gmail.com</p>
                                </div>
                            </div>
                        </div>
                        <button className='md:hidden mt-3 text-2xl' onClick={() => setisMenu(!isMenu)}> <HiMenuAlt1 /> </button>
                    </div>
                    {/* humberger menu mobile  */}
                    <div className={`transfrom duration-300 fixed top-0 left-0 bg-amber-700 h-full p-3 w-50 ${isMenu ? "translate-x-0" : "-translate-x-full"} `} >
                        <button className='text-2xl text-blue-800' onClick={() => setisMenu(false)}><HiX /></button>
                        <nav className=''>
                        <ul className='space-y-3 text-blue-800'>
                            <li><NavLink to='/'>Dashboard</NavLink></li>
                            <li><NavLink to='/Incidents'>Incidents</NavLink></li>
                            <li><NavLink to='/Location'>Locations</NavLink></li>
                            <li><a href="">Activities</a></li>
                            <li><a href="">Documents</a></li>
                            <li><a href="">Cypher AI</a></li>
                        </ul>
                        </nav>
                    </div>
                </div>
            </div>

            <Outlet />
        </section>
    )
}

export default Header
