// Costos de los cursos y carrito ------------------

let costo_rc = 3000;
let costo_eb = 3000;
let costo_v = 5000;
let costo_ac = 5000;
let costo_ad = 6000;
let costo_iot = 5000;
let costo_rn = 4000;
let miCarrito = [];

// Capturo Botones

let compra_rc = document.querySelector('.compra_RC');
let compra_eb = document.querySelector('.compra_EB');
let compra_v = document.querySelector('.compra_V');
let compra_ac = document.querySelector('.compra_AC');
let compra_ad = document.querySelector('.compra_AD');
let compra_iot = document.querySelector('.compra_IOT');
let compra_rn = document.querySelector('.compra_RN');

// Datos de los cursos

compra_rc.addEventListener("click", ()=>{carritoCursos("Reparacion de celulares",costo_rc)});
compra_eb.addEventListener("click", ()=>{carritoCursos("Electrónica básica", costo_eb)});
compra_v.addEventListener("click",()=>{carritoCursos("Virtualización", costo_v)});
compra_ac.addEventListener("click",()=>{carritoCursos("Arquitectura de Computadoras", costo_ac)});
compra_ad.addEventListener("click",()=>{carritoCursos("Administrador de Active Directory", costo_ad)});
compra_iot.addEventListener("click",()=>{carritoCursos("Internet de las cosas", costo_iot)});
compra_rn.addEventListener("click",()=>{carritoCursos("Reparacion de Notebooks", costo_rn)});


// Funciones

// Funcion para almacenar los cursos en mi carrito

const carritoCursos = (nombre, precio) => {
    miCarrito.push({nombre,precio});
    alert(`Curso ${nombre} agregado con éxito`);
    contadorCarrito()
}


// Funcion contador

const contadorCarrito = ()=>{
    document.querySelector(".contador_carrito").textContent = `( ${miCarrito.length} )`;

}
// Guardar datos en local stogare
// Guardo el contenido antes de cerrar la venta con beforeunload
window.addEventListener("beforeunload", ()=>{
    localStorage.setItem("carrito", JSON.stringify(miCarrito));
})

