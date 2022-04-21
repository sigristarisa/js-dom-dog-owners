const isGoodDog = (dog) => {
  const dogBtn = document.getElementById("dogBtn");
  const isGoodDog = document.getElementById("is-good-dog");

  dog.isGoodDog
    ? (dogBtn.innerText = "Bad Dog") &&
      (isGoodDog.innerHTML = "<em>Is naughty?</em> No!</p>")
    : (dogBtn.innerText = "Good Dog") &&
      (isGoodDog.innerHTML = "<em>Is naughty?</em> Yes!</p>");
};

export default isGoodDog;
