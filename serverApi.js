export const fetchToDoList = () => {
    return fetch('http://localhost:3004/tasks')
        .then(res => res.json())
        .catch(err => {
            console.log(`O nie error! Upraszczam nie wyświeltam - ${err}`);
        });
};

export const addTask = (dto) => {
    return fetch('http://localhost:3004/tasks', {
        method: 'POST',
        body: JSON.stringify({
            "title": dto.title,
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json());
};