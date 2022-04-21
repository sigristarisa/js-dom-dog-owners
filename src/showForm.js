const showForm = () => {
  const dogName = document.querySelector("h2");
  const formContainer = document.getElementById("main__dog-section-form");
  const dogCardContainer = document.getElementById("main__dog-section-dog");

  dogName.innerText = "add a new Dog";
  formContainer.style.display = "block";
  dogCardContainer.style.display = "none";
};

export default showForm;
