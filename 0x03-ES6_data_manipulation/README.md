# ES6 - Data Manipulation

## Tasks

### Task 0
Create a function named `getListStudents` that returns an array of objects.
Each object should have three attributes: `id` (Number), `firstName` (String), and `location` (String).
The array contains the following students in order:
- `Guillaume`, id: `1`, in `San Francisco`
- `James, id: `2`, in `Columbia`
- `Serena`, id: `5`, in `San Francisco`

### Task 1 
Create a function `getListStudentIds` that returns an array of ids from a list of object.
This function must take  one argument which is an array of objects - and this array is in the same format as `getListStudents` from the previous task.
If the argument is not an array, the function must return  an empty array.
You must use the `map` function on the array.

### Task 2
Create a function `getStudentsByLocation` that returns an array of objects who are located in a specific city.
It should accept a list of `students` (from `getListStudents`) and a `city` (string) as parameters.
You must use the `filter` function on the array.

### Task 3
Create a function `getStudentIdsSum` that returns the sum of all the student ids.
It should accept a list of students (from `getListStudents`) as a parameter.
You must use the `reduce` function on the array.

### Task 4
Create a function `updateStudentGradeByCity` that returns an array of students for a specific city with their new grade
It should accept a list of students (from getListStudents), a `city` (String), and `newGrades` (Array of “grade” objects) as parameters.
`newGrades` is an array of objects with this format:
```
  {
    studentId: 31,
    grade: 78,
  }
```
If a student doesn’t have grade in `newGrades`, the final grade should be `N/A`.
You must use `filter` and `map` combined.

### Task 5
Create a function named `createInt8TypedArray` that returns a new `ArrayBuffer` with an `Int8` value at a specific position.
It should accept three arguments: `length` (Number), `position` (Number), and `value` (Number).
If adding the value is not possible the error `Position outside range` should be thrown.

### Task 6
Create a function named `setFromArray` that returns a `Set` from an array.
It accepts an argument (Array, of any kind of element).

### Task 7
Create a function named `hasValuesFromArray` that returns a boolean if all the elements in the array exist within the set.
It accepts two arguments: a `set` (Set) and an `array` (Array).
