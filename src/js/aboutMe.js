function createAboutMeSection() {
  const section = document.createElement('div');
  section.classList.add('container', 'px-5');
  section.innerHTML = `<div class="row gx-5 justify-content-center">
                        <div class="col-xxl-8">
                            <div class="text-center my-5">
                                <h2 class="display-5 fw-bolder mb-5"><span class="text-gradient d-inline">About Me</span></h2>
                                <p class="lead text-dark">Software Engineer with 1 year of experience in software development. Proficient in JavaScript and Java, with hands-on experience in designing, developing, and maintaining projects. Skilled in writing clean, efficient, and scalable code, I have contributed to various projects, focusing on delivering reliable software solutions.</p>
                                <p class="lead text-dark mb-5">I am passionate about leveraging modern development tools and methodologies to create user-friendly applications. Adept at problem-solving and collaborating with cross-functional teams to achieve project goals, I am eager to continue building my expertise in software engineering and contribute to innovative projects.</p>
                                <a class="btn btn-primary px-4 py-3 mb-5" href="src/assets/CV.pdf">
                                    <div class="d-inline-block bi bi-download me-2"></div>
                                    Download Resume
                                </a>
                                <div class="d-flex justify-content-center fs-2 gap-4">
                                    <a class="text-gradient" href="https://www.linkedin.com/in/kbenard/"><i class="bi bi-linkedin"></i></a>
                                    <a class="text-gradient" href="https://github.com/BenardKevin"><i class="bi bi-github"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>`;
  document.querySelector("#aboutMe").appendChild(section);
}

createAboutMeSection();