const listaProductos = () => fetch("http://localhost:3000/producto").then(respuesta => respuesta.json());

const crearProductos = (name, imageUrl, price, section, description) => {
    return fetch (`http://localhost:3000/producto`, { 
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({name, imageUrl, price, id: uuid.v4(), alt: "Product", description , section})
    })
    .then (respuesta => { 
        if (respuesta.ok) {
            return respuesta.body;
        }
        throw new Error("Error al crear el producto");
    })
}

const eliminarProducto = (id) => {
    return fetch(`http://localhost:3000/producto/${id}`, {
        method: "DELETE",
    });
}

const detalleProducto = (id) => {
    return fetch (`http://localhost:3000/producto/${id}`).then(respuesta => respuesta.json())
};

const actualizarProducto = (name,imageUrl,price, id, alt, description, section) => {
    return fetch(`http://localhost:3000/producto/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, imageUrl, price, description , section}),
    }).then (respuesta => respuesta).catch((err) => console.log(err));
}

export const productoServices = {
    listaProductos,
    crearProductos,
    eliminarProducto,
    actualizarProducto,
    detalleProducto,
}