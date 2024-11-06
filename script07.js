function determinarPredominancia() {
    const percentualMetal = parseFloat(document.getElementById("percentualMetal").value);
    const percentualAmetal = parseFloat(document.getElementById("percentualAmetal").value);
    
    if (isNaN(percentualMetal) || isNaN(percentualAmetal)) {
        alert("Por favor, insira valores válidos.");
        return;
    }

    const somaPercentuais = percentualMetal + percentualAmetal;

    if (somaPercentuais !== 100) {
        alert("A soma das porcentagens deve ser igual a 100%.");
        return;
    }

    if (percentualMetal > percentualAmetal) {
        document.getElementById("resultado").textContent = "A liga é predominantemente metálica.";
    } else {
        document.getElementById("resultado").textContent = "A liga é predominantemente ametálica.";
    }
}
