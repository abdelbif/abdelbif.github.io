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

var Employee = (function () {
    let myPrivateName = 'Abdelbif';
    let myPrivateAge = 55;
    let myPrivateSalary = '120000';


    //setters
    function setName(name){
        myPrivateName=name;
    }

    function setAge(age){
        myPrivateAge=age;
    }

    function setSalary(salary){
        myPrivateSary=salary;
    }


    //getters
    function getAge(){
        return myPrivateAge;
    }
    
    function getSalary(){
        return myPrivateSalary;
    }

    function getName(){
        return myPrivateName;
    }

    // function log(){  
    //         console.log('Name: ' + this.name + 
    //         ' Age: ' + this.age + 
    //         ' Salary: ' + this.salary);
        
    // }
    function increaseSalary(percentage){
        return getSalary() + getSalary()*percenage/100;
    }

    function incrementAge(){
        return getAge()+=1;
    }

    return {
        setAge: setAge,
        setAge: setAge,
        setSalary: setSalary,
        increaseSalary:increaseSalary,
        incrementAge:incrementAge,
    };

}());

Employee.setName('Abdel');
console.log(Employee.getName());
