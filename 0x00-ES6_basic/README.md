# ES6 Basics

## Tasks

### Task 0: Const or let?
Modify
- function `taskFirst` to instantiate variables using `const`
- function `taskNext` to instantiate variables using `let`
```
export function taskFirst() {
  var task = 'I prefer const when I can.';
  return task;
}

export function getLast() {
  return ' is okay';
}

export function taskNext() {
  var combination = 'But sometimes let';
  combination += getLast();

  return combination;
}
```

### Task 1: Block Scope
Modify the variables inside the function `taskBlock` so that the variables aren’t overwritten inside the conditional block.
```
export default function taskBlock(trueOrFalse) {
  var task = false;
  var task2 = true;

  if (trueOrFalse) {
    var task = true;
    var task2 = false;
  }

  return [task, task2];
}
```

### Task 2: Arrow functions
Rewrite the following standard function to use ES6’s arrow syntax of the function `add` (it will be an anonymous function after).
```
export default function getNeighborhoodsList() {
  this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

  const self = this;
  this.addNeighborhood = function add(newNeighborhood) {
    self.sanFranciscoNeighborhoods.push(newNeighborhood);
    return self.sanFranciscoNeighborhoods;
  };
}
```

### Task 3: Parameter defaults
Condense the internals of the following function to 1 line - without changing the name of each function/variable.
Hint: The key here is to define default parameter values for the function parameters.
```
export default function getSumOfHoods(initialNumber, expansion1989, expansion2019) {
  if (expansion1989 === undefined) {
    expansion1989 = 89;
  }

  if (expansion2019 === undefined) {
    expansion2019 = 19;
  }
  return initialNumber + expansion1989 + expansion2019;
}
```

### Task 4: Rest parameter syntax for functions
Modify the following function to return the number of arguments passed to it using the rest parameter syntax.
```
export default function returnHowManyArguments() {

}
```

### Task 5: The wonders of spread syntax
Using spread syntax, concatenate 2 arrays and each character of a string by modifying the function below. Your function body should be one line long.
```
export default function concatArrays(array1, array2, string) {
}
```

### Task 6: Take advantage of template literals
Rewrite the return statement to use a template literal so you can the substitute the variables you’ve defined.
```
export default function getSanFranciscoDescription() {
  const year = 2017;
  const budget = {
    income: '$119,868',
    gdp: '$154.2 billion',
    capita: '$178,479',
  };

  return 'As of ' + year + ', it was the seventh-highest income county in the United States'
        / ', with a per capita personal income of ' + budget.income + '. As of 2015, San Francisco'
        / ' proper had a GDP of ' + budget.gdp + ', and a GDP per capita of ' + budget.capita + '.';
}
```

### Task 7: Object property value shorthand syntax
Notice how the keys and the variable names are the same?
Modify the following function’s `budget` object to simply use the keyname instead.
```
export default function getBudgetObject(income, gdp, capita) {
  const budget = {
    income: income,
    gdp: gdp,
    capita: capita,
  };

  return budget;
}
```

### Task 8: No need to create empty objects before adding in properties
Rewrite the `getBudgetForCurrentYear` function to use ES6 computed property names on the budget object.
```
function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

export default function getBudgetForCurrentYear(income, gdp, capita) {
  const budget = {};

  budget[`income-${getCurrentYear()}`] = income;
  budget[`gdp-${getCurrentYear()}`] = gdp;
  budget[`capita-${getCurrentYear()}`] = capita;

  return budget;
}
```

### Task 9: ES6 method properties
Rewrite `getFullBudgetObject` to use ES6 method properties in the `fullBudget` object.
```
import getBudgetObject from './7-getBudgetObject.js';

export default function getFullBudgetObject(income, gdp, capita) {
  const budget = getBudgetObject(income, gdp, capita);
  const fullBudget = {
    ...budget,
    getIncomeInDollars: function (income) {
      return `$${income}`;
    },
    getIncomeInEuros: function (income) {
      return `${income} euros`;
    },
  };

  return fullBudget;
}
```

### Task 10: For...of Loops
Rewrite the function `appendToEachArrayValue` to use ES6’s `for...of` operator. And don’t forget that `var` is not ES6-friendly.
```
export default function appendToEachArrayValue(array, appendString) {
  for (var idx in array) {
    var value = array[idx];
    array[idx] = appendString + value;
  }

  return array;
}
```

### Task 11:  Iterator
Write a function named `createEmployeesObject` that will receive two arguments:
- `departmentName` (String)
- `employees` (Array of Strings)
```
export default function createEmployeesObject(departmentName, employees) {

}
```
The function should return an object with the following format:
```
{
     $departmentName: [
          $employees,
     ],
}
```

### Task 12:
Write a function named `createReportObject` whose parameter, `employeesList`, is the return value of the previous function `createEmployeesObject`.
```
export default function createReportObject(employeesList) {

}
```
`createReportObject` should return an object containing the key `allEmployees` and a method property called `getNumberOfDepartments`.

`allEmployees` is a key that maps to an object containing the department name and a list of all the employees in that department.
The method property receives `employeesList` and returns the number of departments.
```
{
  allEmployees: {
     engineering: [
          'John Doe',
          'Guillaume Salva',
     ],
  },
};
```


### Task 13: Iterating through report objects
Write a function named `createIteratorObject`, that will take into argument a `report` Object created with the previous function `createReportObject`. This function will return an iterator to go through every employee in every department.
```
export default function createIteratorObject(report) {

}
```

### Task 13: Iterate through object
Write a function named `iterateThroughObject`. The function’s parameter `reportWithIterator` is the return value from `createIteratorObject`.
```
 export default function iterateThroughObject(reportWithIterator) {

 }
```
It should return every employee name in a string, separated by `|`.
