import React from "react";
import { Link, Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <div>
      <nav className="space-x-3">
        <Link to={"/"}>Inicio</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/denuncias"}>Denuncias</Link>
        <Link to={"/contacto"}>Contacto</Link>
        <Link to={"/signup"}>Sign up</Link>
        <Link to={"/login"}>Log in</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
