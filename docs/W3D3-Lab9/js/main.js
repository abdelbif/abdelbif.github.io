import { person } from "./model/person.js";
import { employee } from "./model/employee.js";

const myPeople = [
    new person('Ana Smith' ,new Date(1998, 12, 15)),
    new person('Bob Jone' , new Date(1945, 11, 16) ),
    new person('Carlos Slim helu', new Date(1976, 09, 24))
];
myPeople.forEach(p => console.log(p));

const emp = new Employee('Jim Hanson', '245,990.00');
console.log(emp.doJob('Software Engineer'));