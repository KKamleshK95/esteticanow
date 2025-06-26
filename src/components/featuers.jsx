import React from "react";
import featureImg from "../assets/feature_img.png";
import  Featureslist  from "./Featureslist.json";


const Features = () => (
  <div style={{ margin: "2rem 0", background: "transparent" }}>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
      <h2 style={{ margin: 0 }}>Featured</h2>
      <a href="#" style={{ color: "#222", textDecoration: "none", fontWeight: 500 }}>
        View all &rarr;
      </a>
    </div>
    <div className="row g-4">
      {Featureslist.map((f, i) => (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={i}>
          <div
            style={{
              background: "transparent",
              width: "auto",
              borderRadius: 12,
              overflow: "hidden",
              boxShadow: "0 1px 8px rgba(0, 0, 0, 0.06)",
              display: "flex",
              flexDirection: "column",
              minHeight: 220,
              height: "100%",
            }}
          >
            <div style={{ position: "relative" }}>
              <img
                src={featureImg}
                alt={f.name}
                className="rounded img-fluid w-100"
              />
              <div
                style={{
                  position: "absolute",
                  left: 8,
                  bottom: 8,
                  background: "rgba(131, 137, 133, 0.21)",
                  color: "lightgreen",
                  fontSize: 13,
                  borderRadius: 6,
                  padding: "2px 10px",
                  fontWeight: 500,
                  margin: "0 8px 8px 0",
                  width: "90%",
                }}
              >
                <i className="bi bi-patch-plus-fill" style={{ transform: "rotate(50deg)" }}></i>   {f.offer}
              </div>
            </div>
            <div style={{ padding: "0.75rem 1rem 0.5rem 1rem", flex: 1 }}>
              <div style={{ fontWeight: 600, fontSize: 16, marginBottom: 2, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                {f.name}
                <div
                  style={{
                    color: f.fav ? "#F5C518" : "#bbb",
                    fontSize: 20,
                    cursor: "pointer",
                  }}
                >
                  <i className={f.fav ? "bi bi-heart-fill" : "bi bi-heart"}></i>
                </div>
              </div>
              <div style={{ color: "#888", fontSize: 13, marginBottom: 8, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                <i className="bi bi-geo-alt" style={{ marginRight: 4 }}></i>
                {f.address}
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, fontSize: 14 }}>
                <div>
                  <span>
                    <i className="bi bi-star-fill" style={{ color: "#F5C518", marginRight: 2 }}></i>
                    {f.rating}
                  </span>
                  <span>
                    <i className="bi bi-geo-alt mx-2" style={{ color: "#A68B44", marginRight: 2 }}></i>
                    {f.distance}
                  </span>
                </div>
                <span style={{ color: "#888" }}>{f.type}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Features;