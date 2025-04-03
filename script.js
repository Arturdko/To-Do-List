"use strict";
const inputBox = document.querySelector(".input-box");
const taskList = document.querySelector(".list");
const box = document.querySelector(".box");

//
// Adding new tasks:
inputBox.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    // Create a new list item
    const listItem = document.createElement("li");
    // // Create the paragraph
    const paragraph = document.createElement("p");
    // Set task text in paragraph
    paragraph.textContent = inputBox.value;
    // Add the item to the list if string isn't empty and add till task number is 7 max
    if (inputBox.value && inputBox.value != " ") {
      if (taskList.childElementCount <= 6) {
        // To add list item:
        taskList.appendChild(listItem);

        // Append the paragraph to the list item
        paragraph.classList.add("para");
        listItem.appendChild(paragraph);

        // Append the list item to the task list
        //document.getElementById("taskList").appendChild(listItem);
        //
        //
        // To add button delete tasks
        const btn = document.createElement("button");
        btn.textContent = "✖";
        btn.classList.add("delete-btn"); // Add a class to the button for styling and identification
        listItem.appendChild(btn);
        //
        //
        // Add checkbox for the tasks:
        const btnDone = document.createElement("button");
        btnDone.textContent = "✔";
        btnDone.classList.add("done-btn"); // Add a class to the button for styling and identification
        listItem.appendChild(btnDone);
        //
        //
        //
      } else if (inputBox.value && taskList.childElementCount >= 6) {
        let currentHeight = parseInt(window.getComputedStyle(box).height);
        box.style.height = currentHeight + 75 + "px";
        taskList.appendChild(listItem);
      }
    }

    // Clear the input field
    inputBox.value = "";
  }
});

// Button to delete tasks:
taskList.addEventListener("click", function (event) {
  if (event.target.classList.contains("delete-btn")) {
    event.target.closest("li").remove(); // Remove the task
  }
});

// To check tasks
taskList.addEventListener("click", function (event) {
  if (event.target.classList.contains("done-btn")) {
    // make the task crossed
    // Find the paragraph inside the clicked task item
    const listItem = event.target.closest("li");
    const taskParagrapf = listItem.querySelector(".para");
    // Add a class to mark the task as done
    taskParagrapf.classList.add("task-done");
  }
});
