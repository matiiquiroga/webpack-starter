import '../css/componentes.css';

export const saludar = (nombre) => {

    console.log('creando etiqueta H1 en el php');

    const h1 = document.createElement('h1');
    h1.innerText =  `Hola, ${ nombre }, como te va??`;

    document.body.append ( h1 );
}