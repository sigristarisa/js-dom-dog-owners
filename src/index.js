// console.log(data);

data.forEach((dog) => {
  const dogsList = document.getElementById("dogs-list");
  const dogListButton = document.createElement("li");
  dogListButton.setAttribute("class", "dogs-list__button");
  dogListButton.innerText = dog.name;
  dogsList.append(dogListButton);
});
