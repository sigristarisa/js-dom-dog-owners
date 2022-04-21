const createDogListItem = (name) => {
  const dogsList = document.getElementById("dogs-list");

  const dogListButton = document.createElement("li");
  dogListButton.setAttribute("class", "dogs-list__button");
  dogListButton.innerText = name;
  dogsList.append(dogListButton);
  return dogListButton;
};

export default createDogListItem;
