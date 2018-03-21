//todolist
function addItem(){
    //Getting input value
    var input = document.getElementById("input").value;
    var ul = document.getElementById("list");

    //Creating and adding list item
    var li = document.createElement("li");
    li.innerHTML = input;
    li.setAttribute("id", Math.random());

    //Edit Button
    var editButton = document.createElement("button");
    editButton.innerHTML = "Edit";
    editButton.setAttribute("onClick", "editItem(event)");
    li.appendChild(editButton);

    //Delete Button
    var deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.setAttribute("onClick", "deleteItem(event)");
    li.appendChild(deleteButton);

    //Appending items to the list
    ul.appendChild(li);

    //Clearing input
    document.getElementById("input").value = "";
}

function editItem(event){
    var getUpdateButton = document.getElementById("update");
    if(getUpdateButton){
        getUpdateButton.remove();
    }

    var currentItem = event.target.parentElement;
    console.log('currentItem.id*****');
    console.log(currentItem.id);

    var text = currentItem.childNodes[0].textContent;
    document.getElementById("input").value = text;

    var updateButton = document.createElement("button");
    updateButton.setAttribute("id", "update");
    updateButton.setAttribute("onClick", "updateItem("+ currentItem.id +")");
    updateButton.innerHTML = "Update";

    var body = document.getElementById('body');
    var ol = document.getElementById('list');
    body.insertBefore(updateButton, ol);
}

function deleteItem(event){
    var currentItem = event.target.parentElement;
    currentItem.remove();
}

function updateItem(id){
    console.log('id');
    console.log(id);
    var input = document.getElementById("input").value;

    var item = document.getElementById(id);
    item.childNodes[0].textContent = input;

}