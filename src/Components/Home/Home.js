import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Healthblog = () => {
  return (
    <section className="hero-section">
      <div style={{ margin: "auto", maxWidth: "1200px" }}>
        <div className="card-container">
          <div className="card">
            <div className="card-content">
              <div>
                <img className="pic" src="/instant.png" alt="consultation" />
              </div>
              <Link to="../InstantConsultation">
                <button
                  type="button"
                  className="btn btn-primary btn-lg"
                  className="button"
                >
                  Instant Consultation
                </button>
              </Link>
            </div>
          </div>

          <div className="card">
            <div className="card-content">
              <div>
                <img className="pic" src="/appointment.png" alt="appointment" />
              </div>
              <Link to="../BookingConsultation">
                <button
                  type="button"
                  className="btn btn-primary btn-lg"
                  className="button"
                >
                  Book an Appointment
                </button>
              </Link>
            </div>
          </div>

          <div className="card">
            <div className="card-content">
              <div>
                <img className="pic" src="/checkup.png" alt="checkup" />
              </div>
              <Link to="../SelfCheckup">
                <button
                  type="button"
                  className="btn btn-primary btn-lg"
                  className="button"
                >
                  Self Checkup
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Healthblog;
