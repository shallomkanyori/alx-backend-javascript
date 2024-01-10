# Typescript

## Tasks

### Task 0. Creating an interface for a student
Write your code in the `js/main.ts` file:
- Write an interface named `Student` that accepts the following elements: `firstName`(string), `lastName`(string), `age`(number), and `location`(string)
- Create two students, and create an array named studentsList containing the two variables
- Using Vanilla Javascript, render a table and for each elements in the array, append a new row to the table
- Each row should contain the first name of the student and the location
Requirements:
- When running, Webpack should return `No type errors found.`
- Every variable should use TypeScript when possible.

### Task 1. Build a Teacher interface
- `firstName`(string) and `lastName`(string). These two attributes should only be modifiable when a `Teacher` is first initialized
- `fullTimeEmployee`(boolean) this attribute should always be defined
- `yearsOfExperience`(number) this attribute is optional
- `location`(string) this attribute should always be defined
- Add the possibility to add any attribute to the Object like `contract(boolean)` without specifying the name of the attribute

### Task 2.  Extending the Teacher interface
Write an interface named `Directors` that extends `Teacher`. It requires an attribute named `numberOfReports(number)`

### Task 3. Printing Teachers
Write a function `printTeacher`:
	- It accepts two arguments `firstName` and `lastName`
	- It returns the first letter of the `firstName` and the full `lastName`
	- Example: printTeacher("John", "Doe") -> J. Doe
Write an interface for the function named `printTeacherFunction`.

### Task 4
Write a Class named `StudentClass`:
- The constructor accepts `firstName(string)` and `lastName(string)` arguments
- The class has a method named `workOnHomework` that returns the string `Currently working`
- The class has a method named `displayName`. It returns the firstName of the student
- The constructor of the class should be described through an Interface
- The class should be described through an Interface
Requirements:
- When running `npm run build`, no TypeScript error should be displayed.
- Every variable should use TypeScript when possible.

### Task 5
Create the `DirectorInterface` interface with the 3 expected methods:
- `workFromHome()` returning a string
- `getCoffeeBreak()` returning a string
- `workDirectorTasks()` returning a string

Create the `TeacherInterface` interface with the 3 expected methods:
- `workFromHome()` returning a string
- `getCoffeeBreak()` returning a string
- `workTeacherTasks()` returning a string

Create a class `Director` that will implement `DirectorInterface`
- `workFromHome` should return the string `Working from home`
- `getCoffeeBreak` should return the string `Getting a coffee break`
- `workDirectorTasks` should return the string `Getting to director tasks`

Create a class `Teacher` that will implement `TeacherInterface`
- `workFromHome` should return the string `Cannot work from home`
- `getCoffeeBreak` should return the string `Cannot have a break`
- `workTeacherTasks` should return the string `Getting to work`

Create a function `createEmployee` with the following requirements:
It can return either a `Director` or a `Teacher` instance
- It accepts 1 arguments:
	- `salary(either number or string)`
- if salary is a number and less than 500 - It should return a new `Teacher`. Otherwise it should return a `Director`

### Task 6
Write a function `isDirector`:
- it accepts `employee` as an argument
- it will be used as a type predicate and if the employee is a director

Write a function `executeWork`:
- it accepts `employee` as an argument
- if the employee is a `Director`, it will call `workDirectorTasks`
- if the employee is a `Teacher`, it will call `workTeacherTasks`

### Task 7
Write a String literal type named `Subjects` allowing a variable to have the value `Math` or `History` only. Write a function named `teachClass`:
- it takes `todayClass` as an argument
- it will return the string `Teaching Math` if todayClass is `Math`
- it will return the string `Teaching History` if todayClass is `History`

### Task 8
In the file `interface.ts`:
- Create a type `RowID` and set it equal to number
- Create an interface `RowElement` that contains these 3 fields:
	- `firstName: string`
	- `lastName: string`
	- `age?: number`

You are building the next part of the application architecture. The goal is to save the entities to a database. Because of time constraints, you can’t write a connector to the database, and you decided to download a library called `crud.js`.
Hre it is:
```
export function insertRow(row) {
  console.log('Insert row', row);
  return Math.floor(Math.random() * Math.floor(1000));
}

export function deleteRow(rowId) {
  console.log('Delete row id', rowId);
  return;
}

export function updateRow(rowId, row) {
  console.log(`Update row ${rowId}`, row);

  return rowId;
}
```

Write an ambient file, `crud.d.ts` containing the type declarations for each crud function. At the top of the file import `RowID` and `RowElement` from `interface.ts`.

In `main.ts`
- At the top of the file create a triple slash directive that includes all the dependencies from `crud.d.ts`
- Import the `rowID` type and `rowElement` from `interface.ts`

- Import everything from `crud.js` as `CRUD`
Create an object called `row` with the type `RowElement` with the fields set to these values:
	- `firstName: Guillaume`
	- `lastName: Salva`

Create a `const` variable named `newRowID` with the type `RowID` and assign the value the `insertRow` command.

Next, create a `const` variable named `updatedRow` with the type `RowElement` and update row with an age field set to` 23`

Finally, call the `updateRow` and `deleteRow` commands.

### Task 9
In [task_4/js/subjects](task_4/js/subjects):
- Create a file `Teacher.ts` and write a `Teacher` interface in a namespace named `Subjects`.
	- the interface requires `firstName` and `lastName` as string

- Create a file `Subject.ts` and write a `Subject` class in the same namespace named `Subjects`.
	- the class has one attribute `teacher` that implements the `Teacher` interface
	- the class has one setter method `setTeacher` that accepts a `teacher` in argument (and as setter, set the instance attribute `teacher` with it)

- Create a file `Cpp.ts` and make the following modifications in the same namespace.
	- Using declaration merging, add a new optional attribute `experienceTeachingC (number)` to the `Teacher` interface
	- Create a class `Cpp` extending from `Subject`
	- Write a method named `getRequirements` that will return a string `Here is the list of requirements for Cpp`
	- Write a method named `getAvailableTeacher` that will return a string `Available Teacher: <first name of teacher>`
	- If the teacher doesn’t have any experience in teaching C, then the method should return a string `No available teacher`

- Create a file `React.ts` and make the following modifications in the same namespace.
        - Using declaration merging, add a new optional attribute `experienceTeachingReact (number)` to the `Teacher` interface
        - Create a class `React` extending from `Subject`
        - Write a method named `getRequirements` that will return a string `Here is the list of requirements for React`
        - Write a method named `getAvailableTeacher` that will return a string `Available Teacher: <first name of teacher>`
        - If the teacher doesn’t have any experience in teaching React, then the method should return a string `No available teacher`

- Create a file `Java.ts` and make the following modifications in the same namespace.
        - Using declaration merging, add a new optional attribute `experienceTeachingJava (number)` to the `Teacher` interface
        - Create a class `Java` extending from `Subject`
        - Write a method named `getRequirements` that will return a string `Here is the list of requirements for Java`
        - Write a method named `getAvailableTeacher` that will return a string `Available Teacher: <first name of teacher>`
        - If the teacher doesn’t have any experience in teaching Java, then the method should return a string `No available teacher`
