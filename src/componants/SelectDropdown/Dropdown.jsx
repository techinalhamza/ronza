import React, { useState } from 'react'

import './Dropdown.css'

function Dropdown() {
    const [dropdown, setDropdown] = useState(true)
    return (
        <>

            {
                setDropdown() === true && <div className="dropdown-container w-[200px] absolute -left-4  top-[100%] shadow-2xl bg-[#cc] py-4 px-1 max-h-[300px] overflow-y-scroll overflow-x-hidden">
                    <div className="search-box">
                        <input type="search" placeholder='search here..' className='border-none outline-none h-8 pl-4' />
                    </div>
                    <ul className='mt-4 ml-3'>
                        <li>Dairy Milk</li>
                        <li>Wines & Drink</li>
                        <li>clothing & beauty</li>
                        <li>fresh food</li>
                        <li>pet food & toy</li>
                        <li>fast food</li>
                        <li>baking material</li>
                        <li>vegetable</li>
                        <li>fresh food</li>
                        <li>bread & fruit</li>
                        <li>baking material</li>
                        <li>vegetable</li>
                        <li>fresh food</li>
                        <li>bread & fruit</li>
                    </ul>
                </div>
            }

        </>
    )
}

export default Dropdown