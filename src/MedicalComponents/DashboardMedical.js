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

        <section className="icons-container">
          <div className="icons">
            <i className="fas fa-user-md"></i>
            <h3>140+</h3>
            <p>doctors at work</p>
          </div>

          <div className="icons">
            <i className="fas fa-users"></i>
            <h3>1040+</h3>
            <p>satisfied patients</p>
          </div>

          <div className="icons">
            <i className="fas fa-procedures"></i>
            <h3>500+</h3>
            <p>bed facility</p>
          </div>

          <div className="icons">
            <i className="fas fa-hospital"></i>
            <h3>80+</h3>
            <p>available hospitals</p>
          </div>
        </section>

        <section className="services" id="services">
          <h1 className="heading">
            {" "}
            our <span>services</span>{" "}
          </h1>

          <div className="box-container">
            <div className="box">
              <i className="fas fa-notes-medical"></i>
              <h3>free checkups</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad,
                omnis.
              </p>
              <a href="#" className="btn">
                {" "}
                learn more <span className="fas fa-chevron-right"></span>{" "}
              </a>
            </div>

            <div className="box">
              <i className="fas fa-ambulance"></i>
              <h3>24/7 ambulance</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad,
                omnis.
              </p>
              <a href="#" className="btn">
                {" "}
                learn more <span className="fas fa-chevron-right"></span>{" "}
              </a>
            </div>

            <div className="box">
              <i className="fas fa-user-md"></i>
              <h3>expert doctors</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad,
                omnis.
              </p>
              <a href="#" className="btn">
                {" "}
                learn more <span className="fas fa-chevron-right"></span>{" "}
              </a>
            </div>

            <div className="box">
              <i className="fas fa-pills"></i>
              <h3>medicines</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad,
                omnis.
              </p>
              <a href="#" className="btn">
                {" "}
                learn more <span className="fas fa-chevron-right"></span>{" "}
              </a>
            </div>

            <div className="box">
              <i className="fas fa-procedures"></i>
              <h3>bed facility</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad,
                omnis.
              </p>
              <a href="#" className="btn">
                {" "}
                learn more <span className="fas fa-chevron-right"></span>{" "}
              </a>
            </div>

            <div className="box">
              <i className="fas fa-heartbeat"></i>
              <h3>total care</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad,
                omnis.
              </p>
              <a href="#" className="btn">
                {" "}
                learn more <span className="fas fa-chevron-right"></span>{" "}
              </a>
            </div>
          </div>
        </section>

        <section className="about" id="about">
          <h1 className="heading">
            {" "}
            <span>about</span> us{" "}
          </h1>

          <div className="row">
            <div className="image">
              <img src="image/about-img.svg" alt="" />
            </div>

            <div className="content">
              <h3>we take care of your healthy life</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure
                ducimus, quod ex cupiditate ullam in assumenda maiores et culpa
                odit tempora ipsam qui, quisquam quis facere iste fuga, minus
                nesciunt.
              </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus
                vero ipsam laborum porro voluptates voluptatibus a nihil
                temporibus deserunt vel?
              </p>
              <a href="#" className="btn">
                {" "}
                learn more <span className="fas fa-chevron-right"></span>{" "}
              </a>
            </div>
          </div>
        </section>
      </body>
    </>
  );
}
