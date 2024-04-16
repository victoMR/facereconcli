import React from "react";
import "../styles/home.css";
import Header from "./header"; // Import the 'Header' component
import Footer from "./footer";
import Charts from "./charts";

export default function Home() {

  return (
    <>
      <Header />
      <div>
        <div className="backgraund">
          <div className="backgraundText">
            <h1>FaceRecon</h1>
            <p>
              FaceRecon es un sistema para el ingreso de los estudiantes a la
              UTSJR mediante el reconocimiento facial.
            </p>
          </div>
        </div>
        <div>
          <Charts />
        </div>
      </div>
      <Footer />
    </>
  );
}
