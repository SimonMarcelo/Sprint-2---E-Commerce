import { productoServices } from "../services/productos-servicios.js";


const btnBuscar = document.querySelector("[data-accion-buscar]");

btnBuscar.addEventListener("click", () => {
    const textoABuscar = document.querySelector("[data-texto-buscar]").value;
    productoServices.buscarProductos(textoABuscar)
        window.location.href = `../screens/resultado_busqueda_copy.html?find=${textoABuscar}`;
});
