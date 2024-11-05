function calcTemp() {
    let temperatura = document.getElementById('temp').value;
    let valor = parseFloat(document.getElementById('valor').value);
    let resultado = document.getElementById('result');
    
    if (temperatura === 'cels') {
        let fahr = (valor * 9 / 5) + 32;
        resultado.innerHTML = `${valor}°C é igual a ${fahr.toFixed(2)}°F`;
    } else if (temperatura === 'fahr') {
        let cels = (valor - 32) * 5 / 9;
        resultado.innerHTML = `${valor}°F é igual a ${cels.toFixed(2)}°C`;
    } else {
        resultado.innerHTML = "Por favor, selecione uma escala";
    }
}
