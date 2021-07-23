import axios from "axios";

const URLBACKEND = "http://localhost:8000";
export const getAdmin = async () => {
  const rpta = await axios.get(`${URLBACKEND}/admin`);
  return rpta;
};
export const getProduct =async()=>{
    const rpta = await axios.get(`${URLBACKEND}/getAllProducts`);
    return rpta;
}
export const getCliente =async()=>{
    const rpta = await axios.get(`${URLBACKEND}/cliente`);
    return rpta;
}
export const registrarProducto = async(objProducto)=>{
    const rpta = await axios.post(`${URLBACKEND}/addProduct`, 
    JSON.stringify(objProducto),
    {
        headers:{
            "Content-type": "application/json"

        }
    });
    return rpta;
}
export const putProducto = async (objProducto)=>{
    const rpta = await axios.put(`${URLBACKEND}/producto/${objProducto.id}`, 
    JSON.stringify(objProducto),
    {
        headers:{
            "Content-type": "application/json"

        }
    });
    return rpta;
}
export const getProductById = async(id)=>{
    const rpta = await axios.get(`${URLBACKEND}/producto/${id}`);
    return rpta;
}

export const getProductos = async () => {
    const rpta = await axios.get(`${URLBACKEND}/producto`);
    return rpta;
  };

  export const deleteProductoById = async (id) => {
    const rpta = await axios.delete(`${URLBACKEND}/producto/${id}`);
    return rpta;
  };
  export const deleteClienteById = async (id) => {
    const rpta = await axios.delete(`${URLBACKEND}/cliente/${id}`);
    return rpta;
  };
  export const putProductoById = async (objProducto) => {
    const rpta = await axios.put(
        ` ${URLBACKEND}/producto/${objProducto.id}`,
      JSON.stringify(objProducto),
      {
        headers: {
          "Content-type": "application/json"
        }
      }
    );
    return rpta;
  };
  export const putClienteById = async (objCliente) => {
    const rpta = await axios.put(
        ` ${URLBACKEND}/cliente/${objCliente.id}`,
      JSON.stringify(objCliente),
      {
        headers: {
          "Content-type": "application/json"
        }
      }
    );
    return rpta;
  };
  export const getClienteById = async(id)=>{
    const rpta = await axios.get(`${URLBACKEND}/cliente/${id}`);
    return rpta;
}
