# Unittests in JS

## Tasks

### Task 0
#### Install Mocha using npm:
- Set up a scripts in your `package.json` to quickly run Mocha using `npm test`

#### Create a new file named `0-calcul.js`:
- Create a function named `calculateNumber`. It should accept two arguments (number) `a` and `b`
- The function should round `a` and `b` and return the sum of it

#### Test cases
- Create a file `0-calcul.test.js` that contains test cases of this function
- You can assume `a` and `b` are always number
- Tests should be around the “rounded” part

#### Tips:
- However, remember that your tests should not only verify what a function is supposed to do, but also the edge cases

#### Requirements:
- You have to use `assert`
- You should be able to run the test suite using `npm test 0-calcul.test.js`
- Every test should pass without any warning
-
### Task 1
#### Create a new file named `1-calcul.js`:
- Upgrade the function you created in the previous task (`0-calcul.js`)
- Add a new argument named `type` as the first argument of the function. `type` can be `SUM`, `SUBTRACT`, or `DIVIDE` (string)
- When type is `SUM`, round the two numbers, and add `a` and `b`
- When type is `SUBTRACT`, round the two numbers, and subtract `b` from `a`
- When type is `DIVIDE`, round the two numbers, and divide `a` with `b` - if the rounded value of `b` is equal to 0, return the string `Error`

#### Test cases
- Create a file `1-calcul.test.js` that contains test cases of this function
- You can assume `a` and `b` are always number

#### Tips:
- However, remember that your tests should not only verify what a function is supposed to do, but also the edge cases

#### Requirements:
- You have to use `assert`
- You should be able to run the test suite using `npm test 1-calcul.test.js`
- Every test should pass without any warning
