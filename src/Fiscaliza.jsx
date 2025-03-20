import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import MILEIAS from "./assets/milei-asuncion.webp";
import Navbar from "./Navbar";
import Logo from "./Logo";

// Esquema de validación con Yup
const validationSchema = Yup.object().shape({
  nombre: Yup.string().required("El nombre es requerido"),
  apellido: Yup.string().required("El apellido es requerido"),
  edad: Yup.number()
    .typeError("La edad debe ser un número")
    .required("La edad es requerida")
    .positive("La edad debe ser un número positivo")
    .integer("La edad debe ser un número entero"),
  sexo: Yup.string().required("El sexo es requerido"),
  dni: Yup.string().required("El DNI es requerido"),
  provincia: Yup.string().required("La provincia es requerida"),
  ciudad: Yup.string().required("La ciudad es requerida"),
  barrio: Yup.string().required("El barrio es requerido"),
  email: Yup.string()
    .email("Formato de email inválido")
    .required("El email es requerido"),
  celular: Yup.string().required("El celular es requerido"),
});

const FiscalizaPage = () => {
  const initialValues = {
    nombre: "",
    apellido: "",
    edad: "",
    sexo: "",
    dni: "",
    provincia: "",
    ciudad: "",
    barrio: "",
    email: "",
    celular: "",
    registro: 'fiscal'
  };

  const handleSubmit = async (values, { resetForm, setSubmitting }) => {
    try {
      await fetch(
        'https://script.google.com/macros/s/AKfycbzZLDwmWaua-5ulMwogOUMwye3pegsOZUF8yDbrzrGpeck2SG4j-Bte2oHQRwhr4Yg7zQ/exec',
        {
          method: 'POST',
          mode: 'no-cors', // obligatorio para evitar errores CORS
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        }
      );
  
      alert("¡Registro enviado con éxito!");
      resetForm();
  
    } catch (error) {
      console.error("Error enviando datos:", error);
      alert("Error al registrar, intenta nuevamente.");
    } finally {
      setSubmitting(false);
    }
  };
  



  return (
    <>
      <Navbar showInicio={true} />
      <div className="flex max-w-5xl mx-auto p-8 mt-30">
        {/* Sección de la imagen (lado izquierdo) */}
        <div className="flex-1 mr-8">
          <img
            src={MILEIAS}
            alt="Imagen de referencia"
            className="w-full object-cover rounded-lg"
          />
        </div>

        {/* Sección del formulario (lado derecho) */}
        <div className="flex-1">
          <h2 className="text-purple-700 text-3xl font-bold font-[Montserrat] mt-1 ">
            Completá tus datos para fiscalizar
          </h2>
          <div className="h-2 w-12 bg-yellow-500 mt-2 mb-8"></div>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="grid grid-cols-2 gap-4">
                {/* Nombre */}
                <div className="col-span-1">
                  <label htmlFor="nombre" className="block">
                    Nombre
                  </label>
                  <Field
                    type="text"
                    id="nombre"
                    name="nombre"
                    placeholder="Nombre"
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                  <ErrorMessage
                    name="nombre"
                    component="div"
                    className="text-red-500"
                  />
                </div>

                {/* Apellido */}
                <div className="col-span-1">
                  <label htmlFor="apellido" className="block">
                    Apellido
                  </label>
                  <Field
                    type="text"
                    id="apellido"
                    name="apellido"
                    placeholder="Apellido"
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                  <ErrorMessage
                    name="apellido"
                    component="div"
                    className="text-red-500"
                  />
                </div>

                {/* Edad */}
                <div className="col-span-1">
                  <label htmlFor="edad" className="block">
                    Edad
                  </label>
                  <Field
                    type="number"
                    id="edad"
                    name="edad"
                    placeholder="Edad"
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                  <ErrorMessage
                    name="edad"
                    component="div"
                    className="text-red-500"
                  />
                </div>

                {/* Sexo */}
                <div className="col-span-1">
                  <label htmlFor="sexo" className="block">
                    Sexo
                  </label>
                  <Field
                    as="select"
                    id="sexo"
                    name="sexo"
                    className="w-full p-2 border border-gray-300 rounded"
                  >
                    <option value="">Seleccione un sexo</option>
                    <option value="masculino">Masculino</option>
                    <option value="femenino">Femenino</option>
                  </Field>
                  <ErrorMessage
                    name="sexo"
                    component="div"
                    className="text-red-500"
                  />
                </div>

                {/* DNI */}
                <div className="col-span-1">
                  <label htmlFor="dni" className="block">
                    DNI
                  </label>
                  <Field
                    type="text"
                    id="dni"
                    name="dni"
                    placeholder="DNI"
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                  <ErrorMessage
                    name="dni"
                    component="div"
                    className="text-red-500"
                  />
                </div>

                {/* Provincia */}
                <div className="col-span-1">
                  <label htmlFor="provincia" className="block">
                    Provincia
                  </label>
                  <Field
                    as="select"
                    id="provincia"
                    name="provincia"
                    className="w-full p-2 border border-gray-300 rounded"
                  >
                    <option value="">Seleccione una provincia</option>
                    <option value="Entre Rios">Entre Rios</option>

                    {/* Agrega más opciones de provincias según sea necesario */}
                  </Field>
                  <ErrorMessage
                    name="provincia"
                    component="div"
                    className="text-red-500"
                  />
                </div>

                {/* Ciudad */}
                <div className="col-span-1">
                  <label htmlFor="ciudad" className="block">
                    Ciudad
                  </label>
                  <Field
                    type="text"
                    id="ciudad"
                    name="ciudad"
                    placeholder="Ciudad"
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                  <ErrorMessage
                    name="ciudad"
                    component="div"
                    className="text-red-500"
                  />
                </div>

                {/* Barrio */}
                <div className="col-span-1">
                  <label htmlFor="barrio" className="block">
                    Barrio
                  </label>
                  <Field
                    type="text"
                    id="barrio"
                    name="barrio"
                    placeholder="Barrio"
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                  <ErrorMessage
                    name="barrio"
                    component="div"
                    className="text-red-500"
                  />
                </div>

                {/* Email */}
                <div className="col-span-1">
                  <label htmlFor="email" className="block">
                    Email
                  </label>
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500"
                  />
                </div>

                {/* Celular */}
                <div className="col-span-1">
                  <label htmlFor="celular" className="block">
                    Celular
                  </label>
                  <Field
                    type="text"
                    id="celular"
                    name="celular"
                    placeholder="Celular"
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                  <ErrorMessage
                    name="celular"
                    component="div"
                    className="text-red-500"
                  />
                </div>

                {/* Botón de Envío */}
                <div className="col-span-2 text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-purple-700 text-white text-xl py-2 mt-6  w-60 h-15 px-4 rounded"
                  >
                    Enviar
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      <footer className="w-screen h-40 bg-blue-950 mt-50">
        <div className="flex justify-end pt-10 mr-20">
          <Logo />
        </div>
      </footer>
    </>
  );
};

export default FiscalizaPage;
