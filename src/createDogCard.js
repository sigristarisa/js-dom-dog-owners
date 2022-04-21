const createDogCard = (dog) => {
  const formContainer = document.getElementById("main__dog-section-form");
  const dogCardContainer = document.getElementById("main__dog-section-dog");
  const dogName = document.querySelector("h2");
  const img = document.querySelector("img");
  const bioText = document.getElementById("bio-text");

  formContainer.style.display = "none";
  dogCardContainer.style.display = "block";
  dogName.innerText = dog.name;
  img.src = dog.image;
  bioText.innerText = dog.bio;
};

export default createDogCard;
