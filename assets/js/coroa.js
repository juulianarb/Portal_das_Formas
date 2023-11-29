const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
event.preventDefault();

const areaMaior = document.getElementById('areaMaior').value;

const areaMenor = document.getElementById('areaMenor').value;

const area = (Math.PI * Math.pow(areaMaior, 2) - Math.pow(areaMenor, 2)).toFixed(2);

const value = document.getElementById('value');
let description = '';

document.getElementById('infos').classList.remove('hidden');

if (areaMaior <= 0 || isNaN(areaMaior) || areaMenor <= 0 || isNaN(areaMenor)) {
    description = 'Digite um valor válido'
} else {
    value.textContent = area.replace('.', ',');
    description = 'Parabéns! você calculou a área da coroa círcular'
};

document.getElementById('description').textContent = description;

});
