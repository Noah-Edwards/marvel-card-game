  /////////////////////////////////////
 // JAVASCRIPT JEU DE CARTES MARVEL //
/////////////////////////////////////

  //#################################//
 //  INITIALISATION DES VARIABLES   //
//#################################//

// Initialiser les paquets de cartes des deux joueurs
var cartesJ1 = [];
var cartesJ2 = [];

// Initialiser la variable qui va déterminer qui gagne la manche
var gagnantManche = ""

// Initialiser toutes les cartes dans une liste
var listeCartes = [
	{
		Nom : "Abyss",
		Vitesse : 68,
		Force : 66,
		Charisme : 67,
		Resistance : 65,
		Mental : 75,
		General : 68,
		Taille : 172,
		Poids : 62,
		Apparition : 2013,
		Rarete : "ordinaire",
		Image : "../Images/Cartes/(ordinaire)Abyss.png"
	},

	{
		Nom : "Executioner",
		Vitesse : 69,
		Force : 70,
		Charisme : 71,
		Resistance : 68,
		Mental : 70,
		General : 70,
		Taille : 215,
		Poids : 500,
		Apparition : 1964,
		Rarete : "ordinaire",
		Image : "../Images/Cartes/(ordinaire)Executioner.png"
	},

	{
		Nom : "Rage",
		Vitesse : 72,
		Force : 68,
		Charisme : 65,
		Resistance : 67,
		Mental : 71,
		General : 67,
		Taille : 195,
		Poids : 204,
		Apparition : 1990,
		Rarete : "ordinaire",
		Image : "../Images/Cartes/(ordinaire)Rage.png"
	},

	{
		Nom : "Abomination",
		Vitesse : 73,
		Force : 61,
		Charisme : 76,
		Resistance : 71,
		Mental : 77,
		General : 72,
		Taille : 205,
		Poids : 445,
		Apparition : 1967,
		Rarete : "rare",
		Image : "../Images/Cartes/(rare)Abomination.png"
	},

	{
		Nom : "Absorbing Man",
		Vitesse : 79,
		Force : 69,
		Charisme : 63,
		Resistance : 78,
		Mental : 72,
		General : 72,
		Taille : 192,
		Poids : 166,
		Apparition : 1965,
		Rarete : "rare",
		Image : "../Images/Cartes/(rare)Absorbing Man.png"
	},

	{
		Nom : "Enchantress",
		Vitesse : 79,
		Force : 78,
		Charisme : 70,
		Resistance : 74,
		Mental : 72,
		General : 75,
		Taille : 190,
		Poids : 205,
		Apparition : 1964,
		Rarete : "rare",
		Image : "../Images/Cartes/(rare)Enchantress.png"
	},

	{
		Nom : "Hammerhead",
		Vitesse : 74,
		Force : 74,
		Charisme : 70,
		Resistance : 74,
		Mental : 74,
		General : 73,
		Taille : 178,
		Poids : 88,
		Apparition : 1972,
		Rarete : "rare",
		Image : "../Images/Cartes/(rare)Hammerhead.png"
	},

	{
		Nom : "Machine Man",
		Vitesse : 74,
		Force : 73,
		Charisme : 75,
		Resistance : 74,
		Mental : 70,
		General : 73,
		Taille : 180,
		Poids : 386,
		Apparition : 1977,
		Rarete : "rare",
		Image : "../Images/Cartes/(rare)Machine Man.png"
	},

	{
		Nom : "Maximus",
		Vitesse : 78,
		Force : 70,
		Charisme : 74,
		Resistance : 79,
		Mental : 76,
		General : 75,
		Taille : 177,
		Poids : 81,
		Apparition : 1966,
		Rarete : "rare",
		Image : "../Images/Cartes/(rare)Maximus.png"
	},

	{
		Nom : "Miss America",
		Vitesse : 75,
		Force : 75,
		Charisme : 74,
		Resistance : 74,
		Mental : 70,
		General : 74,
		Taille : 183,
		Poids : 75,
		Apparition : 2011,
		Rarete : "rare",
		Image : "../Images/Cartes/(rare)Miss America.png"
	},

	{
		Nom : "Multiple Man",
		Vitesse : 74,
		Force : 71,
		Charisme : 74,
		Resistance : 72,
		Mental : 75,
		General : 73,
		Taille : 178,
		Poids : 70,
		Apparition : 1974,
		Rarete : "rare",
		Image : "../Images/Cartes/(rare)Multiple Man.png"
	},

	{
		Nom : "Phantom Rider",
		Vitesse : 70,
		Force : 73,
		Charisme : 75,
		Resistance : 75,
		Mental : 74,
		General : 73,
		Taille : 188,
		Poids : 90,
		Apparition : 1967,
		Rarete : "rare",
		Image : "../Images/Cartes/(rare)Phantom Rider.png"
	},

	{
		Nom : "Ricochet",
		Vitesse : 75,
		Force : 70,
		Charisme : 73,
		Resistance : 72,
		Mental : 74,
		General : 73,
		Taille : 175,
		Poids : 78,
		Apparition : 1998,
		Rarete : "rare",
		Image : "../Images/Cartes/(rare)Ricochet.png"
	},

	{
		Nom : "Anti-Venom",
		Vitesse : 76,
		Force : 80,
		Charisme : 83,
		Resistance : 81,
		Mental : 76,
		General : 79,
		Taille : 191,
		Poids : 118,
		Apparition : 2008,
		Rarete : "epique",
		Image : "../Images/Cartes/(epique)Anti-Venom.png"
	},

	{
		Nom : "Emma Frost",
		Vitesse : 79,
		Force : 77,
		Charisme : 76,
		Resistance : 77,
		Mental : 80,
		General : 80,
		Taille : 178,
		Poids : 57,
		Apparition : 1980,
		Rarete : "epique",
		Image : "../Images/Cartes/(epique)Emma Frost.png"
	},

	{
		Nom : "Ghost Rider",
		Vitesse : 79,
		Force : 85,
		Charisme : 84,
		Resistance : 80,
		Mental : 85,
		General : 83,
		Taille : 185,
		Poids : 100,
		Apparition : 1972,
		Rarete : "epique",
		Image : "../Images/Cartes/(epique)Ghost Rider.png"
	},

	{
		Nom : "Jonah Jameson",
		Vitesse : 76,
		Force : 83,
		Charisme : 85,
		Resistance : 85,
		Mental : 79,
		General : 82,
		Taille : 177,
		Poids : 95,
		Apparition : 1963,
		Rarete : "epique",
		Image : "../Images/Cartes/(epique)Jonah Jameson.png"
	},

	{
		Nom : "Kingpin",
		Vitesse : 85,
		Force : 82,
		Charisme : 82,
		Resistance : 88,
		Mental : 84,
		General : 84,
		Taille : 197,
		Poids : 204,
		Apparition : 1967,
		Rarete : "epique",
		Image : "../Images/Cartes/(epique)Kingpin.png"
	},

	{
		Nom : "Mephisto",
		Vitesse : 77,
		Force : 81,
		Charisme : 78,
		Resistance : 85,
		Mental : 75,
		General : 79,
		Taille : 198,
		Poids : 141,
		Apparition : 1968,
		Rarete : "epique",
		Image : "../Images/Cartes/(epique)Mephisto.png"
	},

	{
		Nom : "Quicksilver",
		Vitesse : 92,
		Force : 85,
		Charisme : 85,
		Resistance : 84,
		Mental : 75,
		General : 84,
		Taille : 180,
		Poids : 88,
		Apparition : 1964,
		Rarete : "epique",
		Image : "../Images/Cartes/(epique)Quicksilver.png"
	},

	{
		Nom : "Sandman",
		Vitesse : 82,
		Force : 87,
		Charisme : 83,
		Resistance : 83,
		Mental : 82,
		General : 83,
		Taille : 182,
		Poids : 204,
		Apparition : 1963,
		Rarete : "epique",
		Image : "../Images/Cartes/(epique)Sandman.png"
	},

	{
		Nom : "Gamora",
		Vitesse : 90,
		Force : 90,
		Charisme : 91,
		Resistance : 89,
		Mental : 92,
		General : 90,
		Taille : 180,
		Poids : 77,
		Apparition : 1975,
		Rarete : "legendaire",
		Image : "../Images/Cartes/(legendaire)Gamora.png"
	},

	{
		Nom : "Loki",
		Vitesse : 88,
		Force : 91,
		Charisme : 87,
		Resistance : 89,
		Mental : 89,
		General : 89,
		Taille : 190,
		Poids : 238,
		Apparition : 1962,
		Rarete : "legendaire",
		Image : "../Images/Cartes/(legendaire)Loki.png"
	},

	{
		Nom : "Luke Cage",
		Vitesse : 90,
		Force : 83,
		Charisme : 88,
		Resistance : 89,
		Mental : 83,
		General : 87,
		Taille : 200,
		Poids : 190,
		Apparition : 1972,
		Rarete : "legendaire",
		Image : "../Images/Cartes/(legendaire)Luke Cage.png"
	},

	{
		Nom : "Mister Fantastic",
		Vitesse : 89,
		Force : 91,
		Charisme : 87,
		Resistance : 90,
		Mental : 92,
		General : 90,
		Taille : 183,
		Poids : 82,
		Apparition : 1961,
		Rarete : "legendaire",
		Image : "../Images/Cartes/(legendaire)Mister Fantastic.png"
	},

	{
		Nom : "Ant-Man",
		Vitesse : 93,
		Force : 89,
		Charisme : 95,
		Resistance : 90,
		Mental : 92,
		General : 92,
		Taille : 180,
		Poids : 86,
		Apparition : 1979,
		Rarete : "hero",
		Image : "../Images/Cartes/(hero)Ant-Man.png"
	},

	{
		Nom : "Black Panther",
		Vitesse : 98,
		Force : 96,
		Charisme : 91,
		Resistance : 94,
		Mental : 92,
		General : 94,
		Taille : 183,
		Poids : 91,
		Apparition : 1966,
		Rarete : "hero",
		Image : "../Images/Cartes/(hero)Black Panther.png"
	},

	{
		Nom : "Black Widow",
		Vitesse : 94,
		Force : 95,
		Charisme : 88,
		Resistance : 90,
		Mental : 98,
		General : 93,
		Taille : 170,
		Poids : 57,
		Apparition : 1964,
		Rarete : "hero",
		Image : "../Images/Cartes/(hero)Black Widow.png"
	},

	{
		Nom : "Captain America",
		Vitesse : 98,
		Force : 99,
		Charisme : 98,
		Resistance : 97,
		Mental : 99,
		General : 98,
		Taille : 189,
		Poids : 108,
		Apparition : 1941,
		Rarete : "hero",
		Image : "../Images/Cartes/(hero)Captain America.png"
	},

	{
		Nom : "Captain Marvel",
		Vitesse : 99,
		Force : 99,
		Charisme : 96,
		Resistance : 99,
		Mental : 90,
		General : 97,
		Taille : 180,
		Poids : 56,
		Apparition : 1968,
		Rarete : "hero",
		Image : "../Images/Cartes/(hero)Captain Marvel.png"
	},

	{
		Nom : "Deadpool",
		Vitesse : 87,
		Force : 89,
		Charisme : 99,
		Resistance : 92,
		Mental : 95,
		General : 92,
		Taille : 189,
		Poids : 95,
		Apparition : 1991,
		Rarete : "hero",
		Image : "../Images/Cartes/(hero)Deadpool.png"
	},

	{
		Nom : "Doctor Strange",
		Vitesse : 94,
		Force : 99,
		Charisme : 92,
		Resistance : 91,
		Mental : 94,
		General : 94,
		Taille : 185,
		Poids : 82,
		Apparition : 1963,
		Rarete : "hero",
		Image : "../Images/Cartes/(hero)Doctor Strange.png"
	},

	{
		Nom : "Hulk",
		Vitesse : 95,
		Force : 99,
		Charisme : 88,
		Resistance : 98,
		Mental : 90,
		General : 94,
		Taille : 210,
		Poids : 475,
		Apparition : 1962,
		Rarete : "hero",
		Image : "../Images/Cartes/(hero)Hulk.png"
	},

	{
		Nom : "Iron Man",
		Vitesse : 96,
		Force : 97,
		Charisme : 97,
		Resistance : 99,
		Mental : 97,
		General : 97,
		Taille : 183,
		Poids : 102,
		Apparition : 1963,
		Rarete : "hero",
		Image : "../Images/Cartes/(hero)Iron Man.png"
	}
]



  //#################################//
 //  	CRÉATION DE FONCTIONS  	    //
