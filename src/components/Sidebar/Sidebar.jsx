import React, { useState } from 'react';
import './Sidebar.css';
import { GoChevronDown } from "react-icons/go";
import { CLEAR_FILTER, SET_FILTER } from '../../reducers/searchReducer';
import { useDispatch } from 'react-redux';


const Sidebar = ({ sidebarOpen }) => {
    const dispatch = useDispatch();
    const [openSections, setOpenSections] = useState(true);

    const toggleSection = () => {
        setOpenSections(!openSections);
    };

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        if (checked) {
            dispatch(SET_FILTER(name));
        }
        else{
            dispatch(CLEAR_FILTER(name));
        }
    };

    return (
        <div className={`sidebar ${sidebarOpen ? "" : "close"}`}>

            <div className="customizable-checkbox">
                <input type="checkbox" id="customizable" name="customizable" />
                <label htmlFor="customizable">CUSTOMIZABLE</label>
            </div>

            <div className="sidebar-section">
                <h3 className="section-header" onClick={toggleSection}>
                    IDEAL FOR <span className={`dropdown-arrow ${openSections ? '' : 'open'}`}><GoChevronDown /></span>
                </h3>
                <div className={`section-content ${openSections ? '' : 'open'}`}>
                    <div>
                        <input type="checkbox" id="category" name="Mens" onChange={handleCheckboxChange}/>
                        <label htmlFor='category'>Men</label>
                    </div>
                    <div>
                        <input type="checkbox" id="category" name="Women" onChange={handleCheckboxChange}/>
                        <label htmlFor='category'>Women</label>
                    </div>
                    <div>
                        <input type="checkbox" id="category" name="Gold" onChange={handleCheckboxChange}/>
                        <label htmlFor='category'>jewelery</label>
                    </div>
                </div>
            </div>

            <div className="sidebar-section">
                <h3 className="section-header">
                    OCCASION <span className={`dropdown-arrow`}><GoChevronDown /></span>
                </h3>
                <div className={`section-content`}>
                    All
                </div>
            </div>

            <div className="sidebar-section">
                <h3 className="section-header">
                    WORK <span className={`dropdown-arrow`}><GoChevronDown /></span>
                </h3>
                <div className={`section-content`}>
                    All
                </div>
            </div>

            <div className="sidebar-section">
                <h3 className="section-header">
                    FABRIC <span className={`dropdown-arrow`}><GoChevronDown /></span>
                </h3>
                <div className={`section-content`}>
                    All
                </div>
            </div>

            <div className="sidebar-section">
                <h3 className="section-header" >
                    SEGMENT <span className={`dropdown-arrow`}><GoChevronDown /></span>
                </h3>
                <div className={`section-content`}>
                    All
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
