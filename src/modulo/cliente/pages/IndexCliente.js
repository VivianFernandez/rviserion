import React from "react";
import "../../../css/estilos.css";
// imagenes carousel
import mouse from '../../../img/mouse.jpg'
import teclado from '../../../img/teclado.jpg'
import monitor from '../../../img/monitor.jpg'
// imagenes marca
import corsair from '../../../img/corsair.png'
import logitechg from '../../../img/logitechg.png'
import redragon from '../../../img/redragon-logo-5.png'
import coolermaster from '../../../img/Cooler Master_Logo_white.png'
import aorus from '../../../img/aorus.png'
import cougar from '../../../img/cougar.png'
import predator from '../../../img/predator.png'
import razer from '../../../img/razer.png'
import hyperx from '../../../img/hyperx.png'
import msi from '../../../img/msi.png'
import HeaderCliente from "../componentes/HeaderCliente";
import FooterCliente from "../componentes/FooterCliente";
function IndexCliente() {
  return (
    <>
      <HeaderCliente/>
      <div class="container__carousel mt-lg-5">
        <h2 class="ti__carousel">Nuevos productos</h2>
        <hr />
        <div
          id="carouselExampleCaptions"
          class="carousel slide mt-lg-5 container"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExsampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={mouse} class="d-block w-100" />
              <div class="carousel-caption d-none d-md-block">
                <h5>
                  <strong>Mouse</strong>
                </h5>
                <p>Nuevos mouse Logitech G-502 wireless</p>
              </div>
            </div>
            <div class="carousel-item">
              <img src={teclado} class="d-block w-100" />
              <div class="carousel-caption d-none d-md-block">
                <h5>
                  <strong>Teclados</strong>
                </h5>
                <p>Teclados RGB de membrana, mecánicos e inalambricos</p>
              </div>
            </div>
            <div class="carousel-item">
              <img src={monitor} class="d-block w-100" />
              <div class="carousel-caption d-none d-md-block">
                <h5>
                  <strong>Monitores</strong>
                </h5>
                <p>Desde 60hz hasta 360hz</p>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div class="marcas">
        <h2>Tenemos las mejores marcas</h2>
        <hr />
        <div class="container__marcas bd-grid">
          <div class="marcas__img mb-4">
            <img class="marcas__img-img" src={corsair} />
          </div>
          <div class="marcas__img mb-4">
            <img class="marcas__img-img" src={logitechg} />
          </div>
          <div class="marcas__img mb-4">
            <img
              class="marcas__img-img"
              src={redragon} />
          </div>

          <div class="marcas__img mb-4">
            <img
              class="marcas__img-img"
              src={coolermaster}
            />
          </div>
          <div class="marcas__img mb-4">
            <img class="marcas__img-img" src={aorus} />
          </div>
          <div class="marcas__img mb-4">
            <img class="marcas__img-img" src={cougar} />
          </div>
          <div class="marcas__img mb-4">
            <img class="marcas__img-img" src={predator} />
          </div>
          <div class="marcas__img mb-4">
            <img class="marcas__img-img" src={razer} />
          </div>
          <div class="marcas__img mb-4">
            <img class="marcas__img-img" src={hyperx} />
          </div>
          <div class="marcas__img mb-4">
            <img class="marcas__img-img" src={msi} />
          </div>
        </div>
      </div>
      <FooterCliente/>
    </>
  );
}

export default IndexCliente;
