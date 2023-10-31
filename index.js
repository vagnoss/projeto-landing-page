var setaDireita = window.document.getElementById('seta-direita')
var samantha = window.document.getElementById("samantha")
var leonardo = window.document.getElementById("leonardo")
var bruna = window.document.getElementById("bruna")
var setaEsquerda = window.document.getElementById('seta-esquerda')


function RolarParaDireita() {
    leonardo.style ="display:none"
    bruna.style ="display:flex"
    setaEsquerda.style = "display:flex"
    setaDireita.style = "display:none; margin-top 55px"
}

function RolarParaEsquerda(){
    leonardo.style = 'display:flex'
    bruna.style = 'display:none'
    setaEsquerda.style = 'display:none margin-top 55px'
    setaDireita.style = 'display:flex'
}