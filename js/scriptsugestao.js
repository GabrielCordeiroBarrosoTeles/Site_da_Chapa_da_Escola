document.addEventListener("keyup",caixa_baixa_alta);
function caixa_baixa_alta(){
    var nome = document.getElementById('nome')
    var email = document.getElementById('email')
    nome.value = nome.value.toUpperCase();
   email.value = email.value.toLowerCase();
}