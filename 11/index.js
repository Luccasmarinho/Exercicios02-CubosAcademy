//renda mensal do aluno, em centavos.
const rendaMensalEmCentavos = 199_000;

// Tempo decorrido de contrato. Se for maior que 60 meses, o aluno não deve mais nada.
const mesesDecorridos = 19;

// Soma das parcelas já pagas pelo aluno nos meses anteriores (em centavos). Se for igual a 18 mil reais, o aluno não deve pagar mais nada, pois já quitou a dívida.
const totalJaPagoPeloAluno = 1_000_000;


const rendaMensalEmReais = rendaMensalEmCentavos / 100; //renda convertido em reais
const totalPagoEmReais = totalJaPagoPeloAluno / 100; //total pago convertido em reais
const porcentagem = 0.18; //referente aos 18%

if (totalPagoEmReais >= 18000) {
    console.log("Você já pagou tudo!");
} else if (rendaMensalEmReais >= 2000 && mesesDecorridos <= 60) {
    console.log(`O valor da parcela desse mês é de: R$${rendaMensalEmReais * porcentagem} reais e faltam R$${18_000 - totalPagoEmReais} reais para finalizar tudo.`);
} else if (rendaMensalEmReais < 2000){
    console.log("O valor da parcela desse mês é R$ 0 reais. Nenhum valor é devido pois a renda do estudante está abaixo do valor mínimo de R$ 2000 reais.")
} else {
    console.log("Valor da parcela é 0, pois se passaram mais de 60 meses.");
}