//#################################//

// Créer une fonction pour trouver des nombres au hasard [0;max[
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

// Créer une fonction pour mélanger une liste
function shuffle(liste) {

	// Déterminer la taille de la liste et la mettre dans une variable qui va servir de compteur
    let compteur = liste.length;

    // Tant qu'il y'a des éléments dans la liste
    while (compteur > 0) {
        // Choisir un indice aléatoire
        let indice = Math.floor(Math.random() * compteur);

        // Dégraisser le compteur de 1
        compteur--;

        // Remplacer le dernier élément avec le nouveau
        let temporaire = liste[compteur];
        liste[compteur] = liste[indice];
        liste[indice] = temporaire;
    }

    // Retourner la nouvelle liste mélangée
    return liste;
}

// Créer une fonction qui va mélanger et distribuer les cartes entre les deux joueurs
function distribuerCartes(liste){

	// Mélanger les cartes et mettre dans une liste temporaire
	let tempListe = shuffle(liste);

	// Déterminer la taille de la liste et la mettre dans une variable qui va servir de compteur
	let compteur = tempListe.length - 1;

	// Tant qu'il y'a des éléments dans la liste
    while (compteur > 0){
    	// Dégraisser le compteur de 1
        compteur--;

        // Mettre la carte d'indice compteur à la fin du paquet du joueur 1
        cartesJ1.push(tempListe[compteur]);

        // Dégraisser le compteur de 1
        compteur--;

        // Mettre la carte d'indice compteur à la fin du paquet du joueur 2
        cartesJ2.push(tempListe[compteur]);
    }
}

