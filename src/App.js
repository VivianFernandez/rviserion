import React from "react";
import LoginAdmin from "./modulo/admin/pages/LoginAdmin";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeAdmin from "./modulo/admin/pages/HomeAdmin";
import ProductoAdmin from "./modulo/admin/pages/ProductoAdmin";
import ClienteAdmin from "./modulo/admin/pages/ClienteAdmin";
import IndexCliente from "./modulo/cliente/pages/IndexCliente";
import LoginCliente from "./modulo/cliente/pages/LoginCliente";
import CategoriasCliente from "./modulo/cliente/pages/CategoriasCliente";
import AudifonosCliente from "./modulo/cliente/pages/AudifonosCliente";
import IluminacionCliente from "./modulo/cliente/pages/IluminacionCliente";
import MonitoresCliente from "./modulo/cliente/pages/MonitoresCliente";
import MouseCliente from "./modulo/cliente/pages/MouseCliente";
import MousePadCliente from "./modulo/cliente/pages/MousePadCliente";
import SillasCliente from "./modulo/cliente/pages/SillasCliente";
import TeclaCliente from "./modulo/cliente/pages/TeclaCliente";
import DetalleProductoCliente from "./modulo/cliente/pages/DetalleProductoCliente";
import CarritoCliente from "./modulo/cliente/pages/CarritoCliente";
import ProcesarCompraCliente from "./modulo/cliente/pages/ProcesarCompraCliente";
import EditarProductoAdmin from "./modulo/admin/pages/EditarProductoAdmin";
import EditarClienteAdmin from "./modulo/admin/pages/EditarClienteAdmin";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/admin/login">
          <LoginAdmin />
        </Route>
        <Route path="/admin/home">
          <HomeAdmin />
        </Route>
        <Route path="/admin/producto">
          <ProductoAdmin />
        </Route>
        <Route path="/admin/cliente">
          <ClienteAdmin />
        </Route>
        <Route path="/admin/editproducto">
          <EditarProductoAdmin />
        </Route>
        <Route path="/admin/editcliente">
          <EditarClienteAdmin />
        </Route>
        <Route path="/cliente/index">
          <IndexCliente />
        </Route>
        <Route path="/cliente/login">
          <LoginCliente />
        </Route>
        <Route path="/cliente/categoria">
          <CategoriasCliente/>
        </Route>
        <Route path="/cliente/audifono">
          <AudifonosCliente/>
        </Route>
      
        <Route path="/cliente/iluminacion">
          <IluminacionCliente/>
        </Route>
        <Route path="/cliente/monitor">
          <MonitoresCliente/>
        </Route>
        <Route path="/cliente/mouse">
          <MouseCliente/>
        </Route>
        <Route path="/cliente/mousepad">
          <MousePadCliente/>
        </Route>
        <Route path="/cliente/silla">
          <SillasCliente/>
        </Route>
      
        <Route path="/cliente/teclado">
          <TeclaCliente/>
        </Route>
        <Route path="/cliente/detpro">
          <DetalleProductoCliente/>
        </Route>
        <Route path="/cliente/carrito">
          <CarritoCliente/>
        </Route>
        <Route path="/cliente/procesar">
          <ProcesarCompraCliente/>
        </Route>
      
      
      </Switch>
    </Router>
  );
}

export default App;
