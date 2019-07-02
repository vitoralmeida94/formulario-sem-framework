// javascript puro!!
class Contato{
    constructor(nome, email, cpf,telefone){
        this.nome = nome;
        this.email = email;
        this.cpf = cpf;
        this.telefone=telefone;
    }

}

function verificaInput(id){
    var campo = document.getElementById(id).value;
    var nome = document.getElementById('nome').value;

    if(id ==="nome"){
        if(nome.length < 3){
            document.getElementById('nome').style.borderBottomColor="#eb4a46"
            document.getElementById('erroNome').style.display = "inline";
        }else{
            document.getElementById('erroNome').style.display = "none";
            document.getElementById(id).style.borderBottomColor="#333333"
        }
    }else{
        if(campo !==""){
            document.getElementById(id).style.borderBottomColor="#333333"
        }else{
            document.getElementById(id).style.borderBottomColor="#efeeed"
        }
    }
        
    botaoHabilitado();
}

function deixarOculto(){
    document.getElementById('erroNome').style.display = "none";
    document.getElementById('erroEmail').style.display = "none";
    document.getElementById('erroCpf').style.display = "none";
    document.getElementById('erroTelefone').style.display = "none";
}

function botaoHabilitado(){
    var campo1 = document.getElementById('nome').value;
    var campo2 = document.getElementById('email').value;
    var campo3 = document.getElementById('cpf').value;
    var campo4 = document.getElementById('telefone').value;

    if(campo1 !="" &&campo2 !="" &&campo3 !="" &&campo4 !="" ){
        document.getElementById('botao').disabled=false;
    }else{
        document.getElementById('botao').disabled=true;
    }
}

function msgTelefone(){
    document.getElementById('telefone').style.borderBottomColor="#eb4a46";
    document.getElementById('erroTelefone').style.display = "inline";
}
 
function msgCpf(){
    document.getElementById('cpf').style.borderBottomColor="#eb4a46";
    document.getElementById('erroCpf').style.display = "inline";
    document.getElementById('erroEmail').style.display = "none";
}

function msgEmail(){
    
    let filtro =  /^[a-zA-Z0-9][a-zA-Z0-9\._-]+@([a-zA-Z0-9\._-]+\.)[a-zA-Z-0-9]{2,3}/;
    var email = document.getElementById('email').value;
        if (!filtro.test(email)) { 
            document.getElementById('email').style.borderBottomColor="#eb4a46";
            document.getElementById('erroEmail').style.display = "inline";
            console.log('deu erro');
        }else{
            document.getElementById('email').style.borderBottomColor="#333333";
            document.getElementById('erroEmail').style.display = "none";
            console.log('deu certo');
        }
}


function mascaraTelefone(tel){
    
    if(tel.value.length === 0)
        tel.value = '(' + tel.value; 
        
    if(tel.value.length === 3)
        tel.value = tel.value + ')';
        
    if(tel.value.length === 8)
        tel.value = tel.value +'-'; 
        document.getElementById('erroTelefone').style.display = "none";
        
}

function mascaraCpf(cpf){
        
    if(cpf.value.length === 3)
        cpf.value = cpf.value + '.';
    
    if(cpf.value.length === 7)
        cpf.value = cpf.value + '.';
    
    if(cpf.value.length === 11)
        cpf.value = cpf.value + '-';
        document.getElementById('erroCpf').style.display = "none";
}

function cadastrar(){
    var campo1 = document.getElementById('nome').value;
    var campo2 = document.getElementById('email').value;
    var campo3 = document.getElementById('cpf').value;
    var campo4 = document.getElementById('telefone').value;

    var contato = new Contato(campo1,campo2,campo3,campo4);
    base = [];
    base.push(contato);


    for(i=0;i<=base.length;i++){
        document.getElementById('msg').innerHTML+='<li>Nome: '+base[i].nome+' Email: '+base[i].email+' CPF: '+base[i].cpf+' Telefone: '+base[i].telefone+'</li>';
    }
   
}
