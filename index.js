function changeViewportScale() {
    // Get the viewport meta tag
    var metaViewport = document.querySelector('meta[name="viewport"]');
  
    metaViewport.setAttribute('content', 'width=device-width, initial-scale=1.75');
}
  // Call the function on page load and on resize
  window.addEventListener('load', changeViewportScale);
  window.addEventListener('resize', changeViewportScale);