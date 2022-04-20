const dogSection = document.getElementById("main__dog-section");

// top section of dog card
const dogName = document.querySelector("h2");
const img = document.createElement("img");
img.alt = "";
img.style.display = "none";

// middle section of dog card (description)
const dogListDescDiv = document.createElement("div");
dogListDescDiv.setAttribute("class", "main__dog-section__desc");
const bioTitle = document.createElement("h3");
const bioText = document.createElement("p");
dogListDescDiv.style.display = "none";

// bottom section of dog card (buttons)
const dogListBtnDiv = document.createElement("div");
dogListBtnDiv.setAttribute("class", "main__dog-section__btn");
const isNaughty = document.createElement("p");
const dogBtn = document.createElement("button");
dogListBtnDiv.style.display = "none";

// append all elements
dogListDescDiv.append(bioTitle, bioText);
dogListBtnDiv.append(isNaughty, dogBtn);
dogSection.append(dogName, img, dogListDescDiv, dogListBtnDiv);

data.forEach((dog) => {
  // Header
  const dogsList = document.getElementById("dogs-list");
  const dogListButton = document.createElement("li");
  dogListButton.setAttribute("class", "dogs-list__button");
  dogListButton.innerText = dog.name;
  dogsList.append(dogListButton);

  dogListButton.addEventListener("click", () => {
    img.style.display = "block";
    dogListDescDiv.style.display = "block";
    dogListBtnDiv.style.display = "block";
    dogName.innerText = dog.name;
    img.src = dog.image;
    bioTitle.innerText = "Bio";
    bioText.innerText = dog.bio;
    isNaughty.innerHTML = "<em>Is naughty?</em> yes!";
    dogBtn.innerText = "Good dog";
  });
});
