//pede o peso e a altura
function calcularIMC() {
  var peso = document.getElementById("peso").value;
  var altura = document.getElementById("altura").value;

  //analisa se peso e altura foram preenchidos
  if (peso === "" || altura === "") {
    alert("Por favor, preencha o peso e a altura.");
    return;
  }

  peso = parseFloat(peso);
  altura = parseFloat(altura);

  //pede pra inserir valores caso nao seja inserido
  if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
    alert("Por favor, digite valores válidos.");
    return;
  }
//descobre se a pessoa ta se referindo a metros ou cm
  if (altura > 3) {
    altura = altura / 100;
  }
//calculo do imc
  var imc = peso / (altura * altura);
  imc = imc.toFixed(1);

  var classificacao = "";
  var classe = "";

//classificacoes de peso em relacao ao imc
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
//resultados
  document.getElementById("valorIMC").innerText = imc;
  document.getElementById("classificacao").innerText = classificacao;

  var resultado = document.getElementById("resultado");
  resultado.className = "resultado " + classe;
  resultado.style.display = "block";
}
//limpar os valores
function limparCampos() {
  document.getElementById("peso").value = "";
  document.getElementById("altura").value = "";
  document.getElementById("resultado").style.display = "none";
}
