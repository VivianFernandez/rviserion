import React from "react";
import "../../../css/estilos.css";
import HeaderCliente from "../componentes/HeaderCliente";
import FooterCliente from "../componentes/FooterCliente";
function ProcesarCompraCliente() {
  return (
    <>
      <HeaderCliente />
      <h1 class="procesar_ti">PROCESAR COMPRA</h1>

      <div class="procesar__container container-sm">
        <div class="datos__container">
          <form class="dat__per ">
            <legend>Datos Personales</legend>
            <hr class="procesar_raya" />
            <div class="row mb-4">
              <div class="col">
                <div class="form-outline">
                  <label class="form-label" for="nombres">
                    Nombres
                  </label>
                  <input
                    type="text"
                    id="nombres"
                    class="form-control"
                    placeholder="Ejm: Mario"
                  />
                </div>
              </div>
              <div class="col">
                <div class="form-outline">
                  <label class="form-label" for="apellidos">
                    Apellidos
                  </label>
                  <input
                    type="text"
                    id="apellidos"
                    class="form-control"
                    placeholder="Ejm: Casas"
                  />
                </div>
              </div>
            </div>
            <div class="row mb-4">
              <div class="col">
                <div class="form-outline">
                  <label class="form-label" for="email">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    class="form-control"
                    placeholder="Ejm: mcasas@gmail.com"
                  />
                </div>
              </div>
              <div class="col">
                <div class="form-outline">
                  <label class="form-label" for="dni">
                    DNI
                  </label>
                  <input
                    type="number"
                    id="dni"
                    placeholder="12345678"
                    class="form-control"
                  />
                </div>
              </div>
            </div>
            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
              <button
                type="submit"
                class="btn"
                style={{backgroundColor:"#9280cc"}}
             
              >
                <i class="fas fa-check"></i>
                Guardar
              </button>
              <button
                type="reset"
                class="btn"
                style={{backgroundColor:"#59428A"}}
              >
                <i class="fas fa-times"></i>
                Eliminar
              </button>
            </div>
          </form>

          <form class="dat__per ">
            <legend>Dirección de envío</legend>
            <hr class="procesar_raya" />
            <div class="row mb-4">
              <div class="col">
                <label for="disabledSelect" class="form-label">
                  Ciudad
                </label>
                <select id="disabledSelect" class="form-select">
                  <option>Seleccione...</option>
                </select>
              </div>
              <div class="col">
                <label for="disabledSelect" class="form-label">
                  Provincia
                </label>
                <select id="disabledSelect" class="form-select">
                  <option>Seleccione...</option>
                </select>
              </div>
              <div class="col">
                <label for="disabledSelect" class="form-label">
                  Distrito
                </label>
                <select id="disabledSelect" class="form-select">
                  <option>Seleccione...</option>
                </select>
              </div>
            </div>
            <div class="form-outline mb-4">
              <label class="form-label" for="form6Example7">
                Dirección
              </label>
              <textarea
                class="form-control"
                placeholder="Ingrese su dirección"
                id="form6Example7"
                rows="4"
                cols="60"
              ></textarea>
            </div>
            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
              <button
                type="submit"
                class="btn"
                style={{backgroundColor:"#9280cc"}}
             
              >
                <i class="fas fa-check"></i>
                Guardar
              </button>
              <button
                type="reset"
                class="btn"
                style={{backgroundColor:"#59428A"}}
              >
                <i class="fas fa-times"></i>
                Eliminar
              </button>
            </div>
          </form>

          <form class="dat__per">
            <legend>Datos de pago</legend>
            <hr class="procesar_raya" />
            <div class="row mb-4">
              <div class="col">
                <div class="form-outline">
                  <label class="form-label" for="numtarjeta">
                    Número de tarjeta
                  </label>
                  <input
                    type="number"
                    id="numtarjeta"
                    placeholder="XXXX-XXXXX-XXXX-XXXX"
                    class="form-control"
                  />
                </div>
              </div>
              <div class="col">
                <div class="form-outline">
                  <label class="form-label" for="ccv">
                    CCV
                  </label>
                  <input
                    type="number"
                    id="ccv"
                    placeholder="XXX"
                    class="form-control"
                  />
                </div>
              </div>
            </div>
            <div class="row mb-4 procesar_tarjeta">
              <label for="">Fecha de vencimiento</label>
              <div class="col pago_fecha">
                <select id="mes" class="form-select">
                  <option>Mes</option>
                </select>
              </div>
              <div class="col pago_fecha">
                <select id="año" class="form-select">
                  <option>Año</option>
                </select>
              </div>
            </div>
            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
              <button
                type="submit"
                class="btn"
                style={{backgroundColor:"#9280cc"}}
             
              >
                <i class="fas fa-check"></i>
                Guardar
              </button>
              <button
                type="reset"
                class="btn"
                style={{backgroundColor:"#59428A"}}
              >
                <i class="fas fa-times"></i>
                Eliminar
              </button>
            </div>
          </form>
        </div>

        <div class="carrito__resumen">
          <div
            class=" card border-dark text-center mb-3"
            style={{borderColor:'rebeccapurple', width:350+'px', height:400+'px',}}
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
              <div class="car__btn">
                <button
                  type="submit"
                  class="btn"
                  style={{backgroundColor:"#9280cc"}}
                >
                  <i class="bi bi-check"></i>FINALIZAR COMPRA
                </button>
                <button
                  type="reset"
                  class="btn"
                  style={{backgroundColor:"#59428A"}}
                >
                  CANCELAR COMPRA
                </button>
                <label for="">
                  <i class="fas fa-shield-alt"></i>COMPRA 100% SEGURA
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

export default ProcesarCompraCliente;
