import logoReservia from "../assets/projects/reservia/Reservia.svg";
import reservia from "../assets/projects/reservia/reservia.png";
import reservia2 from "../assets/projects/reservia/reservia2.png";

import logoOhmyfood from "../assets/projects/ohmyfood/logoOhmyfood.png";
import ohmyfood from "../assets/projects/ohmyfood/ohmyfood.png";
import ohmyfood2 from "../assets/projects/ohmyfood/ohmyfood2.png";
import ohmyfood3 from "../assets/projects/ohmyfood/ohmyfood3.png";
import animation from "../assets/projects/ohmyfood/animation.webm";

import logoGameOn from "../assets/projects/gameOn/logoGameOn.png";
import GameOn from "../assets/projects/gameOn/gameOn.png";
import GameOn2 from "../assets/projects/gameOn/gameOn2.png";

import logoFishEye from "../assets/projects/FishEye/logoFishEye.png";
import FishEye from "../assets/projects/FishEye/fishEye.png";
import FishEye2 from "../assets/projects/FishEye/fishEye2.png";
import FishEye3 from "../assets/projects/FishEye/fishEye3.png";
import FishEye4 from "../assets/projects/FishEye/fishEye4.png";

import logoPlats from "../assets/projects/petitPlats/logoPlats.png";
import plats from "../assets/projects/petitPlats/plats.png";
import plats2 from "../assets/projects/petitPlats/plats2.png";
import plats3 from "../assets/projects/petitPlats/plats3.png";

import logoBilled from "../assets/projects/billed/logoBilled.png";
import billed from "../assets/projects/billed/billed.png";
import billed2 from "../assets/projects/billed/billed2.png";
import billed3 from "../assets/projects/billed/billed3.png";
import billed4 from "../assets/projects/billed/billed4.png";
import billed5 from "../assets/projects/billed/billed5.png";

import logolearnAtHome from "../assets/projects/learnAtHome/logolearnAtHome.png";
import learnAtHome from "../assets/projects/learnAtHome/learnAtHome.png";
import learnAtHome2 from "../assets/projects/learnAtHome/learnAtHome2.png";
import learnAtHome3 from "../assets/projects/learnAtHome/learnAtHome3.png";
import learnAtHome4 from "../assets/projects/learnAtHome/learnAtHome4.png";
import learnAtHome5 from "../assets/projects/learnAtHome/learnAtHome5.png";
import learnAtHome6 from "../assets/projects/learnAtHome/learnAtHome6.png";

import logoKasa from "../assets/projects/kasa/logoKasa.png";
import kasa from "../assets/projects/kasa/kasa.png";
import kasa2 from "../assets/projects/kasa/kasa2.png";
import kasa3 from "../assets/projects/kasa/kasa3.png";

import logoSportsee from "../assets/projects/sportSee/logoSportsee.png";
import sportSee from "../assets/projects/sportSee/sportSee.png";
import sportSee2 from "../assets/projects/sportSee/sportSee2.png";
import sportSee3 from "../assets/projects/sportSee/sportSee3.png";

import logoArgentBank from "../assets/projects/argentBank/logoArgentBank.png";
import argentBank from "../assets/projects/argentBank/argentBank.png";
import argentBank2 from "../assets/projects/argentBank/argentBank2.png";
import argentBank3 from "../assets/projects/argentBank/argentBank3.png";
import argentBank4 from "../assets/projects/argentBank/argentBank4.png";

import logoCompany from "../assets/projects/Hrnet/logoCompany.png";
import hrnet from "../assets/projects/Hrnet/hrnet.png";
import hrnet2 from "../assets/projects/Hrnet/hrnet2.png";
import hrnet3 from "../assets/projects/Hrnet/hrnet3.png";
import hrnet4 from "../assets/projects/Hrnet/hrnet4.png";

