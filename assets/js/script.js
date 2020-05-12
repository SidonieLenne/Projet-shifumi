$(document).ready(function(){
    $(".card").draggable({ // Rend l'élément draggable
      revert : 'invalid',// L'élément revient à sa place si il n'est pas droppé au bon endroit
      snap : '#emptyBlock'// Effet de magnétisme avec l'élément sélectionné
  });
    $( "#emptyBlock" ).droppable({// Rend l'élément droppable
    accept: ".card",// Permet de choisir les éléments acceptés dans le drop
    classes: {// Feedback lorsque un élément droppable est séléctionné
      "ui-droppable-active": "ui-state-default"
    },
});
});
