        var jogador = prompt("Bem-vindo ao Jo-Ken-Pô! (￣＿￣)\nDigite sua escolha entre Pedra, Papel ou Tesoura! \nOpção:");

        var rand = Math.random();
        var computador;


        if (rand < 0.34) {
        	computador = "PEDRA";
        }else if(rand <= 0.67){
        	computador = "PAPEL";
        }else{
        	computador = "TESOURA";
        }

        if (jogador == "" || jogador == null) {
        	alert("Digite uma opção válida.");
        }else if(jogador.toUpperCase() == "PEDRA" || jogador.toUpperCase() == "PAPEL" || jogador.toUpperCase() == "TESOURA"){

        if(jogador.toUpperCase() == computador)
        {
        	alert("Você: "+ jogador + " vs Computador: " + computador + "\nEmpate!");
        }else if(jogador.toUpperCase() == "PEDRA" && computador == "PAPEL")
        {	
        	alert("Você: "+ jogador + " vs Computador: " + computador + "\nPerdeu!");
        }else if(jogador.toUpperCase() == "PAPEL" && computador == "TESOURA")
        {
        	alert("Você: "+ jogador + " vs Computador: " + computador + "\nPerdeu!");
        }else if(jogador.toUpperCase() == "TESOURA" && computador == "PEDRA")
        {	
        	alert("Você: "+ jogador.toUpperCase() + " vs Computador: " + computador + "\nPerdeu!");
        }else{
        	alert("Você: "+ jogador.toUpperCase() + " vs Computador: " + computador + "\nGanhou!");
        }

    }
        document.location.reload(true);