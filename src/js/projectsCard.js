// 02/10/2024
const projects = [
  {
    link: 'http://florine.benard.osteo.free.fr',
    title: 'OsteoBooking',
    description:'OsteoBooking is a simple and intuitive website made in Angular 17 allowing users to book osteopathy sessions online. This application offers a user-friendly interface for managing appointments for patients.',
    date: 'Avr.2024',
    image: 'OsteoBooking.png',
    color: 'green',
    githubLink: 'OsteoBooking',
    tag_text: ['Website', 'Angular', 'TypeScript', 'Bootstrap', 'Nmp', 'Node.js'],
  },
  {
    link: 'https://www.linkedin.com/posts/kbenard_mysql-tomcat-restsql-activity-6666987982819516416-02DL',
    title: 'StatsCOVID',
    description:'Javascript web application focused on the evolution of Covid19 in France. It presents statistics in the form of a dashboard with maps, lists, graphs, kpi...',
    date: 'Apr. 2020',
    image: 'StatsCOVID.jpg',
    color: 'red',
    githubLink: 'StatsCovid',
    tag_text: ['Webapp', 'JavaScript', 'Tomcat', 'MySQL', 'RestSQL', 'SVG', 'JSON', 'HTML/CSS'],
  },
  {
    link: 'https://github.com/BenardKevin/Ogre_Boulotteur',
    title: 'Ogre Boulotteur',
    description:'This C program is a non-playable game concept where an Ogre "boulotte" children. The game logic is designed with arrays and loops, where the Ogre moves through a grid, "catching" children placed randomly. The focus is on the simulation of movement and interactions, using basic collision detection to trigger when the Ogre catches a child.',
    date: 'Oct. 2018',
    image: 'Ogre_Boulotteur.png',
    color: 'blue',
    githubLink: 'OgreBoulotteur',
    tag_text: ['Game', 'C', 'CodeBlocks'],
  },
  {
    link: 'https://benardkevin.github.io/GitHarvest/',
    title: 'GitHarvest',
    description:'This project is a JavaScript-based application designed for a user management agency. The purpose is to retrieve and display users informations from GitHub\'s public API. The app fetches and shows details of 8 users at a time, including their profile picture, username, and a description (bio).',
    date: 'Oct. 2024',
    image: 'GitHarvest.png',
    color: 'red',
    githubLink: 'GitHarvest',
    tag_text: ['Website', 'JavaScript', 'API'],
  },
  {
    link: 'https://github.com/BenardKevin/CryptoSoft',
    title: 'Data backup software',
    description:'File backup and encryption.',
    date: 'Nov. 2020',
    image: 'EasySave.png',
    color: 'blue',
    githubLink: 'CryptoSoft',
    tag_text: ['C#', 'UML', 'XAML', '.NET Core', 'WPF', 'Visual Studio', 'Azure DevOps'],
  },
  {
    link: 'https://github.com/BenardKevin/SolidarityBond',
    title: 'SolidarityBond',
    description:'Covid-19 humanitarian PHP website for mask purchases via Paypal.',
    date: 'Jun. 2020',
    image: 'future_imperfect.png',
    color: 'green',
    githubLink: 'SolidarityBond',
    tag_text: ['Webapp', 'PHP', 'Laravel', 'SQL', 'HTML/CSS', 'Visual Studio Code'],
  },
  {
    link: 'https://github.com/BenardKevin/FlightManagement',
    title: 'Flight management software',
    description:'Flight management application with JAVA.',
    date: 'Jul. 2019',
    image: 'FlightManagement.png',
    color: 'yellow',
    githubLink: 'FlightManagement',
    tag_text: ['Software', 'Java', 'SQL', 'UML', 'Eclipse', 'WampServer', 'MySQL'],
  },
];
const repo_url = 'https://github.com/BenardKevin/';
const assets_url = 'src/assets/';

createProjectsTitle();
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

function createProjectsTitle() {
  const title = document.createElement('div');
  title.classList.add('container', 'py-2');
  title.innerHTML = `<div class="text-center mb-5">
                          <h2 class="display-5 fw-bolder mb-0">
                              <span class="text-gradient d-inline">Projects</span>
                          </h2>
                      </div>`;
  document.querySelector("#projects").appendChild(title);
}

function createProject(link, projectTitle, description, date, image, color, githubLink, tag_text) {
  const title = createTitle(color, link, projectTitle); // Title
  const subtitle = createSubtitle(date); // Subtitle (Date)
  const bar = createBarSeparator(); // Bar separator
  const previewText = createPreviewText(description); // Preview text
  const tagList = createTagList(color, githubLink, tag_text); // Tagbox

  const textDiv = createTextContent(); // Text content
  const imgLink = createImgLink(link, image); // Image link
  const article = createProjectArticle(color); // Create project article

  textDiv.append(title, subtitle, bar, previewText, tagList);
  article.append(imgLink, textDiv);
  document.querySelector(".container.py-2").appendChild(article);
}


function createProjectArticle(color) {
  const article = document.createElement('article');
  article.classList.add('postcard', 'light', color, 'mb-5');
  return article;
}

function createPreviewText(description) {
  const previewText = document.createElement('div');
  previewText.classList.add('postcard__preview-txt');
  previewText.textContent = description;
  return previewText;
}

function createBarSeparator() {
  const bar = document.createElement('div');
  bar.classList.add('postcard__bar');
  return bar;
}

function createTextContent() {
  const textDiv = document.createElement('div');
  textDiv.classList.add('postcard__text', 't-dark');
  return textDiv;
}

function createTagList(color, githubLink, tag_text) {
  const tagList = document.createElement('ul');
  tagList.classList.add('postcard__tagbox');

  const tag = document.createElement('li');
  tag.classList.add('tag__item', 'play', color);
  const tag3Link = document.createElement('a');
  tag3Link.href = repo_url + githubLink;
  tag3Link.type = 'button';
  tag3Link.target = '_blank';

  const github = document.createElement('i');
  github.classList.add('mr-2');
  github.textContent = 'Github';

  tag3Link.appendChild(github);
  tag.appendChild(tag3Link);

  tag_text.forEach(text => {
    const tag = document.createElement('li');
    tag.classList.add('tag__item', text.split(' ').join('_'));
    tag.innerHTML = text;
    tagList.appendChild(tag);
  });

  tagList.appendChild(tag);
  return tagList;
}

function createSubtitle(date) {
  const subtitle = document.createElement('div');
  subtitle.classList.add('postcard__subtitle', 'small');

  const time = document.createElement('time');
  time.setAttribute('datetime', date);

  const icon1 = document.createElement('i');
  icon1.classList.add('mr-2');
  time.appendChild(icon1);
  time.appendChild(document.createTextNode(date));

  subtitle.appendChild(time);
  return subtitle;
}

function createTitle(color, link, projectTitle) {
  const title = document.createElement('h1');
  title.classList.add('postcard__title', color);

  const titleLink = document.createElement('a');
  titleLink.href = link;
  titleLink.textContent = projectTitle;
  titleLink.target = '_blank';

  title.appendChild(titleLink);
  return title;
}

function createImgLink(link, image) {
  const imgLink = document.createElement('a');
  imgLink.classList.add('postcard__img_link');
  imgLink.href = link;
  imgLink.target = '_blank';

  const img = document.createElement('img');
  img.classList.add('postcard__img');
  img.src = assets_url + image;
  img.alt = '...';
  img.loading = 'lazy';

  imgLink.appendChild(img);
  return imgLink;
}

