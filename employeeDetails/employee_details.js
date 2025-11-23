const employees = [
      { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000, specialization: "JavaScript" },
      { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000, specialization: "JavaScript" },
      { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000, specialization: "Python" },
      //... More employee records can be added here
      { id: 4, name: 'Karen Williams', age: 32, department: 'Marketing', salary: 52000, specialization: "Java" },
      { id: 5, name: 'Michael Brown', age: 41, department: 'IT', salary: 75000, specialization: "C#" },
      { id: 6, name: 'Samantha Lee', age: 27, department: 'Sales', salary: 48000, specialization: "Fortran" },
      { id: 7, name: 'David Wilson', age: 38, department: 'Finance', salary: 68000, specialization: "Cobol" },
      { id: 8, name: 'Olivia Martinez', age: 29, department: 'HR', salary: 47000, specialization: "JavaScript" },
      { id: 9, name: 'James Anderson', age: 33, department: 'Operations', salary: 55000, specialization: "JavaScript" },
      { id: 10, name: 'Emily Clark', age: 26, department: 'Marketing', salary: 43000, specialization: "JavaScript" },
    ];

// Function to display all employees
function displayEmployees() {
    const totalEmployees = employees
        .map(employee => `<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`)
        .join('');
    document.getElementById('employeesDetails').innerHTML = totalEmployees;
}

function calculateTotalSalaries() {
    const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
    alert(`Total Salaries: $${totalSalaries}`);
  }

  function displayHREmployees() {
    const hrEmployees = employees.filter(employee => employee.department === 'HR');
     const hrEmployeesDisplay = hrEmployees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
     document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
}

function displayJavaScriptSpecialization(specialization){
    const jsEmployees = employees.filter(employee => employee.specialization === specialization)
    const jsEmployeesDisplay = jsEmployees.map((employee)=> `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - ${employee.specialization}</p>`).join('');
    document.getElementById('employeesDetails').innerHTML = jsEmployeesDisplay;
}

function findEmployeeById(employeeId) {
    const foundEmployee = employees.find(employee => employee.id === employeeId);
    if (foundEmployee) {
    document.getElementById('employeesDetails').innerHTML =`<p>${foundEmployee.id}: ${foundEmployee.name}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary}</p>`;
    }
    else{
      document.getElementById('employeesDetails').innerHTML = 'no employee has been found with this ID';
     }
 }

 function findEmployeeBySpecialization(specialization) {
    const foundEmployee = employees.find(employee => employee.specialization === specialization);
    if (foundEmployee) {
    document.getElementById('employeesDetails').innerHTML =`<p>${foundEmployee.id}: ${foundEmployee.name}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary}</p>`;
    }
    else{
      document.getElementById('employeesDetails').innerHTML = 'no employee has been found with this ID';
     }
 }
