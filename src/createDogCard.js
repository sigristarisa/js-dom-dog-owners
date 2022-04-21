const createDogCard = (dog) => {
  const formContainer = document.getElementById("main__dog-section-form");
  const dogCardContainer = document.getElementById("main__dog-section-dog");
  const dogName = document.querySelector("h2");
  const img = document.querySelector("img");
  const bioText = document.getElementById("bio-text");
  const dogBtn = document.getElementById("dogBtn");
  const isGoodDog = document.getElementById("is-good-dog");

  formContainer.style.display = "none";
  dogCardContainer.style.display = "block";
  dogName.innerText = dog.name;
  img.src = dog.image;
  bioText.innerText = dog.bio;

  dog.isGoodDog
    ? (dogBtn.innerText = "Good Dog") &&
      (isGoodDog.innerHTML = "<em>Is naughty?</em> Yes!</p>")
    : (dogBtn.innerText = "Bad Dog") &&
      (isGoodDog.innerHTML = "<em>Is naughty?</em> No!</p>");
};

export default createDogCard;
