export class Pessoa2{
    saldo2: number;
    reeceber: number;

    constructor(
        saldo2: number,
        reeceber: number,
    ){
        this.saldo2 = saldo2
        this.reeceber = reeceber
    }

    receber(){
        console.log(`O valor recebido foi de: R$ ${this.reeceber}`)
    }

    verSaldo2(){
        console.log(`\nMATHEUS RIBEIRO DA SILVA:`)
        console.log(`O seu saldo é de: ${this.saldo2}`)
    }
}