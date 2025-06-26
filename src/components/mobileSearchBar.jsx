import React from "react";

const MobileSearchBar = () => (
  <div style={{
   
    padding: "1.2rem 0.8rem 0.5rem 0.8rem",
    borderRadius: 18
  }}>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 18 }}>
      <div style={{
        display: "flex",
        alignItems: "center",
        background: "#fff",
        borderRadius: 16,
        padding: "0.3rem 1.1rem 0.3rem 0.8rem",
        fontWeight: 600,
        color: "#A68B44",
        fontSize: 17,
        boxShadow: "0 1px 4px rgba(0,0,0,0.04)"
      }}>
        <i className="bi bi-geo-alt-fill" style={{ marginRight: 6, color: "#A68B44", fontSize: 18 }}></i>
        Madhapur
        <i className="bi bi-chevron-down" style={{ marginLeft: 6, fontSize: 14 }}></i>
      </div>
      <div style={{
        background: "#fff",
        borderRadius: 12,
        padding: "0.4rem 0.7rem",
        boxShadow: "0 1px 4px rgba(0,0,0,0.04)"
      }}>
        <i className="bi bi-bell" style={{ color: "#A68B44", fontSize: 20 }}></i>
      </div>
    </div>
    <div style={{
      display: "flex",
      alignItems: "center",
      background: "#fff",
      borderRadius: 14,
      padding: "0.6rem 1rem",
      boxShadow: "0 1px 4px rgba(0,0,0,0.04)"
    }}>
      <i className="bi bi-search" style={{ color: "#5A6473", fontSize: 18, marginRight: 8 }}></i>
      <input
        type="text"
        placeholder="Search Spa, Services..."
        style={{
          border: "none",
          outline: "none",
          background: "transparent",
          width: "100%",
          color: "#5A6473",
          fontSize: 16
        }}
      />
    </div>
  </div>
);

export default MobileSearchBar;