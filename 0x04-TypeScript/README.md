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
