var passos = document.querySelector('#passos')
var select = document.querySelector('#select')
var radio = document.querySelector('#radio')
var encode = document.querySelector('#encode')
var decode = document.querySelector('#decode')
var btn = document.querySelector('#btn')

//Função para aparecer os passos
select.addEventListener('change', function (event) {
    if (select.value == '3') {
        passos.style.display = 'flex'
    } else {
        passos.style.display = 'none'
    }
})
//Funções para aparecer os botões e o clique
radio.addEventListener('click', function (event) {
    if (encode.checked) {
        btn.innerHTML = `<input class="btnInput" id="btnEncoder" type="button" value="Codificar mensagem" >`
        document.querySelector('#btnEncoder').addEventListener('click',encoder)
        
    } else if (decode.checked) {
        btn.innerHTML = `<input class="btnInput" id="btnDecoder" type="button" value="Decodificar mensagem">`
        document.querySelector('#btnDecoder').addEventListener('click',decoder)
    }
})
//Base64 e Cesar ENCODE
var outTxt = document.querySelector('#finalTxt')

function encoder() {
    var enterTxt = document.querySelector('#txt').value
    if (select.value == '2' && encode.checked) {
        //Função Base64 ENCODE   
        txtValue = enterTxt
        outTxt.value = btoa(txtValue)
    } else if (select.value == '3' && encode.checked) {
        encodeCesar()
    }
}
//Função Cifra de Cesar ENCODE 
function encodeCesar() {
    var enterTxt = document.querySelector('#txt').value
    var key = document.querySelector('#key').value
    var txtValue = ""

    for (var i = 0; i < enterTxt.length; i++) {
        var passo = parseInt(key)
        var asciiNum = enterTxt[i].charCodeAt()
        if (asciiNum >= 65 && asciiNum <= 90) {
            var passMod = asciiNum + passo
            if (passMod > 90) {
                passMod = passMod - 26
            }
            txtValue += String.fromCharCode(passMod)
        } else if (asciiNum >= 97 && asciiNum <= 122) {
            var passMod = asciiNum + passo
            if (passMod > 122) {
                passMod = passMod - 26
            }
            txtValue += String.fromCharCode(passMod)
        } else {
            txtValue += enterTxt[i]
        }
    }
    outTxt.value = txtValue
}

//Base64 e Cesar DECODE
function decoder() {
    var enterTxt = document.querySelector('#txt').value
    if (select.value == '2' && decode.checked) {
        //Função Base64 DECODE 
        txtValue = enterTxt
        outTxt.value = atob(txtValue)
    } else if (select.value == '3' && decode.checked) {
        decodeCesar()
    }
}
//Função Cifra de Cesar DECODE
function decodeCesar() {
    var enterTxt = document.querySelector('#txt').value
    var key = document.querySelector('#key').value
    var txtValue = ""

    for (var i = 0; i < enterTxt.length; i++) {
        var passo = parseInt(key)
        var asciiNum = enterTxt[i].charCodeAt()
        if (asciiNum >= 65 && asciiNum <= 90) {
            var passMod = asciiNum - passo
            if (passMod < 65) {
                passMod = 26 + passMod
            }
            txtValue += String.fromCharCode(passMod)
        } else if (asciiNum >= 97 && asciiNum <= 122) {
            var passMod = asciiNum - passo
            if (passMod < 97) {
                passMod = 26 + passMod
            }
            txtValue += String.fromCharCode(passMod)
        } else {
            txtValue += enterTxt[i]
        }
    }
    outTxt.value = txtValue
}
