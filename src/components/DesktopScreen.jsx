import React from 'react';
import logo from '../assets/est_logo25.png';

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

        <nav className="d-flex justify-content-around align-items-center w-100 p-3">
            <div className="logo">
                <img src={logo} alt="Logo" width={200}/>
            </div>
            <ul className="nav">
                {navItems.map((item, index) => (
                    <li key={index } className="nav-item mx-3">
                        <i className={`bi ${item.icon}`}></i> {item.name}
                    </li>
                ))}
            </ul>
        </nav>

            <div  style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginTop: '5rem', minWidth: '300px' }}>
            <div className='location'>
                <i className="bi bi-geo-alt-fill" style={{ marginRight: '0.5rem', color: '#A68B44' }}></i>
                1208, Spline Arcade, Flat no 1...
            </div>
            <div className='search'>
                <i className="bi bi-search" style={{ marginRight: '0.5rem', color: '#5A6473' }}></i>
                <input
                type="text"
                placeholder="Search Spa, Services..."
                />
            </div>
            </div>
        {/* <nav className="top-nav">
            <ul>
                {topNavItems.map((item, index) => (
                    <li key={index}>
                        <i className={`bi ${item.icon}`}></i> {item.name}
                    </li>
                ))}
            </ul>
        </nav> */}

        {/* <main className="main-content">
            <section className="card">
                <i className="bi bi-chat-text-fill"></i>
                <h2>Section Title</h2>
                <p>Some content from design…</p>
            </section>
        </main> */}
    </div>
);

export default DesktopScreen;
