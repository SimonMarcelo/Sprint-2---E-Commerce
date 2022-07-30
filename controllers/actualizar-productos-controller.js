import { productoServices } from "../services/productos-servicios.js";

const formulario = document.querySelector("[data-form]");

const obtenerInformacion = async () => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    if (id == null) {
        alert("NO SE HA PODIDO OBTENER EL ID DEL PRODUCTO");
    }

    const imageUrl = document.querySelector("[data-url]");
    const section = document.querySelector("[data-categoria]");
    const name = document.querySelector("[data-nombre]");
    const price = document.querySelector("[data-precio]");
    const description = document.querySelector("[data-descripcion]");

    try{
        const producto = await productoServices.detalleProducto(id)
        section.value = producto.section;
        name.value = producto.name;
        imageUrl.value = producto.imageUrl;
        price.value = producto.price;
        description.value = producto.description;
    } catch(err) {
        console.log (err);
    }
};

obtenerInformacion();


formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const url = new URL(window.location);
    const id = url.searchParams.get("id");
    const alt = url.searchParams.get("alt");

    const section = document.querySelector("[data-categoria]").value;
    const name = document.querySelector("[data-nombre]").value;
    const imageUrl = document.querySelector("[data-url]").value;
    const price = document.querySelector("[data-precio]").value;
    const description = document.querySelector("[data-descripcion]").value;
    productoServices.actualizarProducto(name, imageUrl, price, id, alt, description , section).then(() => { window.location.href = "../screens/todos_los_productos.html"; }).catch(window.location.href = "../screens/todos_los_productos.html")
});