// const loginbtn = document.querySelector(".header__boton");
// loginbtn.addEventListener("click", () => {
//     window.location.href = "../iniciar-sesion.html"
// });

const formulario = document.querySelector("[data-login]");
formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const email = document.querySelector(".inicio__sesion___email").value;
    const password = document.querySelector(".inicio__sesion___contraseña").value;
    // if (email === "prueba@ecommerce.com" && password === "123456") {
    //     window.location.href = "../index.html";
    // } else {
    //     alert("Usuario o contraseña incorrectos");
    // }
    console.log(email, " - ", password);
    return evento;
})


