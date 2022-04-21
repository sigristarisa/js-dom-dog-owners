const dogSection = document.getElementById("main__dog-section");
const dogsList = document.getElementById("dogs-list");

//  dog card
const dogCardContainer = document.getElementById("main__dog-section-dog");
dogCardContainer.style.display = "none";
const dogName = document.querySelector("h2");
const img = document.querySelector("img");
const bioText = document.getElementById("bio-text");
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

const createDogListItem = (name) => {
  const dogListButton = document.createElement("li");
  dogListButton.setAttribute("class", "dogs-list__button");
  dogListButton.innerText = name;
  dogsList.append(dogListButton);
  return dogListButton;
};
// ********* PART 1 ********* //
data.forEach((dog) => {
  const createDogCard = (dog) => {
    formContainer.style.display = "none";
    dogCardContainer.style.display = "block";
    dogName.innerText = dog.name;
    img.src = dog.image;
    bioText.innerText = dog.bio;
  };
  // Header
  const dogListItem = createDogListItem(dog.name);

  // when dog name is clicked
  dogListItem.addEventListener("click", createDogCard(dog));
});

// ********* PART 2 ********* //
addButton.addEventListener("click", () => {
  dogName.innerText = "add a new Dog";
  formContainer.style.display = "block";
  dogCardContainer.style.display = "none";
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  data.unshift({
    name: formName.value,
    bio: formBio.value,
    isGoodDog: true,
    image: formImg.value,
  });
});
