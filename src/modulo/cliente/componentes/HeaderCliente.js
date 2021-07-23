import React from 'react'
import { Link } from "react-router-dom";
// imagen nav
import logopng from '../../../img/logopng.png'
// iconos
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHome, faSearch} from '@fortawesome/free-solid-svg-icons'
import {faUser} from '@fortawesome/free-solid-svg-icons'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
function HeaderCliente() {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-dark " style={{backgroundColor: "#2D1855"}} >
                <div class="container-fluid">
                    <Link class="navbar-brand"  to={{pathname:"/cliente/index"}}>
                        <img class="img_nav" src={logopng}/>
                    </Link>
                    <button class="navbar-toggler" type="button" style={{backgroundColor: "#9774DB", color:"#8158C4"}}
                        data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <form class="d-flex">
                            <input class="form-control me-2" type="search" placeholder="Buscar un producto" aria-label="Search"/>
                            <button class="btn" type="submit" style={{backgroundColor: "#9774DB"}}><FontAwesomeIcon icon={faSearch}/> </button>
                        </form>
                        <div class="navbar-nav">
                            <Link class="nav-link" to={{pathname:"/cliente/index"}}> <FontAwesomeIcon icon={faHome}/> Inicio</Link>
                            <Link class="nav-link" to={{pathname:"/cliente/login"}}> <FontAwesomeIcon icon={faUser}/> Usuario</Link>
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                               <FontAwesomeIcon icon={faBars}/> Categorías
                            </a>
                            <ul class="dropdown-menu dropdown-menu" style={{backgroundColor: "#9774DB"}} aria-labelledby="navbarDropdown">
                                <li><Link class="dropdown-item" to={{pathname:"/cliente/categoria"}}><strong>Ver todas...</strong></Link></li>
                                <li>
                                    <hr class="dropdown-divider"/>
                                </li>
                                <li><Link class="dropdown-item" to={{pathname:"/cliente/audifono"}}>Audífonos</Link></li>
                                <li>
                                    <hr class="dropdown-divider"/>
                                </li>
                                <li><Link class="dropdown-item" to={{pathname:"/cliente/iluminacion"}}>Iluminación ambiente</Link></li>
                                <li>
                                    <hr class="dropdown-divider"/>
                                </li>
                                <li><Link class="dropdown-item" to={{pathname:"/cliente/monitor"}}>Monitores</Link></li>
                                <li>
                                    <hr class="dropdown-divider"/>
                                </li>
                                <li><Link class="dropdown-item" to={{pathname:"/cliente/mouse"}}>Mouse</Link></li>
                                <li>
                                    <hr class="dropdown-divider"/>
                                </li>
                                <li><Link class="dropdown-item" to={{pathname:"/cliente/mousepad"}}>Mouse Pad</Link></li>
                                <li>
                                    <hr class="dropdown-divider"/>
                                </li>
                                <li><Link class="dropdown-item" to={{pathname:"/cliente/silla"}}>Sillas Gamer</Link></li>
                                <li>
                                    <hr class="dropdown-divider"/>
                                </li>
                                <li><Link class="dropdown-item" to={{pathname:"/cliente/teclado"}}>Teclados Gamer</Link></li>
                            </ul>
                            <Link class="nav-link" to={{pathname:"/cliente/carrito"}}> <FontAwesomeIcon icon={faShoppingCart}/> Compras</Link>
                        </div>
                    </div>
                </div>
            </nav>
            
        </>
    );
}

export default HeaderCliente;
