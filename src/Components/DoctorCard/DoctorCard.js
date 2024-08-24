import React, { useEffect, useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { v4 as uuidv4 } from "uuid";
import AppointmentForm from "../AppointmentForm/AppointmentForm";
import "./DoctorCard.css";

const DoctorCard = ({ name, speciality, experience, ratings }) => {
  const [showModal, setShowModal] = useState(false);
  const [appointments, setAppointments] = useState([]);

  const handleBooking = () => {
    setShowModal(true);
  };

  const handleCancel = (appointmentId) => {
    const updatedAppointments = appointments.filter(
      (appointment) => appointment.id !== appointmentId
    );
    setAppointments(updatedAppointments);

    // Delete appointment data from localStorage
    localStorage.removeItem("appointmentData");

    // Trigger changes in the Notification component with storage events
    window.dispatchEvent(new Event("storage"));
  };

  const handleFormSubmit = (appointmentData) => {
    const newAppointment = {
      id: uuidv4(),
      ...appointmentData,
    };
    const updatedAppointments = [...appointments, newAppointment];
    setAppointments(updatedAppointments);
    setShowModal(false);

    const doctorData = {
      name,
      speciality,
      experience,
      ratings,
    };

    localStorage.setItem("doctorData", JSON.stringify(doctorData));
    localStorage.setItem("appointmentData", JSON.stringify(newAppointment));

    window.dispatchEvent(new Event("storage"));
  };

  return (
    <div className="doctor-card-container">
      <div className="doctor-card-details-container">
        <div className="doctor-card-profile-image-container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="46"
            height="46"
            fill="currentColor"
            className="bi bi-person-fill"
            viewBox="0 0 16 16"
          >
            {" "}
            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />{" "}
          </svg>
        </div>
        <div className="doctor-card-details">
          <div className="doctor-card-detail-name">{name}</div>
          <div className="doctor-card-detail-speciality">{speciality}</div>
          <div className="doctor-card-detail-experience">
            {experience} years experience
          </div>
          <div className="doctor-card-detail-consultationfees">
            Ratings: {ratings}
          </div>
        </div>
      </div>

      <div className="doctor-card-options-container">
        <button
          className={`book-appointment-btn ${
            appointments.length > 0 ? "cancel-appointment" : ""
          }`}
          onClick={handleBooking}
        >
          {appointments.length > 0 ? (
            <div>Cancel Appointment</div>
          ) : (
            <div>Book Appointment</div>
          )}
          <div>No Booking Fee</div>
        </button>
        <Popup
          style={{ backgroundColor: "#FFFFFF" }}
          modal
          open={showModal}
          onClose={() => setShowModal(false)}
        >
          {
            <div
              className="doctorbg"
              style={{ height: "80vh", overflow: "scroll" }}
            >
              <div>
                <div className="doctor-card-profile-image-container">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="46"
                    height="46"
                    fill="currentColor"
                    className="bi bi-person-fill img"
                    viewBox="0 0 16 16"
                  >
                    {" "}
                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />{" "}
                  </svg>
                </div>
                <div className="doctor-card-details">
                  <div className="doctor-card-detail-name">{name}</div>
                  <div className="doctor-card-detail-speciality">
                    {speciality}
                  </div>
                  <div className="doctor-card-detail-experience">
                    {experience} years experience
                  </div>
                  <div className="doctor-card-detail-consultationfees">
                    Ratings: {ratings}
                  </div>
                </div>
              </div>

              {appointments.length > 0 ? (
                <>
                  <h3 style={{ textAlign: "center" }}>Appointment Booked!</h3>
                  {appointments.map((appointment) => (
                    <div className="bookedInfo" key={appointment.id}>
                      <p>Name: {appointment.name}</p>
                      <p>Phone Number: {appointment.phoneNumber}</p>
                      <p>Book of Appointment: {appointment.date}</p>
                      <p>Time Slot: {appointment.selectedSlot}</p>
                      <button
                        className="cancel-appointment-btn"
                        style={{ marginTop: "20px" }}
                        onClick={() => handleCancel(appointment.id)}
                      >
                        Cancel Appointment
                      </button>
                    </div>
                  ))}
                </>
              ) : (
                <AppointmentForm onSubmit={handleFormSubmit} />
              )}
            </div>
          }
        </Popup>
      </div>
    </div>
  );
};

export default DoctorCard;
