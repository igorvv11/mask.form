$(document).ready(function() {
    $("#form-ebac").submit(function(event) {
        event.preventDefault(); 
        var nomeCompleto = $("#nome").val().trim();

        if (validarNomeCompleto(nomeCompleto)) {
            $(".mensagemErro").text("Formulário enviado com sucesso!").css("color", "green");
        } else {
            $(".mensagemErro").text(""); // Remover a mensagem de erro do campo "nome"
        }
    });

    // Correção na chamada do método .validate()
    $('form').validate({
        rules:{
            nome:{
                required: true
            },
            email:{
                required: true
            },
            telefone:{
                required: true
            },
            cpf:{
                required: true
            },
            endereco:{
                required: true
            },
            cep:{
                required: true
            }
        },
        messages: {
            email: 'Por favor, insira seu email.',
            telefone: 'Por favor, insira seu telefone.',
            cpf: 'Por favor, insira seu CPF.',
            endereco: 'Por favor, insira seu endereço.',
            cep: 'Por favor, insira seu CEP.'
        },
        submitHandler: function(form) {
            // Adicionando mensagem de sucesso ao enviar o formulário
            $(".mensagemErro").text("Formulário enviado com sucesso!").css("color", "green");
            // Aqui você pode enviar o formulário para o servidor, se necessário
            form.submit();
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`);
            }
        }
    });
});

function validarNomeCompleto(nome) {
    // Verifica se o nome não está vazio
    if (nome === "") {
        return false;
    }

    // Divide o nome completo em partes (nome e sobrenome) pelo espaço
    var partesNome = nome.split(" ");

    // Verifica se há pelo menos duas partes (um nome e um sobrenome)
    if (partesNome.length < 2) {
        return false;
    }

    // Verifica se cada parte do nome tem pelo menos dois caracteres
    for (var i = 0; i < partesNome.length; i++) {
        if (partesNome[i].length < 2) {
            return false;
        }
    }

    // Se todas as condições forem atendidas, o nome completo é considerado válido
    return true;
}

$('#telefone').mask('(00) 0 0000-0000');
$('#cpf').mask('000.000.000-00');
$('#cep').mask('00.000-000');
