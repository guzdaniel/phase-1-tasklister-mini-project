document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.querySelector("#create-task-form")

  // listens for an input from user and displays that input in a list
  taskForm.addEventListener("submit", (event) => {
    event.preventDefault();
    //console.log(event.target["new-task-description"].value)

    //selects elements and creates a task
    const taskList = document.querySelector("#tasks")
    const task = document.createElement("li")
    task.innerText = `${event.target["new-task-description"].value} `

    //adds a delete button to each list element with an 'x'
    const deleteButton = document.createElement("button")
    deleteButton.textContent = 'x'
    task.appendChild(deleteButton)
    deleteButton.addEventListener("click", deleteTask)
    
    //adds a drop down menu to select priority color for each task
    const dropContainer = document.createElement("form")
    dropContainer.innerHTML = `
    <select id="priority">
      <option value="">Select Priority</option>
      <option value="high">High</option>
      <option value="medium">Medium</option>
      <option value="low">Low</option>
    </select>
    `

    const dropMenu = dropContainer.firstElementChild //select the task element
    dropMenu.addEventListener("change", (e) => {
      let priorityChoice = e.target.value
      if (priorityChoice === "high"){
        e.target.parentNode.parentNode.style.color = 'red'
      }
      else if (priorityChoice === "medium"){
        e.target.parentNode.parentNode.style.color = 'orange'
      }
      else if (priorityChoice === "low"){
        e.target.parentNode.parentNode.style.color = 'blue'
      }
    })

  
    task.appendChild(dropContainer)
    taskList.appendChild(task)

  })

  // deletes a task once button is clicked
  function deleteTask(event)
  {
    event.target.parentNode.remove()
  }
});
