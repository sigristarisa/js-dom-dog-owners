import createDogListItem from "./createDogListItem.js";
import createDogCard from "./createDogCard.js";
import showForm from "./showForm.js";

// form
const addButton = document.getElementById("dogs-list__button--add");
const form = document.querySelector("form");
const dogBtn = document.getElementById("dogBtn");

// ********* PART 1 ********* //
data.forEach((dog) => {
  const dogListItem = createDogListItem(dog.name);
  dogListItem.addEventListener("click", () => {
    createDogCard(dog);
  });
});

// ********* PART 2 ********* //
addButton.addEventListener("click", () => {
  showForm();
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const newDog = {
    name: event.target[0].value,
    bio: event.target[2].value,
    isGoodDog: true,
    image: event.target[1].value,
  };

  data.unshift(newDog);
  createDogListItem(newDog.name);
  createDogCard(newDog);
});

// ********* EXTENDED ********* //
dogBtn.addEventListener("click", () => {
  console.log("hi");
});
