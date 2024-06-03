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
    tech: ["ReactJs", "Tailwind", "TypeScript"],
  },
  {
    title: "Weather App",
    image: "src/images/weather-app.webp",
    description: [
      "Developed a web application for showing the weather forecast using NodeJs and ExpressJs.",
      "Provides real-time weather updates by fetching data from reliable third-party weather APIs, ensuring users always have the latest information.",
      "Offers weather forecasts based on the user's current location or any specified location, allowing users to check weather conditions for multiple regions.",
      "Displays comprehensive weather details including temperature, humidity, wind speed, and atmospheric pressure, providing users with a complete weather overview.",
    ],
    tech: ["NodeJs", "ExpressJs", "JavaScript"],
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
