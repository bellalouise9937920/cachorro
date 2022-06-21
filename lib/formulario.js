class Formulario {

constructor () {
//input é a caixa de texto
this.input = createInput ('').attribute ('placeholder','digite seu nome');
this.playGame= createButton ('jogar');
this.title= createImg ('./assets/TITULO.png');
this.boasvindas= createElement ('h2');
}

PosicaoDosElementos () {
this.input.position(width/2 - 110, height/2 - 80);
this.title.position(120,160);
this.playGame.position(width/2 - 90, height/2 - 20);
this.boasvindas.position(width/2 - 300, height/2 - 100);
}

EstiloDosElementos () {
this.input.class('customInput');
this.title.class('gameTitle');
this.playGame.class('customButton');
this.boasvindas.class('greeting');
}

show (){
this.PosicaoDosElementos();
this.EstiloDosElementos();
this.ClicarNoBotaoJogar();
}

hide () {
this.input.hide();
this.playGame.hide();
this.boasvindas.hide ();
}

ClicarNoBotaoJogar () {
 this.playGame.mousePressed(() => {
        this.input.hide();
        this.playGame.hide();
        var message = `
        Olá, ${this.input.value()}
        </br>espere o outro jogador entrar...`;
        this.boasvindas.html(message);
        quantidadeJogador= quantidadeJogador + 1;
        jogador.nome= this.input.value();
        jogador.index= quantidadeJogador;
        //CHAMAR FUNÇÃO
        jogador.AddJogadores ();
        jogador.GetUpdate(quantidadeJogador);
      });
}
}