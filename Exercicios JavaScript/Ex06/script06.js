function calcularForcaResultante() {
    const massa = parseFloat(document.getElementById("massaObjeto").value);
    const aceleracao1 = parseFloat(document.getElementById("aceleracao1").value);
    const aceleracao2 = parseFloat(document.getElementById("aceleracao2").value);
    
    if (isNaN(massa) || isNaN(aceleracao1) || isNaN(aceleracao2) || massa <= 0) {
        alert("Por favor, insira valores válidos.");
        return;
    }

    const aResultante = aceleracao1 - aceleracao2; // Diferença das acelerações
    const forcaResultante = massa * aResultante; // F = m * a

    document.getElementById("resultadoForca").textContent = "Força resultante: " + forcaResultante.toFixed(2) + " N";
}

function calcularForcaReacao() {
    const massa1 = parseFloat(document.getElementById("massa1").value);
    const massa2 = parseFloat(document.getElementById("massa2").value);
    const aceleracaoObjeto1 = parseFloat(document.getElementById("aceleracaoObjeto1").value);
    const aceleracaoObjeto2 = parseFloat(document.getElementById("aceleracaoObjeto2").value);
    
    if (isNaN(massa1) || isNaN(massa2) || isNaN(aceleracaoObjeto1) || isNaN(aceleracaoObjeto2) || massa1 <= 0 || massa2 <= 0) {
        alert("Por favor, insira valores válidos.");
        return;
    }

    const forcaObjeto1 = massa1 * aceleracaoObjeto1; // F = m * a (objeto 1)
    const forcaObjeto2 = massa2 * aceleracaoObjeto2; // F = m * a (objeto 2)
    
    // A força de ação é a força do objeto 1 em relação ao objeto 2
    const forcaReacao = forcaObjeto1; // Força de ação e reação têm a mesma magnitude

    document.getElementById("resultadoReacao").textContent = "Força de ação: " + forcaObjeto1.toFixed(2) + " N\nForça de reação: " + forcaReacao.toFixed(2) + " N (sentido oposto)";
}
