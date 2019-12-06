var _nome = document.querySelector('#nomeInput');
var _leituraN = document.querySelector('#leituraN');
var _snome = document.querySelector('#snomeInput');
var _leituraSn = document.querySelector('#leituraSn');
var _idade = document.querySelector('#idadeInput');
var _leituraIdade = document.querySelector('#leituraIdade');
var btnEnviar = document.querySelector('#envia');
var btnConsulta = document.querySelector('#consulta');
var btnEdita = document.querySelector('#edita');
var btnApaga = document.querySelector('#apaga');

btnEnviar.addEventListener('click', salva);
btnConsulta.addEventListener('click', le);
btnEdita.addEventListener('click', edita);
btnApaga.addEventListener('click', apaga);

// objeto pessoa com suas propriedades
var pessoa = {
	nome: '',
	snome: '',
	idade: '',
	endereco: { /* ajustar para utilização de prototype */
		rua: "",
		numero: "",
		complemento: '',
		bairro: '',
		cidade: '',
		uf: '',
		cep: '',
	},
	telefone: { /* ajustar para utilização de prototype */
		fixo: '',
		cel: '',
	}
};
// ajustar para método da função construtura Pessoa
function salva(){
	pessoa.nome = _nome.value;
	_nome.value = '';
	pessoa.snome = _snome.value;
	_snome.value = '';
	pessoa.idade = _idade.value;
	_idade.value = '';
	_idade.placeholder = '';
	_leituraN.textContent = ""
	_leituraSn.textContent = "";
}
function le(){
	_leituraN.textContent = pessoa["nome"];
	_leituraSn.textContent = pessoa["snome"];
	_idade.placeholder = pessoa["idade"];
}
function edita(){
	_nome.value = pessoa["nome"];
	_snome.value = pessoa["snome"];
	_idade.value = pessoa["idade"];
	// limpa a saída de consulta
	_leituraN.textContent = ""
	_leituraSn.textContent = "";
}
function apaga(){
	_nome.value = '';
	_snome.value = '';
	_idade.value = '';
	location.reload();
}