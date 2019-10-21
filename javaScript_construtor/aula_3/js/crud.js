var nome = document.querySelector('#nomeInput');
var leituraN = document.querySelector('#leituraN');
var snome = document.querySelector('#snomeInput');
var leituraSn = document.querySelector('#leituraSn');
var idade = document.querySelector('#idadeInput');
var leituraIdade = document.querySelector('#leituraIdade');
var btnEnviar = document.querySelector('#envia');
var btnConsulta = document.querySelector('#consulta');
var btnEdita = document.querySelector('#edita');
var btnApaga = document.querySelector('#apaga');

btnEnviar.addEventListener('click', salva);
btnConsulta.addEventListener('click', le);
btnEdita.addEventListener('click', edita);
btnApaga.addEventListener('click', apaga);

var pessoa;

function salva(){
	pessoa = new Pessoa(nome.value, snome.value, idade.value);
	pessoa.metodoSalva()};
function le(){pessoa.metodoLe()};
function edita(){pessoa.metodoEdita()};
function apaga(){pessoa.metodoApaga()};

// construtor Pessoa
var Pessoa = function(nome, snome, idade
	// rua, numero, complemento, bairro, cidade, uf, cep,
	// email fixo, cel
	){
	this.nome = nome;
	this.snome = snome;
	this.idade = idade;
	/*this.rua = rua;
	this.numero = numero;
	this.complemento = complemento;
	this.bairro = bairro;
	this.cidade = cidade;
	this.uf = uf;
	this.cep = cep;
	this.contato = contato;
	this.fixo = fixo;
	this.cel = cel;*/
};

Pessoa.prototype.metodoSalva = function(){
	this.nome;
	nome.value = '';
	this.snome;
	snome.value = '';
	this.idade;
	idade.value = '';
	idade.placeholder = '';
	leituraN.textContent = ""
	leituraSn.textContent = "";
	console.log(this.nome.value, this.snome.value, this.idade.value);
}
Pessoa.prototype.metodoLe = function(){
	leituraN.textContent = this["nome"];
	leituraSn.textContent = this["snome"];
	idade.placeholder = this["idade"];
}
Pessoa.prototype.metodoEdita = function(){
	nome.value = this["nome"];
	snome.value = this["snome"];
	idade.value = this["idade"];
	// limpa a saída de consulta
	leituraN.textContent = "";
	leituraSn.textContent = "";
}
Pessoa.prototype.metodoApaga = function(){
	nome.value = '';
	snome.value = '';
	idade.value = '';
	location.reload();
}