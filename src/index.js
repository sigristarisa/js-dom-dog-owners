const dogSection = document.getElementById("main__dog-section");

//  dog card
const dogCardContainer = document.getElementById("main__dog-section-dog");
dogCardContainer.style.display = "none";
const dogName = document.querySelector("h2");
const img = document.querySelector("img");
const bioText = document.getElementById("bio-text");

// form
const addButton = document.getElementById("dogs-list__button--add");
const formContainer = document.getElementById("main__dog-section-form");
formContainer.style.display = "none";

// ********* PART 1 ********* //
data.forEach((dog) => {
  // Header
  const dogsList = document.getElementById("dogs-list");
  const dogListButton = document.createElement("li");
  dogListButton.setAttribute("class", "dogs-list__button");
  dogListButton.innerText = dog.name;
  dogsList.append(dogListButton);

  // when dog name is clicked
  dogListButton.addEventListener("click", () => {
    formContainer.style.display = "none";
    dogCardContainer.style.display = "block";
    dogName.innerText = dog.name;
    img.src = dog.image;
    bioText.innerText = dog.bio;
  });
});

// ********* PART 2 ********* //

addButton.addEventListener("click", () => {
  dogName.innerText = "add a new Dog";
  formContainer.style.display = "block";

  dogCardContainer.style.display = "none";
});
