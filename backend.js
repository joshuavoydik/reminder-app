const express = require('express');
const app = express();
app.use(express.json());

// In-memory storage for simplicity
let reminders = [];

app.get('/reminders', (req, res) => {
    res.json(reminders);
});

app.post('/reminders', (req, res) => {
    const reminder = req.body;
    reminders.push(reminder);
    res.status(201).send();
});

app.listen(3000, () => console.log('Reminder API running on port 3000'));
