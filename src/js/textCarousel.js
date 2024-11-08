// 02/10/2024
/**
 * TxtRotate - A rotating text effect constructor function.
 * 
 * @constructor
 * @param {HTMLElement} element - The HTML element in which to display the rotating text.
 * @param {Array<string>} toRotate - An array of strings to rotate through, displayed one by one in the specified element.
 * @param {number} period - Duration (in milliseconds) to display each full string before starting to delete it. Defaults to 8000 ms.
 * 
 * This constructor function initializes the rotating text effect on a specified HTML element.
 * It sets up variables to manage the rotation, timing, and deletion state of each text item, and starts the effect by calling the `tick()` method.
 * 
 * @example
 * const element = document.querySelector('.my-element');
 * const phrases = ['Hello', 'Bonjour', 'Hola'];
 * new TxtRotate(element, phrases, 5000); // Rotates phrases every 5 seconds
 */
var TxtRotate = function(element, toRotate, period) {
  this.toRotate = toRotate;
  this.element = element;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 8000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

/**
 * tick - Updates the text content of the element in a rotating, typing/deleting style.
 * 
 * This function determines the next text state based on whether characters are being added or deleted.
 * It then updates the element’s content, adjusting the delay (`delta`) based on typing speed.
 * The method recursively calls itself via `setTimeout` until rotation completes.
 * 
 * - Typing speed varies randomly to create a more natural effect.
 * - When a full text item is displayed, `isDeleting` switches to `true` to start deleting the text.
 * - Once deletion completes, `loopNum` increments, moving to the next text item.
 * 
 * @private
 */
TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.element.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 250 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

/**
 * window.onload - Initializes TxtRotate instances for all elements with the class `txt-rotate` on page load.
 * 
 * This function finds all elements with the class `txt-rotate` and reads their data attributes (`data-rotate` and `data-period`).
 * It then creates a new `TxtRotate` instance for each element to start the rotating text effect.
 * 
 * The function also adds a custom CSS style for a cursor effect on `.txt-rotate > .wrap` elements.
 * 
 * @example
 * <span class="txt-rotate" data-rotate='["Text 1", "Text 2"]' data-period="3000"></span>
 */
window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  var css = document.createElement("style");
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};
