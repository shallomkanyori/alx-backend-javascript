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
