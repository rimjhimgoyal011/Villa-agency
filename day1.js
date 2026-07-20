const slider = document.getElementById('slider');

function moveslide(direction) {
  // Get width of a single slide item
  const slideWidth = slider.clientWidth;
  
  // Scroll left or right based on direction clicked (-1 or 1)
  slider.scrollBy({
    left: direction * slideWidth,
    behavior: 'smooth'
  });
}     