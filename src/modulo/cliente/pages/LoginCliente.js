import React from 'react'
import "../../../css/estilos.css";
import { Link } from "react-router-dom";
import HeaderCliente from "../componentes/HeaderCliente";
import FooterCliente from "../componentes/FooterCliente";
function LoginCliente() {


    return (
        <>
        <HeaderCliente/>
            <div class="formulario" >
                <div class="wrapper">
                    <div class="title-text">
                        <div class="title login">
                            Inciar Sesión</div>
                    </div>
                        <div class="form-container">
                                <div class="form-inner">
                                    
                                    <form action="#" class="signup">
                                        <div class="field">
                                            <input class="input__form" type="email" placeholder="Correo Electronico" required/>
                                        </div>
                                        <div class="field">
                                            <input class="input__form" type="password" placeholder="Contraseña" required/>
                                        </div>
                                        <div class="field btn2">
                                            <div class="btn-layer">
                                            </div>
                                            <input class="form__btn" type="submit" value="Crear cuenta"/>
                                        </div>
                                        
                                        <div class="field btn2 "  >
                                        
                                            <Link className="form__btn" to="/cliente/register" >Crear Cuenta</Link>
                                            
                                        </div>
                                    </form>
                                </div>
                        </div>
                </div>
            </div>   
            <FooterCliente/>
        </>
    )
}

export default LoginCliente
