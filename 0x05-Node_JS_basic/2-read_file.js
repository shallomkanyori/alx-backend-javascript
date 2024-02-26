const fs = require('fs');

/**
 * Prints the count of the number of student records from a database csv file
 * @param {String} path The path to the database csv file
 */
function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8');
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

    console.log(`Number of students: ${studentCount}`);
    studentsByField.forEach((students, field) => {
      console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
    });
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
