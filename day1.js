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
document.addEventListener("DOMContentLoaded", () => {
    const headers = document.querySelectorAll(".accordion-header");

    headers.forEach(header => {
        header.addEventListener("click", () => {
            const currentItem = header.parentElement;
            
            // Optional: Close other open accordion elements if clicking a new one
            document.querySelectorAll(".accordion-item").forEach(item => {
                if (item !== currentItem) {
                    item.classList.remove("active");
                }
            });

            // Toggle active visibility state flag rule parameters
            currentItem.classList.toggle("active");
        });
    });
});
