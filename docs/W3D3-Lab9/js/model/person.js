//"use strict"

class Person{
    #name = null;
    #dateOfBirth = null;

    constructor(name, dateOfBirth){
        this.name = name;
        this.dateOfBirth = dateOfBirth;
    }

    getName(){
        return this.#getName;
    }

    setName(name){
        this.#name = name;
    }

    getDateOfBirth(){
        return this.#dateOfBirth;
    }
     setDateOfBirth(dateOfBirth){
        this.#dateOfBirth = dateOfBirth
    }
    
    toString(){
        return `Name: ${this.#name},
                DOB: ${this.#dateOfBirth}`
    }
}