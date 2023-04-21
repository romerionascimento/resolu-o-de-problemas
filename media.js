nota1 = parseFloat(prompt("Informar Nota 1"));
nota2 = parseFloat(prompt("Informar Nota 2"));
nota3 = parseFloat(prompt("Informar Nota 3"));
media = (nota1 + nota2 + nota3) / 3;
document.write("Media: " + media + "<br>");
if(media >= 6)
document.write("Aprovado" + "<br>");
if(media >= 3 && media < 6)
document.write("Exame" + "<br>");
if(media < 3)
document.write("Reprovado" + "<br>");