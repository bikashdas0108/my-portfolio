const projectsContainerElement = document.getElementById("projectsContainer");

const projects = [
  {
    title: "YouTube Clone",
    image: "src/images/yt-clone.jpeg",
    description: [
      "Developed a clone of YouTube using ReactJs, Redux, TypeScript and SCSS.",
      "Implemented search functionality with recent search recommendations and used debouncing for the same.",
      "Implemented live chat functionality with nested comments feature.",
      "Used Tailwind Css to make highly responsive design.",
      "Implemented lazy loading and code splitting to make the app more optimized.",
    ],
    github: "https://github.com/bikashdas0108",
    tech: ["ReactJs", "Redux", "TypeScript"],
  },
  {
    title: "Food Cravings App",
    image: "src/images/food.png",
    description: [
      "Built Food Cravings App using ReactJS, TypeScript and Context API to track the users daily food intake and to suggest various options for maintaining a healthy diet.",
      "Implemented features such as a robust search functionality for food items and categories, allowing users to easily find desired items.",
      "Used React useContext hook to solve the problem of prop drilling.",
    ],
    github: "https://github.com/bikashdas0108",
    tech: ["ReactJs", "Tailwind", "TypeScript"],
  },
  {
    title: "Online Code Editor",
    image: "src/images/code-editor.png",
    description: [
      "Developed a custom code editor that offers an intuitive and easy-to-navigate interface for writing HTML, CSS, and JavaScript.",
      "The editor provides real-time preview functionality, allowing users to see the output of their code instantly.",
      "By combining coding and previewing in one tool, the editor significantly improves the efficiency and productivity of web development tasks.",
      "The editor includes syntax highlighting and error detection, making it easier to write clean and error-free code.",
    ],
    github: "https://github.com/bikashdas0108/online-code-editor",
    url: "https://bikashdas0108.github.io/online-code-editor/",
    tech: ["ReactJs", "JavaScript", "CSS"],
  },
];

const showProjects = () => {
  const projectsHtml = projects.map((project) => {
    const descriptionList = project.description?.map(
      (listItem) => `<li>${listItem}</li>`
    );

    const techList = project.tech?.map(
      (techItem) =>
        `<span class='tech' style='${getColor(techItem)}'>#${techItem}</span>`
    );

    return `<div class='project'>
            <a href=${project.url} target="_blank">
              <div id="${project.title}-image"></div>
            </a>
            <div class='project-title'>
                <a href=${project.url} target="_blank">
                  <span>${project.title}</span>
                </a>
                <a href=${project.github} target="_blank">
                    <img class='github-logo' src="src/images/github-logo.png" alt='github-logo'/>
                </a>
            </div>
            <div class='tech-list'>${techList?.join("")}</div>
            <ul>${descriptionList?.join("")}</ul>
        </div>`;
  });

  projectsContainerElement.innerHTML = projectsHtml.join("");

  projects.forEach((project) => {
    let image = document.createElement("img");
    image.src = project.image;
    image.alt = `${project.title}-image`;
    image.className = "project-image";
    const logoElement = document.getElementById(`${project.title}-image`);
    logoElement.appendChild(image);
  });
};

showProjects();