// Créer une fonction qui va déterminer qui commence la partie et fermer ensuite le modal du html
function closeModalBegin(){
	$("button#modalButtonJ1").click(function(){
		// Renvoie vrai si l'élément a la classe "active"
		if ($(this).hasClass('active')){
			$(".modal-background-begin").css({
				"display": "none"
			});
			// Afficher les capacités sur les boutons du joueur 1
			$("span#VitesseCarteJ1").text("Vitesse : "+cartesJ1[0].Vitesse);
			$("span#ForceCarteJ1").text("Force : "+cartesJ1[0].Force);
			$("span#CharismeCarteJ1").text("Charisme : "+cartesJ1[0].Charisme);
			$("span#RésistanceCarteJ1").text("Résistance : "+cartesJ1[0].Resistance);
			$("span#MentalCarteJ1").text("Mental : "+cartesJ1[0].Mental);
			$("span#GénéralCarteJ1").text("Général : "+cartesJ1[0].General);
			$("span#TailleCarteJ1").text("Taille : "+cartesJ1[0].Taille+"cm");
			$("span#PoidsCarteJ1").text("Poids : "+cartesJ1[0].Poids+"kg");
			$("span#ApparitionCarteJ1").text("Apparition : "+cartesJ1[0].Apparition);
			// Appliquer la fonction qui démarre la partie
			jouer("J1");
		}
		else{
			// Enlever la classe 'active' sur tout le bouton 2 du modal
			$("#modalButtonJ2").removeClass("active");
			// Activer la classe 'active' sur le bouton joueur 1
			$(this).toggleClass("active");
		}
	});
	$("button#modalButtonJ2").click(function(){
		// Renvoie vrai si l'élément a la classe "active"
		if ($(this).hasClass('active')){
			$(".modal-background-begin").css({
				"display": "none"
			});
			// Afficher les capacités sur les boutons du joueur 2
			$("span#VitesseCarteJ2").text("Vitesse : "+cartesJ2[0].Vitesse);
			$("span#ForceCarteJ2").text("Force : "+cartesJ2[0].Force);
			$("span#CharismeCarteJ2").text("Charisme : "+cartesJ2[0].Charisme);
			$("span#RésistanceCarteJ2").text("Résistance : "+cartesJ2[0].Resistance);
			$("span#MentalCarteJ2").text("Mental : "+cartesJ2[0].Mental);
			$("span#GénéralCarteJ2").text("Général : "+cartesJ2[0].General);
			$("span#TailleCarteJ2").text("Taille : "+cartesJ2[0].Taille+"cm");
			$("span#PoidsCarteJ2").text("Poids : "+cartesJ2[0].Poids+"kg");
			$("span#ApparitionCarteJ2").text("Apparition : "+cartesJ2[0].Apparition);
			// Appliquer la fonction qui démarre la partie
			jouer("J2");
		}
		else{
			// Enlever la classe 'active' sur tout le bouton 1 du modal
			$("#modalButtonJ1").removeClass("active");
			// Activer la classe 'active' sur le bouton joueur 1
			$(this).toggleClass("active");
		}
	});
}

