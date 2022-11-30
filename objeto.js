/* Orientação  a objeto 

Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso. */ 

class Carro { 
    marca;
    cor; 
    gastoPorKm; 


constructor  (marca, cor, gastoPorKm) { 
    this.marca = marca; 
    this.cor = cor; 
    this.gastoPorKm = gastoPorKm;
    }
    calcularGastoMedioPercurso(distanciaEmKM, precoCombustivel ){ 
        return distanciaEmKM * this.gastoPorKm * precoCombustivel;
    }
}
const uno = new Carro('Fiat', 'prata', 1 / 12 ); 
uno.calcularGastoMedioPercurso(70, 5); 

console.log(uno.calcularGastoMedioPercurso(70, 5));