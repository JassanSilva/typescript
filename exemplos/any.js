"use strict";
let anyEstadeVolta;
anyEstadeVolta = 3;
anyEstadeVolta = 'teste';
anyEstadeVolta = 5;
let stringTeste = 'verificar';
stringTeste = anyEstadeVolta;
let unknownValor;
unknownValor = 3;
unknownValor = 'opa';
unknownValor = true;
unknownValor = 'vai sim';
let stringTest2 = 'agora vai';
//stringTest2 = unknownValor;
if (typeof unknownValor === 'string') {
    stringTest2 = unknownValor;
}
