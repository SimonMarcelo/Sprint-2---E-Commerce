import { productoServices } from "../services/productos-servicios.js";

const form = document.querySelector("[data-form]");




form.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const name = document.querySelector("[data-nombre]").value;
    const imageUrl = document.querySelector("[data-url]").value;
    const price = document.querySelector("[data-precio]").value;
    const section = document.querySelector("[data-categoria]").value;
    const description = document.querySelector("[data-descripcion]").value;
    console.log (section)
    productoServices.crearProductos(name, imageUrl, price, section, description)
    .then((respuesta) => { 
            window.location.href = "../screens/pantallas de respuesta/producto_agregado.html";
            console.log(respuesta);
    }).catch(err => {
        console.log(err);
    })
});