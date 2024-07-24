let data = [];
let originalData = [];

let sortButton = document.getElementById("move-down-toggler");
let taskList = document.querySelector(".tasks");
const button = document.getElementById("additem");

let enterPress = document.getElementById("todo-text");

button.addEventListener("click", () => {
  addItem();
  clearTextbox();
});

function addItem() {
  const currentdata = document.getElementById("todo-text").value;

  if (currentdata == "") {
    alert("Enter Some Task");
  } else {
    let newItem = {
      title: currentdata,
      state: '0'
    };
    data.push(newItem);
    originalData.push(newItem);

    let taskItem = createListItem(currentdata);
    let li = document.createElement('li');
    li.classList.add('taskitem');
    li.id = "li-" + currentdata;
    li.innerHTML = taskItem;

    taskList.appendChild(li);
  }
}

function clearTextbox() {
  let taskInputField = document.getElementById("todo-text");
  taskInputField.value = "";
}

function checkBoxChange(event) {
  let dataItem = data.find(d => d.title == event.id);
  let originalDataItem = originalData.find(d => d.title == event.id);
  if (event.checked) {
    dataItem.state = '1';
    originalDataItem.state = '1';
    let title = document.getElementById('title-' + event.id);
    title.style.textDecoration = "line-through";
  } else {
    dataItem.state = '0';
    originalDataItem.state = '0';
    let title = document.getElementById('title-' + event.id);
    title.style.textDecoration = "none";
  }
}

function deleteItem(event) {
  let li = document.getElementById("li-" + event.id);
  li.remove();
  data = data.filter(d => d.title !== event.id);
  originalData = originalData.filter(d => d.title !== event.id);
}

function sortItems(event) {
  if (event.checked) {
    data.sort(comparator);
  } else {
    data = [...originalData];
  }
  renderList();
}

function comparator(a, b) {
  return a.state - b.state;
}

function createListItem(taskName, checked = false) {
  return `<span style="${checked ? 'text-decoration: line-through' : ''}" id="title-${taskName}">${taskName}</span> 
          <div class="buttons">
            <input class="checkbox" ${checked ? 'checked' : ''} type="checkbox" onChange="checkBoxChange(this)" class="task-checkbox" id="${taskName}">
            <label></label>
            <img id="${taskName}" src="/Aeroqube/To-Do/delete.png" class="delete" onclick="deleteItem(this)">
          </div>`;
}

function renderList() {
  taskList.innerHTML = '';
  data.forEach(item => {
    let taskItem = createListItem(item.title, item.state === '1');
    let li = document.createElement('li');
    li.classList.add('taskitem');
    li.id = "li-" + item.title;
    li.innerHTML = taskItem;
    taskList.appendChild(li);
  });
}


enterPress.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addItem();
    clearTextbox();
  }
})