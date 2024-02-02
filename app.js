function startCounter(elementId, targetValue) {
  let startTime;
  const duration = 2000;

  function cubicBezier(t) {
    return t * (2 - t); //gradual slowdown
  }

  function updateCounter(timestamp) {
    startTime = startTime || timestamp;
    const progress = Math.min(1, (timestamp - startTime) / duration);
    const easedProgress = cubicBezier(progress);
    const displayedValue = Math.round(easedProgress * targetValue);
    document.getElementById(elementId).textContent = `>${displayedValue}`;

    if (progress < 1) {
      requestAnimationFrame(updateCounter);
    }
  }

  requestAnimationFrame(updateCounter);
}

function fadeInNumberCards() {
  
  const numberCards = document.querySelectorAll('.numberCard');
  numberCards.forEach((card, index) => {
    card.style.transition = 'opacity 1s ease-out';
    setTimeout(() => {
      card.style.opacity = '1';
    }, index * 500);
  });
}


startCounter('leftCounter', 2000),
startCounter('rightCounter', 600);
setTimeout(() => {
  fadeInNumberCards();
}, 2000);

document.addEventListener("DOMContentLoaded", function() {

  var sections = document.querySelectorAll("section");

  var navLinks = document.querySelectorAll("nav a");

  function scrollToSection(index) {
    var targetSection = sections[index];
    var targetOffset = targetSection.offsetTop;

    window.scrollTo({
      top: targetOffset
    });
  }

  function updateActiveSection() {
    var viewportHeight = window.innerHeight;
    var scrollPosition = window.scrollY + viewportHeight / 2;

    sections.forEach(function(section, index) {
      var sectionTop = section.offsetTop;
      var sectionBottom = sectionTop + section.offsetHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          navLinks.forEach(function(link) {
            link.classList.remove("active");
          });
          navLinks[index].classList.add("active");
      }
    });
  }

  navLinks.forEach(function(link, index) {
    link.addEventListener("click", function(event) {
      event.preventDefault();
      scrollToSection(index);
    });
  });


  window.addEventListener("scroll", updateActiveSection);

  window.addEventListener("resize", updateActiveSection);

  updateActiveSection(); //for initial home active
});