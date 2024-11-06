function analisar() {
    const numerosInput = document.getElementById("numeros").value;
    const numerosArray = numerosInput.split(',').map(Number);

    if (numerosArray.length !== 10) {
        alert("Por favor, insira exatamente 10 números.");
        return;
    }

    let soma = 0;
    let menoresQueZero = 0;
    const maioresQueMedia = [];

    for (let i = 0; i < numerosArray.length; i++) {
        const num = numerosArray[i];
        soma += num;

        if (num < 0) {
            menoresQueZero++;
        }
    }

    const media = soma / numerosArray.length;

    for (let i = 0; i < numerosArray.length; i++) {
        if (numerosArray[i] > media) {
            maioresQueMedia.push(numerosArray[i]);
        }
    }

    document.getElementById("maiores").textContent = "Números maiores que a média: " + maioresQueMedia.join(', ');
    document.getElementById("menores").textContent = "Quantidade de elementos menores que zero: " + menoresQueZero;
}
