function acessar(){

    var usuario = document.getElementById("usuario").value;
    var senha = document.getElementById("senha").value;

    if(usuario != '' && senha !='' && nome !='' && endereço !='' && telefone !='')
    {
        comunicaServidor();
    }
    else
    {
        alert("Por favor, preencha os campos obrigatórios!");
    }
}

function comunicaServidor(){

    $.ajax({
        type:"POST", 
        url:"php/acessar.php",
        data: {
            ch_usuario: usuario,
            ch_senha: senha,
        }
    });
}