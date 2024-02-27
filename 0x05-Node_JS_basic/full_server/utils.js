const fsPromises = require('fs').promises;

/*
 * Asyncronously reads and returns info from a student database csv file
 * @param {String} path The path of the file
 * @return {Promise}
 */
function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fsPromises.readFile(path, 'utf-8').then((data) => {
      const lines = data.split(/\r\n|\n/).slice(1);
      const res = {};

      for (const line of lines) {
        if (line) {
          const info = line.split(',');
          const firstname = info[0];
          const field = info[info.length - 1];

          if (!Object.getOwnPropertyDescriptor(res, field)) {
            res[field] = [];
          }

          res[field].push(firstname);
        }
      }

      resolve(res);
    }).catch((err) => {
      reject(err);
    });
  });
}

module.exports = readDatabase;
