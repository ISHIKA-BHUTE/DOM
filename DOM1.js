const saveChanges = () => {
  const taskData = {
    id: `${Data.now()}`,
    imageurl: document.getElementById("imageURL").value,
    tasktitle: document.getElementById("taskTitle").value,
    tasktype: document.getElementById("taskType").value,
    taskdescription: document.getElementById("taskDescription").value
  };
  console.log(taskData);
}
