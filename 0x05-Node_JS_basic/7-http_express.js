const express = require('express');
const fsPromises = require('fs').promises;

const dbFile = process.argv.length > 2 ? process.argv[2] : '';

/**
 * Prints the count of the number of student records from a database csv file
 * @param {String} path The path to the database csv file
 */
function countStudents(path) {
  return fsPromises.readFile(path, 'utf-8').then((data) => {
    const lines = data.split(/\r\n|\n/).slice(1);
    let studentCount = 0;
    const studentsByField = new Map();

    for (const line of lines) {
      if (line) {
        studentCount += 1;
        const info = line.split(',');
        const firstname = info[0];
        const field = info[info.length - 1];

        const s = studentsByField.get(field) || [];
        s.push(firstname);
        studentsByField.set(field, s);
      }
    }

    const res = [];
    res.push(`Number of students: ${studentCount}`);
    studentsByField.forEach((students, field) => {
      res.push(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
    });

    return res.join('\n');
  }, () => {
    throw new Error('Cannot load the database');
  });
}

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const rstr = 'This is the list of our students\n';

  countStudents(dbFile).then((data) => {
    res.statusCode = 200;
    res.send(rstr + data);
  }).catch((err) => {
    res.statusCode = 500;
    res.send(err.message);
  });
});

app.listen(1245);

module.exports = app;
