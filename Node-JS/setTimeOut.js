const timeOut = 3000 // chama a função de volta apos 3 segundos
const finished = () => console.log('done!')

setTimeout(finished, timeOut) // dps de fineshed chama de volta afuncao com timeOut 
console.log('Mostrar')

// => function call back 