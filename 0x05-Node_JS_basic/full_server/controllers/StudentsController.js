const readDatabase = require('../utils');

class StudentsController {
  static getAllStudents(request, response) {
    const dbFile = process.argv.length > 2 ? process.argv[2] : '';
    const res = ['This is the list of our students'];

    readDatabase(dbFile).then((data) => {
      for (const field of Object.keys(data).sort(
        (a, b) => a.toLowerCase().localeCompare(b.toLowerCase()),
      )) {
        const students = data[field];
        res.push(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
      }

      response.status(200).send(res.join('\n'));
    }).catch(() => {
      response.status(500).send('Cannot load the database');
    });
  }

  static getAllStudentsByMajor(request, response) {
    const dbFile = process.argv.length > 2 ? process.argv[2] : '';
    const { major } = request.params;

    if (major !== 'CS' && major !== 'SWE') {
      response.statusCode = 500;
      response.send('Major parameter must be CS or SWE');
      return;
    }

    readDatabase(dbFile).then((data) => {
      let res = '';

      if (major in data) {
        res = `List: ${data[major].join(', ')}`;
      }

      response.status(200).send(res);
    }).catch(() => {
      response.status(500).send('Cannot load the database');
    });
  }
}

module.exports = StudentsController;
