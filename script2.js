const draggableListItems = document.querySelectorAll('.draggable-list li');
const endMessage = document.getElementById('endMessage');

let selectedId;
let dropTargetId;
let matchingCounter = 0;

addEventListeners();

function dragStart(e) {
  e.preventDefault();
  if (e.type === 'touchstart') {
    selectedId = this.id;
  } else if (e.type === 'mousedown') {
    selectedId = this.id;
  }
}

function dragEnter(e) {
  e.preventDefault();
  this.classList.add('over');
}

function dragLeave() {
  this.classList.remove('over');
}

function dragOver(e) {
  e.preventDefault();
}

function dragDrop(e) {
  e.preventDefault();
  if (e.type === 'touchend') {
    dropTargetId = this.id;
  } else if (e.type === 'mouseup') {
    dropTargetId = this.id;
  }

  if (checkForMatch(selectedId, dropTargetId)) {
    hideElement(selectedId);
    hideElement(dropTargetId);
    matchingCounter++;
  } else if (checkForMatch2(selectedId, dropTargetId)) {
    hideElement(selectedId);
    hideElement(dropTargetId);
    matchingCounter++;
  }

  if (matchingCounter === 6) {
    endMessage.style.display = 'block';
  }

  this.classList.remove('over');
}

function checkForMatch(selected, dropTarget) {
  switch (selected) {
    case 'e1':
      return dropTarget === 's1';

    case 'e2':
      return dropTarget === 's2';

    case 'e3':
      return dropTarget === 's3';

    case 'e4':
      return dropTarget === 's4';

    case 'e5':
      return dropTarget === 's5';

    case 'e6':
      return dropTarget === 's6';

    default:
      return false;
  }
}

function checkForMatch2(selected, dropTarget) {
  switch (selected) {
    case 's1':
      return dropTarget === 'e1';

    case 's2':
      return dropTarget === 'e2';

    case 's3':
      return dropTarget === 'e3';

    case 's4':
      return dropTarget === 'e4';

    case 's5':
      return dropTarget === 'e5';

    case 's6':
      return dropTarget === 'e6';

    default:
      return false;
  }
}

function playAgain() {
  matchingCounter = 0;
  endMessage.style.display = 'none';
  draggableListItems.forEach(item => {
    showElement(item.id);
  });
}

function addEventListeners() {
  draggableListItems.forEach(item => {
    item.addEventListener('touchstart', dragStart, { passive: false });
    item.addEventListener('mousedown', dragStart);
    item.addEventListener('touchenter', dragEnter);
    item.addEventListener('mouseenter', dragEnter);
    item.addEventListener('touchmove', dragOver, { passive: false });
    item.addEventListener('mousemove', dragOver);
    item.addEventListener('touchend', dragDrop);
    item.addEventListener('mouseup', dragDrop);
    item.addEventListener('touchleave', dragLeave);
    item.addEventListener('mouseleave', dragLeave);
  });
}

function hideElement(id) {
  const element = document.getElementById(id);
  element.style.display = 'none';
}

function showElement(id) {
  const element = document.getElementById(id);
  element.style.display = 'block';
}
