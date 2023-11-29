const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
event.preventDefault();

const raio = document.getElementById('raio').value;

const area = (Math.PI * Math.pow(raio, 2)).toFixed(2);

const value = document.getElementById('value');
let description = '';

document.getElementById('infos').classList.remove('hidden');

if (raio <= 0 || isNaN(raio)) {
    description = 'Digite um valor válido'
} else {
    value.textContent = area.replace('.', ',');
    description = 'Parabéns! você calculou a área do círculo'
};

document.getElementById('description').textContent = description;

});
