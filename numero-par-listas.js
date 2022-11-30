/*2)
    Listas (arrays)
Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número Par encontrado. */ 


const numeros = [1, 22, 47, 35, 15, 66, 48, 14];

for (let i = 0; i < numeros.length; i++) {
    numero  = numeros[i];
    
    if(numero % 2 === 0){
        console.log(numero);
    }

}