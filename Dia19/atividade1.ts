import { Cliente } from "./1/src/cliente"


let conta1 = new Cliente("Carlos Eduardo", 1000, "003-5", "Bradesco");

conta1.verSaldo();
conta1.deposito(500);
conta1.verSaldo();
conta1.sacar(600);
conta1.verSaldo();