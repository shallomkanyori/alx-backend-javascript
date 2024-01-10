interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
	firstName: 'John',
	lastName: 'Smith',
	age: 24,
	location: 'City A',
};

const student2: Student = {
	firstName: 'Mary',
	lastName: 'Jane',
	age: 18,
	location: 'City B',
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement('table');

const header = table.createTHead().insertRow(0);
const nameHeader = header.insertCell(0);
const locationHeader = header.insertCell(1);
nameHeader.textContent = 'First Name';
locationHeader.textContent = 'Location';

const tBody = table.createTBody();
studentsList.forEach((student, index) => {
	let row = tBody.insertRow(index);

	let nameCell = row.insertCell(0);
	let locationCell = row.insertCell(1);

	nameCell.textContent = student.firstName;
	locationCell.textContent = student.location;
});

document.body.appendChild(table);
