const form = document.getElementById('newTask');
const formButton = document.querySelector('#submitButton');
var xButton = document.querySelectorAll('.x');
var checkButton = document.querySelectorAll('.check');

formButton.addEventListener('click', function() {
    const userInput = document.getElementById('newTask').value;
    const aside = document.getElementById('aside');
    console.log(userInput);

    var divElement = document.createElement('div');
    divElement.classList.add('task');

    // Create the li element and set its text content
    var liElement = document.createElement('li');
    liElement.setAttribute('id', 'taskText');
    liElement.textContent = userInput;

    // Create the two SVG elements
    var svg1 = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg1.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    svg1.setAttribute('height', '24');
    svg1.setAttribute('viewBox', '0 -960 960 960');
    svg1.setAttribute('width', '24');
    svg1.classList.add('x');
    var path1 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path1.setAttribute('d', 'm256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z');
    svg1.appendChild(path1);

    var svg2 = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg2.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    svg2.setAttribute('height', '24');
    svg2.setAttribute('viewBox', '0 -960 960 960');
    svg2.setAttribute('width', '24');
    svg2.classList.add('check');
    var path2 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path2.setAttribute('d', 'M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z');
    svg2.appendChild(path2);

    // Append the elements to the div
    divElement.appendChild(liElement);
    divElement.appendChild(svg1);
    divElement.appendChild(svg2);

    // Append the created div to the body (or any other parent element)
    aside.appendChild(divElement);
})

xButton.forEach(function(xButton) {
    xButton.addEventListener('click', function() {
      // Perform actions when the SVG element is clicked
      // For example, you can change its color, hide/show it, or trigger any function
      console.log('SVG element with class "mySVGClass" clicked!');
      // Add your actions here
    });
  });