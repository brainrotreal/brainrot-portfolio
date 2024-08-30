const items = document.querySelectorAll('.item');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
})

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

items.forEach((item) => {
  item.addEventListener('mouseover', () => {
    document.body.classList.add('pause-animations');
  });

  item.addEventListener('mouseout', () => {
    document.body.classList.remove('pause-animations');
  });
});