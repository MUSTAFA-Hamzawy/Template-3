// show nav menu
let navMenuButton = document.querySelector(".logo i");
let menu = document.querySelector(".drop-down-small");
navMenuButton.onclick = function () {
  menu.classList.toggle("show");
};

// show tree view
let treeViewButton = document.querySelector(".drop-down-small .list-item i");
treeViewButton.onclick = function () {
  let listItem = document.querySelector(".drop-down-small .has-tree");
  if (
    document.querySelector(".drop-down-small .list-item .tree-items") == null
  ) {
    let ul = document.createElement("ul");
    ul.classList.add("tree-items");
    let categories = ["Tables", "Dining", "Sofas"];
    for (let i = 0; i < categories.length; i++) {
      let li = document.createElement("li");
      let a = document.createElement("a");
      a.setAttribute("href", "#");
      a.appendChild(document.createTextNode(categories[i]));
      li.appendChild(a);
      li.classList.add("tree-item", "style-none");
      ul.append(li);
    }
    listItem.appendChild(ul);
  } else {
    let listToRemove = document.querySelector(
      ".drop-down-small .list-item .tree-items"
    );
    listToRemove.parentNode.removeChild(listToRemove);
  }
};
