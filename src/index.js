import createDogListItem from "./createDogListItem.js";
import createDogCard from "./createDogCard.js";

//  dog card
const dogCardContainer = document.getElementById("main__dog-section-dog");
dogCardContainer.style.display = "none";

const isNaughty = document.getElementById("is-naughty");
const dogBtn = document.getElementById("dogBtn");

// form
const addButton = document.getElementById("dogs-list__button--add");
const formContainer = document.getElementById("main__dog-section-form");
formContainer.style.display = "none";
const form = document.querySelector("form");
const formName = document.getElementById("name");
const formImg = document.getElementById("image");
const formBio = document.getElementById("bio");

// ********* PART 1 ********* //
data.forEach((dog) => {
  const dogListItem = createDogListItem(dog.name);
  dogListItem.addEventListener("click", () => {
    createDogCard(dog);
  });
});

// ********* PART 2 ********* //
// addButton.addEventListener("click", () => {
//   dogName.innerText = "add a new Dog";
//   formContainer.style.display = "block";
//   dogCardContainer.style.display = "none";
// });

// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   data.unshift({
//     name: formName.value,
//     bio: formBio.value,
//     isGoodDog: true,
//     image: formImg.value,
//   });
// });
