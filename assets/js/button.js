document.querySelector('.puzzle-btn').addEventListener('mousemove', function(e) {
    const x = e.pageX - this.offsetLeft;
    const y = e.pageY - this.offsetTop;
    
    this.style.setProperty('--x', x + 'px');
    this.style.setProperty('--y', y + 'px');
  });