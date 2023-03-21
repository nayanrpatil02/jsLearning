console.log(" ******************** ASSIGNMENT B ******************** ");
console.log(" ");
console.log(" ==================== STEP 1 : CREATE EMPLOYEE OBJECT USING CLASS  ==================== ");

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

console.log(emp_anil);
console.log(emp_radha);
console.log(emp_rishi);
console.log(emp_sonali);
console.log(emp_monika);
console.log(emp_viny);
console.log(emp_mahi);

console.log(" ");
console.log(" ==================== STEP 2 : ARRAY OF EMPLOYEE OBJECT ==================== ");

const array_employees = [emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];
console.log(array_employees);

/*
console.log("Add object of class as elements in to Array");
const  arr_employee=[];
arr_employee.splice(0,0,emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi);
console.log(arr_employee);

//it display  all objects as a array elements 
for (const iterator of array_employees) {
    console.log(iterator);
    }
    console.log("===================================================================================");*/

console.log(" ");
console.log(" ==================== STEP 3 : Name and company name of employess working in TCS ==================== ");

for (const iterator of array_employees) {
if (iterator.emp_company=="TCS"){
    console.log(`Employee Name : ${iterator.emp_name} , Company Name : ${iterator.emp_company}`);
}
}

console.log(" ");
console.log(" ==================== STEP 4 : Name and Dept. name of employees working in Finance dept ==================== ");

for (const iterator of array_employees) {
    if(iterator.emp_dept=="Finance")
    {
        console.log(`Employee Name : ${iterator.emp_name} & Department is : ${iterator.emp_dept}`);
    }    
}

console.log(" ");

console.log(" ==================== STEP 5 : Details of employee whose name starts with R ==================== ");

for (const iterator of array_employees) {
    if(iterator.emp_name.startsWith("R"))
    {
        console.log(`Employee Name : ${iterator.emp_name} Emp id : ${iterator.emp_id} Department : ${iterator.emp_dept} salary : ${iterator.emp_salary} company Name : ${iterator.emp_company}`);
    }
    
}

console.log(" ");

console.log(" ==================== STEP 6 : Name and Company name of employees whose salary is greater than 75000 ==================== ");

for (const iterator of array_employees) {
    if(iterator.emp_salary>75000)
    {
        console.log(`Employee Name : ${iterator.emp_name}  Company Name : ${iterator.emp_company} Salary : ${iterator.emp_salary}`);
    }
     
}

console.log(" ");

console.log(" ==================== STEP 7 : Details of employees whose salary is greater than and equal to 50000 and Dept= IT==================== ");

for (const iterator of array_employees) {
    if(iterator.emp_salary>=50000 && iterator.emp_dept=="IT")
    {
        console.log(`Employee Name : ${iterator.emp_name} Emp id : ${iterator.emp_id} Department : ${iterator.emp_dept} salary : ${iterator.emp_salary} company Name : ${iterator.emp_company}`);
    }
    
}

console.log(" ");

console.log(" ==================== STEP 7 : Details of employees whose whose company=Infy ==================== ");

for (const iterator of array_employees) {
    if(iterator.emp_company=="Infy")
    {
        console.log(`Employee Name : ${iterator.emp_name} Emp id : ${iterator.emp_id} Department : ${iterator.emp_dept} salary : ${iterator.emp_salary} company Name : ${iterator.emp_company}`);
    }
    
}
