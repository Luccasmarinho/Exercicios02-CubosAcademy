//valor do produto comprado.
const valorDoProduto = 1000;

//quantidade de parcelas
const quantidadeDoParcelamento = 10;

//valor pago
const valorPago = 500;

const faltaPagar = valorDoProduto - valorPago;
const quantidadePagaPorMes = valorDoProduto / quantidadeDoParcelamento;
const numeroDeParcelasQueFaltam = faltaPagar / quantidadePagaPorMes;
const unidade = numeroDeParcelasQueFaltam === 1 ? "Parcela" : "Parcelas";

//console.log(faltaPagar);
//console.log(quantidadePagaPorMes);
//console.log(numeroDeParcelasQueFaltam);

console.log(`Restam ${numeroDeParcelasQueFaltam} ${unidade} de ${quantidadePagaPorMes} R$`);

