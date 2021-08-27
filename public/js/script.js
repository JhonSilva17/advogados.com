// Surgir menu
const header = document.querySelector("header")
const hero = document.querySelector("#hero")

function surgirMenuScroll() {
    const heroBounding = hero.getBoundingClientRect().bottom 

    if (heroBounding < 20) {
      header.classList.add('ativo')
    } else {
      header.classList.remove('ativo')
    }
}


// Scroll to top
function surgirButtonScrollTop() {
  const windowTop = window.pageYOffset
  const scrollTopButton = document.querySelector(".scroll-to-top")

  if (windowTop > 70) {
    scrollTopButton.classList.add('ativo')
  } else {
    scrollTopButton.classList.remove('ativo')
  }
}

window.addEventListener('scroll', ()=> {
  surgirMenuScroll(),
  surgirButtonScrollTop()
})

// Menu Mobile
const menujs = document.querySelector('nav#menujs')
const icons = document.querySelectorAll('.icon')

function toggleMenu() {
    menujs.classList.toggle('ativo')
}

icons.forEach(item => {
  item.addEventListener('click', toggleMenu)
})

// Glider js
const simpleCarousel = document.querySelector(".js-carousel--simple");
 
new Glider(simpleCarousel, {
  slidesToShow: 1,
  slidesToScroll: 1,
  draggable: true,
  dragVelocity: 1.2,
  dots: ".js-carousel--simple-dots",
  arrows: {
    prev: ".js-carousel--simple-prev",
    next: ".js-carousel--simple-next",
  },
  responsive: [
    {
      // screens greater than >= 775px
      breakpoint: 1024,
      settings: {
        // Set to `auto` and provide item width to adjust to viewport
        slidesToShow: 2,
        slidesToScroll: 1,
        itemWidth: 150,
        duration: 0.25
      }
    }],
});


// Scroll Reveal

const scrollReveal = ScrollReveal({
    origin: 'bottom',
    distance: '100px',
    duration: 1000,
    reset: true,
    delay: 20
  })
  
  scrollReveal.reveal(
    `#hero, #hero h1, #hero p, #hero .btn, 
    #about h2, #about .content-image, #about p, #about .btn,
    .media, #services .item, #services a.btn,
    #testimonials h2, #testimonials .card, 
    #contact h2, #contact p, #contact .btn, #contact .contact-media,
    footer a, footer p`, { interval: 100 }
  ) 