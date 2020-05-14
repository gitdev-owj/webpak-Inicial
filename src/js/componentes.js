
import '../css/componentes.css'; 

export const saluddar = (nombre) => {
    console.log('creando etiqueta H1, cambio'); 
    
    const h1 = document.createElement('h1'); 
    h1.innerText = `Hola, ${nombre}`; 
    document.body.append(h1);  
}
