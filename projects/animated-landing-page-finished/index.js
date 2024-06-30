
const navItems = document.querySelectorAll('.jumbo-nav__item');
const articles = document.querySelectorAll('.article');
const navItemActiveClass = 'jumbo-nav__item--active' 

let selectedItemIndex = 0;

function onMouseOver(e) {
  const currentlyHoveredIndex = e.target.dataset.index;
  const currentItem = navItems[currentlyHoveredIndex];

  // remove previously select active class
  if (currentlyHoveredIndex !== selectedItemIndex) {
    const selectedItem = navItems[selectedItemIndex];
    if (selectedItem) {
      selectedItem.classList.remove(navItemActiveClass);

      if (articles[selectedItemIndex]) {
          articles[currentlyHoveredIndex].classList.remove('hidden');
          articles[selectedItemIndex].classList.add('hidden');
      }
    }
  }

  // set active class on new item
  if (currentItem) {
    currentItem.classList.add(navItemActiveClass);
    selectedItemIndex = currentlyHoveredIndex;
  }

  setBackgroundImage(e.target.id);
}

function setBackgroundImage(imageId) {
    const elementWithBackgroundImage = document.querySelector('.content')
    elementWithBackgroundImage.style.setProperty('--background-image', `url('./img/${imageId}.jpg')`)
}

navItems.forEach((element) => {
    element.addEventListener('mouseover', (e) => onMouseOver(e));
});