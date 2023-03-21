console.log("  ******************** ASSIGNMENT B - FOR EACH ********************");

class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}

const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33, "Radha", "HR", 74000, "WIPRO");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

const arrayEmployee = [emp_anil,emp_radha,emp_rishi, emp_sonali,emp_monika, emp_viny, emp_mahi];

console.log(" ");
console.log(" ==================== STEP 1 : DETAILS OF EMPLOYEES FROM TCS  ==================== ");

arrayEmployee.forEach(employee => {
    if(employee.emp_company == "TCS") {
      console.log(`EMPLOYEE NAME : ${employee.emp_name}, COMPANY NAME : ${employee.emp_company}`);
    }
});

console.log(" ");
console.log(" ==================== STEP 2 : DETAILS OF EMPLOYEES WITH SALARY >= 50000  ==================== ");

arrayEmployee.forEach(employee => {
    if(employee.emp_salary >= 50000) {
      console.log(`EMPLOYEE ID : ${employee.emp_id}, EMPLOYEE NAME : ${employee.emp_name}, DEPARTMENT IS : ${employee.emp_dept}, SALARY IS : ${employee.emp_salary}, COMPANY NAME : ${employee.emp_company}`);
    }
});

console.log(" ");
console.log(" ==================== STEP 3 : SUM OF ALL EMPLOYEES SALARY  ==================== ");
let totalSalaryOfEmp = 0;
arrayEmployee.forEach(employee => {
    
    totalSalaryOfEmp = totalSalaryOfEmp + employee.emp_salary; 
    });

console.log(`TOTAL SALARY OF EMPLOYEES IS : ${totalSalaryOfEmp}`);


console.log(" ");
console.log(" ==================== STEP 4 : AVERAGE SALARY OF EMPLOYEES ==================== ");

const numOfEmployee =  arrayEmployee.length;
//console.log(numOfEmployee);
let averageSalary = 0;
arrayEmployee.forEach(employee => {
    
   averageSalary = totalSalaryOfEmp /numOfEmployee; 
    });

console.log(`TOTAL SALARY OF EMPLOYEES IS : ${averageSalary}`);


console.log(" ");
console.log(" ==================== STEP 5 : DETAILS OF IT/HR DEPARTMENT EMPLOYEES WHOSE SALARY IS >= 75000  ==================== ");

arrayEmployee.forEach(employee => {
    if(employee.emp_salary >= 75000 &&  employee.emp_dept == "IT" || employee.emp_dept == "HR") {
        console.log(`EMPLOYEE ID : ${employee.emp_id}, EMPLOYEE NAME : ${employee.emp_name}, DEPARTMENT IS : ${employee.emp_dept}, SALARY IS : ${employee.emp_salary}, COMPANY NAME : ${employee.emp_company}`);
    }
});