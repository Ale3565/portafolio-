const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont')
const smallMenu = document.querySelector('.header__sm-menu')
const headerHamMenuBtn = document.querySelector('.header__main-ham-menu')
const headerHamMenuCloseBtn = document.querySelector('.header__main-ham-menu-close')
const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link')

hamMenuBtn.addEventListener('click', () => {
  if (smallMenu.classList.contains('header__sm-menu--active')) {
    smallMenu.classList.remove('header__sm-menu--active')
  } else {
    smallMenu.classList.add('header__sm-menu--active')
  }
  if (headerHamMenuBtn.classList.contains('d-none')) {
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  } else {
    headerHamMenuBtn.classList.add('d-none')
    headerHamMenuCloseBtn.classList.remove('d-none')
  }
})

for (let i = 0; i < headerSmallMenuLinks.length; i++) {
  headerSmallMenuLinks[i].addEventListener('click', () => {
    smallMenu.classList.remove('header__sm-menu--active')
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  })
}

const headerLogoConatiner = document.querySelector('.header__logo-container')

headerLogoConatiner.addEventListener('click', () => {
  location.href = '/'
})
;

//button language

const english = document.getElementById("en")
const espanol = document.getElementById("es")
const toggle = document.getElementById("language-toggle")

toggle.addEventListener("change", function(e) {
  if (e.target.checked) {
    change(espanol, english);

  } else {
    change(english, espanol);
  }
})

