// 06/11/2024
let USER_LANGUAGE = navigator.language.split("-")[0];
let TEXT_DATA = {
    en: {
        nav_aboutme:"Who is he?",
        nav_projects:"What does he do?",
        nav_resume:"See his resume",
        profile_subtitle: '["Software Engineer","Java Developer","Full-Stack Engineer","JavaScript Developer"]',
        button_resume: "Resume",
        button_projects: "Projects",

        aboutme_title: "About me",
        text1: "Software Engineer with 1 year of experience in software development. Proficient in JavaScript and Java, with hands-on experience in designing, developing, and maintaining projects. Skilled in writing clean, efficient, and scalable code, I have contributed to various projects, focusing on delivering reliable software solutions.",
        text2: "I am passionate about leveraging modern development tools and methodologies to create user-friendly applications. Adept at problem-solving and collaborating with cross-functional teams to achieve project goals, I am eager to continue building my expertise in software engineering and contribute to innovative projects.",
        
        project_title: "My creations",
        osteobooking: "OsteoBooking is a simple and intuitive website made in Angular 17 allowing users to book osteopathy sessions online. This application offers a user-friendly interface for managing appointments for patients.",
        statscovid: "Javascript web application focused on the evolution of Covid19 in France. It presents statistics in the form of a dashboard with maps, lists, graphs, kpi...",
        githarvest: "This project is a JavaScript-based application designed for a user management agency. The purpose is to retrieve and display users informations from GitHub\'s public API. The app fetches and shows details of 8 users at a time, including their profile picture, username, and a bio.",
        easysave: "EasySave is a file backup and encryption tool built with C#, .NET Core, and WPF. It features a user-friendly interface designed with XAML and is developed in Visual Studio. Integrated with Azure DevOps for seamless project management, EasySave ensures secure backups and encryption, with UML used for system design.",
        solidaritybond: "A simple COVID-19 humanitarian website built with PHP, Laravel, and SQL for purchasing masks securely via PayPal. Developed in Visual Studio Code, it ensures easy navigation and safe transactions.",
        flightmanagement: "FlightManagement is a software built with Java and SQL, designed using UML and developed in Eclipse. It uses MySQL databases hosted on WampServer to manage flight bookings, schedules, and customer data efficiently.",
        ogreboulotteur: "This C program is a simulation game where an Ogre boulotte children. The game logic is designed with arrays and loops, where the Ogre moves through a grid, catching children. The focus is on the simulation of movement and interactions, using basic collision detection to trigger when the Ogre catches a child."
    },
    es: {
        nav_aboutme:"¿Quién es?",
        nav_projects:"¿Qué hace?",
        nav_resume:"Ver su currículum",
        profile_subtitle: '["Ingeniero de software","Programador Java","Ingeniero Full-Stack","Programador JavaScript"]',
        button_resume: "CV",
        button_projects: "Projects",

        aboutme_title: "Sobre mí",
        text1: "Ingeniero de Software con 1 año de experiencia en desarrollo de software. Competente en JavaScript y Java, con experiencia práctica en el diseño, desarrollo y mantenimiento de proyectos. Hábil en la escritura de código limpio, eficiente y escalable, he contribuido a varios proyectos, centrándose en la entrega de soluciones de software fiables.",
        text2: "Me apasiona aprovechar las herramientas y metodologías de desarrollo modernas para crear aplicaciones fáciles de usar. Adepto a la resolución de problemas y a la colaboración con equipos multifuncionales para alcanzar los objetivos de los proyectos, estoy deseoso de seguir ampliando mis conocimientos en ingeniería de software y contribuir a proyectos innovadores.",
        
        project_title: "Mis creaciones",
        osteobooking: "OsteoBooking es una web sencilla e intuitiva realizada en Angular 17 que permite a los usuarios reservar sesiones de osteopatía online. Esta aplicación ofrece una interfaz fácil de usar para gestionar las citas de los pacientes",
        statscovid: "Aplicación web Javascript centrada en la evolución de Covid19 en Francia. Presenta estadísticas en forma de cuadro de mandos con mapas, listas, gráficos, kpi...",
        githarvest: "Este proyecto es una aplicación basada en JavaScript diseñada para una agencia de gestión de usuarios. El propósito es recuperar y mostrar información de los usuarios de la API pública de GitHub. La aplicación recupera y muestra los detalles de 8 usuarios a la vez, incluyendo su foto de perfil, nombre de usuario y una biografía",
        easysave: "EasySave es una herramienta de copia de seguridad y cifrado de archivos creada con C#, .NET Core y WPF. Presenta una interfaz fácil de usar diseñada con XAML y está desarrollada en Visual Studio. Integrado con Azure DevOps para la gestión de proyectos sin problemas, EasySave garantiza copias de seguridad y cifrado seguros, con UML utilizado para el diseño del sistema.",
        solidaritybond: "Un simple sitio web humanitario COVID-19 construido con PHP, Laravel y SQL para la compra de máscaras de forma segura a través de PayPal. Desarrollado en Visual Studio Code, garantiza una navegación sencilla y transacciones seguras",
        flightmanagement: "FlightManagement es un software construido con Java y SQL, diseñado usando UML y desarrollado en Eclipse. Utiliza bases de datos MySQL alojadas en WampServer para gestionar eficientemente las reservas de vuelos, los horarios y los datos de los clientes",
        ogreboulotteur: "Este programa en C es un juego de simulación en el que un Ogre boulotte niños. La lógica del juego está diseñada con matrices y bucles, donde el Ogre se mueve a través de una cuadrícula, atrapando niños. La atención se centra en la simulación del movimiento y las interacciones, utilizando la detección de colisiones básica para disparar cuando el Ogro atrapa a un niño."
    },
    fr: {
        nav_aboutme:"C'est qui?",
        nav_projects:"Il fait quoi?",
        nav_resume:"Son CV",
        profile_subtitle: '["Ingénieur logiciel", "Développeur Java", "Ingénieur Full-Stack", "Développeur JavaScript"]',
        button_resume: "CV",
        button_projects: "Projets",
        
        aboutme_title: "A propos de moi",
        text1: "Ingénieur logiciel avec 1 an d'expérience dans le développement de logiciels. Maîtrisant JavaScript et Java, j'ai une expérience pratique de la conception, du développement et de la maintenance de projets. Habile à écrire un code propre, efficace et évolutif, j'ai contribué à divers projets, en me concentrant sur la fourniture de solutions logicielles fiables.",
        text2: "Je suis passionné par l'utilisation de nouvelles technologies et de méthodologies de développement modernes pour créer des applications conviviales. Adepte de la résolution de problèmes et de la collaboration avec des équipes interfonctionnelles pour atteindre les objectifs d'un projet, je suis impatient de continuer à développer mon expertise en ingénierie logicielle et de contribuer à des projets innovants.",
        
        project_title: "Mes créations",
        osteobooking : "OsteoBooking est un site web simple et intuitif réalisé en Angular 17 permettant aux utilisateurs de réserver des séances d'ostéopathie en ligne. Cette application offre une interface conviviale pour la gestion des rendez-vous des patients",
        statscovid : "Application web Javascript axée sur l'évolution de Covid19 en France. Elle présente des statistiques sous forme de tableau de bord avec des cartes, des listes, des graphiques, des kpi...",
        githarvest : "Ce projet est une application basée sur JavaScript conçue pour une agence de gestion des utilisateurs. L'objectif est de récupérer et d'afficher des informations sur les utilisateurs à partir de l'API publique de GitHub. L'application récupère et affiche les détails de 8 utilisateurs à la fois, y compris leur photo de profil, leur nom d'utilisateur et leur biographie. ",
        easysave : "EasySave est un outil de sauvegarde et de cryptage de fichiers conçu en C#, .NET Core et WPF. Il présente une interface conviviale conçue avec XAML et est développé dans Visual Studio. Intégré à Azure DevOps pour une gestion de projet transparente, EasySave garantit des sauvegardes et un cryptage sécurisés, avec l'utilisation d'UML pour la conception du système. ",
        solidaritybond : "Un simple site web humanitaire COVID-19 construit avec PHP, Laravel, et SQL pour l'achat de masques en toute sécurité via PayPal. Développé en Visual Studio Code, il assure une navigation facile et des transactions sûres",
        flightmanagement : "FlightManagement est un logiciel construit avec Java et SQL, conçu à l'aide d'UML et développé dans Eclipse. Il utilise des bases de données MySQL hébergées sur WampServer pour gérer efficacement les réservations de vols, les horaires et les données des clients.",
        ogreboulotteur : "Ce programme en C est un jeu de simulation où un Ogre boulotte des enfants. La logique du jeu est conçue avec des tableaux et des boucles, où l'Ogre se déplace à travers une grille, en attrapant les enfants. L'accent est mis sur la simulation des mouvements et des interactions, en utilisant une détection de collision basique pour déclencher lorsque l'Ogre attrape un enfant."
    }
};
const TEXT_ID = {
    nav_aboutme: "#nav_aboutme",
    nav_projects: "#nav_projects",
    nav_resume: "#nav_resume",
    profile_subtitle: "#profile_subtitle",
    button_resume: "#button_resume",
    button_projects: "#button_projects",
    aboutme_title: "#aboutme_title",
    text1: "#aboutme_text1",
    text2: "#aboutme_text2",
    project_title: "#project_title",
    osteobooking: "#osteobooking",
    statscovid: "#statscovid",
    githarvest: "#githarvest",
    easysave: "#easysave",
    solidaritybond: "#solidaritybond",
    flightmanagement: "#flightmanagement",
    ogreboulotteur: "#ogreboulotteur"
};

