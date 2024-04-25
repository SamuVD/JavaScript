const arrayOriginal = [1, 2, 3, 1, 2, 2, 3, 4, 4, 5]
let arrayFiltrado = [] // [1,2,3,4,5]
for (let i = 0; i < arrayOriginal.length; i++) {
    let element = arrayOriginal[i]
    let encontrado = false
    for (let j = 0; j < arrayFiltrado.length; j++) {
        if (element === arrayFiltrado[j]){
           encontrado = true
           break;
        }
    }
    if(encontrado===false){
        arrayFiltrado.push(element)
    }
}
console.log(arrayOriginal)
console.log("antes - despues")
console.log(arrayFiltrado)