import { productoServices } from "../services/productos-servicios.js";

const nuevoProductoAdmin = (name, price, imageUrl, id) => {

    const card = document.createElement('div');
    const contenido_admin = `
    <div class="iconos">
	    <img src="../img/Vector_tachito.svg" alt="eliminar producto" class="catalogo__item-eliminar" id="${id}" btn-delete>
		<a href="../screens/editar_producto.html?id=${id}">
            <img src="../img/Vector_lapicito.svg" alt="editar producto" class="catalogo__item-editar" btn-edit>
        </a>
	</div>
	<img src="${imageUrl}" class="catalogo__imagen">
	<span class="nombre__producto" >${name}</span>
	<span class="precio__producto">${price}</span>
	<span class="unidades__producto">1111111</span>
    `
    card.innerHTML = contenido_admin;
    card.classList.add("catalogo__box___todos");

    const btnDelete = card.querySelector("[btn-delete]");

    btnDelete.addEventListener("click", () => {
        const id = btnDelete.id;
        productoServices.eliminarProducto(id).then (() => { window.location.href = "../screens/pantallas de respuesta/producto_eliminado.html";
        }).catch (error) (window.location.href = "../screens/pantallas de respuesta/error.html");
    });
    return card;
};

const productos = document.querySelector("[datos-productos-all]");

const mostrarProductoAdmin = async () => {
    try {
        const listaProductos = await productoServices.listaProductos();
        listaProductos.forEach(elemento => {
            productos.appendChild(nuevoProductoAdmin(elemento.name, elemento.price, elemento.imageUrl, elemento.id));
        });
    } catch (err) {
        console.log(err);
    }
}

mostrarProductoAdmin();