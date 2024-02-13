import React from 'react'
import logo from '../../assets/logo.svg'
import Dropdown from '../SelectDropdown/Dropdown'
import { IoSearchOutline } from "react-icons/io5";

function Header() {
    return (
        <>
            <header className=' flex justify-betwee gap-7  py-4 m-auto w-full'>
                <div className="header-logo">
                    <img src={logo} alt="" />
                </div>
                <div className="header-search flex items-center  gap-5 w-[30%] h-[45px] border border-green-200 px-4 bg-[#cc]">
                    <div className="categories w-[20%] relative">All Categories
                        <Dropdown />
                    </div>
                    <span className=''>|</span>
                    <div className="inp-box w-[80%] flex items-center ">
                        <input type="search" className='w-full border-none outline-none p- h-[40px] ' placeholder='search items here...' />
                        <div className="search-icon text-2xl text-[#ccc]" ><IoSearchOutline /></div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header