function change(lang1, lang2) {

  if (lang1.innerHTML == "EN") {
    about1.innerHTML = "About";
    projects1.innerHTML = "Projects";
    contact1.innerHTML = "Contact";
    about2.innerHTML = "About";
    projects2.innerHTML = "Projects";
    contact2.innerHTML = "Contact";
    hey1.innerHTML = "Hey, I'm Alexis Levano";
    a1.innerHTML = "A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product";
    projects3.innerHTML = "Projects";
    about3.innerHTML = "About";
    here1.innerHTML = "Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology";
    get1.innerHTML = "Get to know me!";
    im1.innerHTML = `I'm a <strong>Frontend Web Developer</strong> building the
                Front-end of Websites and Web Applications that leads to the
                success of the overall product. Check out some of my work in the
                <strong>Projects</strong> section.`
    ialso1.innerHTML = `I also like sharing content related to the stuff that I have
                learned over the years in <strong>Web Development</strong> so it
                can help other people of the Dev Community. Feel free to Connect
                or Follow me on my
                <a
                  rel="noreferrer"
                  href="https://pe.linkedin.com/in/alexis-javier-levano-saire-470543230"
                  target="_blank"
                  >Linkedin</a
                >
                where I post useful content related to Web Development and
                Programming`
    imopen1.innerHTML = `I'm open to <strong>Job</strong> opportunities where I can
                contribute, learn and grow. If you have a good opportunity that
                matches my skills and experience then don't hesitate to
                <strong>contact</strong> me.`
    download1.innerHTML = "Download CV";
    myskillst1.innerHTML = "My Skills";
    projectsa.innerHTML = "Projects";
    here2.innerHTML = "Here you will find some of the personal projects that I can create. You can view each project by entering the View Project button."; 
    cubes.innerHTML = "Cubes";
    cubes1.innerHTML = `Cubes is a game that I created where people can join together to destroy as many cubes as they can and thus set their own record. Tools Used: HTML, CSS, JavaScript,Github, Netlify.`
    project1.innerHTML = "Project";
    rym1.innerHTML = `Rick and Morty is an application that shows all the details of the characters of the television series. Tools Used: HTML, CSS, JavaScript, React, Redux, SASS, Github, Netlify.`
    project2.innerHTML = "Project"
    beach1.innerHTML = `Beach Resort Hotel is an application that shows the various options when renting a hotel room.It was a great experience for me to build the entire frontend. Tools Used: HTML, CSS, JavaScript, React, Redux, SASS, Github, Netlify.`         
    project3.innerHTML = "Project";  
    contact3.innerHTML = "CONTACT";
    feel1.innerHTML = "Feel free to Contact me by submitting the form below and I will get back to you as soon as possible";
    name1.innerHTML = "Name";
    mensaje1.innerHTML = "Message";
    submit.innerHTML = "Submit";
    afront1.innerHTML = "A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product";



  } else {
    about1.innerHTML = "Acerca de Mi";
    projects1.innerHTML = "Proyectos";
    contact1.innerHTML = "Contacto";
    about2.innerHTML = "Acerca de Mi";
    projects2.innerHTML = "Proyectos";
    contact2.innerHTML = "Contacto";
    hey1.innerHTML = "Hey, soy Alexis Levano";
    a1.innerHTML = "Un desarrollador web muy enfocado que construye el Front-End de los sitios y aplicaciones web para que tengan éxito en todo el conjunto del producto.";
    projects3.innerHTML = "Proyectos";
    about3.innerHTML = "Acerca de Mi";
    here1.innerHTML = "Aquí encontrarás más información sobre mí, lo que hago y mi habilidades actuales en términos de programación y tecnología";
    get1.innerHTML = "¡Ven a conocerme!";
    im1.innerHTML = `Soy un <strong>desarrollador web </strong> que crea el Front-End de Sitios y Aplicaciones Web llevandolos al éxito del producto en general. Mira algunos de mis trabajos en la sección <strong>Proyectos</strong>.
`
    ialso1.innerHTML = `También me gusta compartir contenido relacionado con las cosas que he aprendido a lo largo de los años en <strong>Desarrollo web</strong> lo que en ocasiones puede ayudar a otras personas de la comunidad de desarrollo. Siéntase libre de conectarse o seguirme en mi <a
                  rel="noreferrer"
                  href="https://pe.linkedin.com/in/alexis-javier-levano-saire-470543230"
                  target="_blank"
                  >Linkedin</a> donde publico contenido útil relacionado con el Desarrollo y la Programación Web`
    imopen1.innerHTML = `Estoy abierto a oportunidades de <strong>trabajo</strong> donde pueda contribuir, aprender y crecer. Si tienes una buena oportunidad que coincida con mis habilidades y experiencia, entonces no dude en <strong>contactarse</strong> conmigo.`
    download1.innerHTML = "Descargar CV";
    myskillst1.innerHTML = "Mis Skills";
    projectsa.innerHTML = "Proyectos";
    here2.innerHTML = "Aquí encontrarás algunos de los proyectos personales que he creado."; 
    cubes.innerHTML = "Cubos";
    cubes1.innerHTML = `Cubos es un juego que yo hice en donde las personas pueden destruir muchos cubos y asi establecer su propio record. Tecnologias Usadas: HTML, CSS, JavaScript,Github, Netlify.`;
    project1.innerHTML = "Proyecto";
    rym1.innerHTML = `Rick and Morty es una aplicacion donde se pueden ver todos los detalles de la serie de television. Tecnologias Usadas: HTML, CSS, JavaScript, React, Redux, SASS, Github, Netlify.`;
    project2.innerHTML = "Proyecto";
    beach1.innerHTML = `Beach Resort Hotel es una aplicacion que muestra las opciones disponibles al momento de rentar una habitacion. Tecnologias Usadas: HTML, CSS, JavaScript, React, Redux, SASS, Github, Netlify.`;       
    project3.innerHTML = "Proyecto";  
    contact3.innerHTML = "CONTACTO";
    feel1.innerHTML = "No dude en ponerse en contacto conmigo enviando el siguiente formulario y yo le responderé a usted tan pronto como sea posible";
    name1.innerHTML = "Nombre";
    mensaje1.innerHTML = "Mensaje";
    submit.innerHTML = "Enviar";
    afront1.innerHTML = "Desarrollador Web que se encarga del Front-End de los sitios y aplicaciones web para que estas tengan éxito.";

  }
}