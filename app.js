// app.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Base de datos en memoria
let tasks = [];

// Ruta para crear una tarea
app.post('/tasks', (req, res) => {
    const { description, dueDate } = req.body;
    const task = { id: tasks.length + 1, description, dueDate };
    tasks.push(task);
    res.status(201).json(task);
});

// Ruta para listar todas las tareas
app.get('/tasks', (req, res) => {
    res.json(tasks);
});

// Ruta para listar una sola tarea por identificador
app.get('/tasks/:id', (req, res) => {
        const id = parseInt(req.params.id);
        const task = tasks.find((task) => task.id === id);
            if (!task) {
                res.status(404).json({ error: 'Task not found' });
            } else {
        res.json(task);
    }
});

// Ruta para eliminar una tarea
app.delete('/tasks/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = tasks.findIndex((task) => task.id === id);
    if (index === -1) {
    res.status(404).json({ error: 'Task not found' });
} else {
    tasks.splice(index, 1);
    res.status(204).json({});
}
});

// Ruta para modificar una tarea
app.put('/tasks/:id', (req, res) => {
        const id = parseInt(req.params.id);
            const task = tasks.find((task) => task.id === id);
        if (!task) {
    res.status(404).json({ error: 'Task not found' });
        } else {
    const { description, dueDate } = req.body;
    task.description = description;
    task.dueDate = dueDate;
    res.json(task);
    }
});

// Iniciar servidor
const port = 3000;
app.listen(port, () => {
        console.log(`Server started on port ${port}`);
});