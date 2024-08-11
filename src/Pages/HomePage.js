// src/components/HomePage.js
import React from "react";
import Navbar from "../components/NavBar";
import { MDBContainer } from "mdb-react-ui-kit";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <MDBContainer
        className="d-flex align-items-center justify-content-center"
        style={{ height: "80vh" }} // Adjust as needed
      >
        <h1
          className="display-1"
          style={{
            fontSize: "5rem",
            fontWeight: "bold",
            color: "#007bff",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)"
          }}
        >
          AGINO
        </h1>
      </MDBContainer>
    </>
  );
};

export default HomePage;
