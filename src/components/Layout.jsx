import { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import facebook from "../../public/img/facebook.png";
import insta from "../../public/img/instagram.png";
import twiter from "../../public/img/twiter.png";
import logo from "../../public/img/logo.png";

const Layout = () => {
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsNavbarFixed(true);
      } else {
        setIsNavbarFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarClasses = `bg-white ${
    isNavbarFixed ? "fixed top-0 left-0 w-full shadow-md" : ""
  }`;
  return (
    <div>
      <nav className={navbarClasses}>
        <div className="container mx-auto py-4">
          <div className="flex justify-between items-center h-16 mr-5 ">
            <img src={logo} alt="" className="h-24" />
            <div className="space-x-3">
              <Link to={"/"}>Inicio</Link>
              <Link to={"/about"}>About</Link>
              <Link to={"/denuncias"}>Denuncias</Link>
              <Link to={"/contacto"}>Contacto</Link>
              <Link
                to={"/signup"}
                style={{ backgroundColor: "#9cc8be" }}
                className="py-2 px-3 rounded-xl text-white"
              >
                Sign up
              </Link>
              <Link
                to={"/login"}
                style={{ backgroundColor: "#9cc8be" }}
                className="py-2 px-3 rounded-xl text-white"
              >
                Log in
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <div>
        <Outlet />
      </div>
      <footer style={{ backgroundColor: "#9cc8be" }}>
        <div className="flex container items-center justify-between py-12">
          <div>
            <p className="w-72 text-white">
              Dirección: Colonia Buenos Aires 3, Diagonal Centroamérica, Avenida
              Alvarado, contiguo al Ministerio de Hacienda
            </p>
          </div>
          <div className="flex space-x-4">
            <img src={facebook} alt="Imagen de facebook" className="h-11" />
            <img src={insta} alt="" className="h-11" />
            <img src={twiter} alt="" className="h-11" />
          </div>
          <div className="w-72 text-white">
            <p>Liliana Aguilar</p>
            <p>Mario Arrevillaga</p>
            <p>Jairo Erazo</p>
            <p>Gabriel Rendón</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
