import React from 'react';

const HomeMobile = () => (
  <div className="mobile-home">
    <header className="mobile-header">
      <h1>My App</h1>
      <i className="bi bi-list"></i>
    </header>

    <main className="mobile-content">
      <section className="mobile-card">
        <i className="bi bi-chat-text-fill"></i>
        <h2>Mobile Section</h2>
        <p>Content goes here…</p>
      </section>
      {/* Additional mobile cards */}
    </main>

    <footer className="mobile-nav">
      <i className="bi bi-house-fill"></i>
      <i className="bi bi-chat-fill"></i>
      <i className="bi bi-person-fill"></i>
    </footer>
  </div>
);

export default HomeMobile;
