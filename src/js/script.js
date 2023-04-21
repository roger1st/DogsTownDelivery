class MobileNavbar {
  constructor(mobileMenu, navList, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.ativoClass = "ativo";

    this.handleClick = this.handleClick.bind(this);
  }

  animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3
          }s`);
    });
  }

  handleClick() {
    this.navList.classList.toggle(this.ativoClass);
    this.mobileMenu.classList.toggle(this.ativoClass);
    this.animateLinks();
  }

  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
  }

  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
}

const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
  ".nav-list",
  ".nav-list li",
);

mobileNavbar.init();

// -----> FIM DO MENU HAMBURGUER<-----
// Seleciona o elemento da slider
var slider = document.querySelector('.slider');

// Seleciona todas as imagens dentro da slider
var sliderImages = slider.querySelectorAll('img');

// Define a variável para controlar a posição atual do slider
var currentPosition = 0;

// Define a função para mudar a posição do slider
function changePosition() {
  // Esconde a imagem atual
  sliderImages[currentPosition].style.opacity = 0;

  // Incrementa a posição atual ou retorna à posição inicial se já chegou ao final
  currentPosition = (currentPosition + 1) % sliderImages.length;

  // Mostra a próxima imagem
  sliderImages[currentPosition].style.opacity = 1;
}

// Define o intervalo de tempo para mudar a posição do slider
setInterval(changePosition, 3000);