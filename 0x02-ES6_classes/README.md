# ES6 Classes

## Tasks

### Task 0
Implement a class named `ClassRoom`:
- Prototype: `export default class ClassRoom`
- It should accept one attribute named `maxStudentsSize` (Number) and assigned to `_maxStudentsSize`

### Task 1
Import the `ClassRoom` class from [`0-classroom.js`](0-classrom.js).
Implement a function named `initializeRooms`. It should return an array of 3 `ClassRoom` objects with the sizes 19, 20, and 34 (in this order).

### Task 2
Implement a class named `HolbertonCourse`:
- Constructor attributes:
	- `name` (String)
	- `length` (Number)
	- `students` (array of Strings)
- Make sure to verify the type of attributes during object creation
- Each attribute must be stored in an “underscore” attribute version (ex: `name` is stored in `_name`)
- Implement a getter and setter for each attribute.

### Task 3
Implement a class named `Currency`:
- Constructor attributes:
	- `code` (String)
	- `name` (String)
- Each attribute must be stored in an “underscore” attribute version (ex: `name` is stored in `_name`)
- Implement a getter and setter for each attribute.
- Implement a method named `displayFullCurrency` that will return the attributes in the following format `name (code)`.

### Task 4
Import the class `Currency` from `3-currency.js`
Implement a class named `Pricing`:
- Constructor attributes:
	- `amount` (Number)
	- `currency` (Currency)
- Each attribute must be stored in an “underscore” attribute version (ex: `name` is stored in `_name`)
- Implement a getter and setter for each attribute.
- Implement a method named `displayFullPrice` that returns the attributes in the following format `amount currency_name (currency_code)`.
- Implement a static method named `convertPrice`. It should accept two arguments: `amount` (Number), `conversionRate` (Number). The function should return the amount multiplied by the conversion rate.

### Task 5
Implement a class named `Building`:
- Constructor attributes:
	- `sqft` (Number)
- Each attribute must be stored in an “underscore” attribute version (ex: `name` is stored in `_name`)
- Implement a getter for each attribute.
- Consider this class as an abstract class. And make sure that any class that extends from it should implement a method named `evacuationWarningMessage`.
- If a class that extends from it does not have a `evacuationWarningMessage` method, throw an error with the message `Class extending Building must override evacuationWarningMessage`

### Task 6
Import `Building` from `5-building.js`.
Implement a class named `SkyHighBuilding` that extends from` Building`:
- Constructor attributes:
	- `sqft` (Number) (must be assigned to the parent class `Building`)
	- `floors` (Number)
- Each attribute must be stored in an “underscore” attribute version (ex: `name` is stored in `_name`)
- Implement a getter for each attribute.
- Override the method named `evacuationWarningMessage` and return the following string `Evacuate slowly the NUMBER_OF_FLOORS floors`.

### Task 7
Implement a class named `Airport`:
- Constructor attributes:
	- `name` (String)
	- `code` (String)
- Each attribute must be stored in an “underscore” attribute version (ex: `name` is stored in `_name`)
- The default string description of the class should return the airport `code`

### Task 8
Implement a class named `HolbertonClass`:
- Constructor attributes:
	- `size` (Number)
	- `location` (String)
- Each attribute must be stored in an “underscore” attribute version (ex: `name` is stored in `_name`)
- When the class is cast into a `Number`, it should return the size.
- When the class is cast into a `String`, it should return the location.
