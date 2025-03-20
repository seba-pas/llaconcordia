import React, { useRef } from "react";
import MILEI from "./assets/milei.webp";
import Principles from "./Principles";
import Logo from "./Logo";
import { FaArrowCircleRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar"; // Import the new Navbar component

function Home() {
  // Creamos una referencia para la sección de Principles
  const principlesRef = useRef(null);
  const navigate = useNavigate();
  // Función para desplazar la vista hasta la sección de Principles
  const handleScrollToPrinciples = () => {
    if (principlesRef.current) {
      principlesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="relative w-dvw h-dvh">
        {/* Imagen de fondo */}
        <img
          src={MILEI}
          alt="cargando"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        {/* Nav superpuesto */}
        <Navbar
          handleScrollToPrinciples={handleScrollToPrinciples}
          showPrincipios={true}
        />{" "}
        {/* Use the Navbar component */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 mt-15 ">
          <button
            onClick={() => navigate("/sumate")}
            className="bg-blue-900 hover:bg-violet-800 h-25 mt-5 w-md rounded-full text-white font-[Montserrat] text-3xl   font-extrabold flex gap-5 flex-row justify-center items-center hover:gap-15 transition-all duration-300"
          >
            SUMATE
            <FaArrowCircleRight
              size={30}
              className="sm:size-18 md:size-18 lg:size-20"
            />
          </button>
          <button
            onClick={() => navigate("/fiscaliza")}
            className="bg-blue-900 hover:bg-violet-800 h-25 mt-5 w-md rounded-full text-white font-[Montserrat] text-3xl   font-extrabold flex gap-2 flex-row justify-center items-center hover:gap-15 transition-all duration-300"
          >
            FISCALIZÁ
            <FaArrowCircleRight
              size={25}
              className="sm:size-18 md:size-18 lg:size-20"
            />
          </button>
        </div>
      </div>
      {/* Contenedor de Principles con referencia */}
      <div ref={principlesRef}>
        <Principles />
      </div>
      <footer className="w-screen h-40 bg-blue-950">
        <div className="flex justify-end pt-10 mr-20">
          <Logo />
        </div>
      </footer>
    </>
  );
}

export default Home;
