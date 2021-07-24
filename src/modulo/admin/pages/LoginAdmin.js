import React,{useState} from "react";
import "../../../css/estilos-admi.css";
import { getAdmin } from "../../../services/servicios";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";
import perfilc from '../../../img/perfilc.jpg';
import { useEffect } from "react";
function LoginAdmin() {
  const history = useHistory();

  const [formulario, setFormulario] = useState({
    email: "",
    password: ""
  });
  let { email, password } = formulario;

  const handleChange = (e) => {
    setFormulario({ ...formulario, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      email.trim() === "" ||
      password.trim() === ""
    ) {
      Swal.fire("Ups!", "Complete los campos!", "error");
      return;
    }
    getAdmin(formulario).then((rpta) => {
      console.log(rpta);
      if (rpta.status === 200) {
        history.push({
          pathname: `/admin/home`
        })
        Swal.fire("Good job!", "Los datos son correctos", "success");
      } else {
        Swal.fire("Ups!", "Los datos son erroneos", "error");
      }
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
              <form action="#" className="login" onSubmit={handleSubmit}>
                <div className="field">
                  <input
                    id="email"
                    className="input__form"
                    type="text"
                    placeholder="Email"
                    required
                    name="email"
                    value={email}
                    onChange={handleChange}
                  />
                </div>
                <div className="field">
                  <input
                    id="password"
                    className="input__form"
                    type="password"
                    placeholder="Contraseña"
                    required
                    name="password"
                    value={password}
                    onChange={handleChange}
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
