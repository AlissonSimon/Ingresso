function comprar() {
    // Ao atribuir a variável tipo da seguinte maneira, pode-se chamá-la depois utilizando o valor inputado
    let tipo = document.getElementById('tipo-ingresso');
    // Transforma de string para número inteiro e recebe somente o valor
    let qtd = parseInt(document.getElementById('qtd').value);

    if (tipo.value == 'pista') {
        comprarPista(qtd);
    }

    if (tipo.value == 'inferior') {
        comprarInferior(qtd);
    }

    if (tipo.value == 'superior') {
        comprarSuperior(qtd);
    }
}

function comprarPista(qtd) {
    // Transforma a variável em número inteiro e relaciona ao HTML
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);

    if (qtd > qtdPista) {
        alert ('Essa quantidade está indisponível para ingressos do tipo pista.');
    } else {
        qtdPista = qtdPista - qtd;
        // Atualiza o valor no HTML através da subtração
        document.getElementById('qtd-pista').textContent = qtdPista;
        alert ('Compra realizada com sucesso!');
    }
}

function comprarInferior(qtd) {
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);

    if (qtd > qtdInferior) {
        alert ('Essa quantidade está indisponível para ingressos do tipo cadeira inferior.')
    } else {
        qtdInferior = qtdInferior - qtd;
        document.getElementById('qtd-inferior').textContent = qtdInferior;
        alert ('Compra realizada com sucesso!');
    }
}

function comprarSuperior(qtd) {
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);

    if (qtd > qtdSuperior) {
        alert ('Essa quantidade está indisponível para ingressos do tipo cadeira superior.')
    } else {
        qtdSuperior = qtdSuperior - qtd;
        document.getElementById('qtd-superior').textContent = qtdSuperior;
        alert ('Compra realizada com sucesso!');
    }
}