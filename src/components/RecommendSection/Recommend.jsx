import React, { useState } from 'react'
import "./Recommend.css"
import { GoChevronDown } from 'react-icons/go';

const Recommend = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className="filter-header">
            <div className="sort-options" onClick={toggleDropdown}>
                <span>RECOMMENDED</span>
                <GoChevronDown />
                {isDropdownOpen && (
                    <ul className="dropdown-menu">
                        <li>Price: Low to High</li>
                        <li>Price: High to Low</li>
                        <li>Newest Arrivals</li>
                    </ul>
                )}
            </div>
        </div>
    )
}

export default Recommend