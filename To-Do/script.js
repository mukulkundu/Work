let data = [];

let taskList = document.querySelector(".tasks");

const button = document.getElementById("additem");

button.addEventListener("click", () => {
    addItem();
    clearTextbox();
});

function addItem() {
      const currentdata = document.getElementById("todo-text").value;
    data.push({
      title: currentdata,
      state: 'pending'
    });
    let taskItem = createListItem(currentdata);
    let li = document.createElement('li');
    li.classList.add('taskitem')
    li.id = "li-"+currentdata;
    li.innerHTML=taskItem;

    taskList.appendChild(li);
}

function clearTextbox(){
  let taskInputField = document.getElementById("todo-text");

  taskInputField.value = "";
}

function checkBoxChange(event) {
    if(event.checked) {
        // our todo is done
        let dataItem = data.find(d => d.title == event.id);           dataItem.state = 'done';
      
        let title = document.getElementById('title-'+event.id);

      title.style.textDecoration="line-through";
        
    } else {
              // our todo is pending
        let dataItem = data.find(d => d.title == event.id);           dataItem.state = 'pending';
      
        let title = document.getElementById('title-'+event.id);

      title.style.textDecoration="none";
    }
}

function deleteItem(event) {
  let li = document.getElementById("li-"+event.id);
  li.remove();
}

function createListItem(taskName) {
  return `<span id="title-${taskName}" >${taskName}</span> <div class="buttons">
                            <input class="checkbox" type="checkbox" value="" onChange="checkBoxChange(this)" class="task-checkbox"  id="${taskName}">
                            <label></label>
                            <img id="${taskName}" src="/Aeroqube/To-Do/delete.png" class="delete" onclick="deleteItem(this)">
                        </div>`
} 

