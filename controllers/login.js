const formulario = document.querySelector("[data-login]");
formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const email = document.querySelector(".inicio__sesion___email").value;
    const password = document.querySelector(".inicio__sesion___contraseña").value;
    if (email === "prueba@alura.com" && password === "123456") {
        window.location.href = "../screens/todos_los_productos.html";
    } else {
        alert("Usuario o contraseña incorrectos");
        window.location.href = "../screens/iniciar_sesion.html";
    }
})