setLanguageHash(USER_LANGUAGE);
initializeLanguageContent(TEXT_DATA);

/**
 * Sets the URL hash to the user’s preferred language, if supported.
 * If the preferred language is not supported, it defaults to English ("en").
 *
 * @param {string} userLang - The user's language preference, typically derived from the browser or user settings (e.g., 'en', 'es', 'fr').
 * 
 * This function checks if the specified `userLang` is supported by the application (e.g., 'en', 'es', 'fr').
 * - If the preferred language is supported, it updates the URL hash to that language code.
 * - If not, it defaults the URL hash to "en" to ensure a default language is always set.
 * 
 * @example
 * setLanguageHash('es'); // Sets the URL hash to "#es" if Spanish is supported
 * setLanguageHash('jp'); // Sets the URL hash to "#en" if Japanese is not supported
 */
function setLanguageHash(userLang) {
    const supportedLanguages = ["en", "es", "fr"];
    location.hash = supportedLanguages.includes(userLang) ? userLang : "en";
}

/**
 * Initializes the page content based on the current language in the URL hash.
 * 
 * @param {Object} TEXT_DATA - An object containing language-specific text data for the application.
 * 
 * This function checks if the current URL hash corresponds to a supported language and if there is text data available for that language.
 * - If both conditions are met, it calls `setTextContent` to update the page with the language-specific content.
 * 
 * @example
 * initializeLanguageContent(TEXT_DATA); // Loads content based on hash (e.g., "#en") if data exists for it
 */
