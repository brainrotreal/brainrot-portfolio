const items = document.querySelectorAll('.item');

items.forEach((item) => {
  item.addEventListener('mouseover', () => {
    document.body.classList.add('pause-animations');
  });

  item.addEventListener('mouseout', () => {
    document.body.classList.remove('pause-animations');
  });
});