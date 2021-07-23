import React, { useEffect, useState } from "react";
import "../../../css/estilos-admi.css";
import { getCliente } from "../../../services/servicios";
import HeaderAdmin from "../componentes/HeaderAdmin";
import {deleteClienteById} from "../../../services/servicios.js"
import { useHistory, useParams } from "react-router-dom";
import Swal from "sweetalert2";
// icons
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEdit, faPlusSquare, faTimes, faTools} from '@fortawesome/free-solid-svg-icons'
function ClienteAdmin() {
  const [clientes, setClientes] = useState([]);
  const history=useHistory()
  const traerClientes = () => {
    getCliente().then((rpta) => {
      setClientes(rpta.data);
    });
  };
  useEffect(() => {
    traerClientes();
  }, []);
  const eliminarCliente = (id) => {
    Swal.fire({
      title: "¿Seguro que deseas eliminar?",
      icon: "warning",
      text: "Los cambios serán irreversibles!",
      showCancelButton: true
    }).then((feedback) => {
      if (feedback.isConfirmed) {
        // sí, borrar el Cliente
        deleteClienteById(id).then((rpta) => {
          if (rpta.status === 200) {
            // se eliminó correctamente
            traerClientes();
          }
        });
      }
    });
  };
  return (
    <>
      <HeaderAdmin />
      <div class="container">
        <h1
          class="mt-4"
          style={{
            color: " rgb(38, 0, 128)",
            textAlign: "center",
            fontWeight: "400",
          }}
        >
          <i class="fas fa-users"></i>
          Clientes
        </h1>
        <table class="table table-responsive table-bordered">
          <thead>
            <tr>
              <th>Nombres y Apellidos</th>
              <th>Email</th>
              <th>Contraseña</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {clientes.map((objCliente, i) => {
              return (
                <tr>
                  <td>{objCliente.nombreCompleto}</td>
                  <td>{objCliente.email}</td>
                  <td>{objCliente.password}</td>
                  <td>
                    
                      {" "}
                      <button
                        class="btn"
                        style={{
                          width: 100 + "px",
                          backgroundColor: "#9774DB",
                          color: "#fff",
                        }}
                        type="button"
                        onClick={() => {
                          history.push(`/admin/editcliente/${objCliente.id}`);
                        }}
                      >
                        <FontAwesomeIcon icon={faEdit}/> Editar
                      </button>
                   
                      {" "}
                      <button
                        class="btn"
                        style={{
                          width: 100 + "px",
                          backgroundColor: "#483A89",
                          color: "#fff",
                        }}
                        type="button"
                        onClick={() => {
                          eliminarCliente(objCliente.id);
                        }}
                      >
                       <FontAwesomeIcon icon={faTimes}/> Borrar
                      </button>
                    
                  </td>
                </tr>
              );
            })}

            
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ClienteAdmin;
