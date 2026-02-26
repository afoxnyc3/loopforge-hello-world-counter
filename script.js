/**
 * script.js — Hello World Counter
 * Vanilla JS, no external dependencies.
 * Handles increment and reset interactions.
 */

document.addEventListener('DOMContentLoaded', () => {
  const counterDisplay = document.getElementById('counter-display');
  const incrementBtn = document.getElementById('increment-btn');
  const resetBtn = document.getElementById('reset-btn');

  let count = 0;

  /**
   * Trigger a brief CSS animation on the counter display
   * to give tactile feedback on each interaction.
   */
  function animateBump() {
    counterDisplay.classList.remove('bump');
    // Force reflow so removing + re-adding the class always triggers the transition
    void counterDisplay.offsetWidth;
    counterDisplay.classList.add('bump');

    counterDisplay.addEventListener(
      'transitionend',
      () => counterDisplay.classList.remove('bump'),
      { once: true }
    );
  }

  /**
   * Update the DOM to reflect the current count value.
   */
  function updateDisplay() {
    counterDisplay.textContent = count;
  }

  /**
   * Increment handler — increases count by 1 and refreshes the display.
   */
  incrementBtn.addEventListener('click', () => {
    count += 1;
    updateDisplay();
    animateBump();
  });

  /**
   * Reset handler — returns count to 0 and refreshes the display.
   */
  resetBtn.addEventListener('click', () => {
    if (count === 0) return; // no-op if already at zero
    count = 0;
    updateDisplay();
    animateBump();
  });
});
