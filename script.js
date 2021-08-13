let lista = document.querySelector('select#flista')
let num = document.getElementById('fnum')
let res = document.querySelector('div#res')
let valores = []

function isnumero(n) { //Verifica se o número digitado está entre 1 e 100
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }

}

function inlista(n, l) { // verifica se o número digitado está na lista ou não
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {

    if (isnumero(num.value) && !inlista(num.value, valores)) { // caso seja um número válido e não esteja na lista, adicionar.
        valores.push(Number(num.value))
        let item = document.createElement('option') //cria um elemento
        item.text = `valor ${num.value} adicionado` //apresenta a mensagem dentro do select
        lista.appendChild(item) //adicionar o item a lista
        res.innerText = '' //limpa o res após adicionar numeros
    } else {
        alert('Valor inválido ou já encontrado na lista') //se o número estiver na lista ou for inválido apresenta o alert
    }
    num.value = '' //apaga o campo do text após clicar em adicionar
    num.focus() //mantém o cursor de texto no campo text
}

function finalizar() {
    if (valores.length == 0) { //verifica se não foi digitado nenhum numero 
        alert('Insira valores antes de finalizar') // apresenta a mensagem para que seja digitado um número para continuar
    } else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores) { //percorre o vetor valores 
            soma += valores[pos] //faz a soma dos valores do vetor
            if (valores[pos] > maior) //verifica o maior número
                maior = valores[pos]
            if (valores[pos] < menor) //verifica o menor número
                menor = valores[pos]
        }
        media = soma / total //faz a média do vetor
        res.innerHTML = ''

        //apresenta os resulados na tela 
        res.innerHTML += `<p>Ao todo temos <strong>${total}</strong> números cadastrados</p>`
        res.innerHTML += `<p>O maior valor é <strong>${maior}</strong> e o menor é <strong>${menor}</strong> </p>`
        res.innerHTML += `<p>A Soma de todos os valores é <strong>${soma}</strong></p>`
        res.innerHTML += `<p>A Média dos valores é <strong>${media}</strong></p>`

    }
}