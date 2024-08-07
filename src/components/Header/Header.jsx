import React, { useState } from 'react'
import "./Header.css"
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { PiHandbagLight } from "react-icons/pi";
import { useDispatch, useSelector } from 'react-redux';
import { SET_SEARCH_INPUT } from '../../reducers/searchReducer';


const Header = () => {
    const dispatch = useDispatch();
    const input = useSelector((state) => state.search.input);
    const [openInput, setOpenInput] = useState(true);

    const toggleInput = () => {
        setOpenInput(!openInput)
    }

    const handleInputChange = (e) => {
        dispatch(SET_SEARCH_INPUT(e.target.value))
    }
    

    return (
        <header className='header'>
            <div className='banner'>
                <span>Lorem ipsum</span>
                <span>Lorem ipsum</span>
                <span>Lorem ipsum</span>
            </div>
            <div className='header-container'>
                <div className='header-left'>
                    <img src='https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQotldNVMsqXeGvhnXhxGr0WjGXbOprXVkiNF81z9iJopRuC6Ly' alt='Logo' className='logo' />
                </div>

                <div>
                    <h1>LOGO</h1>
                </div>

                <div className="header-right">
                    <div className={`searchinput ${openInput ? "" : "open"}`}>
                        <input type='text' placeholder='Search Here..' value={input} onChange={handleInputChange} />
                    </div>
                    <CiSearch onClick={toggleInput} />
                    <CiHeart />
                    <PiHandbagLight />
                    <CiUser />
                </div>
            </div>

            <nav className='navbar'>
                <ul>
                    <li>SHOP</li>
                    <li>SKILLS</li>
                    <li>STORIES</li>
                    <li>ABOUT</li>
                    <li>CONTACT US</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header