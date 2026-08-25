function calcularIMC() {
  var peso = document.getElementById("peso").value;
  var altura = document.getElementById("altura").value;

  // Verifica se os campos foram preenchidos
  if (peso === "" || altura === "") {
    alert("Por favor, preencha o peso e a altura.");
    return;
  }

  peso = parseFloat(peso);
  altura = parseFloat(altura);

  // Verifica se os valores digitados são números válidos
  if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
    alert("Por favor, digite valores válidos.");
    return;
  }

  // Se a altura for maior que 3, o usuário digitou em centímetros
  if (altura > 3) {
    altura = altura / 100;
  }

  // Fórmula do IMC
  var imc = peso / (altura * altura);
  imc = imc.toFixed(1);

  var classificacao = "";
  var classe = "";

  if (imc < 18.5) {
    classificacao = "Abaixo do peso";
    classe = "abaixo";
  } else if (imc < 25) {
    classificacao = "Peso normal";
    classe = "normal";
  } else if (imc < 30) {
    classificacao = "Sobrepeso";
    classe = "sobrepeso";
  } else if (imc < 35) {
    classificacao = "Obesidade grau I";
    classe = "obesidade";
  } else if (imc < 40) {
    classificacao = "Obesidade grau II";
    classe = "obesidade";
  } else {
    classificacao = "Obesidade grau III";
    classe = "obesidade";
  }

  // Mostra o resultado na tela
  document.getElementById("valorIMC").innerText = imc;
  document.getElementById("classificacao").innerText = classificacao;

  var resultado = document.getElementById("resultado");
  resultado.className = "resultado " + classe;
  resultado.style.display = "block";
}

function limparCampos() {
  document.getElementById("peso").value = "";
  document.getElementById("altura").value = "";
  document.getElementById("resultado").style.display = "none";
}
