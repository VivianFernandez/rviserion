import React from "react";
import "../../../css/estilos.css";
import HeaderCliente from "../componentes/HeaderCliente";
import FooterCliente from "../componentes/FooterCliente";
import { Link } from "react-router-dom";
function CarritoCliente() {
  return (
    <>
      <HeaderCliente />
      <h2 class="carrito__ti">CARRITO DE COMPRAS</h2>
      <hr class="car__ti" />
      <div class="carrito__container">
        <div class="carrito__productos">
          <table class="table">
            <thead class="table-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Nombre del Producto</th>
                <th scope="col">Categoría</th>
                <th scope="col">Cantidad</th>
                <th scope="col">Precio</th>
                <th scope="col">Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>TECLADO K70 RGB</td>
                <td>Teclados</td>
                <td>01</td>
                <td>S/. 799</td>
                <td>
                  <button
                    type="submit"
                    class="btn"
                    style={{ color: "#fff", backgroundColor: "#483a89" }}
                  >
                    Quitar
                  </button>
                </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>LOGITECH MOUSE G203 BLACK</td>
                <td>Mouse</td>
                <td>01</td>
                <td>S/. 149</td>
                <td>
                  <button
                    type="submit"
                    class="btn"
                    style={{ color: "#fff", backgroundColor: "#483a89" }}
                  >
                    Quitar
                  </button>
                </td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Audífonos HS35</td>
                <td>Audifonos</td>
                <td>02</td>
                <td>S/. 209</td>
                <td>
                  <button
                    type="submit"
                    class="btn"
                    style={{ color: "#fff", backgroundColor: "#483a89" }}
                  >
                    Quitar
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="carrito__resumen">
          <div
            class="car_res card text-center mb-3"
            style={{
              borderColor: "rebeccapurple",
              width: 350 + "px",
              height: 400 + "px",
            }}
          >
            <div class="ti_res card-header">RESUMEN</div>
            <div class="card-body text-dark">
              <div class="d-flex" style={{justifyContent:"center"}}>
                <p class="card-text text-start">Subtotal &nbsp;</p>
                <p >&nbsp; S/.1,157</p>
              </div>
              <div class="d-flex" style={{justifyContent:"center"}}>
                <p class="card-text text-start">Envío &nbsp;</p>
                <p >&nbsp; S/.15</p>
              </div>
              <hr />
              <div class="d-flex" style={{justifyContent:"center"}}>
                <p class="card-text text-start">Total &nbsp;</p>
                <p >&nbsp; S/.1,172</p>
              </div>
              <div class="car__btn mb-4">
                <Link to={{ pathname: "/cliente/procesar" }}>
                  <button
                    type="submit"
                    class="btn"
                    style={{ color: "#fff", backgroundColor: "#483a89" }}
                  >
                    PROCESAR COMPRA
                  </button>
                </Link>
                <label for="">
                  <i class="fas fa-shield-alt mt-2"></i>COMPRA 100% SEGURA
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterCliente />
    </>
  );
}

export default CarritoCliente;
