const formulario = document.querySelector("#mi-formulario");
const inputName = document.querySelector("#name");
const inputEmail = document.querySelector("#email");
const inputTextarea = document.querySelector("#texto");

const parrafoError1 = document.querySelector("#texto-error1");
const parrafoError2 = document.querySelector("#texto-error2");
const parrafoError3 = document.querySelector("#texto-error3");

const svgError1 = document.querySelector("#svg-1");
const svgError2 = document.querySelector("#svg-2");
const svgError3 = document.querySelector("#svg-3");

formulario.addEventListener("submit", (e) => {
  let formularioValido = true;

  if (inputName.value.trim().length < 3) {
    formularioValido = false;
    parrafoError1.classList.add("text-error-open");
    parrafoError1.classList.remove("text-error");
    svgError1.classList.add("svg-2-error");
    svgError1.classList.remove("svg-2");
  } else {
    parrafoError1.classList.remove("text-error-open");
    parrafoError1.classList.add("text-error");
    svgError1.classList.remove("svg-2-error");
    svgError1.classList.add("svg-2");
  }

  if (inputEmail.value == "" || !inputEmail.value.includes("@")) {
    formularioValido = false;
    parrafoError2.classList.add("text-error-open");
    parrafoError2.classList.remove("text-error");
    svgError2.classList.add("svg-2-error");
    svgError2.classList.remove("svg-2");
  } else {
    parrafoError2.classList.remove("text-error-open");
    parrafoError2.classList.add("text-error");
    svgError2.classList.remove("svg-2-error");
    svgError2.classList.add("svg-2");
  }

  if (inputTextarea.value == "") {
    formularioValido = false;
    parrafoError3.classList.add("text-error-open");
    parrafoError3.classList.remove("text-error");
    svgError3.classList.add("svg-2-error");
    svgError3.classList.remove("svg-2");
  } else {
    parrafoError3.classList.remove("text-error-open");
    parrafoError3.classList.add("text-error");
    svgError3.classList.remove("svg-2-error");
    svgError3.classList.add("svg-2");
  }

  if (!formularioValido) {
    e.preventDefault();
  }
});
