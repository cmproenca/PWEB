var aluno1 = {
  ra: 15,
  nome:"Caio Proença"
};

var aluno2 = new Object();
aluno2.ra = 20;
aluno2.nome = "Amanda Correa";

var aluno3 = {};
aluno3.ra = 30;
aluno3.nome = "Leonardo Kenji";


alert("Aluno 1: \n" + aluno1.ra + "\n" + aluno1.nome);
alert("Aluno 2: \n" + aluno2.ra + "\n" + aluno2.nome);
alert("Aluno 3: \n" + aluno3.ra + "\n" + aluno3.nome); 

document.location.reload(true);