function calcularExponencial() {
    const valorInput = document.getElementById("valorInput");
    const valor = parseFloat(valorInput.value);
    const listaResultados = document.getElementById("listaResultados");

    // Limpa a lista atual
    listaResultados.innerHTML = "";

    // Calcula e exibe f(x) = e^x para os valores de x de -5 a 5
    for (let i = -5; i <= 5; i++) {
        const resultado = Math.exp(i); // Calcula e^i
        const item = document.createElement("li");
        item.className = "list-group-item";
        item.textContent = `f(${i}) = e^${i} ≈ ${resultado.toFixed(4)}`;
        listaResultados.appendChild(item);
    }
}
