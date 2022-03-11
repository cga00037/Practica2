// ---------------------------------------------------------------------------
// Edit this file to define your game. It should have at least four
// sets of content: undum.game.situations, undum.game.start,
// undum.game.qualities, and undum.game.init.
// ---------------------------------------------------------------------------

/* A unique id for your game. This is never displayed. I use a UUID,
 * but you can use anything that is guaranteed unique (a URL you own,
 * or a variation on your email address, for example). */
undum.game.id = "be1c95b9-cbc7-48c6-8e6a-89837aa9113e";

/* A string indicating what version of the game this is. Versions are
 * used to control saved-games. If you change the content of a game,
 * the saved games are unlikely to work. Changing this version number
 * prevents Undum from trying to load the saved-game and crashing. */
undum.game.version = "1.0";

/* A variable that changes the fade out speed of the option text on
 * a mobile. */
undum.game.mobileHide = 2000

/* A variable that changes the options fade out speed. */
undum.game.fadeSpeed = 1500

/* A variable that changes the slide up speed after clicking on an
 * option. */
undum.game.slideUpSpeed = 500

/* The situations that the game can be in. Each has a unique ID. */
undum.game.situations = {
    start: new undum.SimpleSituation(
	
        "<h1 > Capitulo 1: El Maestro</h1>\
        <img src='media/vid/tanjiro-kamado.gif'>\
        <p>Despues de una larga noche despiertas y recuerdas quien eres.\
		Tu nombre es Kamado Tanjiro y tienes un unico objetivo en esta\
		vida, que es salvar a tu hermana de la maldición de ser un\
		demonio, para ello quieres convertirte en cazador de demonios.\
		No es un camino facil, necesitas pasar una prueba la cual sin\
		destreza con la katana no pasaras y podrias morir. Por eso, tienes\
		como maestro a Sakonji Urokodaki, un antiguo cazador de demonios.\<br>\
		Urokodaki te propone  <a href='reto'>un reto...</a></p>"
    ),
	
	reto: new undum.SimpleSituation(
        "<h1>El reto</h1>\
		<p>El reto que te propone consiste en subir cada dia la montaña\
		Sagiri la cual está llena de trampas y peligros, y partir en dos\
		la roca gigante que hay en la cima.\<br>\
		\<br>\
		<img src='./media/img/roca.jpg'>\
		Pasan los dias y no consigues partir la roca, lo cual te genera\
		desmotivacion y frustracion. Tienes 3 opciones:\<br>\
		1. Pese a tu pesimismo decides <a href='./entrenar'>seguir entrenando.\</a><br>\
		2. Harto de la roca decides <a href='prueba'>ir directamente a la prueba.\</a><br>\
		3. Decides llorarle a tu maestro Urokodaki para que <a href='fin1'>parta él la roca.</a></p>",
        {
            actions: {
				"entrenar": function (character, system, action) {
					system.setQuality("skill", character.qualities.skill+3);
					system.doLink("entrenamiento1");
				}
			}
        }
    ),
	
	entrenamiento1: new undum.SimpleSituation(
        "<h1>Entrenamiento</h1>\
        <img src='./media/vid/entrenamiento.gif'>\
		<p>Pasan los días y sigues entrenando sin descanso, pero sigues sin\
		poder partir la roca, no notas ninguna progresión con tu entrenamiento,\
		esto te genera más desmotivación, estás a punto de rendirte. Tienes que\
		seguir avanzando, tienes que decidir:\<br>\
		1. Hacer caso a tu maestro Urokodaki y <a href='./entrenar'>seguir entrenando</a> hasta partir\
		la maldita roca.\<br>\
		2. Harto de la roca decides <a href='prueba'>ir directamente a la prueba.\</a><br>\
		3. Decides llorarle a tu maestro Urokodaki para que <a href='fin1'>parta él la roca.</a></p>", 
        {
            actions: {
				"entrenar": function (character, system, action) {
					system.setQuality("skill", character.qualities.skill+3);
					if (character.qualities.skill == 10) {
						system.doLink("preparado");
					}else{
						system.doLink("entrenamiento2");	
					}
				}
			}
        }
    ),
	
	entrenamiento2: new undum.SimpleSituation(
        "<h1>Entrenamiento</h1>\
        <img src='./media/vid/entrenamiento.gif'>\
		<p>Pasan los días y sigues entrenando sin descanso, pero sigues sin\
		poder partir la roca, no notas ninguna progresión con tu entrenamiento,\
		esto te genera más desmotivación, estás a punto de rendirte. Tienes que\
		seguir avanzando, tienes que decidir:\<br>\
		1. Hacer caso a tu maestro Urokodaki y <a href='./entrenar'>seguir entrenando</a> hasta partir\
		la maldita roca.\<br>\
		2. Harto de la roca decides <a href='prueba'>ir directamente a la prueba.\</a><br>\
		3. Decides llorarle a tu maestro Urokodaki para que <a href='fin1'>parta él la roca.</a></p>", 
        {
            actions: {
				"entrenar": function (character, system, action) {
					system.setQuality("skill", character.qualities.skill+3);
					if (character.qualities.skill == 10) {
						system.doLink("preparado");
					}else{
						system.doLink("entrenamiento1");						
					}
				}
			}
        }
    ),
	
	preparado: new undum.SimpleSituation(
        "<h1>Adiós roca</h1>\
		<p>Sigues entrenando y ya han pasado años desde la primera vez que \
		intentaste partir esa roca. Casi consumido por la locura y con las \
		manos destrozadas de tantos intentos de partir la piedra caes al suelo\
		rendido y te desmayas. <br>\
		Mientras duermes se te aparece una persona que dice ser alumno de Urokodaki,\
		te dice que la clave para destruir la roca es la respiración, y por último \
		te reta a que le ganes en combate utilizando la respiración. <br>\
		Te levantas del suelo e intentas olvidarte de todos los pensamientos\
		negativos sobre tu hermana y tu frustración y te centras en mantener\
		la respiración constante. Estás preparado, le asestas un golpe\
		mortal a aquella persona y ves como se desvanece de la nada, de repente,\
		te despiertas y ves la roca partida en dos con tu katana en el medio.<br>\
		\<br>\
		<img src='./media/img/roca-partida.jpg'>\
		¿Cómo es posible? Te preguntas, pero sea como sea has sido tú. Así pues,\
		decides ir a <a href='prueba'>la prueba</a>, ya es hora de salvar a tu hermanita.</p>",
    ),
			
	prueba: new undum.SimpleSituation(
        "<h1>Capitulo 2: La prueba</h1>\
		<p>Llegas a la prueba y te sueltan en la montaña Fujikasane. Esta montaña\
		está plagada de demonios, y para colmo hay muy poco oxígeno. Tu objetivo es\
		sobrevivir durante siete noches.\<br>\
		Consigues eludir durante varios días a los demonios, pero una noche te\
		encuentras atrapado por un camino sin salida, y detrás tuya hay un demonio\
		gigante comiendose a uno de los participantes, es como si ese demonio se\
		hubiera comido a casi todos los demás.\<br>\
		\<br>\
		<img src='./media/vid/demonio.gif'>\
		Después de zanpárselo va a por ti,te quedas sin tiempo para pensar, tienes\
		que hacer algo:\<br>\
		1. Sacas tu katana sin miramientos y <a href='duelo'>te enfrentas a él</a>.\<br>\
		2. Te acongojas tanto que le tiras la katana a la cabeza y <a href='fin2'>sales corriendo</a>",
    ),
	
	duelo: new undum.SimpleSituation(
        "<h1>El duelo</h1>\
		<p> Vas directo hacía él aunque no sabes si es la mejor idea ya que no\
		sabes qué tipo de ataques te puede asestar él, pero confías en cortarle\
		la cabeza antes de que él pueda atacarte.\<br>\
		Mientras corres hacía el demonio, éste es capaz de alargar sus brazos y\
		no solo tiene uno, tiene varios, por lo que te cuesta llegar hasta su\
		cabeza.\<br>\
		<br>\
		<img src='./media/vid/brazada.gif'>\
		Después de esquivar toda su oleada de brazadas te relajas pensando que ya\
		ha acabado el ataque, pero de repente te llueve un fuerte puñetazo del\
		suelo, tenía un brazo escondido bajo tierra. Este golpe te hace comer\
		el suelo y apenas tienes fuerzas para levantarte.\<br>\
		\<br>\
		<img src='./media/vid/suelo.gif'>\
		!Rápido, él no se\
		detiene, está alargando uno de sus brazos para cogerte, tienes que hacer algo!:\<br>\
		1. Coges tú katana y <a href='./esfuerzo'>utilizas lo aprendido</a>.\<br>\
		2. Te quedas en el suelo y <a href='rezo'>rezas a Jesusito</a> para que te salve.</p>", 
        {
			actions: {
				"esfuerzo": function (character, system, action) {
					var aux = character.qualities.skill * 0.1;				
					var rnd = Math.random();
					if (rnd < aux) {
						system.doLink("exito");
					}else{
						system.doLink("muerte");						
					}
				}
			}
        }
    ),
	
	exito: new undum.SimpleSituation(
        "<h1>El duelo</h1>\
		<p> Necesitas tranquilizarte y relajarte. Cierras los ojos y mantienes\
		una respiracion constante, aunque sabes que su brazo está a punto de cogerte.\
		Eres capaz de oler su brazo, como se acerca, y justo antes de llegar a ti\
		lo esquivas y le cortas el brazo mediante un tajo vertical.\<br>\
		\<br>\
		<img src='./media/vid/esquivo.gif'>\
		Aprovechas la ocasión y corres por encima de su brazo para llegar a su\
		cabeza. Mientras corres, el demonio no para de lanzarte ataques con su\
		otro brazo. Sigues utilizando la respiración constante y hueles cada\
		uno de sus ataques, por eso los esquivas con facilidad.\
		Tienes su cabeza a tu alcance y por fin puedes ponerle fin al combate.\
		Utilizas la técnica golpe de marea que aprendiste de tu maestro y consigues\
		cortarle la cabeza al demonio.<br>\
		\<br>\
		<img src='./media/vid/corta-cabeza.gif'>\
		Después de la ardua batalla buscas refugio y <a href='regreso'>esperas a que acabe</a>\
		la prueba.</p>",
        {
            enter: function (character, system, from) {
                /*ini.style.display.length.toFixed;
                ini.play();*/
            }
        }
    ),
	
	muerte: new undum.SimpleSituation(
        "<h1>FIN</h1>\
        <img src='./media/vid/comido.gif'>\
		<p> No aprendiste nada, por lo que no eres capaz de evitar que el\
		demonio te coja. Tiene intención de comerte y no tienes ninguna\
		posibilidad. Pides ayuda y ruegas por tu vida, aunque es en vano.\
		Has sido deborado por un demonio. FIN.</p>", 
        {
            enter: function (character, system, from) {
                /*ini.style.display.length.toFixed;
                ini.play();*/
            }
        }
    ),
	
	rezo: new undum.SimpleSituation(
        "<h1>FIN</h1>\
		<p> Cierras los ojos y te pones a rezar lo más rápido que sabes.\
		Justo te das cuenta de que el demonio ya debería haberte cogido\
		y abres los ojos para comprobar qué está pasando.<br>\
		!No puede ser! Es la piedra de la cima de la montaña Sagiri, ha\
		cobrado vida gracias a tu rezo y te está ayudando.<br>\
		\<br>\
		<img src='./media/vid/golem.gif'>\
		La piedra empieza a rodar y atropella al demonio. Con un solo\
		ataque ha conseguido exterminarlo. No puedes creer lo que estás\
		viendo, por lo que le pides explicaciones a la piedra. Va hacia\
		ti y se para justo delante de ti. Empieza a reprocharte por todas\
		las veces que le habías maltratado, y sin que tengas tiempo de\
		reacción te pega un puñetazo con su puño de piedra y te aplasta\
		el cráneo contra el suelo de una vez. Has muerto. FIN.</p>", 
    ),
	
	regreso: new undum.SimpleSituation(
        "<h1>Capitulo 3: El Regreso</h1>\
		<p> La prueba ha finalizado y has conseguido convertirte en cazador de demonios.\
		Coges el uniforme que te dan y vuelves con tu maestro y tu hermana.<br>\
		Tu maestro te dice que tu hermana lleva dormida años, pero justo cuando\
		llegas se despierta, te abraza y se vuelve a dormir.\
		Tu maestro te da la enhorabuena y te comenta que todavía hay mucho camino\
		por delante, y que ya estás preparado para marcharte de su casa.\
		Antes de marcharte te agencias una caja para poder llevar a tu hermana\
		-demonio y que no le dé el sol durante el día. Preparas tu equipaje y\
		te marchas de la casa de tu maestro mientras se despide de ti.<br>\
		\<br>\
		<img src='./media/vid/despido.gif'>\
		Tu aventura como cazador de demonios está a punto de comenzar. <a>Continuará...</a></p>",
    ),
	
	fin1: new undum.SimpleSituation(
        "<h1>FIN</h1>\
		<p> Vas a tu maestro a llorarle diciendo que no puedes con la roca.\
		Al escuchar esto, Urokodaki-senpai se enfada y empieza a golpearte\
		sin parar.\<br>\
		<br>\
		<img src='./media/vid/urokodaki.gif'>\
		Después de darte la paliza de tu vida, te expulsa a ti y a tu hermana\
		de su casa a trompadas. Medio muerto por la paliza intentas hablar con\
		tu hermana pero ella esta en un profundo sueño. Sin quererlo pero cansado\
		por los daños en tu cuerpo, te duermes en mitad del camino.\
		Te despiertas en mitad de la noche debido a un ruido. Estás rodeado por\
		una manada de lobos, liderados por un gran lobo blanco. Sin capacidad\
		de reacción se te tiran al cuello varios de ellos. Has muerto. FIN.</p>", 
    ),
	
	fin2: new undum.SimpleSituation(
        "<h1>FIN</h1>\
		<p> Vas a tu maestro a llorarle diciendo que has huido de la prueba.\
		Al escuchar esto, Urokodaki-senpai se enfada y empieza a golpearte\
		sin parar.\<br>\
		<br>\
		<img src='./media/vid/urokodaki.gif'>\
		Después de darte la paliza de tu vida, te expulsa a ti y a tu hermana\
		de su casa a trompadas. Medio muerto por la paliza intentas hablar con\
		tu hermana pero ella esta en un profundo sueño. Sin quererlo pero cansado\
		por los daños en tu cuerpo, te duermes en mitad del camino.\
		Te despiertas en mitad de la noche debido a un ruido. Estás rodeado por\
		una manada de lobos, liderados por un gran lobo blanco. Sin capacidad\
		de reacción se te tiran al cuello varios de ellos. Has muerto. FIN.</p>", 
    )
};

