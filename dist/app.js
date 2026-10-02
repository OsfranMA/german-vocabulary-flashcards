"use strict";
const formulario = document.querySelector(".form");
const inputAleman = document.querySelector("#PalabraenAleman");
const inputEspañol = document.querySelector("#TraduccionalEspañol");
const categorias = document.querySelector("#categoria");
const xBorrar = document.querySelector(".tarjetaaleman__btn-borrar");
const tarjetaCreada = document.querySelector(".tarjetaaleman");
const textoContador = document.querySelector(".listaTarjetas__datos");
let TotalTarjetas = 1;

if (localStorage.getItem("bienvenida_borrada") === "si") {
  if (tarjetaCreada) {
    tarjetaCreada.remove();
    TotalTarjetas = 0;
    textoContador.textContent = `Total: ${TotalTarjetas} tarjetas`;
  }
}
if (xBorrar) {
  xBorrar.addEventListener("click", () => {
    TotalTarjetas--;
    textoContador.textContent = `Total: ${TotalTarjetas} tarjetas`;
    tarjetaCreada.remove();
    localStorage.setItem("bienvenida_borrada", "si");
  });
}
if (!localStorage.getItem("mis tarjetas")) {
  localStorage.setItem("mis tarjetas", JSON.stringify([]));
}
formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  const palabraAleman = inputAleman.value;
  const palabraEspañol = inputEspañol.value;
  const occiones = categorias.value;
  if (palabraAleman === "" || palabraEspañol === "" || occiones === "") {
    alert("Nein, Todos los campos son inportantes");
  } else {
    const palabrasGuardadasObj = {
      aleman: palabraAleman,
      español: palabraEspañol,
      occion: occiones,
    };
    let datosTarjetaObj = localStorage.getItem("mis tarjetas");
    let datosTarjetaParce = JSON.parse(datosTarjetaObj);
    datosTarjetaParce.push(palabrasGuardadasObj);
    localStorage.setItem("mis tarjetas", JSON.stringify(datosTarjetaParce));
    const crearTarjeta = document.createElement("div");
    const bontonCerrar = document.createElement("button");
    const contenidoTarjeta = document.createElement("div");
    const contenidoAleman = document.createElement("h3");
    const contenidoEspañol = document.createElement("p");
    const occionElejida = document.createElement("span");
    contenidoAleman.textContent = palabraAleman;
    contenidoEspañol.textContent = palabraEspañol;
    occionElejida.textContent = occiones;
    bontonCerrar.textContent = "×";
    crearTarjeta.classList.add("tarjetaaleman");
    bontonCerrar.classList.add("tarjetaaleman__btn-borrar");
    contenidoTarjeta.classList.add("contenido");
    contenidoAleman.classList.add("contenido__palabra");
    contenidoEspañol.classList.add("contenido__significado");
    occionElejida.classList.add("tarjeta-aleman__tag");
    contenidoTarjeta.appendChild(contenidoAleman);
    contenidoTarjeta.appendChild(contenidoEspañol);
    contenidoTarjeta.appendChild(occionElejida);
    crearTarjeta.appendChild(bontonCerrar);
    crearTarjeta.appendChild(contenidoTarjeta);
    const seccionTarjeta = document.querySelector(".flexible");
    seccionTarjeta.appendChild(crearTarjeta);
    TotalTarjetas++;
    textoContador.textContent = `Total: ${TotalTarjetas} tarjetas`;
    inputAleman.value = "";
    inputEspañol.value = "";
    categorias.value = "";
    let datosActuales = JSON.parse(localStorage.getItem("mis tarjetas"));
    let nuevoIndex = datosActuales.length - 1;
    bontonCerrar.addEventListener("click", () => {
      TotalTarjetas--;
      textoContador.textContent = `Total: ${TotalTarjetas} tarjetas`;
      let lista = JSON.parse(localStorage.getItem("mis tarjetas"));
      lista.splice(nuevoIndex, 1);
      localStorage.setItem("mis tarjetas", JSON.stringify(lista));
      crearTarjeta.remove();
    });
  }
});
let datosTarjeta = localStorage.getItem("mis tarjetas");
let datosTarjetaParceObj = JSON.parse(datosTarjeta);
if (datosTarjetaParceObj) {
  datosTarjetaParceObj.forEach((tarjetas, index) => {
    const crearTarjeta = document.createElement("div");
    const bontonCerrar = document.createElement("button");
    const contenidoTarjeta = document.createElement("div");
    const contenidoAleman = document.createElement("h3");
    const contenidoEspañol = document.createElement("p");
    const occionElejida = document.createElement("span");
    contenidoAleman.textContent = tarjetas.aleman;
    contenidoEspañol.textContent = tarjetas.español;
    occionElejida.textContent = tarjetas.occion;
    bontonCerrar.textContent = "×";
    crearTarjeta.classList.add("tarjetaaleman");
    bontonCerrar.classList.add("tarjetaaleman__btn-borrar");
    contenidoTarjeta.classList.add("contenido");
    contenidoAleman.classList.add("contenido__palabra");
    contenidoEspañol.classList.add("contenido__significado");
    occionElejida.classList.add("tarjeta-aleman__tag");
    contenidoTarjeta.appendChild(contenidoAleman);
    contenidoTarjeta.appendChild(contenidoEspañol);
    contenidoTarjeta.appendChild(occionElejida);
    crearTarjeta.appendChild(bontonCerrar);
    crearTarjeta.appendChild(contenidoTarjeta);
    TotalTarjetas++;
    textoContador.textContent = `Total: ${TotalTarjetas} tarjetas`;
    const seccionTarjeta = document.querySelector(".flexible");
    seccionTarjeta.appendChild(crearTarjeta);
    bontonCerrar.addEventListener("click", () => {
      TotalTarjetas--;
      textoContador.textContent = `Total: ${TotalTarjetas} tarjetas`;
      let lista = JSON.parse(localStorage.getItem("mis tarjetas"));
      lista.splice(index, 1);
      localStorage.setItem("mis tarjetas", JSON.stringify(lista));
      crearTarjeta.remove();
    });
  });
}
