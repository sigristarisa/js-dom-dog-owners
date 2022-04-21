const isGoodDog = (dog) => {
  const dogBtn = document.getElementById("dogBtn");
  const isGoodDog = document.getElementById("is-good-dog");

  dog.isGoodDog
    ? (dogBtn.innerText = "Good Dog") &&
      (isGoodDog.innerHTML = "<em>Is naughty?</em> Yes!</p>")
    : (dogBtn.innerText = "Bad Dog") &&
      (isGoodDog.innerHTML = "<em>Is naughty?</em> No!</p>");
};

export default isGoodDog;
