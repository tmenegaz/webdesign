var numeroAleatorio = Math.floor(Math.random() * 100) +1;
var palpites = document.querySelector('.palpites');
var ultimoResultado = document.querySelector('.ultimoResultado');
var baixoOuAlto = document.querySelector('.baixoOuAlto');
var envioPalpite = document.querySelector('.envioPalpite');
var campoPalpite = document.querySelector('.campoPalpite');
var contagemPalpites = 1;
var botaoReinicio;
campoPalpite.focus();

function conferirPalpite() {
var palpiteUsuario = Number(campoPalpite.value);
if (contagemPalpites === 1){
palpites.textContent = 'palpites anteriores: ';
}
palpites.textContent += palpiteUsuario + ' ';
if (palpiteUsuario === numeroAleatorio){
ultimoResultado.textContent = 'Parabéns! você acertou!';
ultimoResultado.style.backgroundColor = 'green';
ultimoResultado.style.color = 'white';
baixoOuAlto.textContent = '';
configFimDeJogo();
} else if (contagemPalpites === 10) {
ultimoResultado.textContent = "!!! FIM DE JOGO !!!";
baixoOuAlto.textContent = '';
configFimDeJogo();
} else {
ultimoResultado.textContent = 'Errado!';
ultimoResultado.style.backgroundColor = 'red';
if(palpiteUsuario < numeroAleatorio) {
baixoOuAlto.textContent = 'Seu palpite está muito baixo!';
} else if(palpiteUsuario > numeroAleatorio) {
baixoOuAlto.textContent = 'Seu palpite está muito alto!';
}
}

contagemPalpites++;
campoPalpite.value = '';
campoPalpite.focus();
}
conferirPalpite();
envioPalpite.addEventListener('click', conferirPalpite);
function configFimDeJogo() {
campoPalpite.disabled = true;
envioPalpite.disabled = true;
botaoReinicio = document.createElement('button');
botaoReinicio.textContent = 'Iniciar um novo jogo';
document.body.appendChild(botaoReinicio);
botaoReinicio.addEventListener('click', reiniciarJogo);
}

function reiniciarJogo() {
contagemPalpites = 1;
var reiniciarParas = document.querySelectorAll('.resultadoParas p');
for (var i = 0 ; i < reiniciarParas.length ; i++) {
reiniciarParas[i].textContent = '';
}
botaoReinicio.parentNode.removeChild(botaoReinicio);
campoPalpite.disabled = false;
envioPalpite.disabled = false;
campoPalpite.value = '';
campoPalpite.focus();
ultimoResultado.style.backgroundColor = 'white';
numeroAleatorio = Math.floor(Math.random() * 100) + 1;
}
