import React from 'react'
import "../../../css/estilos.css";
import { Link } from "react-router-dom";
import HeaderCliente from "../componentes/HeaderCliente";
import FooterCliente from "../componentes/FooterCliente";
function LoginCliente() {
    
    const loginText = document.querySelector(".title-text .login");
    const loginForm = document.querySelector("form.login");
    const loginBtn = document.querySelector("label.login");
    const signupBtn = document.querySelector("label.signup");
    const signupLink = document.querySelector("form .signup-link a");
    signupBtn.onClick = (() => {
        loginForm.style.marginLeft = "-50%";
        loginText.style.marginLeft = "-50%";
    });
    loginBtn.onClick = (() => {
        loginForm.style.marginLeft = "0%";
        loginText.style.marginLeft = "0%";
    });
    // signupLink.onClick = (() => {
    //     signupBtn.click();
    //     return false;
    // });

    return (
        <>
        <HeaderCliente/>
            <div class="formulario" >
                <div class="wrapper">
                    <div class="title-text">
                        <div class="title login">
                            Inciar Sesión</div>
                        <div class="title signup">
                            Crear Cuenta</div>
                    </div>
                        <div class="form-container">
                                <div class="slide-controls">
                                    <input type="radio" name="slide" id="login" checked/>
                                    <input type="radio" name="slide" id="signup"/>
                                    <label for="login" class="slide login" onClick={()=>{ const loginForm = document.querySelector("form.login"); loginForm.style.marginLeft = "0%";
        loginText.style.marginLeft = "0%";}}>Inciar Sesión</label>
                                    <label for="signup" class="slide signup" onClick={()=>{const loginForm = document.querySelector("form.login"); loginForm.style.marginLeft = "-50%";
        loginText.style.marginLeft = "-50%";}}>Crear Cuenta</label>
                                    <div class="slider-tab">
                                    </div>
                                </div>
                                <div class="form-inner">
                                    <form action="#" class="login">
                                        <div class="field">
                                            <input class="input__form" type="text" placeholder="Email" required/>
                                        </div>
                                        <div class="field">
                                            <input class="input__form" type="password" placeholder="Contraseña" required/>
                                        </div>
                                        <div class="pass-link">
                                            <Link class="form__pre" href="#">¿Olvidó su contraseña?</Link>
                                        </div>
                                        <div class="field btn2">
                                            <div class="btn-layer">
                                            </div>
                                            <input class="form__btn" type="submit" value="Iniciar sesión"/>
                                        </div>
                                        <div class="signup-link">
                                            ¿No tienes cuenta? <Link href="">Únete</Link></div>
                                    </form>
                                    <form action="#" class="signup">
                                        <div class="field">
                                            <input class="input__form" type="text" placeholder="Nombres y Apellidos" required/>
                                        </div>
                                        <div class="field">
                                            <input class="input__form" type="text" placeholder="Email" required/>
                                        </div>
                                        <div class="field">
                                            <input class="input__form" type="password" placeholder="Contraseña" required/>
                                        </div>
                                        <div class="field btn2">
                                            <div class="btn-layer">
                                            </div>
                                            <input class="form__btn" type="submit" value="Crear cuenta"/>
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
