// Função para inserir o número
function inserirNumero() {
    var numero = parseFloat(prompt("Digite um número:"));
    return numero;
  }
  
  // Função para calcular as raízes do número
  function calcularRaizes(numero) {
    var raizQuadrada = Math.sqrt(numero);
    var raizCubica = Math.cbrt(numero);
    return { raizQuadrada, raizCubica };
  }
  
  // Função para verificar se um número é primo
  function verificarPrimo(numero) {
    if (numero <= 1) return false;
    if (numero <= 3) return true;
    if (numero % 2 === 0 || numero % 3 === 0) return false;
    for (var i = 5; i * i <= numero; i += 6) {
      if (numero % i === 0 || numero % (i + 2) === 0) return false;
    }
    return true;
  }
  
  // Função para mostrar as raízes, se é primo, e se é par ou ímpar
  function mostrarResultados(numero, raizes) {
    var resultados = "Número inserido: " + numero + "\n";
    resultados += "Raiz Quadrada: " + raizes.raizQuadrada.toFixed(2) + "\n";
    resultados += "Raiz Cúbica: " + raizes.raizCubica.toFixed(2) + "\n";
    
    if (verificarPrimo(numero)) {
      resultados += "É um número primo.\n";
    } else {
      resultados += "Não é um número primo.\n";
    }
  
    if (numero % 2 === 0) {
      resultados += "É um número par.\n";
    } else {
      resultados += "É um número ímpar.\n";
    }
  
    alert(resultados);
  }
  
  // Chamar as funções e resolver o problema
  var numero = inserirNumero();
  if (!isNaN(numero)) {
    var raizes = calcularRaizes(numero);
    mostrarResultados(numero, raizes);
  } else {
    alert("Número inválido. Por favor, insira um valor numérico válido.");
  }