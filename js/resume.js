const exp = [
    {
      date: '09/2022 - 09/2023',
      jobTitle: 'Fullstack Engineer',
      jobSubtitle:'Trainer',
      company: 'Amadeus Airport IT',
      city: 'Villeneuve-Loubet (06), France',
      desc: 'As part of a 15-person english-only <strong>SCRUM</strong> team, I participated in the implementation of Front-end features using <strong>AriaTemplates</strong> and <strong>JavaScript</strong>. I also created unit tests with Java 8, Bitbucket, <strong>Jenkins</strong>, JUnit and Selenium. In addition, I contributed to the writing of technical documents on <strong>Jira</strong> in english.',
    },{
        date: '09/2021 - 02/2022',
        jobTitle: 'Back-end Developer',
        jobSubtitle:'Internship',
        company: 'Leisure IT GmbH',
        city: 'Aix-la-Chapelle (NRW), Allemagne',
        desc: 'I contributed to the migration of an application dedicated to the initialization and cleaning of a tour operator database. This task involved the use of Shell scripts, <strong>JAVA 11</strong>, SQL, as well as tools such as <strong>Maven</strong>, <strong>IntelliJ IDEA</strong> and <strong>JSch</strong>.',
    },{
        date: '01/2021 - 04/2021',
        jobTitle: 'Software Developer',
        jobSubtitle:'Internship',
        company: 'New Stefal Holding',
        city: 'Mougins (06), France',
        desc: 'I carried out the complete development of an internal business application for time and activity management, comprising 3.2k lines of code, using <strong>Windev 21</strong>, WLangage and HFSQL. The project included <strong>data modeling (DCM), validation of requirements, presentation to clients</strong>, as well as deployment of the <strong>deliverable</strong>, while ensuring project management via Wrike.',
    },
]

exp.forEach(exp => {
    createExperienceSection(
        exp.date, 
        exp.jobTitle, 
        exp.jobSubtitle, 
        exp.company, 
        exp.city, 
        exp.desc
    );
  });

function createExperienceSection(date, jobTitle, jobSubtitle, company, city, desc) {
    const container = document.createElement('div');
    container.classList.add('card', 'shadow', 'border-0', 'rounded-4', 'mb-5');
    
    const subcontainer = document.createElement('div');
    subcontainer.classList.add('card-body', 'p-5');
  
    const subsubcontainer = document.createElement('div');
    subsubcontainer.classList.add('row', 'align-items-center', 'gx-5');
  
    const textcontainer = document.createElement('div');
    textcontainer.classList.add('col', 'text-center', 'text-lg-start', 'mb-4', 'mb-lg-0');
  
    const subtextcontainer = document.createElement('div');
    subtextcontainer.classList.add('bg-light', 'p-4', 'rounded-4');


    const dateCont = document.createElement('div');
    dateCont.classList.add('text-primary', 'mb-2');
    dateCont.textContent = date;
    const title = document.createElement('div');
    title.classList.add('small', 'fw-bolder', 'text-dark');
    title.textContent = jobTitle;
    const job = document.createElement('div');
    job.classList.add('small', 'fw-bolder', 'text-dark');
    job.textContent = jobSubtitle;
    const companyDiv = document.createElement('div');
    companyDiv.classList.add('small', 'text-primary');
    companyDiv.textContent = company;
    const cityDiv = document.createElement('div');
    cityDiv.classList.add('small', 'text-muted');
    cityDiv.textContent = city;
    subtextcontainer.append(dateCont, title, job, companyDiv, cityDiv);
    textcontainer.append(subtextcontainer);
    
    const description = document.createElement('div');
    description.classList.add('col-lg-8', 'text-body');
    const descriptionContent = document.createElement('div');
    descriptionContent.innerHTML = desc;
    description.append(descriptionContent);

    subsubcontainer.append(textcontainer, description);
    subcontainer.append(subsubcontainer);
    container.append(subcontainer);
  
    document.querySelector(".experiences").appendChild(container);
  }
  