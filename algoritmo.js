const inputNombre = document.querySelector("#nombre-ingresado");
const inputEdad = document.querySelector("#edad-ingresada");
const inputEmail = document.querySelector("#email-ingresado");
const inputDni = document.querySelector("#dni-ingresado");
const inputClave = document.querySelector("#clave");
const pResultado1 = document.querySelector("#saludo1");
const pResultado2 = document.querySelector("#saludo2");
const pResultado3 = document.querySelector("#saludo3");
const pResultado4 = document.querySelector("#saludo4");
const pResultado5 = document.querySelector("#saludo4");
const pResultado6 = document.querySelector("#saludo6");
const colorPagina = document.querySelector("body");
const imagenpagina = document.querySelector("#imagen-pag");

const colorFondoPag = "#0d1117";
const colorTexto = "#e6edf3";

const claveSecreta = "0000";
const mayorEdad = "18";

const IMG_1 = "https://psicocode.com/wp-content/uploads/2023/02/calamardo.jpg";
const IMG_2 = "https://thumbs.dreamstime.com/b/error-109026446.jpg";

colorPagina.style.backgroundColor = colorFondoPag;
colorPagina.style.color = colorTexto;

function mostrarDatos() {

    let verifclave = inputClave.value;

    if (verifclave == claveSecreta) {

        nombreIngresado = inputNombre.value;
        edadIngresada = inputEdad.value;
        emailIngresado = inputEmail.value;
        dniIngresado = inputDni.value;

        pResultado1.innerHTML = "Bienvenido " + nombreIngresado;
        pResultado2.innerHTML = "Edad: " + edadIngresada + " años";
        pResultado3.innerHTML = "Email: " + emailIngresado;
        pResultado4.innerHTML = " DNI: " + dniIngresado;

        pResultado1.style.fontFamily = "monospace";
        pResultado2.style.fontFamily = "monospace";
        pResultado3.style.fontFamily = "monospace";
        pResultado4.style.fontFamily = "monospace";

        pResultado1.style.color = "purple";
        pResultado2.style.color = "purple";
        pResultado3.style.color = "purple";
        pResultado4.style.color = "purple";

        imagenpagina.src = IMG_1;

        if (edadIngresada >= mayorEdad) {
            pResultado5.innerHTML = "Eres mayor de edad.";
            pResultado6.style.fontFamily = "monospace";
            pResultado6.style.color = "purple";
        }
        else {
            pResultado5.innerHTML = "Eres menor de edad.";
            pResultado6.style.fontFamily = "monospace";
            pResultado6.style.color = "purple";
        };


    }
    else {
        pResultado6.innerHTML = "CLAVE INCORRECTA"
        pResultado6.style.fontFamily = "monospace";
        pResultado6.style.color = "red";
        imagenpagina.src = IMG_2;

    }
};