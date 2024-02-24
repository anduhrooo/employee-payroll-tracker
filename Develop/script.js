// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

const employeesArray = [];

const collectEmployees = function() {
  const firstName = prompt(`First Name?`)
  const lastName = prompt(`Last Name?`)
  const salary = parseInt(prompt('Salary?'))

  if (isNaN(salary)) {
    alert(`its a number, ya dingus!`)
    return
    }


  const employeeData = {
    firstName,
    lastName,
    salary
  }
  employeesArray.push(employeeData);
  if (confirm("do you want to add another employee?")) {
    collectEmployees()
  } 
  return employeesArray
} 

// Display the average salary

const displayAverageSalary = function(employeesArray) {
  let sumSalary = 0;
  let averageSalary = 0;
  for (let i = 0; i < employeesArray.length; i++) {
    sumSalary += employeesArray[i].salary;
    averageSalary = sumSalary/employeesArray.length;
  }
  console.log(`The average employee salary between our ${employeesArray.length} employee(s) is $${averageSalary}`)
}

let randomNum = Math.floor(Math.random() * employeesArray.length)

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  let randomNum = Math.floor(Math.random() * employeesArray.length)
  console.log(`Congratulations to ${employeesArray[randomNum].firstName} ${employeesArray[randomNum].lastName}, our random drawing winner!`)
  //TODO: Select and display a random employee
  //TODO: randomly select an element from array
  //TODO: use template literal string to announce contest winner
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
