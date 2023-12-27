const taskList = [];

//for creating a list of tasks
function createList(taskList){
const numberOfTask = parseInt(prompt("How many task you want to create? (Enter a integer val)"));

  for(i = 0; i<numberOfTask; i++){
    const list = prompt("Enter your task here:");
    taskList.push(list);
  }

  for(i = 0; i<numberOfTask; i++){
    console.log(taskList[i]);
  }
}

//for deleting the task;
function deleteList(taskList){
const indexNumber = parseInt(prompt("Which task you want to delete? Enter a serial number."));

taskList.splice(indexNumber, 1);
for(i = 0; i<taskList.length; i++){
  console.log(taskList[i]);
}
}

createList(taskList);
deleteList(taskList);
