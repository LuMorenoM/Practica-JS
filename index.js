const lectura = document.querySelector(".modoLectura");
const normal = document.querySelector(".modoNormal");


// Función para cambiar a Modo Lectura
// Pone el fondo de la sección a negro
// El texto a blanco y Oculta la imagen
const fondoSection = ()=>{
    // document.querySelector('section').style.backgroundColor='black';
    // document.querySelector('p').style.color='white';
    // document.querySelector('img').style.display='none';
    document.querySelector('section').classList.add('modo-lectura');
    document.querySelector('img').classList.add('img-modo-lectura');
}

// Función para cambiar a Modo Normal
// Remueve los cambios de la función anterior
const fondoNormal = ()=>{
    // document.querySelector('section').style.removeProperty("background-Color");
    // document.querySelector('p').style.removeProperty("color");
    // document.querySelector('img').style.removeProperty("display");
    document.querySelector('section').classList.remove('modo-lectura');
    document.querySelector('img').classList.remove('img-modo-lectura');
}

lectura.addEventListener('click',fondoSection);
normal.addEventListener('click',fondoNormal);


