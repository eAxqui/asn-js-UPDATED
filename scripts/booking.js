/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

// prices
const FULL_DAY_RATE = 35;
const HALF_DAY_RATE = 20;

// state
let currentRate = FULL_DAY_RATE;
const selectedDays = new Set();


/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

// grab elements from the DOM
const dayElements = document.querySelectorAll(".day-selector li");
const fullButton = document.getElementById("full");
const halfButton = document.getElementById("half");
const clearButton = document.getElementById("clear-button");
const costDisplay = document.getElementById("calculated-cost");


/********* initialise default (full day) *********/
function init() {
  currentRate = FULL_DAY_RATE;
  fullButton.classList.add("clicked");
  halfButton.classList.remove("clicked");
  updateCost();
}


/********* day selection – can select MANY *********/
dayElements.forEach((dayEl) => {
  dayEl.addEventListener("click", () => {
    const dayId = dayEl.id;

    // toggle visual state
    dayEl.classList.toggle("clicked");

    if (dayEl.classList.contains("clicked")) {
      // add to selected set
      selectedDays.add(dayId);
    } else {
      // remove from selected set
      selectedDays.delete(dayId);
    }

    updateCost();
  });
});

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

/********* clear all days *********/
clearButton.addEventListener("click", () => {
  selectedDays.clear();
  dayElements.forEach((dayEl) => dayEl.classList.remove("clicked"));
  updateCost();
});





/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

/********* change rate: HALF *********/
halfButton.addEventListener("click", () => {
  currentRate = HALF_DAY_RATE;
  halfButton.classList.add("clicked");
  fullButton.classList.remove("clicked");
  updateCost();
});



// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

/********* change rate: FULL *********/
fullButton.addEventListener("click", () => {
  currentRate = FULL_DAY_RATE;
  fullButton.classList.add("clicked");
  halfButton.classList.remove("clicked");
  updateCost();
});




/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

/********* helper: recalc and display total *********/
function updateCost() {
  const total = selectedDays.size * currentRate;
  costDisplay.textContent = total;
}

/********* INITIALIZATION *********/
init();