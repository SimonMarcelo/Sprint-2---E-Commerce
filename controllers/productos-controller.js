import { productoServices } from "../services/productos-servicios.js";

const nuevoProducto = (name, price, imageUrl) => {
    
    const card = document.createElement('div');
    const contenido = `
    <img src="${imageUrl}" class="catalogo__imagen"></img>
    <p class="nombre__producto">${name}</p>
    <p class="precio__producto">${price}</p>
    <a href="" class="link__producto">Ver producto</a>
    `
    card.innerHTML = contenido;
    card.classList.add("catalogo__box");
    return card;
};

const productosStarwars = document.querySelector("[datos-productos-starwars]");
const productosConsolas = document.querySelector("[datos-productos-consolas]");
const productosDiversos = document.querySelector("[datos-productos-diversos]");

const mostrarProducto = async () => {
    try {
        const listaProductos = await productoServices.listaProductos();
        listaProductos.forEach(elemento => {
            if (elemento.section === "Star Wars") {
                productosStarwars.appendChild(nuevoProducto(elemento.name, elemento.price, elemento.imageUrl));
            } else if (elemento.section === "Consolas") {
                productosConsolas.appendChild(nuevoProducto(elemento.name, elemento.price, elemento.imageUrl));
            } else if (elemento.section === "Diversos") {
                productosDiversos.appendChild(nuevoProducto(elemento.name, elemento.price, elemento.imageUrl));
            }
        });
    } catch (err) {
        console.log(err);
    }
}

mostrarProducto();