const misFunciones = require('./funcionesDeTareas');


let accion = process.argv[2]
    
    switch (accion) {
    case 'listar':
         let tareas = misFunciones.listar();
          tareas.forEach(element =>{
          console.log('La tarea '+ element.titulo + ' se encuentra '+ element.Estado);
        });
        console.log('---------------');
        console.log(misFunciones.listar());
        console.log('---------------');
        break;

    case undefined:
        console.log('---------------');
        console.log('Atención - Tienes que pasar una acción');
        console.log('---------------');
        break;
        
    default:
        console.log('----------------');
        console.log('No entiendo qué quieres hacer');
        console.log('----------------');
        break;
    }