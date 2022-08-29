function calcula_imc() {
  let altura = document.getElementById('altura').value;
  let peso = document.getElementById('peso').value;

  let quadrado = altura * altura;

  let calculo = peso / quadrado;
  calculo = calculo.toFixed(2);

  let texto = '';

  if (calculo < 18.5) {
    texto = 'IMC: ' + calculo + ' | Você está abaixo do seu peso ideal!';
  } else if (calculo >= 18.5 && calculo < 24.9) {
    texto = 'IMC: ' + calculo + ' | Você está em seu peso normal!';
  } else if (calculo >= 25 && calculo < 29.9) {
    texto = 'IMC: ' + calculo + ' | Obesidade Grau 1!';
  } else if (calculo >= 30 && calculo < 39.9) {
    texto = 'IMC: ' + calculo + ' | Obesidade Grau 2!';
  } else if (calculo > 40) {
    texto = 'IMC: ' + calculo + ' | Obesidade Grau 3!';
  }
  document.getElementById('resultado').innerHTML = texto;
}
