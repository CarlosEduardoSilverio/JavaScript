export class Pessoa1 { 
    quantidadeTransferir: number;
    saldo: number;

    constructor(
        quantidadeTransferir: number,
        saldo: number,
        
    ){
        this.quantidadeTransferir = quantidadeTransferir
        this.saldo = saldo
        
    }

    verSaldo(){
        console.log(`FERNANDO ALENCAR PEREIRA:`);
        console.log(`O seu saldo é de R$ ${this.saldo}`);
    }

    valorTransferir(){
        console.log(`O valor transferido foi de R$ ${this.quantidadeTransferir}`)
    }

}