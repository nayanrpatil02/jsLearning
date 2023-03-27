console.log("******************** FILTER ASSIGNMENT - B ********************");

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
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

const arrayEmployee = [emp_anil,emp_radha,emp_rishi, emp_sonali,emp_monika, emp_viny, emp_mahi];

console.log(" ");
console.log("==================== STEP 1 - LIST OF ALL EMPLOYEE WORKING IN TCS ====================");

const tcsEmployee = arrayEmployee.filter((company)=> company.emp_company === "TCS"). map((company)=>company.emp_name)
console.log(tcsEmployee);

console.log(" ");
console.log("==================== STEP 2 - AVERAGE SALARY OF EMPLOYEE WORKING IN WIPRO ====================");

const arrayOfWipro= arrayEmployee.filter((employee) => {
    return employee.emp_company == "Wipro"
});
 
arrayOfWipro.forEach((employee) => {
    console.log(employee);
});

const totalSalary = arrayOfWipro.reduce((runningTotal, element) => {
    return runningTotal + element.emp_salary ;
}, 0 );

const aveg = totalSalary/arrayOfWipro.length ;

console.log(`AVERAGE SALARY OF EMPLOYEE WORKING IN WIPRO IS : ${aveg}`);


/*
var avg=0;
let total=0;
 arrayEmployee.filter((Employee)=>{
    if(Employee.emp_company=="Wipro")
    { 
    total =(total+Employee.emp_salary);
        avg=total/2;
}
});
console.log(avg);

total=0;
avg=0;*/
//console.log(" ");
console.log("==================== STEP 3 - AVERAGE SALARY OF EMPLOYEE WORKING IN WIPRO AND INFY ====================");

const arrayOfWiproAndInfy = arrayEmployee.filter((employee) => {
    return (employee.emp_company == "Wipro" || employee.emp_company == "Infy");
});

arrayOfWiproAndInfy.forEach((employee) => {
    console.log(employee);
});

const totalSalary1 = arrayOfWiproAndInfy.reduce((runningTotal, element) => {
    return runningTotal + element.emp_salary ;
}, 0 );

const averg = totalSalary1/arrayOfWiproAndInfy.length ;

console.log(`AVERAGE SALARY OF EMPLOYEE WORKING IN WIPRO IS : ${averg}`);

/*arrayEmployee.filter((Employee)=>{
    if(Employee.emp_company=="Wipro" || Employee.emp_company=="Infy")
    {   
        total=(total+Employee.emp_salary);
        avg=total/4;       
    }
});console.log(`Average salary of employees woking in Wipro and Infosys:=${avg}`) */








