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

$('.nav').click(function() {
  var id = $(this).attr('id');
  $('html, body').animate({
    scrollTop: $('#' + id).offset().top
  }, 1000);
});