import logoCLG from "../assets/projects/coverLetter/logoCLG.png";
import coverLetter1 from "../assets/projects/coverLetter/coverLetter1.png";
import coverLetter2 from "../assets/projects/coverLetter/coverLetter2.png";
import coverLetter3 from "../assets/projects/coverLetter/coverLetter3.png";
import coverLetter4 from "../assets/projects/coverLetter/coverLetter4.png";
import coverLetter5 from "../assets/projects/coverLetter/coverLetter5.png";
import coverLetter6 from "../assets/projects/coverLetter/coverLetter6.png";
import coverLetter7 from "../assets/projects/coverLetter/coverLetter7.png";
import coverLetter8 from "../assets/projects/coverLetter/coverLetter8.png";

export const projects = [
	{
		id: 1,
		title: "Résérvia",
		description: "Créer un site web d'une agence de voyage.",
		illustrations: [logoReservia, reservia, reservia2],
		article: `Pour ce premier projet, nous devions créer une page HTML statique pour une agence de voyage, Résérvia. Pour sauvegarder et pouvoir récupérer d'éventuelles versions, j'ai dû prendre en main Github ainsi que les commandes basiques de git pour versionner mon code (image 2 et 3). Pour la maquette, il est important de prendre le temps de l'analyser afin de localiser les différentes zones pour faire les bons choix de balises HTML. Le HTML va représenter le squelette de notre site. Cependant, il y a des conventions à respecter (les normes W3C), qui vont nous permettre de s'assurer d'avoir de bonnes pratiques et pouvoir améliorer le référencement de notre site. L'orque nous utilisons des balises sémantiques HTML, le navigateur va les traduire pour l'afficher sur notre écran. Par conséquent, si nous utilisons une balise header, alors le navigateur comprendra qu'il s'agit d'un en-tête de page. Pour obtenir un meilleur référencement sur les moteurs de recherche, il est donc important d'apporter une importance particulière à la sémantique. Pour ajouter du style à la page, nous devions utiliser le CSS. Le CSS va nous permettre d'ajouter des couches de styles (couleurs, positionnements animations, etc... ). Le CSS possède des bon outils pour la gestion des positions des éléments dans leurs conteneurs. Il y a flexbox ou encore CSS grid et ces outils vont nous faciliter la tâche. Auparavant, on utilisait souvent les positions relatives et absolues. Dans la majorité des cas, j'ai privilégié flex-box. Il faut comprendre que le placement des éléments dans un conteneur selon un axe principal et secondaire et de rendre les conteneurs flexibles et nous aide fortement pour le responsiv design. Le responsiv design va nous permettre d'adapter nos sites web ou applications en fonction de la taille d'écran de nos utilisateurs. En CSS, il existe les medias queries, qui vont nous permettre d'appliquer les règles CSS uniquement en fonctions de la taille de l'écran.`,
		skillWorked: ["HTML", "CSS", "Git"],
		github: "https://github.com/Chris5477/Petitcolaschristopher_2_15-03-2021",
	},
	{
		id: 2,
		title: "Oh my food",
		description: "Créer un site web mobile-fisrt pour une start-up qui souhaite s'imposer dans la restauration.",
		illustrations: [logoOhmyfood, ohmyfood, ohmyfood2, ohmyfood3, animation],
		article:
			"Oh my food est un site web mobile-first, qui permet aux utilisateurs de pouvoir accéder au menu d'un restaurant et d'avoir la possibilité de commander rapidement (image suivante). Pour remplir à bien cette mission, je disposai d'un cahier des charges avec les critères pour respecter la maquette, comme les couleurs ou la police à utiliser. Nous avons aussi le choix d'utiliser Sass. Sass est un pré-processeur qui va nous offrir des fonctionnalités supplémentaires pour compiler des fichiers .scss ou .sass et ainsi les compiler en CSS. Dans un premier temps, il est important de respecter le 'don't repeat yourself', moins on se répète, plus le code sera léger, lisible et rend le code plus maintenable. L'avantage de Sass est de nous permettre de stocker des valeurs dans des variables. On peut mettre des couleurs par exemple, ce qui nous facilite la tâche si on décide de changer la couleur plus tard. Il y a aussi les mixins pour pouvoir créer des snippets de code pour gagner en productivité. Il reste encore beaucoup d'avantages de ce langage et je vous invite à vous rendre sur la documentation de Sass (image 3 et 4). Comme dans le premier projet , j'ai d'abord défini les différents éléments de la maquette et placer chacun d'entre eux avec flexbox. Le site étant mobile-first , j'ai donc commencé à coder avec une condition de taille d'écran. C'était aussi l'occasion de pouvoir s'exercer sur la navigation HTML. En cliquant sur un restaurant, on change de page pour se rendre sur le menu que propose ce dernier. Il était demandé d'ajouter des animations CSS comme un petit effet de fondu pour l'arrivée des différents plats ou encore de manipuler des pseudos-class comme :checked pour lancer une animation quand lorsque l'on sélectionne un plat(image suivante). Pour conclure, nous devions créer un spinner pour lancer une animation dès qu'un utilisateur lance l'application. Pour cela, l'animation devait être performante et fluide. Grâce à l'onglet performance de la console, il est possible de capturer les animations pour les analyser. On peut voir la fluidité de notre animation , comme le frame rate, dans l'idéal une animation qui fait 60 images par seconde est recommandée. Nous pouvons voir également le calcul de layout ou encore de painting qui sont coûteux en ressources. En règle générale, la propriété transform est idéale pour bouger les éléments et opacity pour réduire le painting",
		skillWorked: ["HTML", "CSS", "Sass", "Animation CSS", "Git"],
		github: "https://github.com/Chris5477/PetitcolasChristopher_3_07-04-2021",
	},
	{
		id: 3,
		title: "Game on",
		description: "Créer une landing page avec Javascript.",
		illustrations: [logoGameOn, GameOn, GameOn2],
		article:
			"Le but de ce projet était de revoir le formulaire afin de corriger les nombreux bugs présents et d'ajouter une validation des données pour s'assurer que tout se passe correctement. Un système d'issue sur Github nous permet de nous indiquer les différentes tâches à effectuer pour accomplir cette mission (image suivante). Dans un premier temps, nous devions forker un dossier existant sur github, afin de pouvoir travailler sur une copie du dossier. Puis, j'ai dû travailler le HTML et le CSS afin de corriger les erreurs du côté HTML pour respecter les normes W3C et de relire le CSS pour retirer le code non utilisé pour améliorer les performances. Cette étape était importante, car cela nous apprend à lire du code écrit d'une manière différente que le nôtre. Nous serons toujours confrontés à cet exercice quand on intègre une entreprise (image suivante). Pour la partie formulaire, nous devions reprendre un script existant afin d'ajouter une validation formulaire. Pour réussir cette validation, j'ai appris à manipuler le DOM pour pouvoir cibler les éléments HTML. Créer et convertir des fonctions en ES6, via des fonctions fléchées ou encore utiliser les structures conditionnelles, avec l'aide des regex.  Les regex ou encore expression régulière, est un code interprétable par la majorité des langages de programmation afin de pouvoir agir en fonction de celle-ci, pour vérifier par exemple, si tout les champs du formulaire sont remplis afin d'envoyer les données. ",
		skillWorked: ["HTML", "CSS", "Javascript", "Regex", "Git"],
		github: "https://github.com/Chris5477/GameOn-website-FR",
	},
	{
		id: 4,
		title: "FishEye",
		description:
			"FishEye est un site web qui permet aux photographes indépendants de présenter leurs meilleurs travaux.",
		illustrations: [logoFishEye, FishEye, FishEye2, FishEye3, FishEye4],
		article:
			"Dans ce projet, je devais apprendre des notions d'accessibilité pour rendre mon site utilisable au clavier ou encore lisible par les lecteurs d'écran. Ce qui nous oblige à réfléchir sur l'utilisation du site. Par exemple, il faut penser à respecter les contrastes entre la couleur du texte et son fond, ou encore apporter une attention importante au respect des normes W3C et des balises sémantique HTML pour que le navigateur puisse comprendre le rôle de chaque élément et ainsi rendre notre site interprétable par les lecteurs d'écran. Il faut aussi essayer de garder une certaine cohérence de la structure du site pour éviter de demander des efforts aux utilisateurs ayant des problèmes de concentration, ou encore de penser aux personnes étant touchées par des handicaps affectant leur motricité. Pour ce cas-là, il est préférable de créer des grandes zones cliquable par exemple pour rendre la rendre plus accessible (image suivante). Pour la page d'accueil , il était demandé de voir tous les photographes ainsi que leurs informations et de pouvoir accéder à leurs travaux en cliquant sur dessus. Il y avait également un système de filtrage des photographes avec des tags pour pouvoir afficher uniquement les photographes qui nous intéresse. Pour parvenir a afficher les photographes, nous avions à disposition, un fichier JSON pour récupérer les données de chacun d'entre eux (image 3 et 4). Voici la page d'un des photographes, nous pouvons y voir des informations sur lui, et la possibilité de pouvoir le contacter via un formulaire. Puis la partie des travaux. Un système de like est présent. Les travaux peuvent être des images ou encore des vidéos. Pour les vidéos, il y a un système de sous-titre qui permet de décrire les vidéos pour les mal-entendant et d'augmenter les fonctionnalités d'accessibilité (image suivante). Quand on clique sur un média, un lightbox est affiché pour pourvoir naviguer avec la souris en cliquant sur les boutons, ou encore le clavier pour les utilisateurs ayant des problèmes de motricité. Le site à également une version mobile, avec une mise en page différente. ",
		skillWorked: ["HTML", "CSS", "JSON", "Javascript"],
		github: "https://github.com/Chris5477/PetitcolasChristopher_6_19-05-2021",
	},
	{
		id: 5,
		title: "Les petits plats",
		description: "Comprendre et créer un algorithme de recherche.",
		illustrations: [logoPlats, plats, plats2, plats3],
		article:
			"L'objectif de ce projet est de travailler sur deux algorithmes différents pour faire la même tâche afin de comparer lequel des deux est le plus performant (image suivante). Pour cela, j'ai créé un algorithme antérieur à l'ES6 et l'autre utilisant les améliorations ES6. Il s'avère que l'ES6 apporte de meilleure performance (image suivante). Pour les algorithmes, nous avons deux façons de faire une recherche, le premier avec le champ principal qui va filtrer toutes les recettes restante et afficher les recettes qui correspondent au mot saisi par l'utilisateur, ou par le biais des inputs secondaires pour rechercher par ingrédients ou appareils, Lors du remplisage d'un input secondaire, dans ce cas, ingrédients. Alors une liste d'ingrédients s'affiche, en fonction du mot saisi par l'utilisateur, des ingrédients présent dans le fichier JSON contenant l'intégralité des recettes(image suivante). Quand l'utilisateur clique sur l'élément souhaité dans la liste, cela affiche un tag et affiche uniquement les recettes contenant l'ingrédient sélectionné, si nous ajoutons un élément dans le champ principal, un autre filtrage s'effectue",

		skillWorked: ["HTML", "CSS", "Javascript", "JSON"],
		github: "https://github.com/Chris5477/PetitcolasChristopher-7-14-06-2021",
	},
	{
		id: 6,
		title: "Billed",
		description: "Tester un système SaaS avec Jest.",
		illustrations: [logoBilled, billed2, billed, billed3, billed4, billed5],
		article:
			"Billed est une application SasS à une entreprise de pouvoir gérer les notes de frais des employés. Il y a un espace pour les employés pour qu'ils puissent rédiger leurs notes de frais et une partie RH pour les consulter, les accepter ou les refuser(image suivante). Si un employé se connecte avec ses identifiants, il sera redirigé sur son compte et va pouvoir visualiser l'ensemble de ses notes de frais (image suivante). Il peut également en crée une avec le bouton dédié (image suivante). Voici la partie RH, ou l'ensemble des notes de frais envoyés par les employés de l'entreprise est consultable. Il est possible de consulter chaque note de frais et d'agir en fonction de la pertinence de chacune d'entre elles. Comme j'ai pu le préciser précédemment, le but de ce projet était d'intégrer des tests avec le runner de test Jest (image suivante). Le but des tests est d'automatiser les vérifications du code et s'assurer que tout fonctionne ou non, et si des tests ne passent pas, alors sans chercher, nous savons où se trouve le problème et quel bloc de code pose problème. De manière générale, lorsqu'on rédige un test on s'assure de sa pertinence, en essayant un cas qui doit marcher et un qui doit échouer. Jest permet aussi de savoir le taux de couverture des tests, le coverage montre le pourcentage global d'un fichier testé . Le nombre de tests est également indiqué un peu plus bas. Pour tester un fichier, nous pouvons cibler une partie à tester, ce que l'on appelle un test unitaire. Ou alors de réaliser des tests d'intégration, en simulant des actions utilisateurs comme le clique sur un bouton ou encore le remplissage d'un champs de formulaire.",

		skillWorked: ["Javascript", "Jest"],
		github: "https://github.com/Chris5477/Billed-app-FR",
	},
	{
		id: 7,
		title: "Learn at home",
		description: "Définir les besoins pour une app de soutien scolaire.",
		illustrations: [logolearnAtHome, learnAtHome5, learnAtHome6, learnAtHome3, learnAtHome, learnAtHome2, learnAtHome4],
		article:
			"Le but de ce projet est de nous donner le rôle de lead développeur sur un projet utilisant les méthodes agiles et définir les besoins du projet. En règle générale, lors d'un entretien avec le client, on fait en sorte de poser un maximum de questions afin d'être sûr de comprendre les besoins de celui-ci, et les questions doivent aussi s'orienter sur les utilisateurs potentiels du client. Il important d'imager chaque besoin ou fonctionnalité afin d'être sûr que les tâches soient bien comprises par les équipiers (image suivante). Il y a les personnas, qui permettent de mettre un visage et de décrire chaque type d'utilisateurs et d'inventer une petite histoire qui résume l'utilité de l'application pour chacun d'entre eux (image suivante). Nous avons aussi le story-boards pour rendre concret l'objectif du projet. Pas besoin d'être un grand dessinateur, il faut juste que la BD soit compréhensible. Généralement fait sous forme de BD. Il y a aussi les users stories, souvent associés a des outils comme kanban ou Trello (image 5). Elles permettent, par le biais d'une simple phrase courte et claire, de comprendre le but d'une fonctionnalité. Par exemple, pour ajouter une tâche sur un calendrier, la user Story donnerait en tant qu'utilisateur, j'aimerais pouvoir ajouter un rendez-vous sur un calendrier pour ne pas l'oublier (image 3 et 4). Il y aussi Figma. Figma est un outil qui va nous permettre de créer des maquettes. Ce qui est pratique pour obtenir un visuel sur des esquisses. Nous pouvons même créer des composants réutilisables pour dupliquer des éléments facilement, offrant ainsi un confort d'utilisation. Cet outil offre la possibilité de pouvoir afficher les règles CSS comme les couleurs, la police utilisée ainsi que la taille de celle-ci. Il est même possible de les copier pour gagner du temps (image suivante). Dernier outil du projet, le diagramme ULM. Ce diagramme permet de schématiser les fonctionnalités ainsi que les acteurs de celles-ci. Nous pouvons voir les acteurs qui sont situés aux extrémités du diagramme. Nous pouvons voir au milieu un rectangle aux bords noir. À l'intérieur, on y place le système avec chaque fonctionnalité et ce qui résulte de celles-ci.",

		skillWorked: ["Méthodologie agile", "Figma", "Personna", "user story", "Diagramme ULM", "Trello"],
		github: "Aucun repository github.",
	},
	{
		id: 8,
		title: "Kasa",
		description: "Créer un site web d'une agence de voyage.",
		illustrations: [logoKasa, kasa, kasa2, kasa3],
		article:
			"Kasa est une application qui permet à des particuliers de mettre en location leur bien immobilier. Pour chaque annonce, on peut voir les photos, la location, les atouts, la description ou encore le propriétaire ainsi que la note du bien. Pour le développement de ce projet (image suivante), j'ai utilisé React, avec des composants de type class. Contrairement aux sites classiques. Lors de la requête au serveur, React demande lui demande de récupérer l'intégralité de l'application. Cela permet de bénéficier d'une application SPA (single-page), c'est-à-dire qu'il n'y a aucun rechargement de page quand on clique sur des liens. Pour gérer cette navigation, on fait appel aux routers pour créer des routes et assurer le redirection de l'utilisateur sur les bonnes pages (image suivante). React fonctionne sur un système de composant réutilisable écrit avec un format spécial, le JSX. Le JSX est un parfait mélange entre du HTML et du Javascript. Pour faire simple un composant s'écrit comme une balise HTML dans laquelle nous pouvons placer des props, Les props sont similaires à des paramètres dans des fonctions pour pouvoir reutiliser des composants dans d'autres circonstances. Si nous avons besoin de logique dans notre composant, on peut injecter du JavaScript qui est mi entre accolades. Les composants ont un cycle de vie qui se compose de trois phases. La phase de montage, React s'occupe de créer un DOM virtuel. Il va d'abord lire l'état local des composants (les données qui sont propres au composant) et la structure du composant avant de rendre le DOM et d'afficher les composants. La phase de mise à jour. Quand l'état local change, dans cette condition cela va relancer la phase de montage en prenant compte des données qui ont changées. Puis la phase de démontage. Cette phase supprime tout simplement un composant s'il n'est plus présent dans le DOM libérant ainsi de la mémoire. Grace au router, nous pouvons naviguer à l'intérieur de notre application. En effet, au moment du clique sur le lien, la page s'est directement affichée. Nous pouvons afficher toutes les informations relatives à une annonce immobilière. Toutes ces données sont contenues dans un fichier JSON (image suivante). Pour récupérer les annonces d'une annonce particulière, nous plaçons dans la route, un paramètre id qui nous vérifions au moment du chargement de la page (image suivante). Ici, je vais évoquer la gestion d'état local et d'événement pour la page à propos. Pour les événements, on injecte directement les événements dans les éléments HTML. Pour déterminer si on affiche la totalité du bloc. On peut initialiser un state avec un boolean (false). Puis afficher le texte supplémentaire si cette valeur passe à true. Dans la fonction, on utilise la méthode setState pour modifier la valeur de notre booleen et ainsi forcer le composant à se recharger et d'afficher le texte.",
		skillWorked: ["React", "JSX", "Cycle de vie"],
		github: "https://github.com/Chris5477/Petitcolaschristopher_11_20-09-2021",
	},
	{
		id: 9,
		title: "Sportsee",
		description: "Développez un tableau de bord d'analytics avec React.",
		objectif: "Créer une nouvelle version de la page de profil et assurer un suivi des séances sportive",
		illustrations: [logoSportsee, sportSee, sportSee2, sportSee3],
		article:
			"SportSee est une application web qui va permettre aux utilisateurs de pouvoir bénéficier d'un suivi de leur activité sportive. Dans les projets précédents, j'ai été confronté à un problème. Le passage de données avec les props. Un des problèmes avec le système de composant et que nous devons faire en sorte d'essayer de placer les données dans le composant le plus haut afin de rendre les données disponibles dans l'ensemble de l'application. Mais cette pratique impose de placer ces données en tant que props et de faire ça jusqu'au composant souhaité, on appelle ça le Prop Drilling. C'est là qu'intervient le state manager Redux (image suivante). Redux va nous permettre de rendre les données disponibles dans l'ensemble de l'application grâce à un store. Plus besoin de placer les données dans le composant le plus haut et de faire du Prop Drilling. Le système du store va nous permettre de stocker les données et de pouvoir agir dessus. En effet, on a besoin d'action et de reducer pour créer un store. Les actions sont généralement créées dans des fonctions. Ces fonctions retournent des objets avec un type qui contient une chaîne de caractère expliquant le but de l'action (INCREMENT par exemple). Puis nous devons avoir un reducer qui va prendre 2 paramètres, un state initial et notre fameuse action. Le contenu du reducer va tout simplement vérifier quel type d'action est utilisé et appliqué la modification du state. Enfin, on utilise ce store pour créer notre store, qui viendra englober notre application via un provider qui aura le store comme valeur. Nous avons plusieurs méthodes pour récupérer notre state et celle que j'ai utilisé est useSelector. Cette méthode récupère l'état local et le rend utilisable dans le composant. Dans ce cas d'utilisation, j'ai utilisé Redux pour gérer les appels API. Mon store va donc contenir les données que j'ai besoin (image suivante). Sachant qu'un appel API est une promesse et va mettre un certain temps pour se résoudre. Sur l'image, j'ai fait un loader, qui va s'afficher tant que nous n'avons pas obtenu les données (image suivante). Une fois les données récupérées, nous les affichons pour l'utilisateur. L'utilisateur dispose également de graphiques pour visualiser rapidement son évolution sportive. La libraire Recharts m'a permis de générer ses graphiques. La documentation de Recharts est plutôt bien écrite et m'a permis de créer les graphiques assez simplement (image suivante). Pour terminer, j'ai également utilisé les propTypes pour sécuriser les props et être sûr d'avoir le bon type de valeur retourné. Enfin, afin de rendre mon travail compréhensible par d'autres, j'ai dû apprendre à réaliser une documentation. J'ai utilisé le markdown dans le fichier Readme pour expliquer comment installer et utiliser l'application. Des exemples sont présents pour être le plus complet. J'ai également utilisé la JS Doc avec des cartouches ou commentaires dans mon code.",
		skillWorked: ["React", "JSX", "Hook", "Redux", "Recharts", "PropTypes", "Markdown"],
		github: "https://github.com/Chris5477/PetitcolasChristopher_12_11-10-2021",
	},
	{
		id: 10,
		title: "ArgentBank",
		description: "Créer une appication banciare avec une API.",
		illustrations: [logoArgentBank, argentBank, argentBank2, argentBank3, argentBank4],
		article:
			"Argent Bank est un nouvel acteur qui essaye de s'imposer dans le secteur bancaire. Pour la réalisation de ce projet, L'équipe back-end a travaillé sur une API qui est mise à notre disposition. Nous devions installer MongoDB pour collecter une banque de données et de pouvoir les manipuler (image suivante). Nous avons la page d'accueil, elle ne possède pas grand-chose ormis un menu de navigation dynamique, c'est-à-dire qui s'adapte si l'utilisateur à une session de connection active. Autrefois pour gérer les sessions utilisateurs on utiliser les cookies. Les tokens (jeton d'authentification) remplacent petit à petit les cookies, car il libère de la mémoire sur les serveurs. Quand l'utilisateur s'authentifie, les serveurs lui retourne un token qui va lui servir d'autorisation pour faire des requêtes comme modifier son nom par exemple (image suivante). Nous avons ici le formulaire qui va s'occuper de vérifier l'email saisit est présente dans notre base de données. Si c'est le cas on vérifie le password associé. Si tout est validé, alors le serveur nous retourne une jeton token pour authentifier l'utilisateur et le retourne sur son compte. Les authentifications sont réalises avec des opérations basiques appartenant aux API (CRUD), les méthodes POST et GET. Sachant que l'API n'est pas de la même origine que l'application. Il a fallu également gérer les problèmes de CORS pour que les requêtes soit acceptées. Une fois l'authentification terminée, l'utilisateur est redirigé sur son compte (image suivante). Cette page affiche les données relatives à l'utilisateur et un bouton pour modifier ses informations de compte. Nous pouvons voir que le header prend en compte la session utilisateur, le token est placer dans le localStorage et n'a donc plus besoin de se loguer tant que le token est présent dans le local storage, le token est supprimé que si l'utilisateur se déconnecte avec le bouton dédié (image suivante). Si l'utilisateur clique sur le bouton, alors il aura la possibilité de pouvoir changer ses informations de comptes, comme son nom ou prénom et modifié directement la base de données pour conserver ces changements. La méthode API utilisée est PUT.",
		skillWorked: ["React", "Redux", "MongoDB", "API", "CRUD", "Markdown"],
		github: "https://github.com/Chris5477/argent-bank",
	},
	{
		id: 11,
		title: "HRnet",
		description: "HRNET permet à une entreprise de pouvoir recenser tout ses employés",
		illustrations: [logoCompany, hrnet, hrnet4, hrnet2, hrnet3],
		article:
			"HRNET est une application qui permet à une application de pouvoir lister ses employés. Le code initial de l'application est en Jquery et retourne des problèmes de performances et les utilisateurs remontent beaucoup de bugs. Le but de ce dernier projet est donc de convertir le code existant en React. Nous devions coder les différentes pages de l'application en React ainsi que les plugins Jquery (image suivante). Pour les pages, j'ai utilisé des composants de type fonctions avec l'aide de Redux pour gérer les données au sein de l'application (image suivante). J'ai également utilisé Redux-persist pour pouvoir stocker les données dans le local storage. Une particularité exigée, la création d'un package NPM de l'un de ces plugins Jquery et de l'installer en tant que dépendance au sein du projet. J'ai décidé de faire le menu déroulant pour le package. C'est un élément HTML select classique avec des options. Pour publier sur NPM, il suffit de se créer un compte sur NPM. de s'authentifier, de pousser le travail et d'ajouter la version du package. Chaque étape est bien décrite. Il reste plus qu'a installer le package avec npm install dans notre projet (image suivante). Il y avait le plugin d'une fenêtre modale. Pour ce faire avec React, il suffit de créer un portal qui va nous ermettre de sortir de notre conteneur HTML pour cibler son body. L'intérêt de faire un portal est pouvoir positionner de manière absolue notre fenetre modale en fonction des dimensions du body et s'arrurer qu'elle s'affiche correctement. En effet, si notre composant App, qui contient toute notre application, prend la moitié de la fenetre du navigateur. Alors notre modal se basera sur ces dimensions (image suivante). Dernier plugin demandé, un calendrier pour sélectionner des dates sur les inputs concernés Quand je focus l'un de ces inputs, un calendrier va s'afficher. J'ai créé un composant dans lequel j'utilise l'Objet Date pour manipuler les dates. Quand toutes les données du formulaire sont remplies, la modale nous informe que l'employé est bien créer. Enfin pour finir, Nous devons créer des tests d'intégrations et unitaires (image suivante). Sur la deuxième page, nous récupérons la liste de tous les employés. Je récupère les données grâce au store de Redux pour pouvoir les manipuler. Sur cette page, il est possible de faire une recherche pour trouver un nom ou département. Il est possible de trier les données en cliquant sur ce qu'on veut trier ou encore de pouvoir afficher le nombre d'employés à afficher. Une pagination est également présente en fonction du nombre d'employés.",
		skillWorked: ["React", "NPM", "Redux"],
		github: "https://github.com/Chris5477/HRnet",
	},
	{
		id: 12,
		title: "Cover letter generator",
		description: "Créer des lettres de motivation rapidement ",
		illustrations: [logoCLG, coverLetter1, coverLetter2, coverLetter3, coverLetter4, coverLetter5, coverLetter6, coverLetter7, coverLetter8],
		article: `Le but de ce projet est de créer des lettres de motivation rapidement et adaptées aux annonces. J'ai décidé de me lancer dans ce projet pour me faire gagner du temps et de pouvoir aider les personnes en recherche d'emploi sur Linkedin. J'ai eu la volonté d'en savoir plus sur la partie back-end avec Node alors j'ai créé une partie Back-end et une base de données avec MongoDb pour créer des comptes utilisateurs. Nous pouvons créer un compte afin de pouvoir conserver les données (page2). Nous pouvons voir sur Robot 3T que la donnée est bien pousser vers notre base de données. Les mots de passe sont hashés pour la sécurité (page 3). Une fois authentifié, nous pouvons ajouter une nouvelle carte via un formulaire et définir son type. Un code couleur lui sera alors donnée et elle sera rangé dans un espace pour gagner du temps pour la conception de la lettre de motivation (image 4). Il est possible de visualiser le contenu de la carte en la survolant (image 5). Lors du clique, on rempli la lettre du contenu de la carte (image 6). Nous avons la possibilité de modifier la lettre comme mettre des sauts de ligne ou encore copié son contenu via un bouton copier (image 7). Notre lettre de motivation est créée en quelques secondes et est donc prête à être envoyée. Il est possible de se déconnecter en supprimant le token reçu par le serveur pour ne plus être authentifié en allant sur l'application. Enfin, pour finir, il est également possible de supprimer son compte (image 8). Chaque action comme ajouter une donnée ou encore supprimer son compte doit être authentifié par token pour assurer la sécurité des requêtes.`,
		skillWorked: ["React", "Redux", "Node", "MongoDB", "Express"],
		github: "https://github.com/Chris5477/cover-letter",
	},
];
