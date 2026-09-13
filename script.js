const names = [
  "Armandas",
  "Eimantas",
  "Ernestas",
  "Gerardas",
  "Giedrius",
  "Justas",
  "Kajus",
  "Naglis",
  "Oskaras",
  "Saulius",
  "Simona",
];

const existingProjects = [
  "Giedrius",
  "Justas",
  "Naglis",
  "Oskaras",
  "Saulius",
  "Simona",
];

const projects = document.querySelector(".projects");

names.forEach((name) => {
  const project = document.createElement("a");

  project.className = "project";

  project.href = `./projects/${name}/index.html`;

  project.innerHTML = `
        <div class="project-icon">🌐</div>

        <div class="project-name">
            ${name}
        </div>

        <div class="project-type">
            HTML Document
        </div>
    `;

  project.addEventListener("click", (event) => {
    if (!existingProjects.includes(name)) {
      event.preventDefault();

      showError(name);

      return;
    }

  });

  projects.appendChild(project);
});

document.querySelector(".project-count").textContent =
  `${names.length} objects`;

function showError(name) {
  const error = document.createElement("div");

  error.className = "error-window";

  error.innerHTML = `

        <div class="error-title">

            <span>
                ⚠️ Windows
            </span>

            <button class="error-close">
                ×
            </button>

        </div>


        <div class="error-content">

            <div class="error-icon">
                ⚠️
            </div>

            <div>

                <p>
                    Cannot open <strong>${name}</strong>.
                </p>

                <p>
                    The specified file or directory could not be found.
                </p>

            </div>

        </div>


        <div class="error-button-container">

            <button class="error-ok">
                OK
            </button>

        </div>

    `;

  document.body.appendChild(error);

  const close = () => {
    error.remove();
  };

  error.querySelector(".error-close").addEventListener("click", close);

  error.querySelector(".error-ok").addEventListener("click", close);
}
