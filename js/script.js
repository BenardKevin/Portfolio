// 02/10/2024

let projects = [
  {
    link: 'http://florine.benard.osteo.free.fr',
    title: 'OsteoBooking',
    description:'OsteoBooking is a simple and intuitive web application made in Angular17 allowing users to book osteopathy sessions online. This application offers a user-friendly interface for managing appointments for patients.',
    image: 'assets/OsteoBooking.png',
    image_size: 'width',
  },
  {
    link: 'https://www.linkedin.com/posts/kbenard_mysql-tomcat-restsql-activity-6666987982819516416-02DL',
    title: 'StatsCOVID',
    description:'Javascript web application focused on the evolution of Covid19 in France. It presents statistics in the form of a dashboard with maps, lists, graphs, kpi...',
    image: 'assets/StatsCOVID.jpg',
    image_size: 'height',
  },
  {
    link: 'https://github.com/BenardKevin/Ogre_Boulotteur',
    title: 'Ogre Boulotteur',
    description:'This C program is a non-playable game concept where an Ogre "boulotte" children. The game logic is designed with arrays and loops, where the Ogre moves through a grid, "catching" children placed randomly. The focus is on the simulation of movement and interactions, using basic collision detection to trigger when the Ogre catches a child.',
    image: 'assets/Ogre_Boulotteur.PNG',
    image_size: 'height',
  },
  {
    link: 'https://benardkevin.github.io/GitHarvest/',
    title: 'GitHarvest',
    description:'This project is a JavaScript-based application designed for a user management agency. The purpose is to retrieve and display users informations from GitHub\'s public API. The app fetches and shows details of 8 users at a time, including their profile picture, username, and a description (bio).',
    image: 'assets/GitHarvest.png',
    image_size: 'width',
  },
  {
    link: 'https://benardkevin.github.io/Accounting-Console',
    title: 'Accounting Console',
    description:'A JavaScript calculator is a web-based tool that allows users to perform basic arithmetic operations such as addition, subtraction, multiplication, and division. It typically consists of an HTML structure for the user interface, CSS for styling, and JavaScript to handle the logic and functionality.',
    image: 'assets/Accounting-Console.png',
    image_size: 'height',
  },
  {
    link: 'https://benardkevin.github.io/Model-based-website/',
    title: 'Model-based website',
    description:'This simple static web page, crafted using HTML and CSS only, showcases a clean and professional design. It features a structured layout with a header, navigation bar, main content area, and footer, all styled to create a cohesive and visually appealing user experience.',
    image: 'assets/future_imperfect.png',
    image_size: 'width',
  },
];

projects.forEach(project => {
  let projectComponent = createProject(project.link, project.title, project.description, project.image, project.image_size);
  document.querySelector(".project_list.col-lg-11.col-xl-9.col-xxl-8").appendChild(projectComponent);
});

function createProject(link, title, description, image, image_size) {
    let project = document.createElement("div");
    project.classList.add('card', 'overflow-hidden', 'shadow', 'rounded-4', 'border-0', 'mb-5');
    
    let project_link = document.createElement("a");
    project_link.setAttribute('target', '_blank');
    project_link.classList.add('text-black', 'text-decoration-none', 'text-start');
    project_link.setAttribute('href', link);
    
    let project_body = document.createElement("div");
    project_body.classList.add('card-body', 'p-0');
    
    let project_container = document.createElement("div");
    project_container.classList.add('d-flex', 'align-items-center');
    
    let project_container_sub = document.createElement('div');
    project_container_sub.classList.add('p-5');
    
    let project_title = document.createElement('h2');
    project_title.classList.add('fw-bolder', 'mb-4');
    let text_title = document.createTextNode(title);

    let project_description = document.createElement('p');
    project_description.innerText=description;

    project_title.appendChild(text_title);
    
    project_container_sub.appendChild(project_title);
    project_container_sub.appendChild(project_description);
    project_container.appendChild(project_container_sub);

    
    const img = document.createElement('img');
    img.classList.add('img-fluid-' + image_size);
    img.src=image;
    project_container.appendChild(img);
    project_body.appendChild(project_container);
    project_link.appendChild(project_body);
    project.appendChild(project_link);
    return project;
  }