// Créer une fonction qui va déterminer qui a gagner la partie et afficher le modal pour l'annoncer jusqu'à ce que l'utilisateur clique sur le bouton pour aller au menu
function openEndModal(){
	// Afficher le modal pour annoncer le vainqueur de la partie
	$(".modal-background-end").css({
		"display": "flex"
	});
	$("button#modalButtonMenu").click(function(){
		// Amène l'utilisateur au menu si l'élément a la classe "active"
		if ($(this).hasClass('active')){
			window.history.back();
		}
		else{
			// Activer la classe 'active' sur le bouton menu
			$(this).toggleClass("active");
		}
	});
}

// Créer une fonction qui va afficher le modal de la manche
function openGameModal(){
	// Montrer la face des deux cartes des joueurs
	$("#ImageJ1Modal").attr("src", cartesJ1[0].Image);
	$("#ImageJ2Modal").attr("src", cartesJ2[0].Image);
	// Afficher le modal pour annoncer le vainqueur de la manche
	$(".modal-background-game").css({
		"display": "flex"
	});
	$("button#modalButtonGame").click(function(){
		// Ferme le modal
		$(".modal-background-game").css({
			"display": "none"
		});
	});
}

// Créer une fonction qui va confronter les deux cartes au-dessus des piles des 2 joueurs et déterminer le gagnant
function confrontation(){
	// Initialiser la variable qui contient le gagnant pour éviter que lorsque le joueur ne choissise aucune capacité personne ne gagne
	gagnantManche = "";

	// Vérifier quelle capacité le joueur a séléctionné

	// VITESSE
	if (($("button#VitesseJ1").hasClass('active'))||($("button#VitesseJ2").hasClass('active'))){
		// Déterminer quel joueur a gagner
		if ((cartesJ1[0].Vitesse==0)||(cartesJ2[0].Vitesse==0)){
			gagnantManche = "";
		}
		else{
			if ((cartesJ1[0].Vitesse)>(cartesJ2[0].Vitesse)){
				gagnantManche = "J1";
			}
			else if ((cartesJ1[0].Vitesse)<(cartesJ2[0].Vitesse)){
				gagnantManche = "J2";
			}
			else{
				gagnantManche = "Aucun";
			}
		}
		// Afficher les capacités des joueurs
		$("#modal-game-J1").text(cartesJ1[0].Vitesse);
		$("#modal-game-J2").text(cartesJ2[0].Vitesse);
		$("#modal-game-Capacity").text("Vitesse");
	}

	// FORCE
	else if (($("button#ForceJ1").hasClass('active'))||($("button#ForceJ2").hasClass('active'))){
		// Déterminer quel joueur a gagner
		if ((cartesJ1[0].Force==0)||(cartesJ2[0].Force==0)){
			gagnantManche = "";
		}
		else{
			if ((cartesJ1[0].Force)>(cartesJ2[0].Force)){
				gagnantManche = "J1";
			}
			else if ((cartesJ1[0].Force)<(cartesJ2[0].Force)){
				gagnantManche = "J2";
			}
			else{
				gagnantManche = "Aucun";
			}
		}
		// Afficher les capacités des joueurs
		$("#modal-game-J1").text(cartesJ1[0].Force);
		$("#modal-game-J2").text(cartesJ2[0].Force);
		$("#modal-game-Capacity").text("Force");
	}

	// CHARISME
	else if (($("button#CharismeJ1").hasClass('active'))||($("button#CharismeJ2").hasClass('active'))){
		// Déterminer quel joueur a gagner
		if ((cartesJ1[0].Charisme==0)||(cartesJ2[0].Charisme==0)){
			gagnantManche = "";
		}
		else{
			if ((cartesJ1[0].Charisme)>(cartesJ2[0].Charisme)){
				gagnantManche = "J1";
			}
			else if ((cartesJ1[0].Charisme)<(cartesJ2[0].Charisme)){
				gagnantManche = "J2";
			}
			else{
				gagnantManche = "Aucun";
			}
		}
		// Afficher les capacités des joueurs
		$("#modal-game-J1").text(cartesJ1[0].Charisme);
		$("#modal-game-J2").text(cartesJ2[0].Charisme);
		$("#modal-game-Capacity").text("Charisme");
	}

	// RESISTANCE
	else if (($("button#RésistanceJ1").hasClass('active'))||($("button#RésistanceJ2").hasClass('active'))){
		// Déterminer quel joueur a gagner
		if ((cartesJ1[0].Resistance==0)||(cartesJ2[0].Resistance==0)){
			gagnantManche = "";
		}
		else{
			if ((cartesJ1[0].Resistance)>(cartesJ2[0].Resistance)){
				gagnantManche = "J1";
			}
			else if ((cartesJ1[0].Resistance)<(cartesJ2[0].Resistance)){
				gagnantManche = "J2";
			}
			else{
				gagnantManche = "Aucun";
			}
		}
		// Afficher les capacités des joueurs
		$("#modal-game-J1").text(cartesJ1[0].Resistance);
		$("#modal-game-J2").text(cartesJ2[0].Resistance);
		$("#modal-game-Capacity").text("Resistance");
	}

	// MENTAL
	else if (($("button#MentalJ1").hasClass('active'))||($("button#MentalJ2").hasClass('active'))){
		// Déterminer quel joueur a gagner
		if ((cartesJ1[0].Mental==0)||(cartesJ2[0].Mental==0)){
			gagnantManche = "";
		}
		else{
			if ((cartesJ1[0].Mental)>(cartesJ2[0].Mental)){
				gagnantManche = "J1";
			}
			else if ((cartesJ1[0].Mental)<(cartesJ2[0].Mental)){
				gagnantManche = "J2";
			}
			else{
				gagnantManche = "Aucun";
			}
		}
		// Afficher les capacités des joueurs
		$("#modal-game-J1").text(cartesJ1[0].Mental);
		$("#modal-game-J2").text(cartesJ2[0].Mental);
		$("#modal-game-Capacity").text("Mental");
	}

	// GENERAL
	else if (($("button#GénéralJ1").hasClass('active'))||($("button#GénéralJ2").hasClass('active'))){
		// Déterminer quel joueur a gagner
		if ((cartesJ1[0].General==0)||(cartesJ2[0].General==0)){
			gagnantManche = "";
		}
		else{
			if ((cartesJ1[0].General)>(cartesJ2[0].General)){
				gagnantManche = "J1";
			}
			else if ((cartesJ1[0].General)<(cartesJ2[0].General)){
				gagnantManche = "J2";
			}
			else{
				gagnantManche = "Aucun";
			}
		}
		// Afficher les capacités des joueurs
		$("#modal-game-J1").text(cartesJ1[0].General);
		$("#modal-game-J2").text(cartesJ2[0].General);
		$("#modal-game-Capacity").text("General");
	}

	// TAILLE
	else if (($("button#TailleJ1").hasClass('active'))||($("button#TailleJ2").hasClass('active'))){
		// Déterminer quel joueur a gagner
		if ((cartesJ1[0].Taille==0)||(cartesJ2[0].Taille==0)){
			gagnantManche = "";
		}
		else{
			if ((cartesJ1[0].Taille)>(cartesJ2[0].Taille)){
				gagnantManche = "J1";
			}
			else if ((cartesJ1[0].Taille)<(cartesJ2[0].Taille)){
				gagnantManche = "J2";
			}
			else{
				gagnantManche = "Aucun";
			}
		}
		// Afficher les capacités des joueurs
		$("#modal-game-J1").text(cartesJ1[0].Taille+"cm");
		$("#modal-game-J2").text(cartesJ2[0].Taille+"cm");
		$("#modal-game-Capacity").text("Taille");
	}

	// POIDS
	else if (($("button#PoidsJ1").hasClass('active'))||($("button#PoidsJ2").hasClass('active'))){
		// Déterminer quel joueur a gagner
		if ((cartesJ1[0].Poids==0)||(cartesJ2[0].Poids==0)){
			gagnantManche = "";
		}
		else{
			if ((cartesJ1[0].Poids)>(cartesJ2[0].Poids)){
				gagnantManche = "J1";
			}
			else if ((cartesJ1[0].Poids)<(cartesJ2[0].Poids)){
				gagnantManche = "J2";
			}
			else{
				gagnantManche = "Aucun";
			}
		}
		// Afficher les capacités des joueurs
		$("#modal-game-J1").text(cartesJ1[0].Poids+"kg");
		$("#modal-game-J2").text(cartesJ2[0].Poids+"kg");
		$("#modal-game-Capacity").text("Poids");
	}

	// APPARITION
	else if (($("button#ApparitionJ1").hasClass('active'))||($("button#ApparitionJ2").hasClass('active'))){
		// Déterminer quel joueur a gagner
		if ((cartesJ1[0].Apparition==0)||(cartesJ2[0].Apparition==0)){
			gagnantManche = "";
		}
		else{
			if ((cartesJ1[0].Apparition)<(cartesJ2[0].Apparition)){
				gagnantManche = "J1";
			}
			else if ((cartesJ1[0].Apparition)>(cartesJ2[0].Apparition)){
				gagnantManche = "J2";
			}
			else{
				gagnantManche = "Aucun";
			}
		}
		// Afficher les capacités des joueurs
		$("#modal-game-J1").text(cartesJ1[0].Apparition);
		$("#modal-game-J2").text(cartesJ2[0].Apparition);
		$("#modal-game-Capacity").text("Apparition");
	}

	// Déterminer qui va jouer au prochain tour en fonction de qui a gagné la manche
	if (gagnantManche == "J1"){
		// Activer les boutons du joueur 1
		$("button.J1").prop("disabled",false);
		$("button#ConfirmerJ1").prop("disabled",false);
		// Désactiver les boutons du joueur 2
		$("button.J2").prop("disabled",true);
		$("button#ConfirmerJ2").prop("disabled",true);
		// Enlever la classe 'active' sur tout les boutons du joueur 1
		$("button.J1").removeClass("active");
		// Enlever la classe 'active' sur tout les boutons du joueur 2
		$("button.J2").removeClass("active");
		$("span#gagnantManche").text("1");
		// Agrandir la carte du gagnant
		$("#ImageJ1Modal").css({
			"width": "50%"
		});
		// Rétrécir la carte du perdant
		$("#ImageJ2Modal").css({
			"width": "50%"
		});
		$("#ImageJ1Modal").animate({width: '70%'}, "slow");
		$("#ImageJ2Modal").animate({width: '50%'}, "slow");
		$("#modal-game-J1").css({"color": "green"});
		$("#modal-game-J2").css({"color": "red"});
		// Vérifier que le joueur 2 a encore des cartes
		if (cartesJ2.length-1 > 0){
			// Appliquer la fonction qui affiche le modal qui annonce le gagnant de la manche
			openGameModal();
			// Mettre la carte du dessus du paquet du joueur 1 et 2 à la fin du paquet du joueur 1
			cartesJ1.push(cartesJ1[0]);
			cartesJ1.push(cartesJ2[0]);
			// Supprimer les cartes au-dessus du paquet car elles sont maintenant en-dessuou du paquet du joueur 1
			cartesJ1.splice(0,1);
			cartesJ2.splice(0,1);
			// Montrer le nombre de cartes restantes des 2 joueurs
			$("span#nbCartesRestantesJ1").text(cartesJ1.length);
			$("span#nbCartesRestantesJ2").text(cartesJ2.length);
			// Montrer la carte au-dessus du paquet du joueur 1
			$("#ImageJ1").attr("src", cartesJ1[0].Image);
			// Afficher les capacités sur les boutons du joueur 1
			$("span#VitesseCarteJ1").text("Vitesse : "+cartesJ1[0].Vitesse);
			$("span#ForceCarteJ1").text("Force : "+cartesJ1[0].Force);
			$("span#CharismeCarteJ1").text("Charisme : "+cartesJ1[0].Charisme);
			$("span#RésistanceCarteJ1").text("Résistance : "+cartesJ1[0].Resistance);
			$("span#MentalCarteJ1").text("Mental : "+cartesJ1[0].Mental);
			$("span#GénéralCarteJ1").text("Général : "+cartesJ1[0].General);
			$("span#TailleCarteJ1").text("Taille : "+cartesJ1[0].Taille+"cm");
			$("span#PoidsCarteJ1").text("Poids : "+cartesJ1[0].Poids+"kg");
			$("span#ApparitionCarteJ1").text("Apparition : "+cartesJ1[0].Apparition);
			// Enlever les capacités sur les boutons du joueur 2
			$("span#VitesseCarteJ2").text("");
			$("span#ForceCarteJ2").text("");
			$("span#CharismeCarteJ2").text("");
			$("span#RésistanceCarteJ2").text("");
			$("span#MentalCarteJ2").text("");
			$("span#GénéralCarteJ2").text("");
			$("span#TailleCarteJ2").text("");
			$("span#PoidsCarteJ2").text("");
			$("span#ApparitionCarteJ2").text("");
			// Retourner la carte de l'adversaire
			$("#ImageJ2").attr("src", "../Images/Autres/DOS.png");
		}
		else{
			$("span#gagnantPartie").text("1");
			openEndModal();
		}
	}
	else if (gagnantManche == "J2"){
		// Activer les boutons du joueur 2
		$("button.J2").prop("disabled",false);
		$("button#ConfirmerJ2").prop("disabled",false);
		// Désactiver les boutons du joueur 1
		$("button.J1").prop("disabled",true);
		$("button#ConfirmerJ1").prop("disabled",true);
		// Enlever la classe 'active' sur tout les boutons du joueur 1
		$("button.J1").removeClass("active");
		// Enlever la classe 'active' sur tout les boutons du joueur 2
		$("button.J2").removeClass("active");
		$("span#gagnantManche").text("2");
		// Mettre du box shadow sur la carte du gagnant
		$("#ImageJ2Modal").css({
			"width": "50%"
		});
		// Rétrécir la carte du perdant
		$("#ImageJ1Modal").css({
			"width": "50%"
		});
		$("#ImageJ2Modal").animate({width: '70%'}, "slow");
		$("#ImageJ1Modal").animate({width: '50%'}, "slow");
		$("#modal-game-J2").css({"color": "green"});
		$("#modal-game-J1").css({"color": "red"});
		// Vérifier que le joueur 1 a encore des cartes
		if (cartesJ1.length-1 > 0){
			// Appliquer la fonction qui affiche le gagnant de la manche
			openGameModal();
			// Mettre la carte du dessus du paquet du joueur 1 et 2 à la fin du paquet du joueur 2
			cartesJ2.push(cartesJ1[0]);
			cartesJ2.push(cartesJ2[0]);
			// Supprimer les cartes au-dessus du paquet car elles sont maintenant en-dessuou du paquet du joueur 2
			cartesJ1.splice(0,1);
			cartesJ2.splice(0,1);
			// Montrer le nombre de cartes restantes des 2 joueurs
			$("span#nbCartesRestantesJ1").text(cartesJ1.length);
			$("span#nbCartesRestantesJ2").text(cartesJ2.length);
			// Montrer la carte au-dessus du paquet du joueur 2
			$("#ImageJ2").attr("src", cartesJ2[0].Image);
			// Afficher les capacités sur les boutons du joueur 2
			$("span#VitesseCarteJ2").text("Vitesse : "+cartesJ2[0].Vitesse);
			$("span#ForceCarteJ2").text("Force : "+cartesJ2[0].Force);
			$("span#CharismeCarteJ2").text("Charisme : "+cartesJ2[0].Charisme);
			$("span#RésistanceCarteJ2").text("Résistance : "+cartesJ2[0].Resistance);
			$("span#MentalCarteJ2").text("Mental : "+cartesJ2[0].Mental);
			$("span#GénéralCarteJ2").text("Général : "+cartesJ2[0].General);
			$("span#TailleCarteJ2").text("Taille : "+cartesJ2[0].Taille+"cm");
			$("span#PoidsCarteJ2").text("Poids : "+cartesJ2[0].Poids+"kg");
			$("span#ApparitionCarteJ2").text("Apparition : "+cartesJ2[0].Apparition);
			// Enlever les capacités sur les boutons du joueur 1
			$("span#VitesseCarteJ1").text("");
			$("span#ForceCarteJ1").text("");
			$("span#CharismeCarteJ1").text("");
			$("span#RésistanceCarteJ1").text("");
			$("span#MentalCarteJ1").text("");
			$("span#GénéralCarteJ1").text("");
			$("span#TailleCarteJ1").text("");
			$("span#PoidsCarteJ1").text("");
			$("span#ApparitionCarteJ1").text("");
			// Retourner la carte de l'adversaire
			$("#ImageJ1").attr("src", "../Images/Autres/DOS.png");
		}
		else{
			$("span#gagnantPartie").text("2");
			openEndModal();
		}
	}
	else if (gagnantManche == "Aucun"){
		// Enlever la classe 'active' sur tout les boutons du joueur 1
		$("button.J1").removeClass("active");
		// Enlever la classe 'active' sur tout les boutons du joueur 2
		$("button.J2").removeClass("active");
		alert("C'est Égalité ! Veuillez séléctionner une nouvelle capacité à comparer");
	}
	else {
		alert("Veuillez séléctionner une capacité à comparer");
	}
}

