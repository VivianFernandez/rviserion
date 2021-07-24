import axios from "axios";

const URLBACKEND = "http://localhost:8000";

export const getAdmin = async (objAdmin) => {
  const rpta = await axios.post(`${URLBACKEND}/loginAdmin`,
  JSON.stringify(objAdmin),
  {
    headers: {
      "Content-type": "application/json"

    }
  });
  return rpta;
};
export const getProduct = async () => {
  const rpta = await axios.get(`${URLBACKEND}/getAllProducts`);
  return rpta;
}
export const getCliente = async () => {
  const rpta = await axios.get(`${URLBACKEND}/getAllClients`);
  return rpta;
}
export const registrarProducto = async (objProducto) => {
  const rpta = await axios.post(`${URLBACKEND}/addProduct`,
    JSON.stringify(objProducto),
    {
      headers: {
        "Content-type": "application/json"

      }
    });
  return rpta;
}

export const registrarCliente = async (objCliente) =>{
  const rpta = await axios.post(`${URLBACKEND}/addClient`,
    JSON.stringify(objCliente),
    {
      headers: {
        "Content-type": "application/json"

      }
    });
  return rpta;
}
export const putProducto = async (objProducto) => {
  const rpta = await axios.put(`${URLBACKEND}/producto/${objProducto.id}`,
    JSON.stringify(objProducto),
    {
      headers: {
        "Content-type": "application/json"

      }
    });
  return rpta;
}
export const getProductById = async (id) => {
  const rpta = await axios.get(`${URLBACKEND}/producto/${id}`);
  return rpta;
}

export const getProductos = async () => {
  const rpta = await axios.get(`${URLBACKEND}/getAllProducts`);
  return rpta;
};

export const getAllProductsImg = async() =>{
  const rpta = await axios.get(`${URLBACKEND}/getAllProductsImg`);
  return rpta;
};

export const deleteProductoById = async (id) => {
  const rpta = await axios.delete(`${URLBACKEND}/deleteProductById/${id}`);
  return rpta;
};
export const deleteClienteById = async (id) => {
  const rpta = await axios.delete(`${URLBACKEND}/deleteClientById/${id}`);
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
export const getClienteById = async (id) => {
  const rpta = await axios.get(`${URLBACKEND}/cliente/${id}`);
  return rpta;
}