function initializeLanguageContent(TEXT_DATA) {
    const userLang = location.hash.substring(1);  // Get language code from hash (e.g., 'en')
    if (window.location.hash && TEXT_DATA[userLang]) {
        setTextContent(userLang);
    }
}

/**
 * Changes the language of the page by updating the URL hash and reloading the page.
 * 
 * @param {string} lang - The language code (e.g., 'en', 'es', 'fr') representing the desired language.
 * 
 * This function modifies the `location.hash` property to set the specified language code in the URL, 
 * allowing the page to remember the selected language setting via the URL hash.
 * After setting the new hash, the function reloads the page to trigger any language-specific updates 
 * based on the new hash value.
 * 
 * This approach allows for seamless navigation between languages without requiring complex state management.
 */
function changeLanguage(lang) {
    location.hash = lang;
    location.reload();
}

/**
 * Sets the text content or attribute of various elements based on the specified language code.
 * 
 * @param {string} lang - The language code (e.g., 'en', 'es', 'fr') used to determine which language data to load from the `language` object.
 * 
 * This function iterates over the `elements` object, which contains selectors for each text element in the DOM that needs translation.
 * For each element, the function checks if the element exists in the DOM and if there is corresponding text data in the `language[lang]` object.
 * - If the `key` is 'profile_subtitle', it updates the element's `data-rotate` attribute to the language-specific value.
 * - Otherwise, it sets the element’s `textContent` to the corresponding value in the `language[lang]` object.
 * 
 * @example
 * // Assuming the `language` object has content in English ('en') and Spanish ('es'):
 * setTextContent('en'); // Updates page elements to English content
 * setTextContent('es'); // Updates page elements to Spanish content
 */
function setTextContent(lang) {
    if (window.location.hash && TEXT_DATA[lang]) {
        for (let key in TEXT_ID) {
            const selector = document.querySelector(TEXT_ID[key]);

            if (selector && TEXT_DATA[lang][key] !== undefined) {
                if (key === 'profile_subtitle') {
                    selector.setAttribute("data-rotate", TEXT_DATA[lang][key]);
                } else {
                    selector.textContent = TEXT_DATA[lang][key];
                }
            }
        }
    }
}
