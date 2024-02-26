const http = require('http');
const fsPromises = require('fs').promises;

if (process.argv.length < 3) {
  console.log('Usage: node 5-http.js FILENAME');
  process.exit(1);
}

const dbFile = process.argv[2];

const app = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');

  switch (req.url) {
    case '/students':
      fsPromises.readFile(dbFile, 'utf-8').then((data) => {
        res.statusCode = 200;
        res.write('This is the list of our students\n', 'utf-8');

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

        res.write(`Number of students: ${studentCount}\n`, 'utf-8');
        let rstr = '';
        studentsByField.forEach((students, field) => {
          rstr += `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}\n`;
        });
        rstr = rstr.slice(0, -1);
        res.end(rstr);
      }).catch(() => {
        res.statusCode = 500;
        res.end('Cannot load the database');
      });
      break;
    default:
      res.statusCode = 200;
      res.end('Hello Holberton School!');
      break;
  }
}).listen(1245);

module.exports = app;
