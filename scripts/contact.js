// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

/********* Contact Page Behaviour *********/

const contactPage = document.getElementById("contact-page");
const form = contactPage.querySelector("form");
const submitButton = document.getElementById("submit-button");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // don't actually submit anywhere

  // clear the main contact area and show a single thank-you message
  contactPage.innerHTML = "";

  const message = document.createElement("p");
  message.textContent = "Thank you for your message";
  message.style.fontSize = "24px";

  contactPage.appendChild(message);
});