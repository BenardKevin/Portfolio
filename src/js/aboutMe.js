createAboutMeSection();

function createAboutMeSection() {
  const section = document.createElement('div');
  section.classList.add('container');
  section.innerHTML = `<div class="row gx-5 justify-content-center my-2">
                        <div class="col-xxl-8">
                            <div class="text-center my-5">
                                <h2 class="display-5 fw-bolder mb-5"><span id="aboutme_title" class="text-gradient d-inline"></span></h2>
                                <p id="aboutme_text1" class="lead"></p>
                                <p id="aboutme_text2" class="lead mb-5"></p>
                                <a class="btn btn-primary px-4 py-3 mb-5" href="src/assets/CV.pdf">
                                    <div class="d-inline-block bi bi-download me-2"></div>
                                    Download Resume
                                </a>
                            </div>
                        </div>
                    </div>`;
  document.querySelector("#aboutMe").appendChild(section);
}

/**
 * Adds a smooth scrolling effect to the "About Me" navigation link.
 * 
 * This code attaches an event listener to the 'nav_aboutme' element, which represents the "About Me" navigation link.
 * When clicked, the default link behavior is prevented to avoid immediate navigation.
 * The event then triggers a smooth scroll to the "About Me" section of the page if it exists.
 * 
 * @event click - Triggered when the "About Me" navigation link is clicked.
 * 
 * @param {Event} event - The click event object, used to prevent the default link behavior.
 * 
 * Functionality:
 * - Prevents the default click action using `event.preventDefault()` so the page doesn't jump instantly.
 * - Finds the target section element (`aboutMe`) and, if it exists, scrolls it into view.
 * - Uses `{ behavior: 'smooth', block: 'start' }` options to make the scroll smooth and position the section at the top of the viewport.
 */
document.getElementById('nav_aboutme').addEventListener('click', function(event) {
    event.preventDefault();
    const section = document.getElementById('aboutMe');
    if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
});
