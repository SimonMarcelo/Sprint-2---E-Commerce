const formulario = document.querySelector("[data-login]");
formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const email = document.querySelector(".inicio__sesion___email").value;
    const password = document.querySelector(".inicio__sesion___contraseña").value;
    if (email === "prueba@alura.com" && password === "123456") {
        window.location.href = "../screens/todos_los_productos_admin.html";
    } else {
        window.location.href = "../screens/pantallas de respuesta/error-login.html";
    }
})
