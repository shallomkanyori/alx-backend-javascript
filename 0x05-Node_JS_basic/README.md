# NodeJS Basics

## Tasks

### Task 0
In the file [0-console.js](0-console.js), create a function named `displayMessage` that prints in STDOUT the string argument.

### Task 1
Create a program named [1-stdin.js](1-stdin.js) that will be executed through command line:
- It should display the message `Welcome to Holberton School, what is your name?` (followed by a new line)
- The user should be able to input their name on a new line
- The program should display `Your name is: INPUT`
- When the user ends the program, it should display `This important software is now closing` (followed by a new line)

Requirements:
Your code will be tested through a child process, make sure you have everything you need for that

### Task 2
Using the database [database.csv](database.csv), create a function `countStudents` in the file [2-read_file.js](2-read_file.js).
- Create a function named `countStudents`. It should accept a path in argument
- The script should attempt to read the database file synchronously
- If the database is not available, it should throw an error with the text `Cannot load the database`
- If the database is available, it should log the following message to the console `Number of students: NUMBER_OF_STUDENTS`
- It should log the number of students in each field, and the list with the following format: `Number of students in FIELD: 6. List: LIST_OF_FIRSTNAMES`
- CSV file can contain empty lines (at the end) - and they are not a valid student!

### Task 3
Using the database [database.csv](database.csv), create a function `countStudents` in the file [3-read_file_async.js](3-read_file_async.js).
- Create a function named `countStudents`. It should accept a path in argument
- The script should attempt to read the database file asynchronously
- The function shuld return a Promise
- If the database is not available, it should throw an error with the text `Cannot load the database`
- If the database is available, it should log the following message to the console `Number of students: NUMBER_OF_STUDENTS`
- It should log the number of students in each field, and the list with the following format: `Number of students in FIELD: 6. List: LIST_OF_FIRSTNAMES`
- CSV file can contain empty lines (at the end) - and they are not a valid student!

#### Task 4
In a file named [4-http.js](4-http.js), create a small HTTP server using the `http` module:
- It should be assigned to the variable `app` and this one must be exported
- HTTP server should listen on port 1245
- Displays `Hello Holberton School!` in the page body for any endpoint as plain text

### Task 5
In a file named [5-http.js](5-http.js), create a small HTTP server using the `http` module:
- It should be assigned to the variable `app` and this one must be exported
- HTTP server should listen on port 1245
- It should return plain text
- When the URL path is `/`, it should display `Hello Holberton School!` in the page body
- When the URL path is `/students`, it should display `This is the list of our students` followed by the same content as the file [3-read_file_async.js](3-read_file_async.js) (with and without the database) - the name of the database must be passed as argument of the file
- CSV file can contain empty lines (at the end) - and they are not a valid student!
