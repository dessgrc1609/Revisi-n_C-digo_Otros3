// Tenemos un li de productos

const productos = [ //  Se crearon dos carpetas (src y public para colocar las imágenes y cambiarles la ruta)
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./src/public/taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./src/public/taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./src/public/bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./src/public/bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./src/public/zapato-rojo.jpg"}
]

const li = document.querySelector("#lista-de-productos") /* Se cambió el ElementsByName por querySelector y se le añadió el # para hacer cumplir la función de los productos */
const inputFiltro = document.querySelector('input'); /* Se eliminó el signo de pesos, el punto y se colocó el inputFiltro */

// Se debe agregar la función display de los productos
function displayProductos(listaProductos){

 //Se limpian la lista de los productos
 
 while (li.firstChild){
  li.removeChild(li.firstChild);
 }

 // Se tiene que crear un ciclo donde determine las imágenes y títulos por medio del div, se manda a llamar los elementos para que apliquen la función
 for (let i = 0; i < listaProductos.length; i++) {
 let d = document.createElement("div") /*se* cambió var por let */
 d.classList.add("producto")

/* Se agrega el párrafo para distanciar el título del producto*/
let ti = document.createElement("p") 
    ti.classList.add("titulo")/* se le cambia la variable por let*/
    ti.textContent = productos[i].nombre

 let imagen = document.createElement("img"); // Se creó la carpeta de src para direccionar las imágenes y vincular la función img con las mismas
    imagen.setAttribute('src', listaProductos[i].img); 
    //En cada elemento se van a agregar el título, la imagen y una lista
    d.appendChild(ti); 
    d.appendChild(imagen);
    li.appendChild(d);

  }
}

// Se determina la Función para mostrar todos los productos en el inicio

displayProductos(productos)
const botonDeFiltro = document.querySelector("button");

botonDeFiltro.onclick = function() {
  /* Se quita la función del while por agregar el const del input*/
  const texto = inputFiltro.value.toUpperCase(); /* El texto se colocará en mayúsculas*/
  /*const texto = $i.value; se quita la función por el signo de pesos */
  console.log(texto);

  /*Se ingresan los productos en lista en conjunto con el texto*/
  const productosFiltrados = filtrado(productos, texto );
  displayProductos(productosFiltrados); // Se debe de mandar a llamar la función para que pueda incluirlos en nuestra sección de productos

};
  /*Se quitó el código de productos Filtrados porque se repite la funcionalidad*/
  


const filtrado = (productos, texto) => { // se le quitaron los corchetes para que pudieran aplicarse los valores correspondientes
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
};