import React, { useEffect, useState } from "react";
import "../../../css/estilos.css";
import bmonitores from "../../../img/bmonitores.jpg";

import { Link } from "react-router-dom";
import HeaderCliente from "../componentes/HeaderCliente";
import FooterCliente from "../componentes/FooterCliente";
import {getAllProductsImg} from "../../../services/servicios.js";
function MonitoresCliente() {
  const[monitores,setMonitores]= useState([]);
  const traerMonitores = () =>{
    getAllProductsImg().then((rpta) => {
      setMonitores(rpta.data);
    });
  }
  useEffect(() => {
    traerMonitores();
  }, []);
  return (
    <>
      <HeaderCliente />
      <div class="d-flex justify-content-center mt-lg-3 mb-lg-3">
        <img class="banner__cat" src={bmonitores} />
      </div>

      <div class="filtro__container d-flex flex-column ">
        <div class="filtro d-flex flex-column bg-white">
          <label for="">
            <h4>FILTRO:</h4>
          </label>
          <div class="filtro__marcas d-flex mt-2">
            <input type="checkbox" /> LogitechG <br />
            <input type="checkbox" /> Corsair <br />
            <input type="checkbox" /> HyperX
          </div>
        </div>

        <div class="container">
          <div class="row">
          {monitores.map((objProducto,i)=>{
              if (objProducto.categoria==="Monitores"){
                return (
                  <div class="col-6 col-md-4 ">
                  <div
                    class="card text-white bg-dark mb-3 car__producto "
                    style={{ width: 18 + "rem" }}
                  >
                    <img src={objProducto.img} class=" card-img-top" />
                    <div class="card-body">
                      <Link
                        to={{pathname:"/cliente/detpro"}}
                        style={{ textDecoration: "none", color: "violet" }}
                      >
                        <h5 class="card-title">{objProducto.nombre}</h5>
                      </Link>
                      <p class="card-text" style={{ textDecoration: "none", color: "aqua" }}>{objProducto.marca}</p>
                      <p class="card-text">{objProducto.categoria}</p>
                      <h3>S/.{objProducto.precio}</h3>
                      <Link
                        href="#"
                        class="btn btn-warning"
                        style={{ textAlign: "end" }}
                      >
                        <i class="fas fa-shopping-cart"></i>
                        Añadir
                      </Link>
                    </div>
                  </div>
                </div>
                )
              }else{
                return 
              }
              
            })}

           
          </div>
        </div>
      </div>
      <FooterCliente />
    </>
  );
}

export default MonitoresCliente;
