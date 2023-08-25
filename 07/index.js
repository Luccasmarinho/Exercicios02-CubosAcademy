const aposentada = false;
const portadoraDeDoenca = false;
const totalDeRendimentos = 2_855_70; //emCentavos
const totalDeRendimentosEmReais = totalDeRendimentos / 100; //em reais
const rendimento = (28_559.70).toFixed(2);

//seu código aqui


if (aposentada === true || portadoraDeDoenca === true) {
    console.log("ISENTA");
} else if (totalDeRendimentosEmReais <= rendimento) {
    console.log("VAZA LEÃO! JÁ TÁ DIFÍCIL SEM VOCÊ");
} else {
    console.log("PEGA LEÃO");
}



