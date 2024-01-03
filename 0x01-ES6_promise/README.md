# ES6 Promises

## Tasks

### Task 0
Return a Promise using this prototype `function getResponseFromAPI()`.

### Task 1
Using the prototype below, return a promise. The parameter is a boolean.
```
getFullResponseFromAPI(success)
```
When the argument is:
- `true`
	- resolve the promise by passing an object with 2 attributes:
		- `status: 200`
		- `body: 'Success'`
- `false`
	- reject the promise with an error object with the message `The fake API is not working currently`.

### Task 2
Using the function prototype below
```
function handleResponseFromAPI(promise)
```
Append three handlers to the function:
- When the Promise resolves, return an object with the following attributes
	- `status: 200`
	- `body: success`
- When the Promise rejects, return an empty `Error` object
- For every resolution, log `Got a response from the API` to the console.

### Task 3
In this file, import `uploadPhoto` and `createUser` from `utils.js`
Knowing that the functions in `utils.js` return promises, use the prototype below to collectively resolve all promises and `log body firstName lastName` to the console.
```
function handleProfileSignup()
```
In the event of an error, log `Signup system offline` to the console.
