// 02/10/2024
const projects = [
  {
    link: 'http://florine.benard.osteo.free.fr',
    title: 'OsteoBooking',
    description:'OsteoBooking is a simple and intuitive web application made in Angular17 allowing users to book osteopathy sessions online. This application offers a user-friendly interface for managing appointments for patients.',
    date: 'May 2024',
    image: 'assets/OsteoBooking.png',
    color: 'green',
    githubLink: 'https://github.com/BenardKevin/OsteoBooking',
    tag_text: ['Website', 'Angular 17', 'Typescript', 'Bootstrap'],
  },
  {
    link: 'https://www.linkedin.com/posts/kbenard_mysql-tomcat-restsql-activity-6666987982819516416-02DL',
    title: 'StatsCOVID',
    description:'Javascript web application focused on the evolution of Covid19 in France. It presents statistics in the form of a dashboard with maps, lists, graphs, kpi...',
    date: 'April 2020',
    image: 'assets/StatsCOVID.jpg',
    color: 'red',
    githubLink: 'https://github.com/BenardKevin/StatsCovid',
    tag_text: ['Webapp', 'Tomcat', 'JavaScript', 'SVG', 'JSON', 'HTML/CSS', 'MySQL', 'RestSQL'],
  },
  {
    link: 'https://github.com/BenardKevin/Ogre_Boulotteur',
    title: 'Ogre Boulotteur',
    description:'This C program is a non-playable game concept where an Ogre "boulotte" children. The game logic is designed with arrays and loops, where the Ogre moves through a grid, "catching" children placed randomly. The focus is on the simulation of movement and interactions, using basic collision detection to trigger when the Ogre catches a child.',
    date: 'Oct. 2018',
    image: 'assets/Ogre_Boulotteur.png',
    color: 'blue',
    githubLink: 'https://github.com/BenardKevin/OgreBoulotteur',
    tag_text: ['Game', 'C'],
  },
  {
    link: 'https://benardkevin.github.io/GitHarvest/',
    title: 'GitHarvest',
    description:'This project is a JavaScript-based application designed for a user management agency. The purpose is to retrieve and display users informations from GitHub\'s public API. The app fetches and shows details of 8 users at a time, including their profile picture, username, and a description (bio).',
    date: 'Oct. 2024',
    image: 'assets/GitHarvest.png',
    color: 'red',
    githubLink: 'https://github.com/BenardKevin/GitHarvest',
    tag_text: ['Webapp', 'JavaScript', 'API'],
  },
  {
    link: 'https://benardkevin.github.io/Accounting-Console',
    title: 'Accounting Console',
    description:'A JavaScript webtool that allows users to perform basic arithmetic operations such as addition, subtraction, multiplication, and division. It typically consists of an HTML structure for the user interface, CSS for styling, and JavaScript to handle the logic and functionality.',
    date: 'Sept. 2024',
    image: 'assets/Accounting-Console.png',
    color: 'yellow',
    githubLink: 'https://github.com/BenardKevin/Accounting-Console',
    tag_text: ['Webtool', 'JavaScript'],
  },
  {
    link: 'https://benardkevin.github.io/Model-based-website/',
    title: 'Model-based website',
    description:'This simple static web page, crafted using HTML and CSS only, showcases a clean and professional design. It features a structured layout with a header, navigation bar, main content area, and footer, all styled to create a cohesive and visually appealing user experience.',
    date: 'Sept. 2024',
    image: 'assets/future_imperfect.png',
    color: 'blue',
    githubLink: 'https://github.com/BenardKevin/Model-based-website',
    tag_text: ['Website', 'HTML', 'CSS'],
  },
  {
    link: 'https://github.com/BenardKevin/CryptoSoft',
    title: 'Data backup software',
    description:'File backup and encryption.',
    date: '11/2020 - 12/2020',
    image: 'assets/EasySave.png',
    color: 'red',
    githubLink: 'https://github.com/BenardKevin/CryptoSoft',
    tag_text: ['C#', 'UML', 'XAML', '.NET Core', 'WPF', 'Visual Studio', 'Azure DevOps'],
  },
  {
    link: 'https://github.com/BenardKevin/SolidarityBond',
    title: 'SolidarityBond',
    description:'Covid-19 humanitarian PHP website for mask purchases via Paypal.',
    date: '06/2020 - 07/2020',
    image: 'assets/future_imperfect.png',
    color: 'green',
    githubLink: 'https://github.com/BenardKevin/SolidarityBond',
    tag_text: ['PHP', 'Laravel', 'SQL', 'HTML/CSS', 'Visual Studio Code'],
  },
  {
    link: 'https://github.com/BenardKevin/FlightManagement',
    title: 'Flight management software',
    description:'Flight management application with JAVA.',
    date: '07/2019 - 10/2019',
    image: 'assets/FlightManagement.png',
    color: 'yellow',
    githubLink: 'https://github.com/BenardKevin/FlightManagement',
    tag_text: ['JAVA8', 'SQL', 'UML', 'Eclipse', 'WampServer', 'MySQL'],
  },
];

projects.forEach(project => {
  createProject(project.link, 
    project.title, 
    project.description, 
    project.date, 
    project.image, 
    project.color, 
    project.githubLink,
    project.tag_text);
});

function createProject(link, projectTitle, description, date, image, color, githubLink, tag_text) {

// Create project article
const article = document.createElement('article');
article.classList.add('postcard', 'light', color);

// Image link
const imgLink = document.createElement('a');
imgLink.classList.add('postcard__img_link');
imgLink.href = link;
imgLink.target = '_blank';

const img = document.createElement('img');
img.classList.add('postcard__img');
img.src = image;
img.alt = '...';
img.loading = 'lazy';

imgLink.appendChild(img);

// Text content
const textDiv = document.createElement('div');
textDiv.classList.add('postcard__text', 't-dark');

// Title
const title = document.createElement('h1');
title.classList.add('postcard__title', color);

const titleLink = document.createElement('a');
titleLink.href = link;
titleLink.textContent = projectTitle;
titleLink.target = '_blank';

title.appendChild(titleLink);

// Subtitle (Date)
const subtitle = document.createElement('div');
subtitle.classList.add('postcard__subtitle', 'small');

const time = document.createElement('time');
time.setAttribute('datetime', '2020-05-25 12:00:00');

const icon1 = document.createElement('i');
icon1.classList.add('mr-2');
time.appendChild(icon1);
time.appendChild(document.createTextNode(date));

subtitle.appendChild(time);

// Bar separator
const bar = document.createElement('div');
bar.classList.add('postcard__bar');

// Preview text
const previewText = document.createElement('div');
previewText.classList.add('postcard__preview-txt');
previewText.textContent = description;

// Tagbox
const tagList = document.createElement('ul');
tagList.classList.add('postcard__tagbox');


const tag = document.createElement('li');
tag.classList.add('tag__item', 'play', color);
const tag3Link = document.createElement('a');
tag3Link.href = githubLink;
tag3Link.type = 'button';
tag3Link.target = '_blank';

const github = document.createElement('i');
github.classList.add('mr-2');
github.textContent = 'Github';

tag3Link.appendChild(github);
tag.appendChild(tag3Link);

tag_text.forEach(text => {
  const tag = document.createElement('li');
  tag.classList.add('tag__item');
  tag.innerHTML = text;
  tagList.appendChild(tag);
});

tagList.appendChild(tag);

// Adding elements
textDiv.append(title, subtitle, bar, previewText, tagList);
article.append(imgLink, textDiv);
document.querySelector(".container.py-2").appendChild(article);
}
