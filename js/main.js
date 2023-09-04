// for nav
let nav = document.querySelector("nav");
let burgerIcon = document.querySelector(".burger-icon");

const handleMenu = () => {
  nav.classList.toggle("show-nav");
  burgerIcon.classList.toggle("move-burger");
};

burgerIcon.addEventListener("click", handleMenu);

nav.addEventListener("click", () => {
  nav.classList.remove("show-nav"); // to close nav menu on click
});

let year = document.querySelector("span");
let date = new Date();
year.innerHTML = date.getFullYear();

// generate projects
const projects = [
  {
    img: "../imgs/dashboard.PNG",
    title: "Student Dashboard",
    description:
      "an interactive dashboard for students to help them analyze their performance with productive tools",
    tools: "HTML, CSS, JavaScript",
    link: "https://youssefhassany.github.io/studentDashboard/",
    github: "https://github.com/youssefHassany/studentDashboard",
  },
  {
    img: "../imgs/e-commerce.PNG",
    title: "E-Commerce Website",
    description:
      "an E-commerce website with react, you can search products, see products data, add products to cart nad more...",
    tools: "ReactJS, tailwindCSS",
    link: "https://e-commerce-react-tawny.vercel.app/",
    github: "https://github.com/youssefHassany/e-commerce-react",
  },
  {
    img: "../imgs/social-media.PNG",
    title: "Social Media Website",
    description:
      "an imaginary social media website with a feed page and you can add a post and see profiles",
    tools: "ReactJS, tailwindCSS",
    link: "https://social-media-app-silk-zeta.vercel.app/",
    github: "https://github.com/youssefHassany/social-media",
  },
  {
    img: "../imgs/findMyCash.PNG",
    title: "FindMyCash",
    description:
      "a friendly cash tracker that will help you keep track with all your purchases",
    tools: "ReactJS, tailwindCSS",
    link: "https://find-my-cash.vercel.app/",
    github: "https://github.com/youssefHassany/find-my-cash",
  },
  {
    img: "../imgs/todo.PNG",
    title: "React tailwind todo list",
    description: "basic Todo List App made with react.js & tailwindCSS",
    tools: "ReactJS, tailwindCSS",
    link: "https://react-tailwind-todo-app.vercel.app/",
    github: "https://github.com/youssefHassany/react-tailwind-todo-app",
  },
];

let portofolioSection = document.getElementById("portofolio");
portofolioSection.innerHTML = projects.map(
  (project) =>
    `<div class="project">
  <img src=${project.img} alt="" />

  <div class="txt-container">
    <h3>${project.title}</h3>
    <p>
      ${project.description}
    </p>
    <p>Tools: ${project.tools}</p>
    <div class="links">
      <a
        href=${project.link}
        class="visit"
        target="_blank"
        >Visit</a
      >
      <a
        href=${project.github}
        class="github"
        target="_blank"
        >GitHub</a
      >
    </div>
  </div>
</div>`
);
