import React from "react";
import "../../../css/estilos-admi.css"
import HeaderAdmin from "../componentes/HeaderAdmin"
import { useHistory } from 'react-router-dom'
import productos from '../../../img/productos.png'
import clientes from '../../../img/clientes.png'
// icons
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTools} from '@fortawesome/free-solid-svg-icons'
import {faEye} from '@fortawesome/free-solid-svg-icons'
function HomeAdmin() {
    const history=useHistory();
  return (
    <>
      <HeaderAdmin/>

      <div class="panel__container">
        <h1
          class="tituloHome"
        >
          <FontAwesomeIcon icon={faTools}/>
         
          Panel del Administrador
        </h1>

        <div class="container mt-3 d-flex panel__admi">
          <div class="container mt-3" style={{ width: 300 + "px" }}>
            <div class="card" style={{ minHeight: 350 + "px" }}>
              <img
                class="card-img-top"
                src={productos}
                style={{ width: 180 + "px", display: "block", margin: "auto" }}
              />
              <div class="card-body">
                <h4 class="card-title">Productos</h4>
                <p class="card-text">Listado de los productos</p>

                <div class="d-grid justify-content-md-end">
                    <button onClick={()=>{
                        history.push("/admin/producto")
                    }}
                      class="btn"
                      type="button"
                      style={{ backgroundColor: "#7c79ca", color: "#fff" }}
                    >
                      {" "}
                      <FontAwesomeIcon icon={faEye}/> Ver Productos
                    </button>
                
                </div>
              </div>
            </div>
          </div>
          <div class="container mt-3" style={{ width: 300 + "px" }}>
            <div class="card" style={{ minHeight: 350 + "px" }}>
              <img
                class="card-img-top"
                src={clientes}
                style={{ width: 180 + "px", display: "block", margin: "auto" }}
              />
              <div class="card-body">
                <h4 class="card-title">Clientes</h4>
                <p class="card-text">Listado de los clientes</p>

                <div class="d-grid justify-content-md-end">
                  
                    <button onClick={()=>{
                        history.push("/admin/cliente")
                    }}
                      class="btn"
                      type="button"
                      style={{ backgroundColor: "#7c79ca", color: "#fff" }}
                    >
                      {" "}
                      <FontAwesomeIcon icon={faEye}/>Ver Clientes
                    </button>
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeAdmin;
