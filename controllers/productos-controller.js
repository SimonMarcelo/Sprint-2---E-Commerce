import { productoServices } from "../services/productos-servicios.js";

const nuevoProducto = (name, price, imageUrl, id) => {

    const card = document.createElement('div');
    const contenido = `
    <img src="${imageUrl}" class="catalogo__imagen"></img>
    <p class="nombre__producto">${name}</p>
    <p class="precio__producto">${price}</p>
    <a href="../screens/producto.html?id=${id}" class="link__producto" id="${id}">Ver producto</a>
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
        let starwars = 0;
        let consolas = 0;
        let diversos = 0;
        listaProductos.forEach(elemento => {
            if ((starwars < 6) && (elemento.section === "Star Wars")) {
                    productosStarwars.appendChild(nuevoProducto(elemento.name, elemento.price, elemento.imageUrl, elemento.id));
                    starwars++;
                }
            if ((consolas < 6) && (elemento.section === "Consolas")) {
                    productosConsolas.appendChild(nuevoProducto(elemento.name, elemento.price, elemento.imageUrl, elemento.id));
                    consolas++;
                } 
            if ((diversos < 6) && (elemento.section === "Diversos")) {
                    productosDiversos.appendChild(nuevoProducto(elemento.name, elemento.price, elemento.imageUrl, elemento.id));
                    diversos++;
                }
        });
    } catch (err) {
        console.log(err);
    }
}

mostrarProducto();