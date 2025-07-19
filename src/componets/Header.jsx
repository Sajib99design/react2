import React, { useState } from 'react'
import logo from '../assets/react.svg'
import { HiMenuAlt1, HiX } from "react-icons/hi";

function Header() {
  const [isMenu, setisMenu] = useState(false);
    return (
        <header className='bg-violet-400 flex justify-between p-4'>
            <div><img src={logo} alt="" /></div>

            <nav className='gap-3 hidden md:flex'>
                <div>Login</div>
                <div>signup</div>
                <div>add to card</div>
                <div>profile</div>
                <div>about</div>
                <div>contact</div>
            </nav>

            <div className='flex gap-3 md:hidden'>
                <div>Profile</div>
                <button onClick={() => setisMenu(!isMenu) }> <HiMenuAlt1 /> </button>
            </div>



            {/* humberger menu mobile  */}
            <div className={`transfrom duration-300 fixed top-0 left-0 bg-amber-500 h-full p-3 w-50 ${isMenu ? "translate-x-0" : "-translate-x-full"} ` } >
                <button onClick={() => setisMenu(false)}><HiX /></button>
                <nav className='space-y-3'>
                    <div>Login</div>
                    <div>signup</div>
                    <div>add to card</div>
                    <div>profile</div>
                    <div>about</div>
                    <div>contact</div>
                </nav>
            </div>
        </header>
    )
}

export default Header
