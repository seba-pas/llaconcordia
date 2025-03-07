import React from "react";
import Logo from "./Logo";
import { useNavigate } from "react-router-dom";

const Navbar = ({
  handleScrollToPrinciples,
  showPrincipios = false,
  showInicio = false,
}) => {
  const navigate = useNavigate();

  return (
    <nav className="absolute top-0 left-0 w-full h-32 bg-black/70 flex items-center flex-row">
      <Logo />
      <div className="w-px ml-4 h-16 bg-gray-400 opacity-60"></div>
      <div className="w-60 h-full flex items-center justify-between">
        {showInicio && (
          <h3
            onClick={() => navigate("/")}
            className="text-white ml-5 font-[Montserrat] text-xl font-light hover:font-extrabold transition-all"
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
          className="text-white ml-5 font-[Montserrat] text-xl font-light hover:font-extrabold transition-all"
        >
          Sumate
        </h3>
        <h3
          onClick={() => navigate("/fiscaliza")}
          className="text-white ml-5 font-[Montserrat] text-xl font-light hover:font-extrabold transition-all"
        >
          Fiscalizá
        </h3>
      </div>
    </nav>
  );
};

export default Navbar;
