// Esta função é chamada quando um botão numérico ou operador é clicado. Ela recebe o valor do botão clicado
// como um argumento e o adiciona ao campo de exibição (input) da calculadora.
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

// Esta função limpa o campo de exibição da calculadora, reiniciando-o para uma string vazia.
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Esta função é chamada quando o botão "=" é clicado. Ela avalia a expressão matemática presente no campo
// de exibição e, em seguida, exibe o resultado da operação no campo de exibição.
function calculateResult() {
    // Obtém a expressão do campo de exibição
    const expression = document.getElementById('display').value;
    
    // Tenta avaliar a expressão usando a função "eval" do JavaScript
    try {
        const result = eval(expression); // Avalia a expressão
        document.getElementById('display').value = result; // Exibe o resultado no campo de exibição
    } catch (error) {
        document.getElementById('display').value = 'Erro'; // Em caso de erro, exibe "Erro" no campo de exibição
    }
}
