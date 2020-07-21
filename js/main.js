function clicou(){

    document.getElementById('agradecimento').innerHTML = '<b>Obrigado por clicar</b>';
    redirecionar();
    //console.log(document.getElementById("agradecimento"));
}

function redirecionar() {
    window.open('https://github.com/jeniffermarques/aula-javascript');
}

function trocar(elemento){
    
    elemento.innerHTML = 'Obrigado por passar o mouse';
}

function voltar(elemento){

    elemento.innerHTML = 'Passe o mouse aqui';
}

function load(){
    alert('Página Carregada');
}

function funcaoChange(elemento){
    console.log(elemento.value);
}

