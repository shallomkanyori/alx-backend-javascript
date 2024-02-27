const readDatabase = require('../utils');

class StudentsController {
  static getAllStudents(request, response) {
    const dbFile = process.argv.length > 2 ? process.argv[2] : '';
    const res = ['This is the list of our students'];

    readDatabase(dbFile).then((data) => {
      response.statusCode = 200;

      for (const field of Object.keys(data).sort(
        (a, b) => a.toLowerCase().localeCompare(b.toLowerCase()),
      )) {
        const students = data[field];
        res.push(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
      }

      response.send(res.join('\n'));
    }).catch(() => {
      response.statusCode = 500;
      response.send(`${res[0]}\nCannot load the database`);
    });
  }

  static getAllStudentsByMajor(request, response) {
    const dbFile = process.argv.length > 2 ? process.argv[2] : '';
    const { major } = request.params;

    if (major !== 'CS' && major !== 'SWE') {
      response.statusCode = 500;
      response.send('Major parameter must be CS or SWE');
    } else {
      readDatabase(dbFile).then((data) => {
        const students = data[major];

        response.statusCode = 200;
        response.send(`List: ${students.join(', ')}`);
      }).catch(() => {
        response.statusCode = 500;
        response.send('Cannot load the database');
      });
    }
  }
}

module.exports = StudentsController;
