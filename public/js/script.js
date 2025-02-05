// Get elements
const spinButton = document.getElementById('spin-button');
const reels = document.querySelectorAll('.reel');

// Function to start the spin
spinButton.addEventListener('click', () => {
  spinButton.disabled = true; // Disable the spin button during spin

  // Start spinning each reel with a fast spin
  reels.forEach((reel, index) => {
    // Add the spin class to trigger the spinning animation
    reel.classList.add('spin');

    // After the spinning animation, stop the reel at a random position
    setTimeout(() => {
      reel.classList.remove('spin');
      reel.classList.add('stop'); // Add the stop class to slow down the reel
      const stopPosition = Math.floor(Math.random() * 5); // Random stop position between 0-4
      reel.style.transform = `translateY(-${stopPosition * 100}px)`; // Stop at the random position
    }, 2000); // Wait for the spin animation to finish before stopping the reel
  });

  // Re-enable the button after the spin
  setTimeout(() => {
    spinButton.disabled = false;
  }, 2500); // Re-enable the button shortly after the stop animation ends
});
