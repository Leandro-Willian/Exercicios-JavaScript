function calcularCusto() {
    const comprimento = parseFloat(document.getElementById("comprimento").value);
    const largura = parseFloat(document.getElementById("largura").value);
    
    const precoPorM2 = 36.00; // Preço por metro quadrado

    if (isNaN(comprimento) || isNaN(largura) || comprimento <= 0 || largura <= 0) {
        alert("Por favor, insira valores válidos para comprimento e largura.");
        return;
    }

    const area = comprimento * largura; // Área em m²
    const custoTotal = area * precoPorM2; // Custo total

    document.getElementById("resultado").textContent = "Custo total para assentar piso: R$ " + custoTotal.toFixed(2);
}
