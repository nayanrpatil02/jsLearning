console.log("******************** SORTING ASSIGNMENT A ********************");

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
const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");

const arrayEmployee = [emp_mahi,emp_rishi,emp_anil,emp_radha, emp_sonali,emp_monika, emp_viny];

console.log(`~~~~~~~~~~~~~~~~~~~~~~ BEFORE SORT ~~~~~~~~~~~~~~~~~~~~~~`);
arrayEmployee.forEach((employee) => {
    console.log(employee);
});


console.log(" ");
console.log("==================== STEP 1 : SORT IN ASCENDING ORDER OF EMP_ID ==================== ");

arrayEmployee.sort((emp1,emp2) => {
    return emp1.emp_id > emp2.emp_id ? 1 : -1;
});

//console.log(`~~~~~~~~~~~~~~~~~~~~~~ AFTER SORTING IN ASCENDING ORDER OF EMP_ID ~~~~~~~~~~~~~~~~~~~~~~`);
arrayEmployee.forEach((employee) => {
    console.log(employee.emp_id, employee.emp_name, employee.emp_dept);
    
});

/*const arrayAscendingOrder = arrayEmployee.sort ((emp1, emp2) => {
    return emp1.salary > emp2.salary ? -1 : 1;
});
console.log(arrayAscendingOrder);*/

/*const arrempID=arrayEmployee.map((Employee)=>{
    console.log(`Employee id=${Employee.emp_id}, Employee Name=${Employee.emp_name} ,Employee Department=:${Employee.emp_dept}`);
}); 

const arrayAscEmpId = arrayEmployee.sort((a,b)=> a.emp_id - b.emp_id).map( a=> {
console.log(`ID is : ${a.emp_id}, NAME IS : ${a.emp_name}, DEPARTMENT IS: ${a.emp_dept}`)});
*/

console.log(" ");
console.log("========= STEP 2 : SORT IN ASCENDING ORDER OF EMP_DEPT =========");
/*
console.log(` ~~~~~~~~~~~~~~~~~~~~~~ BEFORE SORT ~~~~~~~~~~~~~~~~~~~~~~`);
arrayEmployee.forEach((employee) => {
    console.log(employee);
}); */

arrayEmployee.sort((emp1,emp2) => {
    return emp1.emp_dept > emp2.emp_dept ? 1 : -1;
});

//console.log(`~~~~~~~~~~~~~~~~~~~~~~ AFTER SORTING IN ASCENDING ORDER OF EMP_DEPT ~~~~~~~~~~~~~~~~~~~~~~`);
arrayEmployee.forEach((employee) => {
    console.log(employee.emp_id, employee.emp_dept, employee.emp_company);
    
});

/*
const arrayAscEmpDept = arrayEmployee.sort((a,b)=> a.emp_dept - b.emp_dept).map( a=> {
console.log(`ID is : ${a.emp_id}, DEPARTMENT IS ${a.emp_dept}, COMPANY NAME IS : ${a.emp_company},`)});

console.log(" ");*/


console.log("========= STEP 3 : SORT IN DESCENDING ORDER OF EMP_SALARY ========= ");
/*
console.log(`~~~~~~~~~~~~~~~~~~~~~~ BEFORE SORT ~~~~~~~~~~~~~~~~~~~~~~`);
arrayEmployee.forEach((employee) => {
    console.log(employee);
});*/

arrayEmployee.sort((emp1,emp2) => {
    return emp1.emp_salary > emp2.emp_salary ? -1 : 1;
});

//console.log(`~~~~~~~~~~~~~~~~~~~~~~ AFTER SORTING IN DESCENDING ORDER OF EMP_SALARY ~~~~~~~~~~~~~~~~~~~~~~`);
arrayEmployee.forEach((employee) => {
    console.log(employee.emp_name,employee.emp_salary, employee.emp_company);
    
});


