const listaProductos = () => fetch("https://simonmarcelo.github.io/Sprint-2---E-Commerce/db.json").then(respuesta => respuesta.json());

const crearProductos = (name, imageUrl, price, section, description) => {
    return fetch (`https://simonmarcelo.github.io/Sprint-2---E-Commerce/db.json`, { 
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
    return fetch(`https://simonmarcelo.github.io/Sprint-2---E-Commerce/db.json/${id}`, {
        method: "DELETE",
    });
}

const detalleProducto = (id) => {
    return fetch (`https://simonmarcelo.github.io/Sprint-2---E-Commerce/db.json/${id}`).then(respuesta => respuesta.json())
};

const actualizarProducto = (name,imageUrl,price, id, alt="Product", description, section) => {
    return fetch(`https://simonmarcelo.github.io/Sprint-2---E-Commerce/db.json/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, imageUrl, price, id, alt, section , description}),
    }).then (respuesta => respuesta).catch((err) => console.log(err));
}

const buscarProductos = (find) => {
    return fetch(`https://simonmarcelo.github.io/Sprint-2---E-Commerce/db.json?find=${find}`).then(respuesta => respuesta.json());
}

export const productoServices = {
    listaProductos,
    crearProductos,
    eliminarProducto,
    actualizarProducto,
    detalleProducto,
    buscarProductos,
}
