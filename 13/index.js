//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = "credito";

//valor da mercadoria (centavos)
const valorDoProduto = 15_560;
const valorDoProdutoEmReais = valorDoProduto / 100; //valor da mercadoria em reais

//porcentagem dos descontos
const descontoDebitoDinheiro = 0.10; //referente aos 10%
const descontoCheque = 0.03; //referente aos 3%
const descontoCredito = 0.05; //referente aos 5%

//valor final a ser pago em dinheiro, cheque ou credito
const valorFinalDebitoDinheiro = valorDoProdutoEmReais - (valorDoProdutoEmReais * descontoDebitoDinheiro);
const valorFinalCheque = valorDoProdutoEmReais - (valorDoProdutoEmReais * descontoCheque);
const valorFinalCredito = valorDoProdutoEmReais - (valorDoProdutoEmReais * descontoCredito);

if (tipoDePagamento === "debito" || tipoDePagamento === "Debito" || tipoDePagamento === "Débito" || tipoDePagamento === "débito" || tipoDePagamento === "Dinheiro" || tipoDePagamento === "dinheiro") {
    console.log(`Valor a ser pago: ${valorFinalDebitoDinheiro.toFixed(2)}`);
} else if (tipoDePagamento === "cheque" || tipoDePagamento === "Cheque") {
    console.log(`Valor a ser pago: ${valorFinalCheque.toFixed(2)}`);
} else if (tipoDePagamento === "credito" || tipoDePagamento === "crédito" || tipoDePagamento === "Credito" || tipoDePagamento === "Crédito") {
    console.log(`Valor a ser pago: ${valorFinalCredito.toFixed(2)}`);
} else {
    console.log("Erro! Você digitou um tipo de pagamento inválido. Coloque apenas: credito, debito, dinheiro ou cheque");
}