// ---------------------------------------------------------------------------
/* The Id of the starting situation. */
undum.game.start = "start";

// ---------------------------------------------------------------------------
/* Here we define all the qualities that our characters could
 * possess. We don't have to be exhaustive, but if we miss one out then
 * that quality will never show up in the character bar in the UI. */
undum.game.qualities = {
    skill: new undum.NumericQuality(
        "Destreza", {priority:"0001", group:'stats'}
    )/*,
    stamina: new undum.NumericQuality(
        "Stamina", {priority:"0002", group:'stats'}
    ),
    luck: new undum.FudgeAdjectivesQuality( // Fudge as in the FUDGE RPG
        "<span title='Skill, Stamina and Luck are reverently borrowed from the Fighting Fantasy series of gamebooks. The words representing Luck are from the FUDGE RPG. This tooltip is illustrating that you can use any HTML in the label for a quality (in this case a span containing a title attribute).'>Luck</span>",
        {priority:"0003", group:'stats'}
    ),

    inspiration: new undum.NonZeroIntegerQuality(
        "Inspiration", {priority:"0001", group:'progress'}
    ),
    novice: new undum.OnOffQuality(
        "Novice", {priority:"0002", group:'progress', onDisplay:"&#10003;"}
    )*/
};

// ---------------------------------------------------------------------------
/* The qualities are displayed in groups in the character bar. This
 * determines the groups, their heading (which can be null for no
 * heading) and ordering. QualityDefinitions without a group appear at
 * the end. It is an error to have a quality definition belong to a
 * non-existent group. */
undum.game.qualityGroups = {
    stats: new undum.QualityGroup('Estado', {priority:"0001"})/*,
    progress: new undum.QualityGroup('Progress', {priority:"0002"})*/
};

// ---------------------------------------------------------------------------
/* This function gets run before the game begins. It is normally used
 * to configure the character at the start of play. */
undum.game.init = function(character, system) {
    character.qualities.skill = 1;
    /*character.qualities.stamina = 12;
    character.qualities.luck = 0;
    character.qualities.novice = 1;
    character.qualities.inspiration = 0;
    system.setCharacterText("<p>You are starting on an exciting journey.</p>");*/
};
