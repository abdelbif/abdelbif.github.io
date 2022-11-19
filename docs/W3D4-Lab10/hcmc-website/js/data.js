"use strict"

export class Patient {
    constructor(patientId,firstName, midName, 
        lastname, dateOfBirth, department, patientType) {
        this.patientId = patientId;
        this.firstName = firstName;
        this.midName = midName;
        this.lastname = lastname;
        this.dateOfBirth = dateOfBirth;
        this.department = department;
        this.patientType = patientType;
    }
    /*get patientId(){
        return this.patientId;
    }
    set patientId(id){
        this.patientId = id;
    }

    get firstName(){
        return this.firstName;
    }

    set firstName(id){
        this.firstName = id;
    }

    get midName(){
        return this.midName;
    }

    set midName(id){
        this.midName = id;
    }

    get lastname(){
        return this.lastname;
    }

    set lastname(id){
        this.lastname = id;
    }

    get dateOfBirth(){
        return this.dateOfBirth;
    }

    set dateOfBir(dob){
        this.dateOfBirth = dob;
    }
    
    get department(){
        return this.department;
    }

    set department(dp){
        this.department = dp;
    }
    
    get patientType(){
        return this.patientType;
    }

    set patientType(pt){
        this.patientType = pt;
    }*/
}

export class DataOfPatients extends Array{
    filterElderlyPatient() {
        const today = new Date();
        return this.filter(p => today.getFullYear() - p.dateOfBirth.getFullYear() >= 65);
    }

    filterOutPatient(){
        return this.filter(p => p.patientType==='Yes');
    }

    filterBoth(){
        const today = new Date();
        return this.filter(p => today.getFullYear() - p.dateOfBirth.getFullYear() >= 65
        && p.patientType==='Yes');
    }
}