// Variables
    var petElement = document.getElementById('pet');
    var mouseX = 0;
    var mouseY = 0;
    var petX = 0;
    var petY = 0;

    // Function to update pet's position
    function updatePosition() {
      var dx = mouseX - petX;
      var dy = mouseY - petY;
      var speed = 5;

      if (Math.abs(dx) > speed || Math.abs(dy) > speed) {
        var angle = Math.atan2(dy, dx);
        var velocityX = Math.cos(angle) * speed;
        var velocityY = Math.sin(angle) * speed;

        petX += velocityX;
        petY += velocityY;

        petElement.style.left = petX + 'px';
        petElement.style.top = petY + 'px';
      }

      requestAnimationFrame(updatePosition);
    }

    // Function to track mouse movement
    function trackMouse(event) {
      mouseX = event.clientX;
      mouseY = event.clientY;
    }

    // Event listener to track mouse movement
    document.addEventListener('mousemove', trackMouse);

    // Initialize pet's position
    petX = window.innerWidth / 2;
    petY = window.innerHeight / 2;
    petElement.style.left = petX + 'px';
    petElement.style.top = petY + 'px';

    // Start updating pet's position
    updatePosition();
