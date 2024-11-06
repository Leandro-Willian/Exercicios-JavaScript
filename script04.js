function calcularGasto() {
    const quilometragem = parseFloat(document.getElementById("quilometragem").value);
    const valorCombustivel = parseFloat(document.getElementById("valorCombustivel").value);
    
    const kmPorLitro = 8; // Eficiência do veículo em km/litro

    if (isNaN(quilometragem) || isNaN(valorCombustivel) || quilometragem <= 0 || valorCombustivel <= 0) {
        alert("Por favor, insira valores válidos para quilometragem e valor do combustível.");
        return;
    }

    const litrosUsados = quilometragem / kmPorLitro; // Litros usados
    const gastoTotal = litrosUsados * valorCombustivel; // Gasto total em R$

    document.getElementById("resultado").textContent = "Gasto total com combustível: R$ " + gastoTotal.toFixed(2);
}
