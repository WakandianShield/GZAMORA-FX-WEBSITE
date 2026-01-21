const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".navbar-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});

window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar-section');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});






  const images = document.querySelectorAll('.prev-pic img');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.intersectionRatio >= 0.5) {
          entry.target.classList.add('active');
        } else {
          entry.target.classList.remove('active');
        }
      });
    },
    {
      root: document.querySelector('.prev-pic'),
      threshold: [0.5]
    }
  );

  images.forEach(img => observer.observe(img));






  const container = document.querySelector('.prev-pic');
  const slides = document.querySelectorAll('.prev-pic img');

  let index = 0;
  let autoScroll;

  function scrollToSlide(i) {
    const slideWidth = slides[0].offsetWidth + parseFloat(getComputedStyle(container).gap);
    container.scrollTo({
      left: slideWidth * i,
      behavior: 'smooth'
    });
  }

  function startAutoScroll() {
    autoScroll = setInterval(() => {
      index = (index + 1) % slides.length;
      scrollToSlide(index);
    }, 3000);
  }

  function stopAutoScroll() {
    clearInterval(autoScroll);
  }

  // Solo móvil
  if (window.innerWidth <= 768) {
    startAutoScroll();

    // pausa si el usuario interactúa
    container.addEventListener('touchstart', stopAutoScroll);
    container.addEventListener('touchend', startAutoScroll);
  }

