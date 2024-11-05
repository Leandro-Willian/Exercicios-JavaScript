function calcular() {
    const numerosInput = document.getElementById("numeros").value;
    const numerosArray = numerosInput.split(',').map(Number);

    let soma = 0;
    let pares = 0;
    let impares = 0;

    for (let i = 0; i < numerosArray.length; i++) {
        const num = numerosArray[i];
        soma += num;

        if (num % 2 === 0) {
            pares++;
        } else {
            impares++;
        }
    }

    const media = soma / numerosArray.length;

    document.getElementById("soma").textContent = "Soma: " + soma;
    document.getElementById("media").textContent = "Média: " + media.toFixed(2);
    document.getElementById("pares").textContent = "Quantidade de Pares: " + pares;
    document.getElementById("impares").textContent = "Quantidade de Ímpares: " + impares;
}
