document.querySelectorAll('#list li.strikethrough').forEach(item => {
  item.addEventListener('mouseenter', function() {
      this.classList.toggle('strikethrough');
  });
  item.addEventListener('mouseleave', function()
  {
    this.classList.add('strikethrough');
  });
});