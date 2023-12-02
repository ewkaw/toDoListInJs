import { fetchToDoList, addTask } from "./serverApi.js"

const $toDoForm = document.getElementById('toDoForm');
const $toDoListEl = document.getElementById('toDoList');

const renderToDoList = () => {
    $toDoListEl.innerHTML = '';

    fetchToDoList().then(tasks => {
        if (tasks) {
            tasks.forEach(task => {
                $toDoListEl.innerHTML += `<li>${task.title}</li>`;
            });
        }
    });

};

renderToDoList();

$toDoForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const titleTask = form.get('titleTask');
    addTask({ "title": titleTask }).then(data => console.log(data));
    renderToDoList();

    document.getElementById('task').value = '';
});