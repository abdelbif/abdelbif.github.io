import { Person } from "./model/person.js";
import { Employee } from "./model/employee.js";

const myPeople = [
    new Person('Anna Smith' ,new Date(1998, 12, 15)),
    new Person('Bob Jone' , new Date(1945, 11, 16) ),
    new Person('Carlos Slim Helu', new Date(1976, 9, 24))
];
myPeople.forEach(p => console.log(p));

const emp = new Employee('Jim Hanson', new Date(1987, 8, 11), 245990.00, new Date());
emp.doJob('Software Engineer');