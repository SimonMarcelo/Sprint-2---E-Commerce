import { productoServices } from "../services/productos-servicios.js";

const productoDestacado = document.querySelector("[producto-principal]");
const productosSimilares = document.querySelector("[productos-similares]");

const nuevoProductoPrincipal = (name, price, imageUrl, description) => {

    const divPrincipal = document.createElement('div');
    const contenidoPrincipal = `
    <img src="${imageUrl}" class="producto__imagen"></img>
	<div class="producto__descripcion">
		<span class="producto__descripcion___nombre">${name}</span>
		<p class="producto__descripcion___precio">${price}</p>
		<p class="producto__descripcion___detalle">${description}</p>
	</div>
    `
    divPrincipal.innerHTML = contenidoPrincipal;
    divPrincipal.classList.add("producto");
    return divPrincipal;
};


const mostrarProductoPrincipal = async () => {
    try {
        const url = new URL(window.location);
        const id = url.searchParams.get("id");

        const listaProductos = await productoServices.listaProductos();
        listaProductos.forEach(element => {
            if (element.id == id) {
                productoDestacado.appendChild(nuevoProductoPrincipal(element.name, element.price, element.imageUrl, element.description));
            };
        })
    } catch (err) {
        console.log(err);
    }
}

mostrarProductoPrincipal();




const nuevoProductosSimilares = (name, price, imageUrl, id) => {

    const divSimilares = document.createElement('div');
    const contenidoSimilar = `
    <div class="catalogo__box">
		<img src="${imageUrl}" class="catalogo__imagen c1"></img>
		<p class="nombre__producto">${name}</p>
		<p class="precio__producto">${price}</p>
		<a href="../screens/producto.html?id=${id}" class="link__producto">Ver producto</a>
	</div>
    `
    divSimilares.innerHTML = contenidoSimilar;
    divSimilares.classList.add("catalogo__box");

    return divSimilares;
};

const mostrarProductosSimilares = async () => {
    try {
        const listaProductos = await productoServices.listaProductos();
        const url = new URL(window.location);
        const id = url.searchParams.get("id");
        let producto = 0;
        listaProductos.forEach(elemento => {
            if ((producto < 6) && (elemento.id!=id)) {
                productosSimilares.appendChild(nuevoProductosSimilares(elemento.name, elemento.price, elemento.imageUrl, elemento.id));
                producto++;
            }
        });
    } catch (err) {
        console.log(err);
    }
}

mostrarProductosSimilares();
