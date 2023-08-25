const caractere = "U";

/* Faça um programa que identifica caracteres. Seu programa deverá classificar este único caractere, que estará guardado numa variável, em uma das categorias abaixo:

| Categoria | Caractere                             |
| --------- | ------------------------------------- |
| Vogal     | A E I O U a e i o u                   |
| Consoante | Qualquer letra que não seja uma vogal |
| Número    | 1 2 3 4 5 6 7 9 0                     |

Seu programa deverá dizer qual a categoria do caractere. Caso a categoria seja **Vogal**, seu programa deverá ainda informar se a vogal é maiúscula ou minúscula. */

if (caractere >= 0 || caractere <= 9) {
    console.log("Número");
} else if (caractere === "A" || caractere === "E" || caractere === "I" || caractere === "O" || caractere === "U") {
    console.log("Vogal maiúscula");
} else if (caractere === "a" || caractere === "e" || caractere === "i" || caractere === "o" || caractere === "u") {
    console.log("Vogal minúscula");
} else {
    console.log("Consoante")
}
