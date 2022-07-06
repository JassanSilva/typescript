let anyEstadeVolta: any;
anyEstadeVolta = 3;
anyEstadeVolta = 'teste';
anyEstadeVolta = 5;

let stringTeste: string = 'verificar'
stringTeste = anyEstadeVolta;

let unknownValor: unknown;
unknownValor = 3;
unknownValor = 'opa';
unknownValor = true;
unknownValor = 'vai sim';

let stringTest2: string = 'agora vai';
//stringTest2 = unknownValor;

if (typeof unknownValor === 'string') {
    stringTest2 = unknownValor;
}