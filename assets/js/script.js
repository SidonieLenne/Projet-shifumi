$(document).ready(function(){
  //Déclaration de la variable tableau ordi
  var array = ['Pierre', 'Feuille', 'Ciseaux'];
  //Déclaration des variables compteur de victoires/défaites/essais/userMove qui sont à 0/null au début
  var wins = 0;
  var loses = 0;
  var tryCount = 0;
  var userMove = null;
  var ordiMove = null;
  // Effet de tremblement
  $('.answer').jrumble({//  création de l'effet
    x: 2,
    y: 2,
    rotation: 1
  });
  $('.answer').hover(function(){
    $(this).trigger('startRumble');
  },
  function(){
    $(this).trigger('stopRumble');
  },
  $('.answer').mousedown(function(){
    $(this).trigger('stopRumble');
  }),
);
//............................................Bouton Réinitialiser........................................................
$('#tryAgain').click(function(){
  wins = 0;
  loses = 0;
  tryCount = 0;
  $('#victory').text('Moi : ' + wins);
  $('#defeat').text('Ordinateur : ' + loses);
  $('#try').text('Victoire : ');
  $('#randomBlock').css('background-image', 'none');
  $('#winLose').text('');
});
//...........................................Rend les réponses draggables..............................................
$(".answer").draggable({
  revert : true,//Renvoie l'élément toujours à sa place
  snap : '#emptyBlock',//Elles sont attirées par le bloc droppable
  snapMode: 'inner' // Permet le magnétisme sur l'interieur du block
});
//Quand le clic de la souris se relève, ça fait passer userMove de null à "Pierre", "Feuille" ou "Ciseaux" selon le bloc qui est cliqué
$('#firstCard').mouseup(function(){
  userMove = 'Pierre';
});
$('#secondCard').mouseup(function(){
  userMove = 'Feuille';
});
$('#thirdCard').mouseup(function(){
  userMove = 'Ciseaux';
});
//Mouseenter change l'image des cartes, et mouseleave les rechange
$('#firstCard').mouseenter(function(){
    $(this).css({'background-image': 'url(assets/images/petitepierre.png)', 'background-size' : 'contain'});
});
$('#secondCard').mouseenter(function(){
    $(this).css({'background-image': 'url(assets/images/petitpapier.png)', 'background-size' : 'contain'});
});
$('#thirdCard').mouseenter(function(){
    $(this).css({'background-image': 'url(assets/images/petitciseau.png)', 'background-size' : 'contain'});
});
$('#firstCard').mouseleave(function(){
    $(this).css({'background-image': 'url(assets/images/petitepierrecontente.png)', 'background-size' : 'contain'});
});
$('#secondCard').mouseleave(function(){
    $(this).css({'background-image': 'url(assets/images/petitpapiercontent.png)', 'background-size' : 'contain'});
});
$('#thirdCard').mouseleave(function(){
    $(this).css({'background-image': 'url(assets/images/petitciseaucontent.png)', 'background-size' : 'contain'});
});
//............................................Rend le "déposez ici" droppable...........................................
$( "#emptyBlock" ).droppable({
  accept: ".answer", //Le bloc n'accepte de recevoir que les blocs avec la classe answer
  classes: {
    "ui-droppable-active": "ui-state-default"
  },
  //..............Une fois qu'on drop un élément dans "emptyBlock", cette fonction se déclenche............
  drop:function(){
    //Choisis au hasard une valeur dans le tableau déclaré plus haut
    var ordiMove = array[Math.floor(array.length * Math.random())];
    //Met les images correspondantes au choix de l'ordi sur randomBlock
    if (ordiMove == "Pierre"){
      $('#randomBlock').css({'background-image': 'url(assets/images/petitepierre.png)', 'background-size' : 'contain'});
    } else if (ordiMove == "Feuille"){
      $('#randomBlock').css({'background-image': 'url(assets/images/petitpapier.png)', 'background-size' : 'contain'});
    } else if (ordiMove == "Ciseaux"){
      $('#randomBlock').css({'background-image': 'url(assets/images/petitciseau.png)', 'background-size' : 'contain'});
    }
    //Conditions
    //SI USER = ORDI, alerte Egalité, +1 compteur d'essais
    if (userMove == ordiMove){
      tryCount++;
      wins = wins + 0;
      $('#winLose').text('Egalité!');
      $('#winLose').css('color', '#f2a500');
      //SINON SI USER = Pierre et ORDI = Ciseaux, alerte Gagné, +1  compteur d'essais, +1 compteur gagné
    } else if (userMove == 'Pierre' && ordiMove == 'Ciseaux'){
      wins++;
      tryCount++;
      $('#winLose').text('Gagné!');
      $('#winLose').css('color', 'green');
      //SINON SI USER = Feuille et ORDI = Pierre, alerte Gagné, +1  compteur d'essais, +1 compteur gagné
    } else if (userMove == 'Feuille' && ordiMove == 'Pierre'){
      wins++;
      tryCount++;
      $('#winLose').text('Gagné!');
      $('#winLose').css('color', 'green');
      //SINON SI USER = Ciseaux et ORDI = Feuille, alerte Gagné, +1  compteur d'essais, +1 compteur gagné
    } else if (userMove == 'Ciseaux' && ordiMove == 'Feuille'){
      wins++;
      tryCount++;
      $('#winLose').text('Gagné!');
      $('#winLose').css('color', 'green');
      //SINON SI ORDI = Pierre et USER = Ciseaux, alerte Perdu, +1  compteur d'essais, +1 compteur perdu
    } else if (ordiMove == 'Pierre' && userMove == 'Ciseaux'){
      loses++;
      tryCount++;
      $('#winLose').text('Perdu...');
      $('#winLose').css('color', 'red');
      //SINON SI ORDI = Feuille et USER = Pierre, alerte Perdu, +1  compteur d'essais, +1 compteur perdu
    } else if (ordiMove == 'Feuille' && userMove == 'Pierre'){
      loses++;
      tryCount++;
      $('#winLose').text('Perdu...');
      $('#winLose').css('color', 'red');
      //SINON SI ORDI = Ciseaux et USER = Feuille, alerte Perdu, +1  compteur d'essais, +1 compteur perdu
    } else if (ordiMove == 'Ciseaux' && userMove == 'Feuille'){
      loses++;
      tryCount++;
      $('#winLose').text('Perdu...');
      $('#winLose').css('color', 'red');
    }
    //Textes nombre de victoires, nombre de défaites et pourcentage de victoires
    $('#victory').text('Moi : ' + wins);
    $('#defeat').text('Ordinateur : ' + loses);
    $('#try').text(Math.floor(wins/tryCount*100) + '% de réussite');
    //Fait apparaître le bouton réinitialiser après avoir joué le premier coup
    $('#tryAgain').css('display', 'block');
    //Au mouseover sur une carte réponse, la carte ordi redevient blanche
    $('.answer').mousedown(function(){
      $('#randomBlock').css('background-image', 'none');
    });
  }
});
});
