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
createSkillsSection();


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
  
function createEducationSection() {
  document.querySelector("education").innerHTML = `
  <h2 class="text-secondary fw-bolder mb-4 text-danger">Education</h2>
                            <!-- Education Card 1-->
                            <div class="card shadow border-0 rounded-4 mb-5">
                                <div class="card-body p-5">
                                    <div class="row align-items-center gx-6">
                                        <div class="col text-center text-lg-start mb-4 mb-lg-0">
                                            <div class="bg-light p-4 rounded-4">
                                                <div class="text-secondary fw-bolder mb-2 text-danger">05/2024 - Present</div>
                                                <div class="mb-2">
                                                    <div class="small fw-bolder text-dark">JAVA/J2EE Training</div>
                                                    <div class="small text-muted">Biot (06), France</div>
                                                </div>
                                                <div class="fst-italic">
                                                    <div class="small text-danger">IB - groupe Cegos</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-8 text-body">
                                            <ul>
                                                <li>Java programming and web services development</li>
                                                <li>Dynamic GUI Design with Angular</li>
                                                <li>Agile development techniques</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Education Card 2-->
                            <div class="card shadow border-0 rounded-4 mb-5">
                                <div class="card-body p-5">
                                    <div class="row align-items-center gx-6">
                                        <div class="col text-center text-lg-start mb-4 mb-lg-0">
                                            <div class="bg-light p-4 rounded-4">
                                                <div class="text-secondary fw-bolder mb-2 text-danger">09/2020 - 09/2023</div>
                                                <div class="mb-2">
                                                    <div class="small fw-bolder text-dark">Computer Science Engineer</div>
                                                    <div class="small text-muted">Nice (06), France</div>
                                                </div>
                                                <div class="fst-italic">
                                                    <div class="small text-muted">Graduate</div>
                                                    <div class="small text-danger">CESI Engineering School</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-8 text-body">
                                            <ul>
                                                <li>Entrepreneuriat</li>
                                                <li>cybersecurity</li>
                                                <li>Projects and humans management</li>
                                                <li>BDD Oracle</li>
                                                <li>Software programming</li>
                                                <li>System administrator</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Education Card 3-->
                            <div class="card shadow border-0 rounded-4 mb-5">
                                <div class="card-body p-5">
                                    <div class="row align-items-center gx-6">
                                        <div class="col text-center text-lg-start mb-4 mb-lg-0">
                                            <div class="bg-light p-4 rounded-4">
                                                <div class="text-secondary fw-bolder mb-2 text-danger">09/2018 - 09/2020</div>
                                                    <div class="mb-2">
                                                        <div class="small fw-bolder text-dark">Prépa intégré</div>
                                                        <div class="small text-muted">Valbonne (06), France</div>
                                                    </div>
                                                    <div class="fst-italic">
                                                        <div class="small text-danger">CESI Engineering School</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-8 text-body">
                                                <ul>
                                                    <li>Scientific fundamentals</li>
                                                    <li>Networks, models and topologies</li>
                                                    <li>Project management</li>
                                                    <li>Design and OOP</li>
                                                    <li>Web development : HTML/CSS - JavaScript - Node.js</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                            </div>
  `;
}
  
