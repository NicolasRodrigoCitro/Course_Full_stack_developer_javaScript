
const fabricaDePromesas = indice =>
    new Promise((resolve, reject) => {
    
    const timeResolve= Math.floor(Math.random() * 10000)+ 1000;
    const timeReject= Math.floor(Math.random() * 10000)+ 1000;

    setTimeout( ()=>{
        resolve(`La promesa ${indice} se cumplió`);//resolver
    },timeResolve)
    
    setTimeout( ()=>{
        reject(`La promesa ${indice} falló`)//rechazar
    },timeReject)    
});
 

let miPromesas = [];
for (let i=0; i<10; i++){
    miPromesas=[...miPromesas, fabricaDePromesas(i)];
}
//unPromensa.then( respuesta => console.log(respuesta), razon => console.log(razon))
Promise.race(miPromesas)
    .then(resupuesta => console.log(resupuesta))
    .catch(razon => console.log(razon))