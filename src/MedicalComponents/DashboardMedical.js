import React from "react";

export default function DashboardMedical() {
  return (
    <>
      <head>
        <link rel="stylesheet" href="./style.css"></link>
      </head>
      <body>
        <header className="header">
          <a href="#" className="logo">
            {" "}
            <i className="fas fa-heartbeat"></i> Medicare{" "}
          </a>

          <nav className="navbar">
            <a href="#home">home</a>
            <a href="#services">services</a>
            <a href="#about">about</a>
          </nav>

          <div id="menu-btn" className="fas fa-bars"></div>
        </header>

        <section className="home" id="home">
          <div className="image">
            <img src="image/home-img.svg" alt="" />
          </div>

          <div className="content">
            <h3>Stay Safe, Stay Healthy</h3>
            <p>Our duty is to help members who are in emergency!!</p>
            <a href="#" className="btn">
              {" "}
              Contact s <span className="fas fa-chevron-right"></span>{" "}
            </a>
          </div>
        </section>

      </body>
    </>
  );
}
