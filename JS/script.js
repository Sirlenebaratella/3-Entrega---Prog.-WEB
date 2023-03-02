function calcularNovoSalario() {
    // receber valores informados pelo usuário
    let salarioAtual = Number(document.getElementById("salario").value);
    let percentualReajuste = Number(document.getElementById("reajuste").value);

    // Calculando o novo salário
    let novoSalario = salarioAtual * (1 + percentualReajuste / 100);

    // Printando na tela o resultado
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "O novo salário é: R$" + novoSalario.toFixed(2);
}

