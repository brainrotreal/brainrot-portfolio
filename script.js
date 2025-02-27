const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      if (entry.target.classList.contains('inactive-letter')) {
        entry.target.classList.remove('inactive-letter');
        entry.target.classList.add('letter-animation');
      }
    } else {
      entry.target.classList.remove('show');
      if (entry.target.classList.contains('letter-animation')) {
        entry.target.classList.remove('letter-animation');
        entry.target.classList.add('inactive-letter');
      }
    }
  });
})

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

const socials = document.querySelectorAll('.socials a');

for (item of socials) {
  item.addEventListener('click', () => {
    item.classList.add('clicked');
    setTimeout(() => {
      item.classList.remove('clicked');
    }, 1000);
  });
}