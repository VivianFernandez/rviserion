import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import HeaderAdmin from "../componentes/HeaderAdmin";
// icons
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCheck, faEdit,  faTimes} from '@fortawesome/free-solid-svg-icons'
import {
    putProductoById,
  getProductById,
} from "../../../services/servicios.js";
function EditarProductoAdmin() {
  const [formulario, setFormulario] = useState({
    nombre: "",
    marca: "",
    categoria: "",
    stock: 0,
    precio: 0,
    img: "",
  });
  const params = useParams();
  const history = useHistory();
  let { nombre, marca, categoria, stock, precio, img } = formulario;

  const handleChange = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      nombre.trim() === "" ||
      marca.trim() === "" ||
      categoria.trim() === "" ||
      stock.trim() === "" ||
      precio === 0 ||
      img.trim() === ""
    ) {
      return;
    }
    putProductoById(formulario).then((rpta) => {
      if (rpta.status === 200) {
        history.push("/admin/producto");
      }
    });
  };
  useEffect(() => {
    getProductById(params.id).then((rpta) => {
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
              <div className="card-header"  style={{
                      textAlign:"center",  
                      color: "#fff",
                       backgroundColor: 'rebeccapurple'
                      }}>
                <h4 className="card-title">
                <FontAwesomeIcon icon={faEdit}/> Editar Producto
                </h4>
              </div>
              <div className="card-body">
               
                <form onSubmit={handleSubmit}>
                  
                  <div>
                    <label htmlFor="" className="form-label">
                      Nombre del Producto:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Audifonos Wireless"
                      name="nombre"
                      value={nombre}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="" className="form-label">
                      Marca:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="LogitechG"
                      name="marca"
                      value={marca}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="" className="form-label">
                      Categoria:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Audifonos"
                      name="categoria"
                      value={categoria}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="" className="form-label">
                      Stock:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="24"
                      name="stock"
                      value={stock}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="" className="form-label">
                      Precio:
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="0.00"
                      name="precio"
                      value={precio}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="" className="form-label">
                      Imagen:
                    </label>
                    <input
                      name="img"
                      value={img}
                      onChange={handleChange}
                      style={{marginBottom:"10px"}}
                      className="form-control"
                    ></input>
                  </div>
                
                  <div>
                    <button className="btn btn-primary" type="submit" style={{
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
                        history.push("/admin/producto");
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

export default EditarProductoAdmin;
