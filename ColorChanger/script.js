document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.color-link');
    console.log(links)
    
    links.forEach(link => {
      link.addEventListener('click', function(event) {
        const color = this.getAttribute('data-color');
        document.body.style.backgroundColor = color;
      });
    });
  });