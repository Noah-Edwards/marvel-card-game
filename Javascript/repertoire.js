// Appeler jQuery
$(document).ready(function(){

    // Lorsque une touche du clavier est relachée dans l'input avec l'id 
    // motRecherche, la fonction suivante se lance
    $("#motRecherche").on("keyup", function() {

        // Mettre l'élément de la recherche en minuscules
        var value = $(this).val().toLowerCase();

        // Filtrer les rangées du tableau avec l'id maTable avec la condition 
        // suivante
        $("#maTable tr").filter(function() {

            // Cacher les rangées qui n'ont pas le mot/la lettre recherchée
            // en utilisant la fonction toggle() qui cache la rangée derrière la 
            // rangée au-dessus
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)

        });
    });
});