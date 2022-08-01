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

const productos = document.querySelector("[datos-productos-busqueda]");
const url = new URL(window.location);
const find = url.searchParams.get("find");
console.log (find);

const mostrarProducto = async () => {
    try {
        const listaProductos = await productoServices.listaProductos();
        listaProductos.forEach(elemento => {
            console.log(elemento.name)
            if (elemento.name.toLowerCase().includes(find.toLowerCase())) {
                productos.appendChild(nuevoProducto(elemento.name, elemento.price, elemento.imageUrl, elemento.id));
            }
        });
    } catch (err) {
        console.log(err);
    }
}

mostrarProducto();

