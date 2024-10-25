// 02/10/2024
const PROJECTS_DATA = [
  {
    link: 'http://florine.benard.osteo.free.fr',
    title: 'OsteoBooking',
    description:'OsteoBooking is a simple and intuitive website made in Angular 17 allowing users to book osteopathy sessions online. This application offers a user-friendly interface for managing appointments for patients.',
    date: 'Avr. 2024',
    image: 'OsteoBooking.png',
    color: 'green',
    githubLink: 'OsteoBooking',
    tag_text: ['Angular', 'TypeScript', 'Bootstrap', 'Webapp', 'Nmp', 'Node.js'],
  },
  {
    link: 'https://www.linkedin.com/posts/kbenard_mysql-tomcat-restsql-activity-6666987982819516416-02DL',
    title: 'StatsCOVID',
    description:'Javascript web application focused on the evolution of Covid19 in France. It presents statistics in the form of a dashboard with maps, lists, graphs, kpi...',
    date: 'Apr. 2020',
    image: 'StatsCOVID.jpg',
    color: 'red',
    githubLink: 'StatsCovid',
    tag_text: ['JavaScript', 'Tomcat', 'MySQL', 'RestSQL', 'Webapp', 'SVG', 'JSON', 'SQL'],
  },
  {
    link: 'https://github.com/BenardKevin/Ogre_Boulotteur',
    title: 'Ogre Boulotteur',
    description:'This C program is a simulation game where an Ogre "boulotte" children. The game logic is designed with arrays and loops, where the Ogre moves through a grid, "catching" children. The focus is on the simulation of movement and interactions, using basic collision detection to trigger when the Ogre catches a child.',
    date: 'Oct. 2018',
    image: 'Ogre_Boulotteur.png',
    color: 'blue',
    githubLink: 'OgreBoulotteur',
    tag_text: ['C', 'Game', 'CodeBlocks'],
  },
  {
    link: 'https://benardkevin.github.io/GitHarvest/',
    title: 'GitHarvest',
    description:'This project is a JavaScript-based application designed for a user management agency. The purpose is to retrieve and display users informations from GitHub\'s public API. The app fetches and shows details of 8 users at a time, including their profile picture, username, and a description (bio).',
    date: 'Oct. 2024',
    image: 'GitHarvest.png',
    color: 'red',
    githubLink: 'GitHarvest',
    tag_text: ['JavaScript', 'Website', 'API'],
  },
  {
    link: 'https://github.com/BenardKevin/CryptoSoft',
    title: 'Data backup software',
    description:'EasySave is a file backup and encryption tool built with C#, .NET Core, and WPF. It features a user-friendly interface designed with XAML and is developed in Visual Studio. Integrated with Azure DevOps for seamless project management, EasySave ensures secure backups and encryption, with UML used for system design.',
    date: 'Nov. 2020',
    image: 'EasySave.png',
    color: 'blue',
    githubLink: 'CryptoSoft',
    tag_text: ['C#', 'UML', 'XAML', '.NET Core', 'WPF', 'Software', 'Visual Studio', 'Azure DevOps'],
  },
  {
    link: 'https://github.com/BenardKevin/SolidarityBond',
    title: 'SolidarityBond',
    description:'A simple COVID-19 humanitarian website built with PHP, Laravel, and SQL for purchasing masks securely via PayPal. Developed in Visual Studio Code, it ensures easy navigation and safe transactions.',
    date: 'Jun. 2020',
    image: 'future_imperfect.png',
    color: 'green',
    githubLink: 'SolidarityBond',
    tag_text: ['PHP', 'Laravel', 'SQL', 'Webapp', 'Visual Studio Code'],
  },
  {
    link: 'https://github.com/BenardKevin/FlightManagement',
    title: 'Flight management software',
    description:'FlightManagement is a software built with Java and SQL, designed using UML and developed in Eclipse. It uses MySQL databases hosted on WampServer to manage flight bookings, schedules, and customer data efficiently.',
    date: 'Jul. 2019',
    image: 'FlightManagement.png',
    color: 'yellow',
    githubLink: 'FlightManagement',
    tag_text: ['Java', 'SQL', 'UML', 'Eclipse', 'Software', 'WampServer', 'MySQL'],
  },
];
const CONFIG = {
  repo_url: 'https://github.com/BenardKevin/',
  assets_url: 'src/assets/'
};

// INIT
createProjectTitle();
PROJECTS_DATA.forEach(project => {
  createProject(project.link, 
    project.title, 
    project.description, 
    project.date, 
    project.image, 
    project.color, 
    project.githubLink,
    project.tag_text);
});




function articlesSelection(data) {
  clearProjects(); 

  if (!data || data === 'all') {
    PROJECTS_DATA.forEach(project => {
      createProject(project.link, project.title, project.description, project.date, project.image, project.color, project.githubLink, project.tag_text);
    });
  } else {
    PROJECTS_DATA.forEach(project => {
      const tagsLowerCase = project.tag_text.map(tag => tag.toLowerCase());
      if (tagsLowerCase.includes(data)) {
        createProject(project.link, project.title, project.description, project.date, project.image, project.color, project.githubLink, project.tag_text);
      }
    });
  }
}
function clearProjects() {
  const container = document.querySelector(".container.py-2");
  const postcards = container.querySelectorAll('.postcard');
  
  postcards.forEach(postcard => {
    container.removeChild(postcard); 
  });
}

