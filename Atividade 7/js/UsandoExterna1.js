  var aNum = parseInt(prompt("Digite o primeiro valor: "));
  var bNum = parseInt(prompt("Digite o segundo valor: "));
  var cNum = parseInt(prompt("Digite o terceiro valor:"));



function maiorNum(a,b,c){
    var num = Math.max(a,b,c);
    if (a == b && b == c){
        return alert("Os valores são iguais.");
    }else{
    
     return alert ("O maior valor é " + num);
    }
    
  }

    maiorNum(aNum,bNum,cNum);

document.location.reload(true);    