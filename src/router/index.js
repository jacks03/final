import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Navbar from "../components/NavBar";
import Profile from "../pages/profile";
import Administrador from "../pages/Administrador";
import Private from "../layouts/usuario";

//importanto home
import Home from "../pages/Home/home";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Navbar />}/>
        <Route path="/2" element={<Home/>}/>

        {/*route privada */}
        <Route element={<Private />}>
        <Route path="/administracion" element={<Administrador/>} />
        <Route path="/perfil" element={<Profile/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
