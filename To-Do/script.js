let data = [];

let taskList = document.querySelector(".tasks");
// Adding Items in the List
const button = document.getElementById("additem");

button.addEventListener("click", () => {
    updateData();
    addItem();

});

function updateData() {
    const currentdata = document.getElementById("todo-text").value;
    data.push(currentdata);
    // console.log(data)
}

function addItem() {
    let taskList = document.querySelector(".tasks");


    let count = 0;
    for (let task of data) {
        count++;
        // Creating the Text
        let newListItem = document.createElement("li");
        newListItem.classList.add('taskitem');
        newListItem.setAttribute("id", "list"+ count);
        newListItem.textContent = task;

        // Creating Divs
        let newDiv = document.createElement("div");
        newDiv.classList.add('buttons');


        // Creating Checkbox
        let newCheck = document.createElement("input");
        newCheck.setAttribute("type", "checkbox");
        newCheck.setAttribute("id", "check"+ count);
        newCheck.classList.add('checkbox');


        // Creating label
        let newLabel = document.createElement("label");
        newLabel.setAttribute("for", "check"+ count);


        // Creating Delete
        let newDelete = document.createElement("img");
        newDelete.setAttribute("src", "/delete.png");
        newDelete.classList.add("delete");



        // Appednding all things
        

        if (count > 1) {
            taskList.appendChild(newListItem);
            newListItem.appendChild(newDiv);
            newDiv.appendChild(newCheck);
            newDiv.appendChild(newLabel);
            newDiv.appendChild(newDelete);
        }
        else {
            taskList.replaceChildren(newListItem);
            newListItem.appendChild(newDiv);
            newDiv.appendChild(newCheck);
            newDiv.appendChild(newLabel);
            newDiv.appendChild(newDelete);
        }
    }


}



// Deletion of elements

taskList.addEventListener("click", (e) => {
    itemAlter(e);
})

function itemAlter(e){
    if(e.target.tagName=="IMG"){
        e.target.parentElement.parentElement.remove();
    }
    // else{
    //     if(e.target.checked==true){
    //         e.target.checked=false;
    //     }
    //     else{
    //         e.target.checked=true;
    //     }
    // }
    
}
