function calcularPredominancia() {
    const percentualMetal = parseFloat(document.getElementById("percentualMetal").value);
    const percentualAmetal = parseFloat(document.getElementById("percentualAmetal").value);
    const resultado = document.getElementById("resultado");

    // Verifica se a soma das porcentagens é igual a 100
    if (percentualMetal + percentualAmetal !== 100) {
        resultado.style.display = "block";
        resultado.textContent = "A soma das porcentagens deve ser igual a 100%.";
        resultado.className = "alert alert-danger";
        return;
    }

    // Determina se a liga é predominantemente metálica ou ametálica
    if (percentualMetal > 50) {
        resultado.style.display = "block";
        resultado.textContent = "A liga é predominantemente metálica.";
        resultado.className = "alert alert-success";
    } else {
        resultado.style.display = "block";
        resultado.textContent = "A liga é predominantemente ametálica.";
        resultado.className = "alert alert-warning";
    }
}
