export default function createIteratorObject(report) {
  const employees = [];
  for (const dep of Object.keys(report.allEmployees)) {
    employees.push(...report.allEmployees[dep]);
  }

  const iter = {
    * [Symbol.iterator]() {
      for (const e of employees) {
        yield e;
      }
    },
  };

  return iter;
}
