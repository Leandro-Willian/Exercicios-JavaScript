let valores = [];

function adicionarValor() {
    const valorInput = document.getElementById("valorInput");
    const valor = parseFloat(valorInput.value);

    if (!isNaN(valor)) {
        valores.push(valor);
        valorInput.value = ""; // Limpa o campo de entrada
        atualizarLista();
    } else {
        alert("Por favor, insira um valor válido.");
    }
}

function atualizarLista() {
    const listaValores = document.getElementById("listaValores");
    listaValores.innerHTML = ""; // Limpa a lista atual

    valores.forEach((valor, index) => {
        const item = document.createElement("li");
        item.className = "list-group-item";
        item.textContent = `Valor ${index + 1}: ${valor}`;
        listaValores.appendChild(item);
    });
}

function mostrarTodosValores() {
    const resultado = document.getElementById("resultado");
    resultado.textContent = `Todos os valores: ${valores.join(", ")}`;
}

function mostrarMaiorValor() {
    const resultado = document.getElementById("resultado");
    if (valores.length > 0) {
        const maiorValor = Math.max(...valores);
        resultado.textContent = `Maior valor: ${maiorValor}`;
    } else {
        resultado.textContent = "Nenhum valor inserido.";
    }
}

function mostrarMenorValor() {
    const resultado = document.getElementById("resultado");
    if (valores.length > 0) {
        const menorValor = Math.min(...valores);
        resultado.textContent = `Menor valor: ${menorValor}`;
    } else {
        resultado.textContent = "Nenhum valor inserido.";
    }
}
