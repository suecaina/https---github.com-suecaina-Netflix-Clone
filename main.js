const tabItems = document.querySelectorAll(".tab-item");
const tabContentItems = document.querySelectorAll(".tab-content-item");

//Select tab content item
function selectItem(e) {
  //remove border
  removeBorder();
  //remove show
  removeShow();
  //Add border to current tab
  this.classList.add("tab-border");
  //Grab content item from DOM
  const tabContentItem = document.querySelector(`#${this.id}-content`);
  //Add showclass
  tabContentItem.classList.add("show");
}

function removeBorder() {
  tabItems.forEach((item) => item.classList.remove("tab-border"));
}

function removeShow() {
  tabContentItems.forEach((item) => item.classList.remove("show"));
}
// Listener for tab click
tabItems.forEach((item) => item.addEventListener("click", selectItem));
