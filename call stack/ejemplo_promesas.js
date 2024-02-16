const unPromensa = new Promise((resolve, reject) => {
    resolve('La promesa se cumplió');
    reject('La promesa falló')
});

unPromensa.then(
    respuesta => console.log(respuesta),
    razon => console.log(razon)
)