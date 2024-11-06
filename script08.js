function calcularIonica() {
    const eletronsMetal = parseInt(document.getElementById("eletronsMetal").value);
    const eletronsAmetal = parseInt(document.getElementById("eletronsAmetal").value);

    if (isNaN(eletronsMetal) || isNaN(eletronsAmetal)) {
        alert("Por favor, insira valores válidos.");
        return;
    }

    const coeficienteMetal = eletronsAmetal; // O número de elétrons que o ametal ganha
    const coeficienteAmetal = eletronsMetal; // O número de elétrons que o metal perde

    const resultadoIonica = `Fórmula iônica: M${coeficienteMetal}A${coeficienteAmetal} (${coeficienteMetal}:${coeficienteAmetal})`;
    document.getElementById("resultadoIonica").textContent = resultadoIonica;
}

function calcularCovalente() {
    const ligacoesAtomico = parseInt(document.getElementById("ligacoesAtomico").value);
    const ligacoesAtomico2 = parseInt(document.getElementById("ligacoesAtomico2").value);

    if (isNaN(ligacoesAtomico) || isNaN(ligacoesAtomico2)) {
        alert("Por favor, insira valores válidos.");
        return;
    }

    const menorLigacao = Math.min(ligacoesAtomico, ligacoesAtomico2);
    const maiorLigacao = Math.max(ligacoesAtomico, ligacoesAtomico2);
    
    const resultadoCovalente = `Fórmula molecular: A${menorLigacao}B${maiorLigacao} (${menorLigacao} átomos de A para ${maiorLigacao} de B)`;
    document.getElementById("resultadoCovalente").textContent = resultadoCovalente;
}
