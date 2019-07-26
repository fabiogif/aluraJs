$("#botao-frase").click(fraseAleatoria);
$("#botao-frase-id").click(buscaFrase);

function fraseAleatoria() {
    $("#spinner").toggle()

    $.get("http://localhost:3000/frases", trocaFraseAleatoria)
        .fail(function() {
            $("#erro").show()
            setTimeout(function() {
                $("#erro").toggle()
            }, 1200)
        }).always(function() {
            $("#spinner").toggle()
        })



}

function buscaFrase() {
    $("#spinner").toggle()
    var idFrase = $("#frase-id").val()
    var dados = { id: idFrase }

    $.get("http://localhost:3000/frases", dados, trocaFrase)
        .fail(function() {
            $("#erro").toggle()
            setTimeout(function() {
                $("#erro").toggle()
            }, 2000)

        }).always(function() {
            $("#spinner").toggle()
        })
}

function trocaFrase(data) {
    var frase = $(".frase")
    frase.text(data.texto)

    atualizaTamanhoFrase()
    atualizaTempoInicial(data.tempo)
}

function trocaFraseAleatoria(data) {
    var frase = $(".frase");
    var numeroAleatorio = Math.floor(Math.random() * data.length)

    frase.text(data[numeroAleatorio].texto);
    atualizaTamanhoFrase();
    atualizaTempoInicial(data[numeroAleatorio].tempo);
}