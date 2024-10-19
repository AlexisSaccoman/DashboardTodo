const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000;
const cors = require('cors');

// autoriser les requêtes CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

// Connexion à MariaDB
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'todo_dashboard'
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }
  console.log('Connected to database');
});

// ------------------------------------------------------------------------------------------------

// tasks nbr dued today
app.get('/tasksNbr', (req, res) => {

  db.query('SELECT * FROM tasks where due_date=CURDATE()', (err, results) => {
    if (err) {
      res.status(500).send(err);
      return;
    }
    res.json(results);
  });
});



// tasks dued today
app.get('/tasksToday', (req, res) => {
  db.query('SELECT * FROM tasks WHERE due_date = CURDATE()', (err, results) => {
    if (err) {
      res.status
        (500).send(err);
        return;
    }
    res.json(results);
    });
});


// all tasks
app.get('/tasksAll', (req, res) => {
  db.query('SELECT * FROM tasks', (err, results) => {
    if (err) {
      res.status(500).send
        (err);
        return;
    }
    res.json(results);
});
});

// ------------------------------------------------------------------------------------------------

// Serveur en écoute
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
