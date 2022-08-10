const data = [
  {
		id:1,
    title: "Portfolio",
    tecnologi:"Web App",
    images: "#",
    desc: "Este portfolio ha sido desarrollado con Vite, React y CSS vanilla con metodología BEM. He usado la API de Intersection Observer a través de un Custom Hook para los efectos.",
    links: {
      code: "https://github.com/QuiqueSupertramp/portfolio",
      web: "https://profile-target.netlify.app/",
    },
  },
  {
		id:2,
    title: "Movies App",
    tecnologi:"React JS",
    images: {
      desktop: {
        img: "images/projects/movie.png",
        alt: "Movies App Desktop",
      },
      tablet: {
        img: "images/projects/movie-tb.png",
        alt: "Movies App Tablet",
      },
      mobile: {
        img: "images/projects/movie-mb.png",
        alt: "Movies App Mobile",
      },
    },
    desc: "Buscador de peliculas con la API de TMBD, desarrollado con VITE, REACT, REACT-ROUTER y TAILWIND. Se ha reducido la carga incial de 10Mb a 885Kb usando la API de Intersection Observer y lazy loading.",
    links: {
      code: "https://github.com/QuiqueSupertramp/movie-app",
      web: "https://quiquesupertramp.github.io/movie-app/",
    },
  },
  {
		id:3,
    title: "Shop Cursos",
    tecnologi:"Angular JS",
    images:"img/work/shop.jpg",
    desc: "Página de producto multilenguaje y con gestión de opiniones (Context API). Frontend desarrollado con React y CSS modules",
    links: {
      code: "https://github.com/QuiqueSupertramp/landing-product-page-react",
      web: "https://youthful-gates-3e24d3.netlify.app/",
    },
  },
  {
		id:4,
    title: "Perfil Card",
    tecnologi:"Web design",
    images:"img/work/target.jpg",
    desc: "Aplicación fullstack responsive con login de usuario. Frontend desarrollado con Vue 3 y Vue-Router. Backend con Node y Express. Base de datos MongoDB.",
    links: {
      code2: "https://github.com/QuiqueSupertramp/API-todoList-Node",
      web: "https://profile-target.netlify.app/",
    },
  },
];

export default data;
