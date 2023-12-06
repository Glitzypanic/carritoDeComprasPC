// llamar los elementos del html
const draggableDiv = document.getElementById('cardDrag');
const dropZone = document.getElementById('itemsContainer');

// Funcion dragstart
function dragStart(event) {
    event.dataTransfer.effectAllowed = 'move';
    event.dataTransfer.setData('text/plain', draggableDiv.id);
}

// Permitir el drop
function dragOver(event) {
    event.preventDefault();
}

// Funcion drop
function drop(event) {
    event.preventDefault();

    var draggableDivId = event.dataTransfer.getData('text/plain');
    var draggedDiv = document.getElementById(draggableDivId);


    var dropZoneStyle = window.getComputedStyle(dropZone);


    dropZone.appendChild(draggedDiv);
}

draggableDiv.addEventListener('dragstart', dragStart);
dropZone.addEventListener('dragover', dragOver);
dropZone.addEventListener('drop', drop);