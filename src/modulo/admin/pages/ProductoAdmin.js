import React, { useEffect, useState } from "react";
import "../../../css/estilos-admi.css";
import {
  getProduct,
  getProductById,
  putProducto,
  registrarProducto,
} from "../../../services/servicios";
import HeaderAdmin from "../componentes/HeaderAdmin";
import { useHistory, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { deleteProductoById } from "../../../services/servicios.js";
// icons
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEdit, faPlusSquare, faTimes, faTools} from '@fortawesome/free-solid-svg-icons'
function ProductoAdmin() {
  const [productos, setProductos] = useState([]);
  const traerProductos = () => {
    getProduct().then((rpta) => {
      setProductos(rpta.data);
    });
  };
  useEffect(() => {
    traerProductos();
  }, []);
  const [formulario, setFormulario] = useState({
    nombre: "",
    marca: "",
    categoria: "",
    stock: 0,
    precio: 0,
    img: "",
  });
  const history = useHistory();
  let { nombre, marca, categoria, stock, precio, img } = formulario;
  const handleChange = (e) => {
    setFormulario({ ...formulario, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      nombre.trim() === "" ||
      marca.trim() === "" ||
      categoria.trim() === "" ||
      stock === 0 ||
      precio === 0 ||
      img.trim() === ""
    ) {
      Swal.fire("Ups!", "Complete los campos!", "error");
      return;
    }
    registrarProducto(formulario).then((rpta) => {
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
            window.location.reload();
          } else if (result.isDenied) {
            Swal.fire("Los cambios no han sido guardados", "", "info");
          }
        });
      }
    });
  };

  const eliminarProducto = (id) => {
    Swal.fire({
      title: "¿Seguro que deseas eliminar?",
      icon: "warning",
      text: "Los cambios serán irreversibles!",
      showCancelButton: true,
    }).then((feedback) => {
      if (feedback.isConfirmed) {
        // sí, borrar el producto
        deleteProductoById(id).then((rpta) => {
          if (rpta.status === 200) {
            // se eliminó correctamente
            traerProductos();
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
          <i class="fas fa-boxes"></i>
          Productos
        </h1>
        <div class="d-grid justify-content-md-end">
          <button
            class="btn"
            type="button"
            style={{ backgroundColor: "#7c79ca", color: "#fff" }}
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            data-bs-whatever="@mdo"
          >
            <FontAwesomeIcon icon={faPlusSquare}/>
            Añadir Producto
          </button>
          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">
                    Añadir Producto
                  </h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <form onSubmit={handleSubmit}>
                    <div class="mb-3">
                      <label for="recipient-name" class="col-form-label">
                        Nombre:
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="recipient-name"
                        name="nombre"
                        value={nombre}
                        onChange={handleChange}
                      />
                    </div>
                    <div class="mb-3">
                      <label for="recipient-name" class="col-form-label">
                        Marca:
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="recipient-name"
                        name="marca"
                        value={marca}
                        onChange={handleChange}
                      />
                    </div>
                    <div class="mb-3">
                      <label for="recipient-name" class="col-form-label">
                        Categoria:
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="recipient-name"
                        name="categoria"
                        value={categoria}
                        onChange={handleChange}
                      />
                    </div>
                    <div class="mb-3">
                      <label for="recipient-name" class="col-form-label">
                        Stock:
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="recipient-name"
                        name="stock"
                        value={stock}
                        onChange={handleChange}
                      />
                    </div>
                    <div class="mb-3">
                      <label for="recipient-name" class="col-form-label">
                        Precio:
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="recipient-name"
                        name="precio"
                        value={precio}
                        onChange={handleChange}
                      />
                    </div>
                    <div class="mb-3">
                      <label for="recipient-name" class="col-form-label">
                        Imagen:
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="recipient-name"
                        name="img"
                        value={img}
                        onChange={handleChange}
                      />
                    </div>
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Cancelar
                    </button>
                    <button type="submit" class="btn btn-primary">
                      Agregar
                    </button>
                  </form>
                </div>
                <div class="modal-footer"></div>
              </div>
            </div>
          </div>
        </div>
        <table class="table table-responsive table-bordered mt-4">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Marca</th>
              <th>Categoría</th>
              <th>Stock</th>
              <th>Precio (S/.)</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {productos.map((objProducto, i) => {
              return (
                <tr>
                  <td>{objProducto.id}</td>
                  <td>{objProducto.nombre}</td>
                  <td>{objProducto.marca}</td>
                  <td>{objProducto.categoria}</td>
                  <td>{objProducto.stock}</td>
                  <td>{objProducto.precio}</td>
                  <td>
                    {" "}
                    <button
                      class="btn "
                      style={{
                        width: 100 + "px",
                        backgroundColor: "#9774DB",
                        color: "#fff",
                      }}
                      type="button"
                      
                      onClick={() => {
                        history.push(`/admin/editproducto/${objProducto.id}`);
                      }}
                    >
                      <FontAwesomeIcon icon={faEdit}/> Editar
                    </button>{" "}
      
                    <button
                      class="btn"
                      style={{
                        width: 100 + "px",
                        backgroundColor: "#483A89",
                        color: "#fff",
                      }}
                      type="button"
                      onClick={() => {
                        eliminarProducto(objProducto.id);
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

export default ProductoAdmin;
