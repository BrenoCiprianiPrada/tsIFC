class Carro{

    marca: string;
    modelo: string;
    ano: number;
    velocidade: number;

    constructor(marca: string, modelo: string, ano:number, velocidade: number = 0) {
        this.marca = marca;
        this.ano = ano;
        this.modelo = modelo;
        this.velocidade = velocidade;
    }

    //Metodo para Acelerar
    acelerar(incremento: number): void{
        this.velocidade += incremento;
        console.log(`O carro acelerou para ${this.velocidade} km/h.`)
    }

    //Metodo para Frear
    frear(decremento: number): void{
        if (this.velocidade - decremento >=0) {
            this.velocidade -= decremento;
            console.log(`O carro reduziu a velocidade para ${this.velocidade} km/h.`)
        }else {
            this.velocidade = 0;
            console.log("O carro parou.");
        }
    }

    //Metodo para exibir informações do carro
    exibirInfo(): void{
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}, Velocidade: ${this.velocidade} km/h`);
    }
}

//Criando um objeto da classe Carro
const MeuCarro = new Carro("Toyota", "Corolla", 2022);

//Exibindo informações do Carro
MeuCarro.exibirInfo();