function createProjectTitle() {
  const title_text = document.createElement('span');
  title_text.classList.add('text-gradient', 'd-inline');
  title_text.textContent = 'My creations';

  const title = document.createElement('h2');
  title.classList.add('display-5', 'fw-bolder', 'mb-0');
  title.appendChild(title_text);

  const div = document.createElement('div');
  div.classList.add('text-center', 'mb-4');
  div.appendChild(title);

  const subtitle_text = document.createElement('p');
  subtitle_text.classList.add('text-center', 'mb-5');
  subtitle_text.innerHTML = `
  <ul id="tag_list" class="list-unstyled">
    <li class="d-inline"><button class="bg-transparent fw-bold text-uppercase border-0 mixitup-control-active d-inline" data-filter="all">All</button></li>
    <li class="d-inline user-select-none">|</li>
    <li class="d-inline"><button class="bg-transparent text-uppercase border-0" style="background-color: none" data-filter="javascript">JavaScript</button></li>
    <li class="d-inline"><button class="bg-transparent text-uppercase border-0" data-filter="java">Java</button></li>
    <li class="d-inline"><button class="bg-transparent text-uppercase border-0" data-filter="angular">Angular</button></li>
    <li class="d-inline"><button class="bg-transparent text-uppercase border-0" data-filter="sql">SQL</button></li>
    <li class="d-inline"><button class="bg-transparent text-uppercase border-0" data-filter="c#">C#</button></li>
    <li class="d-inline user-select-none">|</li>
    <li class="d-inline"><button class="bg-transparent text-uppercase border-0" data-filter="website">Website</button></li>
    <li class="d-inline"><button class="bg-transparent text-uppercase border-0" data-filter="webapp">Webapp</button></li>
    <li class="d-inline"><button class="bg-transparent text-uppercase border-0" data-filter="software">Software</button></li>
    <li class="d-inline"><button class="bg-transparent text-uppercase border-0" data-filter="game">Game</button></li>
  </ul>
  `;

  const subtitle = document.createElement('div');
  subtitle.classList.add('text-center', 'd-inline', 'mb-5');
  subtitle.appendChild(subtitle_text);

  const projects_container = document.createElement('div');
  projects_container.classList.add('container', 'py-2');
  projects_container.append(div, subtitle);


  const projects_section = document.querySelector("#projects");
  projects_section.appendChild(projects_container);

  const buttons = document.querySelectorAll('#tag_list button');
  buttons.forEach(button => {
    button.addEventListener('click', function() {
      buttons.forEach(btn => btn.classList.remove('fw-bold'));
      this.classList.add('fw-bold');
      const filterValue = this.getAttribute('data-filter');
      articlesSelection(filterValue);
    });
  });
}

function createProject(link, projectTitle, description, date, image, color, githubLink, tag_text) {
  const title = document.createElement('h1');
  title.classList.add('postcard__title', color);

  const titleLink = document.createElement('a');
  titleLink.href = link;
  titleLink.textContent = projectTitle;
  titleLink.target = '_blank';

  title.appendChild(titleLink);
  
  
  const subtitle = document.createElement('div');
  subtitle.classList.add('postcard__subtitle', 'small');

  const time = document.createElement('time');
  time.setAttribute('datetime', date);

  const icon1 = document.createElement('i');
  icon1.classList.add('mr-2');
  time.appendChild(icon1);
  time.appendChild(document.createTextNode(date));

  subtitle.appendChild(time);
  

  const bar = document.createElement('div');
  bar.classList.add('postcard__bar');
  
  
  const previewText = document.createElement('div');
  previewText.classList.add('postcard__preview-txt');
  previewText.textContent = description;
  
  
  const tagList = document.createElement('ul');
  tagList.classList.add('postcard__tagbox');

  const tag = document.createElement('li');
  tag.classList.add('tag__item', 'play', color);
  const tag3Link = document.createElement('a');
  tag3Link.href = CONFIG.repo_url + githubLink;
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


  const textDiv = document.createElement('div');
  textDiv.classList.add('postcard__text', 't-dark');
 

  const imgLink = document.createElement('a');
  imgLink.classList.add('postcard__img_link');
  imgLink.href = link;
  imgLink.target = '_blank';

  const img = document.createElement('img');
  img.classList.add('postcard__img');
  img.src = CONFIG.assets_url + image;
  img.alt = '...';
  img.loading = 'lazy';

  imgLink.appendChild(img);


  const article = document.createElement('article');
  article.classList.add('postcard', 'light', color, 'mb-5');
  tag_text.forEach(text => {
    article.classList.add(text.toLowerCase().split(' ').join('_'));
  });


  textDiv.append(title, subtitle, bar, previewText, tagList);
  article.append(imgLink, textDiv);
  document.querySelector(".container.py-2").appendChild(article);
}

