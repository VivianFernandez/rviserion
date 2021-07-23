import React from "react";
import { Link } from "react-router-dom";
// iconos
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTwitter} from '@fortawesome/free-brands-svg-icons'
import {faFacebookF} from '@fortawesome/free-brands-svg-icons'
import {faInstagram} from '@fortawesome/free-brands-svg-icons'
function FooterCliente() {
  return (
    <>
      <div>
        <div class="footer__container bd-grid">
          <div class="footer__social">
            <a href="#" class="footer__social-icon">
            <FontAwesomeIcon icon={faTwitter}/>
            </a>
            <a href="#" class="footer__social-icon">
            <FontAwesomeIcon icon={faFacebookF}/>
            </a>
            <a href="#" class="footer__social-icon">
            <FontAwesomeIcon icon={faInstagram}/>
            </a>
          </div>
          <div class="menu mt-4">
            <Link class="nav-link" to={{pathname:"/cliente/index"}}>
              Inicio
            </Link>
            <Link class="nav-link" to={{pathname:"/cliente/login"}}>
              Usuario
            </Link>
            <Link class="nav-link" to={{pathname:"/cliente/categoria"}}>
              Categorías
            </Link>
            <Link class="nav-link" to={{pathname:"/cliente/carrito"}}>
              Compras
            </Link>
          </div>
          <p class="copy mt-4"> VISERION &#169; 2021 All rights reserved</p>
        </div>
      </div>
    </>
  );
}

export default FooterCliente;
