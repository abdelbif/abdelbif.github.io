"use strict"

//Question 1.

let person={
    name: '',
    dateOfBirth: null,

    getName: function(){
        return this.name;
    },

    setName: function(name){
        this.name=name;
    }
}

const newPerson = Object.create(person);
newPerson.setName('John');
newPerson.dateOfBirth = '12-10-1998';

console.log(`The person's name is ${newPerson.getName()}`);
console.log(`${newPerson.getName()} was born on ${newPerson.dateOfBirth}`);


//Question 2.

const employee = Object.create(person);

employee.salary = 0;
employee.hireDate = new Date(2022,10,16);
employee.doJob = function(jobTitle){
    console.log(`${this.getName()} is a ${jobTitle} who earns ${this.salary}`);
}

employee.setName('Anna');
employee.salary='249,995.50';
employee.doJob('Programmmer');


//Question 3.

function Person(name, dateOfBirth){
    this.name = name;
    this.dateOfBirth = dateOfBirth;
    this.toString = function(){
        return `Name: ${this.name},
                DOB: ${this.dateOfBirth}`
    };
}

const p = new Person('Anna','1998-12-10');    
console.log(p.toString());
