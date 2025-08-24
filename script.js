const svgGroups = document.querySelectorAll("g[data-target]");
const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

// Funktion zum Öffnen/Schließen eines Accordions
function toggleAccordion(accordionHeader) {
  const accordionBody = accordionHeader.nextElementSibling;

  // Anderes geöffnetes Accordion schließen
  document.querySelectorAll(".accordion-item-header.active").forEach(activeHeader => {
    if (activeHeader !== accordionHeader) {
      activeHeader.classList.remove("active");
      activeHeader.nextElementSibling.style.maxHeight = 0;
    }
  });

  // Toggle aktuelles Accordion
  if (accordionHeader.classList.contains("active")) {
    accordionHeader.classList.remove("active");
    accordionBody.style.maxHeight = 0;
  } else {
    accordionHeader.classList.add("active");
    accordionBody.style.maxHeight = accordionBody.scrollHeight + "px";
  }
}

// Funktion für benutzerdefiniertes Scrollen mit Abstand
function scrollToWithMargin(targetSection) {
  const offset = 144; // Höhe des Headers oder gewünschter Abstand
  const topPosition = targetSection.getBoundingClientRect().top + window.pageYOffset - offset;

  window.scrollTo({
    top: topPosition,
    behavior: "smooth",
  });
}

// Klick auf `<g>`-Elemente
svgGroups.forEach(group => {
  group.addEventListener("click", () => {
    const targetId = group.getAttribute("data-target");
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      // Zum Anker springen mit Abstand
      scrollToWithMargin(targetSection);

      // Accordion öffnen
      const accordionHeader = targetSection.querySelector(".accordion-item-header");
      if (accordionHeader) {
        toggleAccordion(accordionHeader);
      }
    }
  });
});

// Klick auf Accordion-Header
accordionItemHeaders.forEach(accordionItemHeader => {
  accordionItemHeader.addEventListener("click", () => {
    toggleAccordion(accordionItemHeader);
  });
});







document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".navbar ul");

    hamburger.addEventListener("click", function () {
        hamburger.classList.toggle("active"); // Toggle das Hamburger-Icon
        navMenu.classList.toggle("show");    // Dropdown-Menü anzeigen/verstecken
    });
});








// Funktion zur Markierung der aktiven Links
function setActiveLinks(selector) {
  // Alle Links innerhalb des angegebenen Selektors abfragen
  const links = document.querySelectorAll(selector);

  // URL der aktuellen Seite abrufen
  const currentPage = window.location.pathname;

  // Durch Links iterieren und `active` hinzufügen
  links.forEach(link => {
    if (link.href.includes(currentPage)) {
      link.classList.add('active');
    }
  });
}

// Header-Links markieren
setActiveLinks('.navbar a');

// Footer-Links markieren
setActiveLinks('.footer-content a');







const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const dots = document.querySelectorAll('.dot');
const carousel = document.querySelector('.carousel');
const slides = document.querySelectorAll('.carousel > div');
let currentIndex = 0;
const totalSlides = slides.length;

// Intervall für automatisches Wechseln (alle 5 Sekunden)
let autoSlideInterval = setInterval(goToNextSlide, 10000);

// Funktion: Carousel aktualisieren
function updateCarousel() {
  const offset = -currentIndex * 100; // Position in Prozent (100% pro Slide)
  carousel.style.transform = `translateX(${offset}%)`;

  // Dot-Navigation aktualisieren
  dots.forEach((dot, index) => {
    dot.classList.remove('active');
    if (index === currentIndex) {
      dot.classList.add('active');
    }
  });
}

// Funktion: Nächsten Slide anzeigen
function goToNextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateCarousel();
}

// Funktion: Vorherigen Slide anzeigen
function goToPreviousSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  updateCarousel();
}

// Funktion: Zu einem spezifischen Slide springen (Dot-Klick)
function goToSlide(slideIndex) {
  currentIndex = slideIndex;
  updateCarousel();
}

// Event-Listener: Buttons
prevBtn.addEventListener('click', () => {
  clearInterval(autoSlideInterval); // Automatisches Abspielen anhalten
  goToPreviousSlide();
  autoSlideInterval = setInterval(goToNextSlide, 3000); // Automatik neu starten
});

nextBtn.addEventListener('click', () => {
  clearInterval(autoSlideInterval); // Automatisches Abspielen anhalten
  goToNextSlide();
  autoSlideInterval = setInterval(goToNextSlide, 3000); // Automatik neu starten
});

// Event-Listener: Dot-Navigation
dots.forEach(dot => {
  dot.addEventListener('click', (e) => {
    const slideIndex = parseInt(e.target.dataset.slide);
    clearInterval(autoSlideInterval); // Automatisches Abspielen anhalten
    goToSlide(slideIndex);
    autoSlideInterval = setInterval(goToNextSlide, 3000); // Automatik neu starten
  });
});

// Initial: Carousel-Update
updateCarousel();











