import React, { useEffect, useState } from "react";
import "../../../css/estilos.css";
import { Link } from "react-router-dom";
import { useHistory, useParams } from "react-router-dom";
import HeaderCliente from "../componentes/HeaderCliente";
import Swal from "sweetalert2";
import FooterCliente from "../componentes/FooterCliente";
import {registrarCliente} from "../../../services/servicios"


const RegisterClient = () => {
    const history = useHistory();
    const [formulario, setFormulario] = useState({
        nombreCompleto: "",
        email: "",
        password: ""
    });
    let { nombreCompleto, email, password } = formulario;
    const handleChange = (e) => {
        setFormulario({ ...formulario, [e.target.name]: e.target.value });
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        if (
            nombreCompleto.trim() === "" ||
            email.trim() === "" ||
            password.trim() === ""
        ) {
          Swal.fire("Ups!", "Complete los campos!", "error");
          return;
        }
        registrarCliente(formulario).then((rpta) => {
            console.log(rpta);
          if (rpta.status === 201) {
            Swal.fire({
              title: "Desea guardar los cambios?",
              showDenyButton: true,
              showCancelButton: true,
              confirmButtonText: `Guardar`,
              denyButtonText: `No Guardar`,
            }).then((result) => {
              /* Read more about isConfirmed, isDenied below */
              if (result.isConfirmed) {
                history.push(`/cliente/index`);
              } else if (result.isDenied) {
                Swal.fire("Los cambios no han sido guardados", "", "info");
              }
            });
          }
        });
      };

    
    return (
        <>
            <HeaderCliente />
            <div class="formulario" >
                <div class="wrapper">
                    <div class="title-text">
                        <div class="title signup">
                            Crear Cuenta</div>
                    </div>
                    <div class="form-container">
                        <div class="form-inner">

                            <form action="#" class="signup" onSubmit={handleSubmit}>
                                <div class="field">
                                    <input class="input__form" type="text" placeholder="Nombres y Apellidos" name="nombreCompleto" value={nombreCompleto} onChange={handleChange} required />
                                </div>
                                <div class="field">
                                    <input class="input__form" type="text" placeholder="Email" name="email" value={email} onChange={handleChange} required />
                                </div>
                                <div class="field">
                                    <input class="input__form" type="password" placeholder="Contraseña" name="password" value={password} onChange={handleChange} required />
                                </div>
                                <div class="field btn2">
                                    <div class="btn-layer">
                                    </div>
                                    <input class="form__btn" type="submit" value="Crear cuenta" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <FooterCliente />
        </>
    )
}

export default RegisterClient
