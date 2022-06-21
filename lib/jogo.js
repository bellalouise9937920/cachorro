class Jogo {
constructor () {

}

start () {
//criando objeto a partir da classe
formulario= new Formulario();
formulario.show();

//criando o objeto jogador a partir da classe
jogador= new Jogador();
quantidadeJogador= jogador.GetCount();
carro1= createSprite (width/2 - 50, height - 100);
carro1.addImage ('carro1_Img',carro1_Img); 
carro2= createSprite (width/2 + 100, height - 100);
carro2.addImage ('carro2_Img',carro2_Img);
matriz= [carro1,carro2];
}

play () {
 Jogador.obterinformacoes ();
 if (allPlayers !== undefined) {
 image (pista_Img, 0, -height*5, width, height*6) 
 drawSprites ();
 }
}
GetState () {
//referencia do banco de dados
var estado_de_jogo_de_referencia= database.ref ('estadoJogo');
estado_de_jogo_de_referencia.on('value',function(data){
estadoJogo= data.val ();
})
}

Update (game) {
//ISSO É A REFERENCIA DO BANCO DE DADOS DO DIRETORIO RAIZ
database.ref ('/').update({
    estadoJogo: game
    })
    }

}
