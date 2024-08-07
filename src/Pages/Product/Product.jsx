import React, { useState } from 'react'
import "./Product.css"
import ProductGrid from '../../components/ProductGrid/ProductGrid'
import Sidebar from '../../components/Sidebar/Sidebar'
import { MdMenuOpen } from "react-icons/md";
import Recommend from '../../components/RecommendSection/Recommend';

const Product = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <>
            <Recommend/>
            <div className='product-container'>
                <MdMenuOpen className={`Menu-button ${sidebarOpen ? "" : "close"}`} onClick={toggleSidebar} />
                <Sidebar sidebarOpen={sidebarOpen} />
                <ProductGrid />
            </div>
        </>
    )
}

export default Product