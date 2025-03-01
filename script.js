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

const skillsContainers = document.querySelectorAll('.skills-container');

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
    skillsContainers.forEach(scroller => {
      scroller.setAttribute("data-animated", true);

      const skillsElement = scroller.querySelector('.skills')
      const skills = Array.from(skillsElement.children)

      skills.forEach(item => {
        const duplicatedItem = item.cloneNode(true);
        skillsElement.appendChild(duplicatedItem);
        duplicatedItem.setAttribute('aria-hidden', true);
        duplicatedItem.classList.add('duplicated');
      });
    });
}

