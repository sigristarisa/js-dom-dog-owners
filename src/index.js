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
bioTitle.innerText = "Bio";
const bioText = document.createElement("p");
dogListDescDiv.style.display = "none";

// bottom section of dog card (buttons)
const dogListBtnDiv = document.createElement("div");
dogListBtnDiv.setAttribute("class", "main__dog-section__btn");
const isNaughty = document.createElement("p");
isNaughty.innerHTML = "<em>Is naughty?</em> yes!";
const dogBtn = document.createElement("button");
dogBtn.innerText = "Good dog";
dogListBtnDiv.style.display = "none";

// form
const addButton = document.getElementById("dogs-list__button--add");
const formContainer = document.getElementById("main__dog-section-form");
formContainer.style.display = "none";

// append all elements
dogListDescDiv.append(bioTitle, bioText);
dogListBtnDiv.append(isNaughty, dogBtn);
dogSection.append(dogName, img, dogListDescDiv, dogListBtnDiv);

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
    img.style.display = "block";
    dogListDescDiv.style.display = "block";
    dogListBtnDiv.style.display = "grid";
    dogName.innerText = dog.name;
    img.src = dog.image;
    bioText.innerText = dog.bio;
  });
});

// ********* PART 2 ********* //

addButton.addEventListener("click", () => {
  dogName.innerText = "add a new Dog";
  img.style.display = "none";
  dogListDescDiv.style.display = "none";
  dogListBtnDiv.style.display = "none";

  formContainer.style.display = "block";
});

/*
 <section class="main__dog-section">
      <h2>Add a new Dog</h2>
      <form class="form">

        <label for="name">Dog's name</label>
        <input type="text" id="name" name="name">

        <label for="image">Dog's picture</label>
        <input type="url" id="image" name="image">

        <label for="bio">Dog's bio</label>
        <textarea rows="5" id="bio" name="bio"></textarea>

        <input type="submit" id="submit" name="submit" value="Let's add a dog!" class="form__button">
      </form>
      */
