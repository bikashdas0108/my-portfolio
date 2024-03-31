const projectsContainerElement = document.getElementById("projectsContainer");

const projects = [
  {
    title: "YouTube Clone",
    image: "src/images/yt-clone.jpeg",
    description: [
      "Developed a web application for online food ordering by using React.js, Node.js, MongoDB and Express.js.",
      "Implemented features such as a robust search functionality for food items and categories, allowing users to easily find desired items.",
      "Developed an intuitive cart system that enables users to add items with their desired quantities for seamless ordering.",
      "Implemented a comprehensive order history feature to track and maintain records of all orders placed to date.",
    ],
    tech: ["ReactJs", "Redux", "TypeScript"],
  },
  {
    title: "My Game",
    image: "src/images/yt-clone.jpeg",
    description: [
      "Developed a web application for online food ordering by using React.js, Node.js, MongoDB and Express.js.",
      "Implemented features such as a robust search functionality for food items and categories, allowing users to easily find desired items.",
      "Developed an intuitive cart system that enables users to add items with their desired quantities for seamless ordering.",
      "Implemented a comprehensive order history feature to track and maintain records of all orders placed to date.",
    ],
    tech: ["ReactJs", "Redux", "TypeScript"],
  },
  {
    title: "Swamato",
    image: "src/images/yt-clone.jpeg",
    description: [
      "Developed a web application for online food ordering by using React.js, Node.js, MongoDB and Express.js.",
      "Implemented features such as a robust search functionality for food items and categories, allowing users to easily find desired items.",
      "Developed an intuitive cart system that enables users to add items with their desired quantities for seamless ordering.",
      "Implemented a comprehensive order history feature to track and maintain records of all orders placed to date.",
    ],
    tech: ["ReactJs", "Redux", "TypeScript"],
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
            <div id="${project.title}-image"></div>
            <div class='project-title'>
                <span>${project.title}</span>
                <a href="https://github.com/bikashdas0108" target="_blank">
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
