import React from 'react';
import LOGO from './assets/logo.webp';

export default function Logo() {
  return (
    <div className="flex flex-row items-center justify-center">
      {/* Logo con tamaño responsivo */}
      <img
        src={LOGO}
        alt="Logo"
        className="h-18 w-auto object-cover ml-3 mb-4"
      />
      {/* Contenedor del texto */}
      <div className="flex flex-col items-center mt-2">
        <div className="flex flex-row gap-1">
          <h3 className="text-white font-[Montserrat] text-sm lg:text-2xl sm:text-lg">LA</h3>
          <h3 className="text-white font-[Montserrat] text-sm font-extrabold lg:text-2xl sm:text-lg">
            LIBERTAD
          </h3>
          <h3 className="text-white font-[Montserrat] text-sm lg:text-2xl sm:text-lg">
            AVANZA
          </h3>
        </div>
        <h4 className="text-white font-[Montserrat] text-sm">
          Concordia
        </h4>
      </div>
    </div>
  );
}
