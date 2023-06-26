const axios = require('axios');

document.getElementById('reminder-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const reminder = document.getElementById('reminder').value;

    axios.post('http://localhost:3000/reminders', { reminder })
        .then(() => loadReminders())
        .catch((error) => console.error(error));
});

function loadReminders() {
    axios.get('http://localhost:3000/reminders')
        .then((response) => {
            const reminderList = document.getElementById('reminder-list');
            reminderList.innerHTML = '';

            response.data.forEach((reminder) => {
                const li = document.createElement('li');
                li.textContent = reminder;
                reminderList.appendChild(li);
            });
        })
        .catch((error) => console.error(error));
}

loadReminders();
