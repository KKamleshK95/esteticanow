import React from 'react';
import logo from '../assets/est_logo25.png';

import Features from './featuers';
import Banner from './banner';


const navItems = [
    { name: "Home", icon: "bi bi-house-fill" },
    { name: "Reels", icon: "bi bi-instagram" },
    { name: "Search", icon: "bi bi-search" },
    { name: "Cart", icon: "bi bi-cart" },
    { name: "Login", icon: "bi bi-box-arrow-in-right" }
];

// const topNavItems = [
//   { name: "Profile", icon: "bi bi-person-fill" },
//   { name: "Settings", icon: "bi bi-gear-fill" }
// ];

const DesktopScreen = () => (
    <div className="desktop-screen">
{/* Sidebar (2fr) */}
        <div></div>
         {/* Main Content (10fr) */}
        <div>
        <nav className="d-flex justify-content-between align-items-center w-100 p-3">
            <div className="logo">
                <img src={logo} alt="Logo" width={200} />
            </div>
            <ul className="nav">
                {navItems.map((item, index) => (
                    <li key={index} className="nav-item mx-3">
                        <i className={`bi ${item.icon} mx-1`}></i> {item.name}
                    </li>
                ))}
            </ul>
        </nav>
        {/* Search and Location Bar */}
        <div className="d-flex justify-content-center align-items-center flex-column">
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginTop: '5rem', minWidth: '300px', width: '60%' }}>
                <div style={{ position: 'relative', width: '250px', }}>
                    <select className='location' style={{ width: '100%', border: "0px solid #ccc", padding: '.7rem 2rem' }}>
                        <option value="">
                            1208, Spline Arcade, Flat no 1...
                        </option>
                    </select>
                    <i
                        className="bi bi-geo-alt-fill"
                        style={{
                            position: 'absolute',
                            left: '10px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            color: '#A68B44',
                            pointerEvents: 'none'
                        }}
                    ></i>
                </div>
                <div className='search'>
                    <i className="bi bi-search" style={{ marginRight: '0.5rem', color: '#5A6473' }}></i>
                    <input
                        type="text"
                        placeholder="Search Spa, Services..."
                    />
                </div>
            </div>
        </div>
        {/* Search and Location Bar */}

        {/* three feature */}

        
        {/* three feature */}

        {/* banner */}

        <Banner />
        {/* banner */}

        <Features />
        </div>

      {/* Right Sidebar (2fr) */}
        <div></div>
    </div>
);

export default DesktopScreen;
