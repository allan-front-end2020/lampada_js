var ligar = document.getElementById('ligar')
var desligar = document.getElementById('desligar')
var lampada = document.getElementById('lamp')


function ligarLampada() {
    lampada.src = './lampada-acesa-png.png'

}
ligar.addEventListener('click', ligarLampada)

function desligarLampada() {
    lampada.src = './lampada-apagada-png.png'

}
desligar.addEventListener('click', desligarLampada)