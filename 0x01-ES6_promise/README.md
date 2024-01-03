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
