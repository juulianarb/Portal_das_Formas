const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
event.preventDefault();

const lado = document.getElementById('lado').value;

const area = ((3 * Math.sqrt(3) * Math.pow(lado, 2)) / 2).toFixed(2);

const value = document.getElementById('value');
let description = '';

document.getElementById('infos').classList.remove('hidden');

if (lado <= 0 || isNaN(lado)) {
    description = 'Digite um valor válido'
} else {
    value.textContent = area.replace('.', ',');
    description = 'Parabéns! você calculou a área do hexágono'
};

document.getElementById('description').textContent = description;

});
