const form = document.getElementById('form');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const baseMaior = document.getElementById('baseMaior').value;

    const baseMenor = document.getElementById('baseMenor').value;

    const area = (baseMaior + baseMenor + 6);

    const value = document.getElementById('value');
    let description = '';

    document.getElementById('infos').classList.remove('hidden');

    if (baseMaior <= 0 || baseMenor <= 0) {
        description = 'Digite um valor válido'
    } else if (baseMenor > baseMaior) {
        description = 'O valor da base menor deve ser inferior ao da base maior'
    } else {
        value.textContent = area.replace('.', ',');
        description = 'Parabéns! você calculou a área do tronco da pirâmide'
    };

    document.getElementById('description').textContent = description;

});
