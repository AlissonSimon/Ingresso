function comprar() {
    // Ao atribuir a variável tipo da seguinte maneira, pode-se chamá-la depois utilizando o valor inputado
    let tipo = document.getElementById('tipo-ingresso');
    // Transforma de string para número inteiro e recebe somente o valor
    let qtd = parseInt(document.getElementById('qtd').value);

    if(tipo.value == 'pista') {
        comprarPista(qtd);
    }
}

function comprarPista(qtd) {
    // Transforma a variável em número inteiro e relaciona ao HTML
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    if(qtd > qtdPista) {
        alert('Esta quantidade está indisponível para ingressos de tipo pista.');
    } else {
        qtdPista = qtdPista - qtd;
        // Atualiza o valor no HTML através da subtração
        document.getElementById('qtd-pista').textContent = qtdPista;
        alert('Compra realizada com sucesso!');
    }
}