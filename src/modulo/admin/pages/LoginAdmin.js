import React from "react";
import "../../../css/estilos-admi.css";
import { getAdmin } from "../../../services/servicios";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";
import perfilc from '../../../img/perfilc.jpg';
function LoginAdmin() {
  const history = useHistory();
  const sendForm = (e) => {
    e.preventDefault();
    const correo = document.getElementById("email");
    const contraseña = document.getElementById("password");
    getAdmin().then((rpta) => {
      rpta.data.map((rpta2) => {
        if (
          rpta2.email === correo.value &&
          rpta2.password === contraseña.value
        ) {
            history.push({
                pathname:`/admin/home`
            })
          Swal.fire("Good job!", "Los datos son correctos", "success");
        } else {
          Swal.fire("Ups!", "Los datos son erroneos", "error");
        }
      });
    });
  };

  return (
    <>
      <div className="formulario">
        <div className="wrapper">
          <div className="title-text">
            <div className="title login">
              <img src={perfilc} width="100px" />
            </div>
          </div>
          <div className="form-container">
            <div className="slide-controls">
              <input type="radio" name="slide" id="login" />
              <label htmlFor="login" className="slide login">
                Admin VISERION
              </label>
              <div className="slider-tab"></div>
            </div>
            <div className="form-inner">
              <form action="#" className="login" onSubmit={sendForm}>
                <div className="field">
                  <input
                    id="email"
                    className="input__form"
                    type="text"
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="field">
                  <input
                    id="password"
                    className="input__form"
                    type="password"
                    placeholder="Contraseña"
                    required
                  />
                </div>
                <div className="pass-link">
                  <a className="form__pre" href="#">
                    ¿Olvidó su contraseña?
                  </a>
                </div>
                <div className="field btn2">
                  <div className="btn-layer"></div>
                  <input className="form__btn" type="submit" value="Entrar" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginAdmin;
