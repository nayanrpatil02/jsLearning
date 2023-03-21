class Employee {
    constructor(empId,empName,empDept,empSalary,empCompany) {
        this.empId = empId;
        this.empName = empName;
        this.empDept = empDept;
        this.empSalary = empSalary;
        this.empCompany = empCompany;
    }
}
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~ Created All Employee Objects Using Class ~~~~~~~~~~~~~~~~~~~~~~~~~~~");
const empAnil = new Employee (22,"Anil","IT",50000,"TCS");
const empRadha = new Employee (33,"Radha","HR",74000,"Wipro");
const empRishi = new Employee (55,"Rishi","Finance",47000,"TCS");
const empSonali = new Employee (66,"Sonali","Finance",45000,"Infy");
const empMonika = new Employee (77,"Monika","IT",40000,"wipro");
const empViny = new Employee (88,"Vinyak","IT",75000,"TCS");
const empMahi = new Employee (99,"Mahesh","HR",85000,"Infy");

const setOfEmployee = new Set();
setOfEmployee.add(empAnil);
setOfEmployee.add(empRadha);
setOfEmployee.add(empRishi);
setOfEmployee.add(empSonali);
setOfEmployee.add(empMahi);
setOfEmployee.add(empViny);
setOfEmployee.add(empMahi);

setOfEmployee.forEach(employee => {
    console.log(employee);
});