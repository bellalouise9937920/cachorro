var database;
var fundo;
var formulario;
var game;
var jogador;
var estadoJogo;
var quantidadeJogador;
var carro1;
var carro2;
var carro1_Img;
var carro2_Img;
var matriz= [];
var pista_Img;

function preload () {
fundo= loadImage ('./assets/planodefundo.png');
carro1_Img= loadImage ('./assets/car1.png');
carro2_Img= loadImage ('./assets/car2.png');
pista_Img= loadImage ('./assets/track.jpg');
}

function setup () {
createCanvas (windowWidth,windowHeight);

//criar banco de dados
database= firebase.database();

//chamando  as funçoes a partir do game
game= new Jogo();
game.start();
game.GetState ();
}

function draw () {
  background (fundo);
  
  if (quantidadeJogador == 2 ) {
  game.Update (1);
  }

  if (estadoJogo == 1) {
  game.play ();
  }
}

function windowResized () {
  resizeCanvas (windowWidth,windowHeight);
}