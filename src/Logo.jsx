import React from 'react'
import LOGO from './assets/logo.webp'

export default function Logo() {
  return (
    <>
    
     <img
               src={LOGO}
               alt="cargando"
               className="h-18 w-auto object-cover ml-20 mb-4"
             />
             <div className="flex flex-col">
               <div className="flex flex-row">
                 <h3 className="text-white ml-3 font-[Montserrat] text-2xl">LA</h3>{" "}
                 <h3 className="text-white ml-1 font-[Montserrat] font-extrabold text-2xl">
                   LIBERTAD
                 </h3>{" "}
                 <h3 className="text-white ml-1 font-[Montserrat] text-2xl">
                   AVANZA
                 </h3>
               </div>
               <h4 className="text-white ml-5 font-[Montserrat] text-lg self-center">
                 Concordia
               </h4>
             </div>
    </>
  )
}
