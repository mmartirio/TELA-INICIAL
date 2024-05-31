//Criação uma animação para a mudança de tela de login para tela
var Cadastrese = document.querySelector('#btnCadastro');
var login = document.querySelector('.login');
var Cadastrar = document.querySelector('#btnCadastrar');
var cadastro = document.querySelector('.cadastro');

Cadastrese = addEventListener('click', function mostraCad(){
if (login.style.display === 'block', cadastro.style.display === 'none'){
    login.style.display = 'none', cadastro.style.display = 'block'
}
else {
    login.style.display = 'block', cadastro.style.display = 'none'
}
})

Cadastrar = addEventListener('click', function mostraLog(){
    if (cadastro.style.display === 'block', login.style.display === 'none'){
        cadastro.style.display = 'none', login.style.display = 'block'
    }
    else {
        cadastro.style.display = 'block', login.style.display = 'none';
    }
    });


    //Validação dos inputs para liberação do botão
    function ligaButton() {
        const nome = document.querySelector('#nomeCadastro').value;
        const sobrenome = document.querySelector('#sobrenomeCadastro').value;
        const email = document.querySelector('#emailCadastro').value;
        const senha = document.querySelector('#senhaCadastro').value;

        if(nome && sobrenome && email && senha){
        document.querySelector('#btnCadastrar').disabled = false;
        return; 
    }
        document.querySelector('#btnCadastrar').disabled = true;
    }
   

   