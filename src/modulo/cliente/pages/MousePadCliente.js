import React, { useEffect, useState } from "react";
import "../../../css/estilos.css";
import bmousep from "../../../img/bmousep.jpg";
// imagenes card
import { Link } from "react-router-dom";
import HeaderCliente from "../componentes/HeaderCliente";
import FooterCliente from "../componentes/FooterCliente";
import {getAllProductsImg} from "../../../services/servicios.js";
function MousePadCliente() {
    const[mousepad,setMousepad]= useState([]);
    const traerMousepad = () =>{
      getAllProductsImg().then((rpta) => {
        setMousepad(rpta.data);
      });
    }
    useEffect(() => {
      traerMousepad();
    }, []);
    return (
    <>
      <HeaderCliente />
      <div class="d-flex justify-content-center mt-lg-3 mb-lg-3">
        <img class="banner__cat" src={bmousep} />
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
          {mousepad.map((objProducto,i)=>{
              if (objProducto.categoria==="Mouse Pad"){
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
                        A??adir
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

export default MousePadCliente;
