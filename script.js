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

const search = document.querySelector('#search-project-bar');
const categorySelector = document.querySelector('#category-selector');
const projectsContainer = document.querySelector('.projects');

search.addEventListener('input', updateProjects);
categorySelector.addEventListener('input', updateProjects);


function updateProjects() {
  const category = categorySelector ? categorySelector.value : 'all';
  const text = search ? search.value.toLowerCase() : '';
  const projectsElements = Array.from(projectsContainer.children);

  projectsElements.forEach(project => {
    let show = false;
    const projectTitleElement = project.querySelector('.project-title');

    const projectName = projectTitleElement ? projectTitleElement.textContent.toLowerCase() : '';

    if (category === 'all' || project.classList.contains(category)) {
      if (projectName.includes(text)) {
        show = true;
      }
    }

    project.style.display = show ? 'flex' : 'none';
  });
}
const closebtns = document.querySelectorAll('.closebtn');
const minbtns = document.querySelectorAll('.minbtn');

closebtns.forEach(item => {
  item.addEventListener('click', () => {
    item.parentElement.parentElement.style.height = '0px';
    item.parentElement.parentElement.style.width = '0px';
    setTimeout(() => {
      item.parentElement.parentElement.style.display = 'none';
    }, 300)
  });
});

minbtns.forEach(item => {
  item.addEventListener('click', () => {
    if (item.parentElement.parentElement.classList.contains('minimized')) {
      item.parentElement.parentElement.classList.remove('minimized');
    } else {
      item.parentElement.parentElement.classList.add('minimized');
    }
  });
});

const draggables = document.querySelectorAll('.drag');
const startingPosition = {
  x: 1200,
  y: 40
};

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closedragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closedragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

draggables.forEach(item => {
  dragElement(item);
  item.style.top = startingPosition.y + 'px';
  item.style.left = startingPosition.x + 'px';
});

const isogrid = document.querySelectorAll('.isometric-container');
const itemsCreate = 50

for (let i = 0; i < itemsCreate; i++) {
  const item = document.createElement('div');
  item.classList.add('isometric-element');
  isogrid[0].appendChild(item);
}