$(document).ready(function(){
    //Déclaration de la variable tableau ordi
    var array = ['Pierre', 'Feuille', 'Ciseaux'];
    //Déclaration des variables compteur de victoires/défaites/essais/userMove qui sont à 0/null au début  
    var wins = 0;
    var loses = 0;
    var tryCount = 0;
    var userMove = null;
    var ordiMove = null;
    //............................................Bouton Réinitialiser........................................................
    $('#tryAgain').click(function(){
        wins = 0;//Ne fonctionne pas
        loses = 0;//Ne fonctionne pas 
        tryCount = 0;//Ne fonctionne pas
        $('#randomBlock').css('background-image', 'none');  
    });
    //...........................................Rend les réponses draggables..............................................   
    $(".answer").draggable({
        revert : 'valid',//Renvoie l'élément à sa place une fois droppé
        snap : '#emptyBlock',//Elles sont attirées par le bloc droppable
        
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
                alert('Egalité!');
                //SINON SI USER = Pierre et ORDI = Ciseaux, alerte Gagné, +1  compteur d'essais, +1 compteur gagné
            } else if (userMove == 'Pierre' && ordiMove == 'Ciseaux'){
                wins++;
                tryCount++;
                alert('Gagné!');
                //SINON SI USER = Feuille et ORDI = Pierre, alerte Gagné, +1  compteur d'essais, +1 compteur gagné
            } else if (userMove == 'Feuille' && ordiMove == 'Pierre'){
                wins++;
                tryCount++;
                alert('Gagné!');
                //SINON SI USER = Ciseaux et ORDI = Feuille, alerte Gagné, +1  compteur d'essais, +1 compteur gagné    
            } else if (userMove == 'Ciseaux' && ordiMove == 'Feuille'){
                wins++;
                tryCount++;
                alert('Gagné!');
                //SINON SI ORDI = Pierre et USER = Ciseaux, alerte Perdu, +1  compteur d'essais, +1 compteur perdu    
            } else if (ordiMove == 'Pierre' && userMove == 'Ciseaux'){
                loses++;
                tryCount++;
                alert('Perdu...');
                //SINON SI ORDI = Feuille et USER = Pierre, alerte Perdu, +1  compteur d'essais, +1 compteur perdu       
            } else if (ordiMove == 'Feuille' && userMove == 'Pierre'){
                loses++;
                tryCount++;
                alert('Perdu...');
                //SINON SI ORDI = Ciseaux et USER = Feuille, alerte Perdu, +1  compteur d'essais, +1 compteur perdu       
            } else if (ordiMove == 'Ciseaux' && userMove == 'Feuille'){
                loses++;
                tryCount++;
                alert('Perdu...');
            }
            //Textes nombre de victoires, nombre de défaites et pourcentage de victoires
            $('#victory').text('Moi : ' + wins);
            $('#defeat').text('Ordinateur : ' + loses);
            $('#try').text(Math.floor(wins/tryCount*100) + '% de réussite');
        }
    });
});
