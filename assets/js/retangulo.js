const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
event.preventDefault();

const largura = document.getElementById('largura').value;

const altura = document.getElementById('altura').value;

const area = (largura * altura).toFixed(2);

const value = document.getElementById('value');
let description = '';

document.getElementById('infos').classList.remove('hidden');

if (largura <= 0 || isNaN(largura) || altura <= 0 || isNaN(altura)) {
    description = 'Digite um valor válido'
} else {
    value.textContent = area.replace('.', ',');
    description = 'Parabéns! você calculou a área do retângulo'
};

document.getElementById('description').textContent = description;

});
