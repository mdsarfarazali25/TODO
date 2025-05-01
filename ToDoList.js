let inputvalue = document.getElementById("taskEnter");
let addtask = document.getElementById("addtask");
let list = document.getElementById("list");
let couction = document.getElementById("couction");

function getItemsFromLC() {
  return JSON.parse(localStorage.getItem("UserData"));
}
console.log(getItemsFromLC());
function deleteItem(item) {
  let data = getItemsFromLC();
  data.splice(item, 1);
  localStorage.setItem("UserData", JSON.stringify(data));
  displayList();
}
function displayList() {
  let listfromLC = getItemsFromLC();
  if (listfromLC != null) {
    (list.innerHTML = ""),
      listfromLC.map((item, i) => {
        list.innerHTML += `<li class="my-2 d-flex"  style=" justify-content: space-between;  border-bottom: 1px solid rgb(184, 180, 180);"> <span class="fs-1">.</span> ${item}&nbsp;&nbsp;&nbsp;<button height="10px" onclick = "deleteItem(${i})" class="btn btn-danger text-capitalize px-2 py-0 mb-2  "> delete item </button></li>`;
      });
  }
}
displayList();

addtask.addEventListener("click", () => {
  const itemText = inputvalue.value;
  if (itemText) {
    let result = getItemsFromLC();
    if (result == null) {
      let TodoList = [];
      TodoList.push(inputvalue.value.trim());
      localStorage.setItem("UserData", JSON.stringify(TodoList));
      displayList();
      inputvalue.value = "";
    } else {
      let itemsFromLC = JSON.parse(localStorage.getItem("UserData"));
      itemsFromLC.push(itemText);
      localStorage.setItem("UserData", JSON.stringify(itemsFromLC));
      displayList();
      inputvalue.value = "";
    }
  } else {
    let set = (couction.innerHTML =
      '<span class="text-danger text-capitalize fw-medium">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;******task should not be empty*******');
    return set;
  }
});
