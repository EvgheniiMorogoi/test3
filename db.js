const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('mydatabase.db');

// Дальнейший код для работы с базой данных

module.exports = db;