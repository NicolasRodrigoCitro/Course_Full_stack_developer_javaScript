const getNombre = () =>{
    return 'nicolas';
}
const getApellido = () => {
    return 'citro';
}
function getNombreCompleto(){
    const nombre = getNombre();
    const apellido = getApellido();
    return `${nombre} ${apellido}`;
}

const nombreCompleto = getNombreCompleto();
console.log('nombre completo: ', nombreCompleto);