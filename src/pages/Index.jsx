import React from "react";

const Index = () => {
  return (
    <div className="flex flex-col items-center justify-center mb-8">
      <img src="./img/index.png" alt="imagenInicio" className="w-100 h-96" />
      <div>
        <h1 className="text-xl font-medium text-gray-900  text-center pt-6 ">
          Ingrese su número de denuncia
        </h1>
      </div>
      <div className="mt-4">
        <input
          type="text"
          name="nombre"
          placeholder="Ejemplo: 243789"
          className="bg-gray-50 w-11/12 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        />
      </div>
      <div className="pt-6">
        <button
          type="submit"
          className="w-33 text-white bg-teal-600 hover:bg-teal-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  flex justify-start"
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Index;
