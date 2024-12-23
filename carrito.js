// Recupero datos del local storage

const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

//Funcion que muestra los cursos del carrito

const mostarCarrito = () => {
    const lista = document.querySelector(".cursos");
    lista.innerHTML = "";

    // Reviso si el carrito tiene productos
    if (carrito.length === 0) {
        lista.innerHTML = '<p class ="carrito_vacio">Ups, ¡carrito vacio!</p>';
        document.querySelector(".btn_finCompra").classList.add("remover_btn");

        return;
    }
    carrito.forEach((item, indice) => {
        document.querySelector(".btn_finCompra").classList.remove("remover_btn");
        const curso = document.createElement("article");
        curso.classList.add("cursos-item");
        curso.innerHTML = `
        <h3>${item.nombre}</h3>
        <h3 class = "precio precio2">$${item.precio}</h3>
        <button class = "btn btn-outline-danger btn_eliminar" onclick = "borrarItem(${indice})">Eliminar</button>`;
        lista.appendChild(curso);
    });
}

// Borrar carrito  

const borrarItem = (indice) => {
    carrito.splice(indice, 1)
    localStorage.setItem("carrito", JSON.stringify(carrito))
    mostarCarrito();
}

//Simulacion de la compra


document.querySelector(".btn_finCompra").addEventListener("click", () => { finalizaCompra() })


const finalizaCompra = () => {
    alert("Compra realizada!");
    localStorage.removeItem("carrito");
    window.location.href = "index.html";
}

//inicializar el carrito al inicializar la pagina

mostarCarrito();