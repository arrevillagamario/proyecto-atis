import React from "react";
import denuncias from "../../public/img/fotoDenuncias.avif";

const Denuncias = () => {
  return (
    <div className="h-screen">
      <h1 className="text-center uppercase text-6xl font-bold mt-20">
        Formulario de denuncias
      </h1>
      <div
        className="flex items-center justify-between"
        style={{ height: "800px" }}
      >
        <img src={denuncias} alt="" className="w-1/2" />
        <form className="mr-32 flex flex-col  p-5 rounded-lg shadow-lg">
          <label>Lugar de la denuncia</label>
          <select className="border border-black " name="" id=""></select>
          <label className="mt-4">Numéro de teléfono</label>
          <input type="text" className="border border-black  shadow-md" />
          <label className="mt-4">Descripcion de la denuncia</label>
          <textarea
            type="text"
            rows="5"
            className="border border-black shadow-md"
          />
        </form>
      </div>
    </div>
  );
};

export default Denuncias;