function createSkillsSection() {
  document.querySelector("#skills").innerHTML = `
  <div class="card shadow border-0 rounded-4 mb-5">
                                <div class="card-body p-5">
                                    <!-- Languages list-->
                                    <div class="mb-5">
                                        <div class="d-flex align-items-center mb-4">
                                            <div class="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3"><i class="bi bi-code-slash"></i></div>
                                            <h3 class="fw-bolder mb-0"><span class="text-gradient d-inline">Languages</span></h3>
                                        </div>
                                        <div class="row row-cols-1 row-cols-md-5 mb-4">
                                            <div class="col mb-4 mb-md-0"><div class="d-flex align-items-center justify-content-center bg-light rounded-4 p-3 h-100">HTML / CSS</div></div>
                                            <div class="col mb-4 mb-md-0"><div class="d-flex align-items-center justify-content-center bg-light rounded-4 p-3 h-100">JavaScript</div></div>
                                            <div class="col mb-4 mb-md-0"><div class="d-flex align-items-center justify-content-center bg-light rounded-4 p-3 h-100">Java</div></div>
                                            <div class="col mb-4 mb-md-0"><div class="d-flex align-items-center justify-content-center bg-light rounded-4 p-3 h-100">C#</div></div>
                                            <div class="col"><div class="d-flex align-items-center justify-content-center bg-light rounded-4 p-3 h-100">TypeScript</div></div>
                                        </div>
                                        <div class="row row-cols-1 row-cols-md-6 mb-4">
                                            <div class="col mb-4 mb-md-0"><div class="d-flex align-items-center justify-content-center bg-light rounded-4 p-3 h-100">Git</div></div>
                                            <div class="col mb-4 mb-md-0"><div class="d-flex align-items-center justify-content-center bg-light rounded-4 p-3 h-100">Python</div></div>
                                            <div class="col mb-4 mb-md-0"><div class="d-flex align-items-center justify-content-center bg-light rounded-4 p-3 h-100">JSON</div></div>
                                            <div class="col mb-4 mb-md-0"><div class="d-flex align-items-center justify-content-center bg-light rounded-4 p-3 h-100">SVG</div></div>
                                            <div class="col mb-4 mb-md-0"><div class="d-flex align-items-center justify-content-center bg-light rounded-4 p-3 h-100">XML</div></div>
                                            <div class="col"><div class="d-flex align-items-center justify-content-center bg-light rounded-4 p-3 h-100">C</div></div>
                                        </div>
                                    </div>
                                    <!-- Professional skills list-->
                                    <div class="mb-5">
                                        <div class="d-flex align-items-center mb-4">
                                            <div class="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3"><i class="bi bi-tools"></i></div>
                                            <h3 class="fw-bolder mb-0"><span class="text-gradient d-inline">Framework</span></h3>
                                        </div>
                                        <div class="row row-cols-1 row-cols-md-3 mb-4">
                                            <div class="col mb-4 mb-md-0"><div class="d-flex align-items-center justify-content-center bg-light rounded-4 p-3 h-100">Vue.js</div></div>
                                            <div class="col mb-4 mb-md-0"><div class="d-flex align-items-center justify-content-center bg-light rounded-4 p-3 h-100">Angular</div></div>
                                            <div class="col"><div class="d-flex align-items-center justify-content-center bg-light rounded-4 p-3 h-100">.NET</div></div>
                                        </div>
                                        <div class="row row-cols-1 row-cols-md-6">
                                            <div class="col mb-4 mb-md-0"><div class="d-flex align-items-center justify-content-center bg-light rounded-4 p-3 h-100">Spring</div></div>
                                            <div class="col mb-4 mb-md-0"><div class="d-flex align-items-center justify-content-center bg-light rounded-4 p-3 h-100">.NET</div></div>
                                            <div class="col mb-4 mb-md-0"><div class="d-flex align-items-center justify-content-center bg-light rounded-4 p-3 h-100">Bootstrap</div></div>
                                            <div class="col mb-4 mb-md-0"><div class="d-flex align-items-center justify-content-center bg-light rounded-4 p-3 h-100">ASP.NET</div></div>
                                            <div class="col mb-4 mb-md-0"><div class="d-flex align-items-center justify-content-center bg-light rounded-4 p-3 h-100">Express.js</div></div>
                                            <div class="col"><div class="d-flex align-items-center justify-content-center bg-light rounded-4 p-3 h-100">JUnit</div></div>
                                        </div>
                                    </div>
                                    <!-- SGBD list-->
                                    <div class="mb-5">
                                        <div class="d-flex align-items-center mb-4">
                                            <div class="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3"><i class="bi bi-code-slash"></i></div>
                                            <h3 class="fw-bolder mb-0"><span class="text-gradient d-inline">SGBD</span></h3>
                                        </div>
                                        <div class="row row-cols-1 row-cols-md-5 mb-4">
                                            <div class="col mb-4 mb-md-0"><div class="d-flex align-items-center justify-content-center bg-light rounded-4 p-3 h-100">MySQL</div></div>
                                            <div class="col mb-4 mb-md-0"><div class="d-flex align-items-center justify-content-center bg-light rounded-4 p-3 h-100">HFSQL</div></div>
                                            <div class="col mb-4 mb-md-0"><div class="d-flex align-items-center justify-content-center bg-light rounded-4 p-3 h-100">MongoDB</div></div>
                                            <div class="col mb-4 mb-md-0"><div class="d-flex align-items-center justify-content-center bg-light rounded-4 p-3 h-100">Oracle</div></div>
                                            <div class="col"><div class="d-flex align-items-center justify-content-center bg-light rounded-4 p-3 h-100">SQL Server</div></div>
                                        </div>
                                    </div>
                                    <!-- OS list-->
                                    <div class="mb-5">
                                        <div class="d-flex align-items-center mb-4">
                                            <div class="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3"><i class="bi bi-code-slash"></i></div>
                                            <h3 class="fw-bolder mb-0"><span class="text-gradient d-inline">OS</span></h3>
                                        </div>
                                        <div class="row row-cols-1 row-cols-md-4 mb-4">
                                            <div class="col mb-4 mb-md-0"><div class="d-flex align-items-center justify-content-center bg-light rounded-4 p-3 h-100">Windows</div></div>
                                            <div class="col mb-4 mb-md-0"><div class="d-flex align-items-center justify-content-center bg-light rounded-4 p-3 h-100">Deblian</div></div>
                                            <div class="col mb-4 mb-md-0"><div class="d-flex align-items-center justify-content-center bg-light rounded-4 p-3 h-100">Ubuntu</div></div>
                                            <div class="col"><div class="d-flex align-items-center justify-content-center bg-light rounded-4 p-3 h-100">Windows Server</div></div>
                                        </div>
                                    </div>
                                    <!-- Virtualisation list-->
                                    <div class="mb-5">
                                        <div class="d-flex align-items-center mb-4">
                                            <div class="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3"><i class="bi bi-code-slash"></i></div>
                                            <h3 class="fw-bolder mb-0"><span class="text-gradient d-inline">Virtualisation</span></h3>
                                        </div>
                                        <div class="row row-cols-1 row-cols-md-2 mb-4">
                                            <div class="col mb-4 mb-md-0"><div class="d-flex align-items-center justify-content-center bg-light rounded-4 p-3 h-100">Virtualbox</div></div>
                                            <div class="col"><div class="d-flex align-items-center justify-content-center bg-light rounded-4 p-3 h-100">VMWare</div></div>
                                        </div>
                                    </div>
                                    <!-- Tools list-->
                                    <div class="mb-5">
                                        <div class="d-flex align-items-center mb-4">
                                            <div class="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3"><i class="bi bi-code-slash"></i></div>
                                            <h3 class="fw-bolder mb-0"><span class="text-gradient d-inline">Tools</span></h3>
                                        </div>
                                        <div class="row row-cols-1 row-cols-md-5 mb-4">
                                            <div class="col mb-4 mb-md-0"><div class="d-flex align-items-center justify-content-center bg-light rounded-4 p-3 h-100">IntelliJ</div></div>
                                            <div class="col mb-4 mb-md-0"><div class="d-flex align-items-center justify-content-center bg-light rounded-4 p-3 h-100">VSCode</div></div>
                                            <div class="col mb-4 mb-md-0"><div class="d-flex align-items-center justify-content-center bg-light rounded-4 p-3 h-100">Bitbucket</div></div>
                                            <div class="col mb-4 mb-md-0"><div class="d-flex align-items-center justify-content-center bg-light rounded-4 p-3 h-100">JIRA</div></div>
                                            <div class="col"><div class="d-flex align-items-center justify-content-center bg-light rounded-4 p-3 h-100">Selenium</div></div>
                                        </div>
                                        <div class="row row-cols-1 row-cols-md-6 mb-4">
                                            <div class="col mb-4 mb-md-0"><div class="d-flex align-items-center justify-content-center bg-light rounded-4 p-3 h-100">Windev</div></div>
                                            <div class="col mb-4 mb-md-0"><div class="d-flex align-items-center justify-content-center bg-light rounded-4 p-3 h-100">Eclipse</div></div>
                                            <div class="col mb-4 mb-md-0"><div class="d-flex align-items-center justify-content-center bg-light rounded-4 p-3 h-100">Tomcat</div></div>
                                            <div class="col mb-4 mb-md-0"><div class="d-flex align-items-center justify-content-center bg-light rounded-4 p-3 h-100">Maven</div></div>
                                            <div class="col mb-4 mb-md-0"><div class="d-flex align-items-center justify-content-center bg-light rounded-4 p-3 h-100">Jenkins</div></div>
                                            <div class="col"><div class="d-flex align-items-center justify-content-center bg-light rounded-4 p-3 h-100">Sonarqube</div></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
  `;
}