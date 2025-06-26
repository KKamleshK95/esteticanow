import React from 'react';
import Featureslist from "./Featureslist.json";
import Banner from './banner';
import MobileSearchBar from './mobileSearchBar';

const navItems = [
  { name: "Home", icon: "bi bi-house-fill" },
  { name: "Reels", icon: "bi bi-instagram" },
  { name: "QR", icon: "bi bi-qr-code-scan" },
  { name: "History", icon: "bi bi-clock-history" },
  { name: "Profile", icon: "bi bi-person-fill" }
];

const HomeMobile = () => (
  <div>
    <div className="mobile-home">
      {/* Sidebar (2fr) */}
      <div></div>
      {/* Sidebar (2fr) */}
      <div>
        <MobileSearchBar />
        <Banner />
        <header className="mobile-header">
          <h2 style={{ margin: 0 }}>Featured</h2>
          <a href="#" style={{ color: "#222", textDecoration: "none", fontWeight: 500 }}>
            View all <i className="bi bi-chevron-right"></i>
          </a>
        </header>

        <main className="mobile-content">
          {Featureslist.map((f, i) => (
            <section className="mobile-card" key={i}>
              <div style={{ display: "flex", gap: 16 }}>
                <img
                  src={f.img}
                  alt={f.name}
                  style={{
                    width: 70,
                    height: 70,
                    borderRadius: 12,
                    objectFit: "cover"
                  }}
                />
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start" }}>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: 16 }}>{f.name}</div>
                      <div style={{ color: "#888", fontSize: 13, marginBottom: 2, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                        <i className="bi bi-geo-alt" style={{ marginRight: 4 }}></i>
                        {f.address}
                      </div>
                      <div style={{ fontSize: 13, color: "#888" }}>{f.type}</div>
                    </div>
                    <div style={{ color: f.fav ? "#F5C518" : "#bbb", fontSize: 20 }}>
                      <i className={f.fav ? "bi bi-heart-fill" : "bi bi-heart"}></i>
                    </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 14, margin: "4px 0" }}>
                    <span>
                      <i className="bi bi-star-fill" style={{ color: "#F5C518", marginRight: 2 }}></i>
                      {f.rating}
                    </span>
                    <span>
                      <i className="bi bi-geo-alt" style={{ color: "#A68B44", marginRight: 2 }}></i>
                      {f.distance}
                    </span>
                  </div>
                  <div style={{ color: "#22c55e", fontSize: 13, fontWeight: 500 }}>
                    <i className="bi bi-tag-fill"></i> {f.offer}
                  </div>
                </div>
              </div>
            </section>
          ))}
        </main>


      </div>
      {/* Sidebar (2fr) */}
      <div></div>
      {/* Sidebar (2fr) */}
    </div>
    <footer className="mobile-nav" >
      {navItems.map((item, idx) => (
        idx === 2 ? (
          // QR button (center, floating)
          <div key={idx} style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center", position: "relative" }}>
            <div
              style={{
                position: "absolute",
                top: -32,
                left: "50%",
                transform: "translateX(-50%)",
                zIndex: 2,
                width: 64,
                height: 64,
                borderRadius: "50%",
                background: "linear-gradient(-120deg, #C1A15F, #A68B44)",
                boxShadow: "0 4px 16px rgba(0,0,0,0.10)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "4px solid #fff"
              }}
            >
              <i className={item.icon} style={{ color: "#fff", fontSize: 32 }}></i>
            </div>
            <div style={{ visibility: "hidden" }}>
              <i className={item.icon} style={{ fontSize: 22 }}></i>
              <span style={{ fontSize: 11 }}>{item.name}</span>
            </div>
          </div>
        ) : (
          <div
            key={idx}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              flex: 1,
              color: idx === 0 ? "#A68B44" : "#5A6473",
              fontWeight: idx === 0 ? 600 : 400
            }}
          >
            <i
              className={item.icon}
              style={{
                fontSize: 22,
                background: idx === 0 ? "#C1A15F" : "none",
                borderRadius: idx === 0 ? 8 : 0,
                padding: idx === 0 ? 4 : 0,
                color: idx === 0 ? "#fff" : undefined
              }}
            ></i>
            <span style={{ fontSize: 11, color: idx === 0 ? "#A68B44" : "#5A6473" }}>{item.name}</span>
          </div>
        )
      ))}
    </footer>
  </div>

);

export default HomeMobile;