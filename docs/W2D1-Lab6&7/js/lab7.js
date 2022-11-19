"use strict"

//Question 6

    const module1 = (function(){
        let counter = 0;
        function add(){
            this.counter += 1;
        }
        function make_adder(inc){
            return function(){
                return this.counter += inc;
            }
        }
        function reset(){
            this.counter = 0;
        }
        return{
            add: add,
            reset: reset,
            counter: counter,
            add5: make_adder(5)
        };
    })();

    module1.add();
    module1.reset();
    module1.add5();
    module1.add5();
    console.log('Counter: ' + module1.counter);



    //Question 7.
    // Free variable: is a variable which is not passed as parameter or defined inside a function.
    //In short, it's defined in the enclosing scope, but it is used locally.
    // Free variable is counter

    //Question 8.
    // function make_adder(n){
    //     return function(){
    //         return this.counter += n;
    //     }
    // }


    //Question 9.
    // Use IIFE to declare variables and functions, which is implemented using an anonymous way.
    //example (function(){....})();


//Question 10.

const Employee = (function () {
    let myPrivateName = null;
    let myPrivateAge = null;
    let myPrivateSalary = null;

    //private getters
    const getAge = function(){
        return myPrivateAge;
    }
    
    const getSalary = function(){
        return myPrivateSalary;
    }

    let getName = function(){
        return myPrivateName;
    }

    //setters
    //private version of public setters

    const setAge = function(age){
        myPrivateAge=age;
    }

    const setSalary = function(salary){
        myPrivateSalary=salary;
    }

    const setName = function(name){
        myPrivateName=name;
    }

    const increaseSalary = function(percentage){
        const newSalary = getSalary() + getSalary()*percenage/100;
        setSalary(newSalary);
    }

    const incrementAge = function(){
        const newAge = getAge() + 1;
    }

    //Adding utility to return the data
    const toString = function(){
        return `{Employee: {Name: ${getName()}, Age: ${getAge()}, Salary: ${getSalary()}}}`;
    }

    //returning object with public methods only
    return {
        setAge: setAge,
        setAge: setAge,
        setSalary: setSalary,
        increaseSalary:increaseSalary,
        incrementAge:incrementAge,
        toString: toString
    };

})();
    Employee.setAge(32);
    Employee.setName('Abdel Bif');
    Employee.setSalary(150000);
    console.log (Employee.toString());
    Employee.increaseSalary(10);
    Employee. increaseAge();
    console. Log (Employee.toString());


    // Extending the Employee module by adding a
    // public address field and public methods
    // named, setAddress and getAddress

    Employee.address = null;
    Employee.setAddress = function(newAddress){
        this.address = newAddress;
    };

    Employee.getAddress = function(){
        return this.address;
    };

    Employee.setAddress("155 Kings Lane");

    console.log(`Employee's address: ${Employee.getAddress()}`);
    console.log(Employee.toString());

    //define a new constructor function named employeedwithAddress
    function EmployeeWithAddress(address){
        this.address = address;
    }
    EmployeeWithAddress.prototype = Employee;

    EmployeeWithAddress.prototype.setAddress=function(newAddress){
        this.address = newAddress;
    }
    EmployeeWithAddress.prototype.getAddress=function(){
        return this.address;
    }
    EmployeeWithAddress.prototype.toString=function(){
        return `{EmployeeWithAddress: {Name: ${this.getName()}, Age: ${this.getAge()}, Salary: ${this.getSalary()}, Address: ${this.getAddress()}}}`;
    }

    const empWithAddr = new EmployeeWithAddress(null);
    empWithAddr.setName("Emmanuel Mbulu");
    empWithAddr.setAddress("203 Emporia Ave");
    console.log(empWithAddr.toString());

