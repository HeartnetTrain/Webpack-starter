const addItem = (domElement) => {
  const item = document.createElement(domElement);
  item.innerText = input.value;
  list.appendChild(item);
};

addButton.addEventListener("click", (e) => {
  e.preventDefault();

  if (input.value === "") {
    alert("Enter an item please ! ");
  } else {
    addItem("li");
    input.value = "";
  }
});

list.addEventListener("click", (e) => {
  list.removeChild(e.target);
});
