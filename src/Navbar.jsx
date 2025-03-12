import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // Iconos para el menú
import Logo from "./Logo";

const Navbar = ({ handleScrollToPrinciples, showPrincipios = false, showInicio = false }) => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full h-32 bg-black/70 flex items-center flex-row px-1">
      <Logo />
      <div className="w-px ml-4 h-16 bg-gray-400 opacity-60 hidden lg:flex"></div>

      {/* NAV NORMAL (solo en lg) */}
      <div className="w-60 h-full hidden lg:flex items-center justify-between">
        {showInicio && (
          <h3
            onClick={() => navigate("/")}
            className="text-white ml-5 font-[Montserrat] text-xl font-light hover:font-extrabold transition-all cursor-pointer"
          >
            Inicio
          </h3>
        )}
        {showPrincipios && (
          <h3
            onClick={handleScrollToPrinciples}
            className="cursor-pointer text-white ml-5 font-[Montserrat] text-xl font-light hover:font-extrabold transition-all"
          >
            Principios
          </h3>
        )}
        <h3
          onClick={() => navigate("/sumate")}
          className="text-white ml-5 font-[Montserrat] text-xl font-light hover:font-extrabold transition-all cursor-pointer"
        >
          Sumate
        </h3>
        <h3
          onClick={() => navigate("/fiscaliza")}
          className="text-white ml-5 font-[Montserrat] text-xl font-light hover:font-extrabold transition-all cursor-pointer"
        >
          Fiscalizá
        </h3>
      </div>

      {/* BOTÓN HAMBURGER (visible en md y menores) */}
      <button
        className="lg:hidden text-white text-3xl absolute right-5"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* MENÚ DESPLEGABLE (sólo en md y menores) */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-black/90 shadow-lg transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 lg:hidden`}
      >
        <button
          className="absolute top-4 right-4 text-white text-3xl"
          onClick={() => setMenuOpen(false)}
        >
          <FaTimes />
        </button>
        <ul className="mt-16 flex flex-col items-center space-y-6">
          {showInicio && (
            <li
              onClick={() => {
                navigate("/");
                setMenuOpen(false);
              }}
              className="text-white text-xl font-light hover:font-extrabold transition-all cursor-pointer"
            >
              Inicio
            </li>
          )}
          {showPrincipios && (
            <li
              onClick={() => {
                handleScrollToPrinciples();
                setMenuOpen(false);
              }}
              className="text-white text-xl font-light hover:font-extrabold transition-all cursor-pointer"
            >
              Principios
            </li>
          )}
          <li
            onClick={() => {
              navigate("/sumate");
              setMenuOpen(false);
            }}
            className="text-white text-xl font-light hover:font-extrabold transition-all cursor-pointer"
          >
            Sumate
          </li>
          <li
            onClick={() => {
              navigate("/fiscaliza");
              setMenuOpen(false);
            }}
            className="text-white text-xl font-light hover:font-extrabold transition-all cursor-pointer"
          >
            Fiscalizá
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