// Créer une fonction qui va réunir toutes les fonctions de jeu
function jouer(joueurCommence){
	if (joueurCommence=="J1"){
		// Montrer la carte au-dessus du paquet du joueur 1
		$("#ImageJ1").attr("src", cartesJ1[0].Image);
		// Désactiver les boutons du joueur 2
		$("button.J2").prop("disabled",true);
		$("button#ConfirmerJ2").prop("disabled",true);
	}
	// Agir lors d'un clic sur un bouton du joueur 1
	$("button.J1").click(function(){
		// Enlever la classe 'active' sur tout les boutons du joueur 1
		$("button.J1").removeClass("active");
		// Activer la classe 'active' sur le bouton sur lequel le joueur 1 vient de cliquer
		$(this).toggleClass("active");
	});

	// Agir lors d'un clic sur le bouton confirmer du joueur 1
	$("button#ConfirmerJ1").click(function(){
		// Appliquer la fonction qui confronte les deux cartes au-dessus du paquet
		confrontation();
	});

	if (joueurCommence=="J2"){
		// Montrer la carte au-dessus du paquet du joueur 2
		$("#ImageJ2").attr("src", cartesJ2[0].Image);
		// Désactiver les boutons du joueur 1
		$("button.J1").prop("disabled",true);
		$("button#ConfirmerJ1").prop("disabled",true);
	}
	// Agir lors d'un clic sur un bouton du joueur 2
	$("button.J2").click(function(){
		// Enlever la classe 'active' sur tout les boutons du joueur 2
		$("button.J2").removeClass("active");
		// Activer la classe 'active' sur le bouton sur lequel le joueur 2 vient de cliquer
		$(this).toggleClass("active");
	});

	// Agir lors d'un clic sur le bouton confirmer du joueur 2
	$("button#ConfirmerJ2").click(function(){
		// Appliquer la fonction qui confronte les deux cartes au-dessus du paquet
		confrontation();
	});
}

// Créer une fonction qui affiche les valeurs de la cartes sur les boutons du joueur
function afficherValeurs(){
	$("p").text("Hello world!");
}


  //#################################//
 //        		 JEU   		        //
//#################################//

$('.menuToggle').click(function(){
	$('ul').toggleClass('active');
})

// Appliquer la fonction de distribution des cartes
distribuerCartes(listeCartes);

// Appliquer la fonction qui ferme le modal lorsque aucun bouton n'a été séléctionné
closeModalBegin();