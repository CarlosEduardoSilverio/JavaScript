"use strict";
exports.__esModule = true;
var cliente_1 = require("./1/src/cliente");
var conta1 = new cliente_1.Cliente("Carlos Eduardo", 1000, "003-5", "Bradesco");
conta1.verSaldo();
conta1.deposito(500);
conta1.verSaldo();
conta1.sacar(600);
conta1.verSaldo();
