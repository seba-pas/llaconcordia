import React from 'react';

function Principles() {
  // Array de principios
  const principles = [
    "Nuestro compromiso es con la sociedad. No nos importa lo que opinen los que defienden lo irrelevante.",
    "La inflación es la única variable que importa, vamos a destruirla.",
    "El Estado no debe ser gestionado, debe ser desmantelado.",
    "Si el Estado de Derecho no protege la vida, la libertad y la propiedad de los argentinos, entonces el Estado de Derecho no existe.",
    "La República es un medio para proteger el Estado de Derecho de la tiranía de las mayorías. Si no es eso, no es nada.",
    "El delito debe ser reprimido siempre y en todo lugar.",
    "El diálogo es un medio, no un fin en sí mismo. Si no conduce a ninguna parte, se vuelve un juego de necios.",
    "La política debe discutir ideas, no perseguir al adversario.",
    "La libertad de expresión es para todos, aunque nos puedan ser criticados.",
    "TODOS SON BIENVENIDOS A LAS FUERZAS DEL CIELO."
  ];

  return (
    <div className="p-20 px-100">
      <h1 className="font-medium mb-4 font-[Montserrat] text-3xl  text-blue-900">Principios</h1>
      <div className='h-1 w-12 bg-yellow-500'></div>
      {/* Grid de 3 columnas en pantallas medianas, ajustable en pantallas más pequeñas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-[Montserrat] text-xl">
        {principles.map((principle, index) => (
          <div 
            key={index} 
            className=" p-4 rounded shadow-md bg-white"
          >
            {/* Encabezado con el número */}
            <div className="text-2xl font-extrabold mb-2">{index + 1}.</div>
            {/* Texto del principio */}
            {
              index + 1 === 10 ?
             <p className='text-purple-700 font-bold'>{principle}</p> :   <p>{principle}</p> 
            }
          </div>
        ))}
      </div>
    </div>
  );
}

export default Principles;
