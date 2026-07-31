document.addEventListener("DOMContentLoaded", () => {
    const slider = document.getElementById('slider');

    function moveslide(direction) {
        // Safe check: stops the code from crashing if a page doesn't have a slider
        if (!slider) return; 
        
        const slidewidth = slider.clientWidth;
        slider.scrollBy({
            left: direction * slidewidth,
            behavior: 'smooth'
        });
    }

    // Makes sure your HTML slider arrow buttons can still call the function
    window.moveslide = moveslide;
}); 
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
document.addEventListener("DOMContentLoaded", () => {
  // Finds buttons from BOTH index.html and property-details.html
  const headers = document.querySelectorAll(".acc-toggle, .accordion-header");

  headers.forEach(header => {
    header.addEventListener("click", () => {
      // Finds the closest wrapper card regardless of which page you are on
      const currentItem = header.closest(".acc-item, .accordion-item");

      // Closes other open accordion items on the current page
      const siblingItems = currentItem.parentElement.querySelectorAll(".acc-item, .accordion-item");
      siblingItems.forEach(item => {
        if (item !== currentItem) {
          item.classList.remove("active");
        }
      });

      // Toggles the active visibility state cleanly on click
      currentItem.classList.toggle("active");
    });
  });
});
