    function toggleMusic() {
  var music = document.getElementById("myMusic");
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
}

  window.addEventListener('mousemove', function(e) {
    // Create new element on move
    var textNode = document.createElement('div');
    textNode.className = 'mouse-text';
    textNode.innerText = 'Anime Is Amazing'; // Change text here
    
    // Set random position, size, and color
    textNode.style.left = e.pageX + 'px';
    textNode.style.top = e.pageY + 'px';
    textNode.style.fontSize = Math.random() * 50 + 10 + 'px';
    textNode.style.color = `rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`;
    
    document.body.appendChild(textNode);
    
    // Remove element after short time to keep performance high
    setTimeout(() => {
      textNode.remove();
    }, 500);
  });

    document.addEventListener('mousemove', (e) => {
      // Get cursor position as percentages of the window size
      const x = Math.round((e.clientX / window.innerWidth) * 255);
      const y = Math.round((e.clientY / window.innerHeight) * 255);
      
      // Apply coordinates to RGB values (Red = X, Green = Y, Blue = fixed 150)
      document.body.style.backgroundColor = `rgb(${x}, ${y}, 150)`;
    });

        let score = 0;
        const scoreDisplay = document.getElementById("score");
        const button = document.getElementById("power-button");

        button.onclick = function() {
            score++;
            scoreDisplay.textContent = score;
            
            // Add a little animation effect on click
            button.style.backgroundColor = "#00ffdd";
            setTimeout(() => {
                button.style.backgroundColor = "#ff6088";
            }, 100);
        }

        const textElement = document.getElementById('interactive-text');

        // Listen for mouse movement over the specific span
        textElement.addEventListener('mousemove', () => {
            // Generate random values
            const randomSize = Math.floor(Math.random() * (50 - 16 + 1)) + 16; // Range: 16px to 50px
            const randomColor = `rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`;

            // Apply random styles
            textElement.style.fontSize = randomSize + 'px';
            textElement.style.color = randomColor;
        });

        // Optional: Reset on mouse leave
        textElement.addEventListener('mouseleave', () => {
            textElement.style.fontSize = 'initial';
            textElement.style.color = 'initial';
        });

    const ghost = document.getElementById('ghost');
    let mouseX = 0, mouseY = 0;
    let ghostX = 0, ghostY = 0;
    let offset = { x: 0, y: 0 };

    // Follow mouse
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    // Keyboard controls to move away from mouse
    document.addEventListener('keydown', (e) => {
        const speed = 20;
        if (e.key === 'ArrowUp') offset.y -= speed;
        if (e.key === 'ArrowDown') offset.y += speed;
        if (e.key === 'ArrowLeft') offset.x -= speed;
        if (e.key === 'ArrowRight') offset.x += speed;
    });

    // Animation Loop
    function animate() {
        // Smoothly follow (LERP)
        ghostX += (mouseX + offset.x - ghostX) * 0.1;
        ghostY += (mouseY + offset.y - ghostY) * 0.1;
        ghost.style.left = ghostX + 'px';
        ghost.style.top = ghostY + 'px';

        // Particles
        createParticle(ghostX, ghostY);
        requestAnimationFrame(animate);
    }

    function createParticle(x, y) {
        const p = document.createElement('div');
        p.classList.add('particle');
        p.style.left = x + (Math.random() * 20 - 10) + 'px';
        p.style.top = y + (Math.random() * 20 - 10) + 'px';
        document.body.appendChild(p);
        setTimeout(() => p.remove(), 800);
    }

    animate();

const btn = document.getElementById('toggleBtn');
const image = document.getElementById('pic');

btn.addEventListener('click', () => {
  // .toggle() adds the class if it's missing, and removes it if it's present
  image.classList.toggle('hidden');
});

    // Interaction 1: Opening/Closing Windows
    function toggleWindow(id) {
        const win = document.getElementById(id);
        if (win.style.display === "block") {
            win.style.display = "none";
        } else {
            win.style.display = "block";
            // Randomly position or center it
            win.style.top = "150px";
            win.style.left = "150px";
        }
    }

    // Interaction 2: Start Menu Toggle
    function toggleStartMenu() {
        const menu = document.getElementById('start-menu');
        menu.style.display = menu.style.display === "block" ? "none" : "block";
    }

    // Close menus if clicking desktop
    document.getElementById('desktop').addEventListener('click', function(e) {
        if (e.target.id === 'desktop') {
            document.getElementById('start-menu').style.display = 'none';
        }
    });

    // Interaction 3: Draggable Windows (Simple)
    const windows = document.querySelectorAll('.window');
    windows.forEach(win => {
        const titleBar = win.querySelector('.title-bar');
        let isDragging = false;
        
        titleBar.onmousedown = (e) => {
            isDragging = true;
            console.log("isdragging:",isDragging);
            let offset = [win.offsetLeft - e.clientX, win.offsetTop - e.clientY];
            
            document.onmousemove = (ev) => {
                if (isDragging==true) {
                    win.style.left = (ev.clientX + offset[0]) + 'px';
                    win.style.top = (ev.clientY + offset[1]) + 'px';
                }else{
                    win.style.left=0;
                    win.style.top=0;
                    console.log("changeBack");
                }
            };
        };


    });