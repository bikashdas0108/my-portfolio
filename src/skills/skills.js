const skillsContainerElement = document.getElementById("skillsContainer");

const skills = [
  {
    logo: "./src/images/js-logo.png",
    name: "JavaScript",
  },
  {
    logo: "./src/images/ts-logo.png",
    name: "TypeScript",
  },
  {
    logo: "./src/images/react-logo.png",
    name: "ReactJS",
  },
  {
    logo: "./src/images/redux-logo.png",
    name: "Redux",
  },
  {
    logo: "./src/images/node-logo.png",
    name: "NodeJs",
  },
  {
    logo: "./src/images/ajax-logo.png",
    name: "AJAX",
  },
  {
    logo: "./src/images/html-logo.png",
    name: "HTML5",
  },
  {
    logo: "./src/images/css-logo.png",
    name: "CSS3",
  },
  {
    logo: "./src/images/es6-logo.png",
    name: "ES6",
  },
  {
    logo: "./src/images/lodash-logo.png",
    name: "Lodash",
  },
  {
    logo: "./src/images/sass-logo.png",
    name: "SASS",
  },
  {
    logo: "./src/images/tailwind-logo.png",
    name: "Tailwind",
  },
  {
    logo: "./src/images/bootstrap-logo.png",
    name: "Bootstrap",
  },
  {
    logo: "./src/images/mui-logo.png",
    name: "MUI",
  },
  {
    logo: "./src/images/cicd-logo.png",
    name: "CI/CD",
  },
  {
    logo: "./src/images/git-logo.png",
    name: "Git",
  },
  {
    logo: "./src/images/cpp-logo.png",
    name: "C++",
  },
  {
    logo: "./src/images/dsa-logo.png",
    name: "DSA",
  },
];

const showSkills = () => {
  const skillsHtml = skills.map(
    (skill) => `<div class='skill'>
            <div id="${skill.name}-logo"></div>
            <div>${skill.name}</div>
        </div>`
  );

  skillsContainerElement.innerHTML = skillsHtml.join("");

  skills.forEach((skill) => {
    let image = document.createElement("img");
    image.src = skill.logo;
    image.alt = `${skill.name}-logo`;
    image.className = "skill-logo";
    const logoElement = document.getElementById(`${skill.name}-logo`);
    logoElement.appendChild(image);
  });
};

showSkills();
