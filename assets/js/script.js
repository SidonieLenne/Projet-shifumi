$(document).ready(function(){
    //Décaration du tableau qui convertit les mots en chiffres, en gros (Pierre=0, Feuille=1, Ciseaux=2)
    var array = ['Pierre', 'Feuille', 'Ciseaux'];
    //Déclaration des variables victoires/défaites/essais (pour les %) + les mettre à 0
    var wins = 0;
    var loses = 0;
    var tryCount = 0;
    $('#button').click(function() {
        var ordiMove = array[Math.floor(array.length * Math.random())];
        var userMove = array[Math.floor(array.length * Math.random())];
        $('#randomBlock').text(ordiMove);
        $('#answer').text(userMove);
        if (userMove == ordiMove) {
            alert("Égalité");
        } else {
            var win = true;
            switch (userMove) {
                case "Pierre":
                if (ordiMove=="Feuille") { win = false; }
                break;
                case "Feuille":
                if (ordiMove=="Ciseaux") { win = false; }
                break;
                case "Ciseaux":
                if (ordiMove=="Pierre") { win = false; }
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
    });
    $(".answer").draggable({ // Rend l'élément draggable
      revert : 'invalid',// L'élément revient à sa place si il n'est pas droppé au bon endroit
      snap : '#emptyBlock',// Effet de magnétisme avec l'élément sélectionné
      snapMode : 'inner'
  });
    $( "#emptyBlock" ).droppable({// Rend l'élément droppable
      accept: ".answer",// Permet de choisir les éléments acceptés dans le drop
      classes: {// Feedback lorsque un élément droppable est séléctionné
      "ui-droppable-active": "ui-state-default"
    },
});
});
