function changeViewportScale() {
    // Get the viewport meta tag
    var metaViewport = document.querySelector('meta[name="viewport"]');
  
    // Check if the screen width is smaller than 500px
    if (window.innerWidth < 500) {
      // Set the initial-scale to 0.8
      metaViewport.setAttribute('content', 'width=device-width, initial-scale=1.0');
    } else {
      // Set the initial-scale to 1.0
      metaViewport.setAttribute('content', 'width=device-width, initial-scale=1.75');
    }
  }
  
  // Call the function on page load and on resize
  window.addEventListener('load', changeViewportScale);
  window.addEventListener('resize', changeViewportScale);