const proyectos = document.querySelector('#proyectos');
const titulo = document.querySelector('#titulo');


titulo.addEventListener('click', abrirProyectos);


function abrirProyectos() {
    limpiarHTML();
    const anchor = document.createElement('a'); 
    const anchor2 = document.createElement('a'); 
    const anchor3 = document.createElement('a'); 
    
    
    anchor.textContent = 'Proyecto cotizador de seguros';
    anchor.target ='_blank'
    anchor.href = 'https://proyecto-cotizador-seguros.netlify.app/';
    anchor.style.color = 'rgba(0, 26, 255, 0.507)';
    
    anchor2.textContent = 'Proyecto Presupuesto';
    anchor2.target ='_blank'
    anchor2.href = 'https://presupuesto-nicolas-traczuk.netlify.app/';
    anchor2.style.color = 'rgba(0, 26, 255, 0.507)';
    
    anchor3.textContent = 'Proyecto Administrador de citas/pacientes';
    anchor3.target ='_blank'
    anchor3.href = 'https://citas-nicolas-traczuk.netlify.app/';
    anchor3.style.color = 'rgba(0, 26, 255, 0.507)';


    proyectos.appendChild(anchor);
    proyectos.appendChild(anchor2);
    proyectos.appendChild(anchor3);

    
}


function limpiarHTML() {
    while(proyectos.firstChild) {
        proyectos.removeChild(proyectos.firstChild)
    }
}