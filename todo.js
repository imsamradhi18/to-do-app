let todoList = [
  { item: "Buy groceries", dueDate: "2026-04-03", done: false },
  { item: "Clean the house", dueDate: "2026-04-03", done: false },
  { item: "Finish homework", dueDate: "2026-04-03", done: false },
];

let currentFilter = "all";

displayItems();

document.querySelector("#todo-input").addEventListener("keydown", function(e) {
  if (e.key === "Enter") addTodo();
});

function addTodo() {
  let inputElement = document.querySelector("#todo-input");
  let dateElement  = document.querySelector("#todo-date");
  let errorMsg     = document.querySelector("#error-msg");

  let todoItem = inputElement.value.trim();
  let todoDate = dateElement.value;

  if (!todoItem && !todoDate) {
    errorMsg.textContent = "⚠ Please enter a task and a due date.";
    return;
  }
  if (!todoItem) {
    errorMsg.textContent = "⚠ Please enter a task name.";
    return;
  }
  if (!todoDate) {
    errorMsg.textContent = "⚠ Please select a due date.";
    return;
  }

  errorMsg.textContent = "";
  todoList.push({ item: todoItem, dueDate: todoDate, done: false });
  inputElement.value = "";
  dateElement.value  = "";
  displayItems();
}

function formatDate(dateStr) {
  if (!dateStr) return "No date";
  let [y, m, d] = dateStr.split("-");
  return `${d}/${m}/${y}`;
}

function deleteTodo(index) {
  todoList.splice(index, 1);
  displayItems();
}

function toggleDone(index) {
  todoList[index].done = !todoList[index].done;
  displayItems();
}

function setFilter(filter, btn) {
  currentFilter = filter;
  document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  displayItems();
}

function getSortedFiltered() {
  let list = todoList.map((t, i) => ({ ...t, originalIndex: i }));

  // Filter
  if (currentFilter === "pending") list = list.filter(t => !t.done);
  if (currentFilter === "done")    list = list.filter(t => t.done);

  // Sort
  let sort = document.querySelector("#sort-select").value;
  if (sort === "date-asc")  list.sort((a, b) => a.dueDate.localeCompare(b.dueDate));
  if (sort === "date-desc") list.sort((a, b) => b.dueDate.localeCompare(a.dueDate));
  if (sort === "name")      list.sort((a, b) => a.item.localeCompare(b.item));

  return list;
}

function displayItems() {
  let container = document.querySelector(".todo-container");
  let countEl   = document.querySelector("#todo-items");
  let list      = getSortedFiltered();

  if (list.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <span>✅</span>
        ${currentFilter === "done" ? "No completed tasks yet." : "All done! Add a new task above."}
      </div>`;
    countEl.textContent = "";
    return;
  }

  let newHtml = "";
  for (let i = 0; i < list.length; i++) {
    let { item, dueDate, done, originalIndex } = list[i];
    newHtml += `
      <div class="todo-row ${done ? "done" : ""}">
        <span class="task-name">${item}</span>
        <span class="task-date">${formatDate(dueDate)}</span>
        <button class="btn-delete" onclick="deleteTodo(${originalIndex})">Delete</button>
        <button class="btn-complete" onclick="toggleDone(${originalIndex})" title="${done ? "Mark pending" : "Mark done"}">✓</button>
      </div>
    `;
  }

  container.innerHTML = newHtml;

  let total   = todoList.length;
  let done    = todoList.filter(t => t.done).length;
  countEl.textContent = `${done}/${total} completed`;
}