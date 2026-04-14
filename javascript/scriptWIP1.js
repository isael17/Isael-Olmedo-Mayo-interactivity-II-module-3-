    function toggleMusic() {
  var music = document.getElementById("myMusic");
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
}

    const ghost = document.getElementById('ghost');
    let x = window.innerWidth / 2, y = window.innerHeight / 2;
    const speed = 20;
    
    function updatePos() {
        x = Math.max(0, Math.min(window.innerWidth - 60, x));
        y = Math.max(0, Math.min(window.innerHeight - 70, y));
        ghost.style.left = x + 'px';
        ghost.style.top = y + 'px';
    }
    
    document.addEventListener('keydown', (e) => {
        if(e.key === 'ArrowUp') y -= speed;
        if(e.key === 'ArrowDown') y += speed;
        if(e.key === 'ArrowLeft') x -= speed;
        if(e.key === 'ArrowRight') x += speed;
        updatePos();
    });
    updatePos(); // Initial center

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
            let offset = [win.offsetLeft - e.clientX, win.offsetTop - e.clientY];
            
            document.onmousemove = (ev) => {
                if (isDragging) {
                    win.style.left = (ev.clientX + offset[0]) + 'px';
                    win.style.top = (ev.clientY + offset[1]) + 'px';
                }
            };
        };
        
        document.onmouseup = () => { isDragging = false; };

    });