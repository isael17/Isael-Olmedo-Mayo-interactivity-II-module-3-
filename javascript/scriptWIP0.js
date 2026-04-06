let brightness = 355;

let firstButton = document.getElementById('button1');

firstButton.style.backgroundColor = `rgb(${brightness}, ${brightness}, ${brightness})`;

brightness -= 50;

function openNextButton(nextButtonId){
    let nextButtonElement =document.getElementById(nextButtonId); 

    nextButtonElement.classList.remove('hidden');

    let color = `rgb(${brightness}, ${brightness}, ${brightness})`;

    nextButtonElement.style.backgroundColor = color;

    brightness -=50;
}

let fifthButton = document.getElementById('button5');

function addThreeButtons(nextButtonId) {
  const container = document.getElementById('button5');

  // Loop twice to create two buttons
  for (let i = 0; i < 3; i++) {
    const newButton = document.createElement('button6');
    newButton.innerText = "FUN, What Is Happening";
    
    newButton.style.margin = "5px";
    
    container.appendChild(newButton);
  }
}
const btn = document.getElementById('button1');

btn.addEventListener('click', function() {
  // Generate a random hex color
  const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
  document.body.style.backgroundColor = randomColor;
  this.style.transform = "scale(1.1)"; // Add a small pop effect
  setTimeout(() => this.style.transform = "scale(1)", 100);
});

{
const btn = document.getElementById('button5');

btn.addEventListener('click', function() {
  // 1. Move the existing button to a random position
  const randomTop = Math.floor(Math.random() * (window.innerHeight - 50));
  const randomLeft = Math.floor(Math.random() * (window.innerWidth - 100));
  
  btn.style.top = randomTop + 'px';
  btn.style.left = randomLeft + 'px';

  // 2. Create a new button
  const newBtn = document.createElement('button');
  newBtn.innerText = 'This Is So Much';
  
  // Optional: Style the new button to keep it visible
  newBtn.style.margin = '5px';
  
  // 3. Append the new button to the body
  document.body.appendChild(newBtn);
});

}







