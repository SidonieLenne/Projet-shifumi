$(document).ready(function(){
//Déclaration de la variable tableau ordi
    var array = ['Pierre', 'Feuille', 'Ciseaux'];
//Déclaration des variables compteur de victoires/défaites/essais    
    var wins = 0;
    var loses = 0;
    var tryCount = 0;
    var userMove = null;
//...........................................Rend les réponses draggables    
    $(".answer").draggable({
        revert : 'invalid',
        snap : '#emptyBlock',
        
    });
//......................................................Rend le "déposez ici" droppable    
    $( "#emptyBlock" ).droppable({
        accept: ".answer",
        classes: {
            "ui-droppable-active": "ui-state-default"    
        },
//Une fois qu'on drop un élément dans "emptyBlock", cette fonction se déclenche
        drop:function(){ 
            //Est censé définir le choix de l'utilisateur (Il faut que la carte soit dans le "déposez ici" et que la souris soit dessus)
            $('#firstCard').mouseover(function(){
                userMove = 'Pierre';
            });
            $('#secondCard').mouseover(function(){
                userMove = 'Feuille';
            });
            $('#thirdCard').mouseover(function(){
                userMove = 'Ciseaux';
            });
            //Choisis au hasard une valeur dans le tableau déclaré plus haut
            var ordiMove = array[Math.floor(array.length * Math.random())];
            
            $('#randomBlock').text(ordiMove);
            $('.answer').text(userMove);
            //Conditions
            if (userMove == ordiMove) {
                alert("Égalité");
            } else {
                var win = true;
                switch (userMove) {
                    case "Pierre":
                    if ((userMove=="Pierre") && (ordiMove=="Feuille")) { win = false; }
                    break;
                    case "Feuille":
                    if ((userMove=="Feuille") && (ordiMove=="Ciseaux")) { win = false; }
                    break;
                    case "Ciseaux":
                    if ((userMove=="Ciseaux") && (ordiMove=="Pierre")) { win = false; }
                    break;
                }
                if (win) {
                    wins++;
                    tryCount++;
                    alert("Gagné!");
                } else {
                    loses++;
                    tryCount++;
                    alert("Perdu...");
                }
            }
            $('#victory').text('Moi : ' + wins);
            $('#defeat').text('Ordinateur : ' + loses);
            $('#try').text(Math.floor(wins/tryCount*100) + '% de réussite');
        }
    });
});
