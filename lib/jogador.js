class Jogador {
constructor () {
this.nome= null;
this.index= null;
this.positionX= 0;
this.positionY= 0;

}

GetCount () {
var quantidade_de_jogadores_de_referencia= database.ref ('quantidadeJogador');
quantidade_de_jogadores_de_referencia.on('value',data=> {
quantidadeJogador= data.val ();
})
}

GetUpdate (counters) {

//ISSO É A REFERENCIA DO BANCO DE DADOS DO DIRETORIO RAIZ
database.ref ("/").update({
quantidadeJogador: counters
})
}

AddJogadores ()  {
var id_do_jogador= 'players/player' + this.index;

if (this.index == 1 ) {
this.positionX = width/2 - 100;
}

else {
this.positionX= width/2 + 100;
}

database.ref(id_do_jogador).set({
nome: this.nome,
positionX: this.positionX,
positionY: this.positionY
})
}

static obterinformacoes () {
var referenciainformacoes= database.ref ('players');
referenciainformacoes.on ('value',data => {
allPlayers= data.val ();
})
}
}
