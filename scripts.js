document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('.color-button');

  buttons.forEach(function(button) {
    button.addEventListener('click', function() {
      const color = this.getAttribute('data-color');
      document.body.style.backgroundColor = color;
    });
  });
});
