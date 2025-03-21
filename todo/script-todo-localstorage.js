 // Global variables
 let currentMode = 'READ';
 let selectedCategory = '';
 let todos = {};
 let deletedTodos = {};
 
 // DOM Elements
 const addBtn = document.getElementById('add-btn');
 const indexSection = document.getElementById('index-section');
 const categorySection = document.getElementById('category-section');
 const addTodoSection = document.getElementById('add-todo-section');
 const newTodoInput = document.getElementById('new-todo-input');
 
 // Initialize the app
 function initApp() {
     // Load todos from localStorage first
     loadTodosFromLocalStorage();
 
     // Check if todos object has any items
     let isEmpty = true;
     for (const category in todos) {
         if (todos[category] && todos[category].length > 0) {
             isEmpty = false;
             break;
         }
     }
 
     // Initialize with default todos if storage was empty or invalid
     if (isEmpty) {
         todos = {
             'FIT': [{ id: generateId(), text: 'FIT-Todo', done: false }],
             'EXP': [{ id: generateId(), text: 'EXP-Todo', done: false }],
             'FIN': [{ id: generateId(), text: 'FIN-Todo', done: false }],
             'FAM': [{ id: generateId(), text: 'FAM-Todo', done: false }],
             'MISC': [{ id: generateId(), text: 'MISC-Todo', done: false }]
         };
         saveTodosToLocalStorage();
     }
     
     renderTodos();
     setupEventListeners();
 }
 
 // Load todos from local storage
 function loadTodosFromLocalStorage() {
     const savedTodos = localStorage.getItem('todos');
     if (savedTodos) {
         try {
             todos = JSON.parse(savedTodos);
             // Ensure all categories exist
             const categories = ['FIT', 'EXP', 'FIN', 'FAM', 'MISC'];
             categories.forEach(category => {
                 if (!todos[category]) {
                     todos[category] = [];
                 }
             });
         } catch (e) {
             // If parsing fails, initialize with empty categories
             todos = {
                 'FIT': [],
                 'EXP': [],
                 'FIN': [],
                 'FAM': [],
                 'MISC': []
             };
         }
     } else {
         // Initialize with empty categories if no data in localStorage
         todos = {
             'FIT': [],
             'EXP': [],
             'FIN': [],
             'FAM': [],
             'MISC': []
         };
     }
     
     // Initialize deletedTodos if needed
     if (!deletedTodos) {
         deletedTodos = {};
     }
 }
 
 // Save todos to local storage
 function saveTodosToLocalStorage() {
     localStorage.setItem('todos', JSON.stringify(todos));
 }
 
 // Generate unique ID for todos
 function generateId() {
     return Date.now().toString(36) + Math.random().toString(36).substr(2);
 }
 
 // Render todos for all categories
 function renderTodos() {
     const categories = ['FIT', 'EXP', 'FIN', 'FAM', 'MISC'];
     categories.forEach(category => {
         // Ensure category exists in todos object
         if (!todos[category]) {
             todos[category] = [];
         }
         renderCategoryTodos(category);
     });
 }
 
 // Render todos for a specific category
 function renderCategoryTodos(category) {
     const todoList = document.getElementById(`${category}-todos`);
     const doneList = document.getElementById(`${category}-done`);
     
     todoList.innerHTML = '';
     doneList.innerHTML = '';
     
     // Ensure the category exists in todos
     if (!todos[category]) {
         todos[category] = [];
     }
     
     // Sort: active todos at top, completed todos at bottom
     const activeTodos = todos[category].filter(todo => !todo.done);
     const doneTodos = todos[category].filter(todo => todo.done);
     
     // Render active todos
     activeTodos.forEach(todo => {
         const todoItem = document.createElement('div');
         todoItem.className = 'todo-item';
         todoItem.dataset.id = todo.id;
         
         const checkbox = document.createElement('input');
         checkbox.type = 'checkbox';
         checkbox.className = 'todo-checkbox';
         checkbox.checked = todo.done;
         
         const todoText = document.createElement('span');
         todoText.className = 'todo-text';
         todoText.textContent = todo.text;
         
         todoItem.appendChild(checkbox);
         todoItem.appendChild(todoText);
         todoList.appendChild(todoItem);
     });
     
     // Render completed todos (newest first)
     doneTodos.reverse().forEach(todo => {
         const todoItem = document.createElement('div');
         todoItem.className = 'todo-item';
         todoItem.dataset.id = todo.id;
         
         const deleteIcon = document.createElement('span');
         deleteIcon.className = 'delete-icon';
         deleteIcon.innerHTML = '🗑️';
         
         const todoText = document.createElement('span');
         todoText.className = 'todo-text todo-done';
         todoText.textContent = todo.text;
         
         todoItem.appendChild(deleteIcon);
         todoItem.appendChild(todoText);
         doneList.appendChild(todoItem);
     });
 }
 
 // Setup event listeners
 function setupEventListeners() {
     // Add button click
     addBtn.addEventListener('click', function() {
         currentMode = 'ADD';
         indexSection.style.display = 'none';
         categorySection.style.display = 'block';
         addTodoSection.style.display = 'none';
     });
     
     // Index links click
     const indexLinks = document.querySelectorAll('.index-link');
     indexLinks.forEach(link => {
         link.addEventListener('click', function() {
             const category = this.dataset.category;
             document.getElementById(category).scrollIntoView({ behavior: 'smooth' });
         });
     });
     
     // Category links click
     const categoryLinks = document.querySelectorAll('.category-link');
     categoryLinks.forEach(link => {
         link.addEventListener('click', function() {
             selectedCategory = this.dataset.category;
             categorySection.style.display = 'none';
             addTodoSection.style.display = 'block';
             newTodoInput.focus();
         });
     });
     
     // New todo input
     newTodoInput.addEventListener('keyup', function(e) {
         if (e.key === 'Enter') {
             const text = this.value.trim();
             if (text) {
                 addNewTodo(selectedCategory, text);
             }
             // Reset and go back to READ mode
             this.value = '';
             addTodoSection.style.display = 'none';
             indexSection.style.display = 'block';
             currentMode = 'READ';
         }
     });
     
     // Todo checkbox click for marking as done
     document.addEventListener('click', function(e) {
         if (e.target.classList.contains('todo-checkbox')) {
             const todoItem = e.target.closest('.todo-item');
             const category = todoItem.closest('[id$="-section"]').id.split('-')[0];
             const todoId = todoItem.dataset.id;
             
             // Mark todo as done
             const todoIndex = todos[category].findIndex(todo => todo.id === todoId);
             if (todoIndex !== -1) {
                 todos[category][todoIndex].done = true;
                 saveTodosToLocalStorage(); // Save to localStorage
                 renderCategoryTodos(category);
             }
         }
     });
     
     // Todo text long press for editing
     let longPressTimer;
     
     document.addEventListener('mousedown', function(e) {
         if (e.target.classList.contains('todo-text') && !e.target.classList.contains('todo-done')) {
             const todoItem = e.target.closest('.todo-item');
             const category = todoItem.closest('[id$="-section"]').id.split('-')[0];
             const todoId = todoItem.dataset.id;
             
             longPressTimer = setTimeout(function() {
                 currentMode = 'UPDATE';
                 enterEditMode(todoItem, category, todoId);
             }, 3000);
         }
     });
     
     document.addEventListener('mouseup', function() {
         clearTimeout(longPressTimer);
     });
     
     // Touch events for mobile editing
     document.addEventListener('touchstart', function(e) {
         if (e.target.classList.contains('todo-text') && !e.target.classList.contains('todo-done')) {
             const todoItem = e.target.closest('.todo-item');
             const category = todoItem.closest('[id$="-section"]').id.split('-')[0];
             const todoId = todoItem.dataset.id;
             
             longPressTimer = setTimeout(function() {
                 currentMode = 'UPDATE';
                 enterEditMode(todoItem, category, todoId);
             }, 3000);
         }
     });
     
     document.addEventListener('touchend', function() {
         clearTimeout(longPressTimer);
     });
     
     // Delete icon long press
     document.addEventListener('mousedown', function(e) {
         if (e.target.classList.contains('delete-icon')) {
             const todoItem = e.target.closest('.todo-item');
             const category = todoItem.closest('[id$="-section"]').id.split('-')[0];
             const todoId = todoItem.dataset.id;
             
             longPressTimer = setTimeout(function() {
                 deleteTodo(category, todoId);
             }, 3000);
         }
     });
     
     // Touch events for deleting
     document.addEventListener('touchstart', function(e) {
         if (e.target.classList.contains('delete-icon')) {
             const todoItem = e.target.closest('.todo-item');
             const category = todoItem.closest('[id$="-section"]').id.split('-')[0];
             const todoId = todoItem.dataset.id;
             
             longPressTimer = setTimeout(function() {
                 deleteTodo(category, todoId);
             }, 3000);
         }
     });
     
     // Cancel delete click
     document.addEventListener('click', function(e) {
         if (e.target.classList.contains('cancel-delete')) {
             const category = e.target.dataset.category;
             const todoId = e.target.dataset.id;
             restoreTodo(category, todoId);
         }
     });
 }
 
 // Add new todo
 function addNewTodo(category, text) {
     const newTodo = {
         id: generateId(),
         text: text,
         done: false
     };
     
     todos[category].unshift(newTodo);  // Add to the beginning of the array
     saveTodosToLocalStorage(); // Save to localStorage
     renderCategoryTodos(category);
 }
 
 // Enter edit mode for a todo
 function enterEditMode(todoItem, category, todoId) {
     const todoText = todoItem.querySelector('.todo-text');
     const originalText = todoText.textContent;
     
     // Hide checkbox
     const checkbox = todoItem.querySelector('.todo-checkbox');
     checkbox.style.display = 'none';
     
     // Create edit field
     const editField = document.createElement('input');
     editField.type = 'text';
     editField.className = 'edit-field';
     editField.value = originalText;
     
     // Create done editing button
     const doneEditingBtn = document.createElement('button');
     doneEditingBtn.className = 'done-editing-btn';
     doneEditingBtn.textContent = 'Done editing';
     
     // Replace todo text with edit field and button
     todoText.style.display = 'none';
     todoItem.appendChild(editField);
     todoItem.appendChild(doneEditingBtn);
     
     // Focus on edit field
     editField.focus();
     
     // Done editing button click
     doneEditingBtn.addEventListener('click', function() {
         finishEditing(todoItem, category, todoId, editField, originalText, checkbox, todoText);
     });
     
     // Enter key in edit field
     editField.addEventListener('keyup', function(e) {
         if (e.key === 'Enter') {
             finishEditing(todoItem, category, todoId, editField, originalText, checkbox, todoText);
         }
     });
 }
 
 // Finish editing a todo
 function finishEditing(todoItem, category, todoId, editField, originalText, checkbox, todoText) {
     const newText = editField.value.trim();
     
     // Update todo text if changed and not empty
     if (newText && newText !== originalText) {
         const todoIndex = todos[category].findIndex(todo => todo.id === todoId);
         if (todoIndex !== -1) {
             todos[category][todoIndex].text = newText;
             saveTodosToLocalStorage(); // Save to localStorage
             todoText.textContent = newText;
         }
     }
     
     // Remove edit field and button
     todoItem.removeChild(editField);
     todoItem.removeChild(todoItem.querySelector('.done-editing-btn'));
     
     // Show checkbox and todo text
     checkbox.style.display = 'inline-block';
     todoText.style.display = 'inline-block';
     
     // Return to READ mode
     currentMode = 'READ';
 }
 
 // Delete a todo
 function deleteTodo(category, todoId) {
     const todoIndex = todos[category].findIndex(todo => todo.id === todoId);
     
     if (todoIndex !== -1) {
         // Store deleted todo for potential recovery
         const deleted = todos[category].splice(todoIndex, 1)[0];
         
         if (!deletedTodos[category]) {
             deletedTodos[category] = [];
         }
         deletedTodos[category].push(deleted);
         
         saveTodosToLocalStorage(); // Save to localStorage
         
         // Create cancel delete link
         const doneList = document.getElementById(`${category}-done`);
         const cancelItem = document.createElement('div');
         cancelItem.className = 'todo-item';
         
         const cancelLink = document.createElement('span');
         cancelLink.className = 'cancel-delete';
         cancelLink.textContent = 'Cancel delete. Click again to put back.';
         cancelLink.dataset.category = category;
         cancelLink.dataset.id = todoId;
         
         cancelItem.appendChild(cancelLink);
         doneList.appendChild(cancelItem);
         
         // Auto remove the cancel link after 7 seconds
         setTimeout(function() {
             if (doneList.contains(cancelItem)) {
                 doneList.removeChild(cancelItem);
             }
         }, 7000);
         
         renderCategoryTodos(category);
     }
 }
 
 // Restore a deleted todo
 function restoreTodo(category, todoId) {
     if (!deletedTodos[category]) return;
     
     const deletedIndex = deletedTodos[category].findIndex(todo => todo.id === todoId);
     
     if (deletedIndex !== -1) {
         const restored = deletedTodos[category].splice(deletedIndex, 1)[0];
         todos[category].push(restored);
         saveTodosToLocalStorage(); // Save to localStorage
         renderCategoryTodos(category);
     }
 }
 
 // Initialize the app when DOM is loaded
 document.addEventListener('DOMContentLoaded', initApp);