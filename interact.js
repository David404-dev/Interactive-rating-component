const myButtons = document.querySelectorAll("button");
const mySubmitBtn = document.querySelector(".submit-btn");
const imagePlaceholder = document.getElementById("image-placeholder");
const ratingImg = document.querySelector("img");
const main = document.querySelector("main");
const h1 = document.querySelector("h1");
const p = document.querySelector("p");
const ratingDiv = document.querySelector(".rating");

// Highlights the chosen button.
for (let i = 0; i < myButtons.length; i++) {
  myButtons[i].addEventListener("click", function () {
    myButtons[i].classList.toggle("selected");
    // chosenBtn contains the selected rating number
    const chosenBtn = myButtons[i].innerHTML;

    // When submit is clicked, change html to thank you page.
    mySubmitBtn.addEventListener("click", function () {
      imagePlaceholder.removeChild(ratingImg);
      const thankYouImg = document.createElement("img");
      thankYouImg.setAttribute("src", "images/illustration-thank-you.svg");
      imagePlaceholder.appendChild(thankYouImg);
      imagePlaceholder.style.textAlign = "center";
      imagePlaceholder.style.marginBottom = "1%";
      //remove h1,p,div.rating,mySubmitBtn
      main.removeChild(h1);
      main.removeChild(p);
      main.removeChild(ratingDiv);
      main.removeChild(mySubmitBtn);

      //making a p element and showing user their selected rating
      const selectedRating = document.createElement("p");
      selectedRating.innerText = "You selected " + chosenBtn + " out of 5";
      selectedRating.style.color = "orange";
      selectedRating.style.borderRadius = "25px";
      selectedRating.style.textAlign = "center";
      selectedRating.style.width = "60%";
      selectedRating.style.padding = "1% 4%";
      selectedRating.style.backgroundColor = "hsl(213, 19%, 18%)";
      selectedRating.style.margin = "1% auto";
      main.appendChild(selectedRating);

      //make h1 that says thank you
      const tyMessage = document.createElement("h1");
      tyMessage.innerText = "Thank you!";
      tyMessage.style.textAlign = "center";
      tyMessage.style.margin = "5% auto";
      main.appendChild(tyMessage);

      //make p closing message
      const tyParagraph = document.createElement("p");
      tyParagraph.innerText =
        "We appreciate you taking the time to give a rating. If you ever need more support, don\t hesitate to get in touch!";
      main.appendChild(tyParagraph);
    });
  });
}
