import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { putClienteById, getClienteById } from "../../../services/servicios.js";
import HeaderAdmin from "../componentes/HeaderAdmin";
// icons
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCheck, faEdit,  faTimes} from '@fortawesome/free-solid-svg-icons'
function EditarClienteAdmin() {
  const [formulario, setFormulario] = useState({
    nombreCompleto: "",
    email: "",
    password: "",
  });
  const params = useParams();
  const history = useHistory();
  let { nombreCompleto, email, password } = formulario;
  const handleChange = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      nombreCompleto.trim() === "" ||
      email.trim() === "" ||
      password.trim() === ""  
    ) {
      return;
    }
    putClienteById(formulario).then((rpta) => {
      if (rpta.status === 200) {
        history.push("/admin/cliente");
      }
    });
  };
  useEffect(() => {
    getClienteById(params.id).then((rpta) => {
      console.log(rpta);
      setFormulario({ ...rpta.data });
    });
  }, []);
  return (
    <>
     <HeaderAdmin />
      <main className="container">
        <div className="row mt-4">
          <div className="col">
            <div className="card">
              <div className="card-header"style={{
                      textAlign:"center",  
                      color: "#fff",
                       backgroundColor: 'rebeccapurple'
                      }}>
                <h4 className="card-title"><FontAwesomeIcon icon={faEdit}/> Editar Cliente</h4>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="" className="form-label">
                      Nombres y Apellidos:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Maria Diaz"
                      name="nombreCompleto"
                      value={nombreCompleto}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="" className="form-label">
                      Email:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="mar@gmail.com"
                      name="email"
                      value={email}
                      onChange={handleChange}
                    />
                  </div>
                  <div style={{marginBottom:"10px"}}>
                    <label htmlFor="" className="form-label">
                      Constraseña:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="password123"
                      name="password"
                      value={password}
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <button className="btn btn-primary" type="submit"style={{
                          borderColor: 'transparent',
                          backgroundColor: "#9774DB",
                          color: "#fff",
                        }}>
                      <FontAwesomeIcon icon={faCheck}/> Guardar Cambios
                    </button>
                    <button
                      className="btn btn-danger"
                      type="button"
                      style={{
                        
                        backgroundColor: "#483A89",
                        color: "#fff",
                        borderColor: 'transparent',
                      }}
                      onClick={() => {
                        history.push("/admin/cliente");
                      }}
                    >
                      <FontAwesomeIcon icon={faTimes}/> Cancelar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default EditarClienteAdmin;
