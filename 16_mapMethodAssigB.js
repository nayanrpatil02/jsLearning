console.log("******************** MAP METHOD ASSIGNMENT - B ********************");

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
console.log("==================== STEP 1 - LIST OF ALL EMPLOYEE NAMES ====================");

const arrayNameEmp = arrayEmployee.map((element) => {
    return element.emp_name;
 });

 console.log(arrayNameEmp);

console.log(" ");
console.log("==================== STEP 2 - LIST OF ALL DEPARTMENT NAMES ====================");

 const arrayDeptEmp = arrayEmployee.map((element) => {
    return element.emp_dept;
 });

 console.log(arrayDeptEmp);

console.log(" ");
console.log("==================== STEP 3 - LIST OF ALL EMPLOYEE ID's ====================");

 const arrayIdEmp = arrayEmployee.map((element) => {
    return element.emp_id;
 });

 console.log(arrayIdEmp);

console.log(" ");
console.log("==================== STEP 4 - LIST OF ALL NAMES OF EMPLOYEES WORKING IN TCS ====================");
let arrcomp = [];
 const arrayTcs = arrayEmployee.map((employee) => {
    let emp_company = employee.emp_company;
   
    if(emp_company == "TCS") {
        arrcomp.push(employee.emp_name);
        return arrcomp ;
    }
 })

 console.log(arrcomp);
 //console.log(arrayTcs);
 //console.log(`Employees working in TCS are : ${arrayTcs}`);