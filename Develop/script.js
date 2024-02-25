// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

const employeesArray = [];
let userInput = true


const collectEmployees = function() {
//while loop so the prompt loops until cancelled
  while (userInput !== false) {
  const firstName = prompt(`First Name?`)
  if (firstName=== null) {
    return;
  }
  const lastName = prompt(`Last Name?`)
  if (lastName=== null) {
    return;
  }
  const salary = parseInt(prompt('Salary?'))
//if user does not input a number in the salary prompt, they are berated.
  if (isNaN(salary)) {
    alert(`its a number, ya dingus!`)
    return
    }
    if (firstName=== null) {
      return;
    }
//group variable
  const employeeData = {
    firstName,
    lastName,
    salary
  }
//push group data into array
  employeesArray.push(employeeData);

userInput = confirm("do you want to add another employee?")

//if user does not confirm, the while loop breaks
if (!userInput) {
  break
} 

}
const orderArray = function() {
  for (let i = 0; i < employeesArray.length; i++) {
    employeesArray[i].sort();
  }
}

  return employeesArray
} 



// Display the average salary

const displayAverageSalary = function(employeesArray) {
//establish a sum variable
  let sumSalary = 0;
  let averageSalary = 0;
  for (let i = 0; i < employeesArray.length; i++) {
    //sum is equal to total of all employees salaries
    sumSalary += employeesArray[i].salary;
    //divided by length of array for the average
    averageSalary = sumSalary/employeesArray.length;
  }
  console.log(`The average employee salary between our ${employeesArray.length} employee(s) is $${averageSalary}`)
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  //pick a random number from total number of employees
  let randomNum = Math.floor(Math.random() * employeesArray.length)
  console.log(`Congratulations to ${employeesArray[randomNum].firstName} ${employeesArray[randomNum].lastName}, our random drawing winner!`)
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
