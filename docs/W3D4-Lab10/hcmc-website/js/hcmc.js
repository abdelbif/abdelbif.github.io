/**
 * hcmc.js
 */
 "use strict";

import {Patient, DataOfPatients} from "./data.js";

const myData = new DataOfPatients();

window.addEventListener("DOMContentLoaded", () => {
    let currentRowNo = 0;
    const formNewPatient = document.querySelector("#formNewPatient");
    formNewPatient.addEventListener("submit", (event) => {
        event.preventDefault();
        const txtPatientIdNo = document.querySelector("#patientIdNumber");
        const txtFirstName = document.querySelector("#firstName");
        const txtMiddleInitial = document.querySelector("#middleInitials");
        const txtLastName = document.querySelector("#lastName");
        const txtDateOfBirth = document.querySelector("#dateOfBirth");
        const txtDepartment = document.querySelector("#ddlDepartment");
        const radioIsOutPatient = formNewPatient.elements["radioIsOutPatient"];

        const strPatientIdNo = txtPatientIdNo.value;
        const strFirstName = txtFirstName.value;
        const strMiddleInitial = txtMiddleInitial.value;
        const strLastName = txtLastName.value;
        const strDateOfBirth = txtDateOfBirth.value;
        const strDepartment = txtDepartment.value;
        const strRadioIsOutPatient = radioIsOutPatient.value

        addNewPatientDataRow(strPatientIdNo, strFirstName, strMiddleInitial,
                            strLastName, strDateOfBirth, strDepartment, 
                            strRadioIsOutPatient);
        txtPatientIdNo.value = "";
        txtFirstName.value = "";
        txtMiddleInitial.value = "";
        txtLastName.value = "";
        txtDepartment.value = "";
        txtDepartment["selectIndex"] = 0;
        radioIsOutPatient.value = "";
    })

    const allCheckboxes = document.querySelectorAll(".filter");
    for(const checkbox of allCheckboxes) {
        checkbox.addEventListener("click", filter);
    }

    const addNewPatientDataRow = function(patientId, firstName, midName, lastname, dateOfBirth, department, radioPatient){
        const patientTable = document.querySelector("#tbodyPatientsList");
        const newRow = patientTable.insertRow(-1);
    
        const newCellPatientIdNo = newRow.insertCell(0);
        const strPatientIdNo = document.createTextNode(`${patientId}`);
        newCellPatientIdNo.appendChild(strPatientIdNo);
    
        const newCellFirstName = newRow.insertCell(1);
        const strFirstName = document.createTextNode(`${firstName}`);
        newCellFirstName.appendChild(strFirstName);
    
        const newCellMiddleInitial = newRow.insertCell(2);
        const strMiddleInitial = document.createTextNode(`${midName}`);
        newCellMiddleInitial.appendChild(strMiddleInitial);
    
        const newCellLastName = newRow.insertCell(3);
        const strLastName = document.createTextNode(`${lastname}`);
        newCellLastName.appendChild(strLastName);
    
        const newCellDateOfBirth = newRow.insertCell(4);
        const strDateOfBirth = document.createTextNode(`${dateOfBirth}`);
        newCellDateOfBirth.appendChild(strDateOfBirth);
    
        const newCellDepartment = newRow.insertCell(5);
        const strDepartment = document.createTextNode(`${department}`);
        newCellDepartment.appendChild(strDepartment);

        const newCellRadioPatient = newRow.insertCell(6);
        const strRadioIsOutPatient = document.createTextNode(`${radioPatient}`);
        newCellRadioPatient.appendChild(strRadioIsOutPatient);

        let myPatient = new Patient(patientId, firstName, midName, 
            lastname, new Date(dateOfBirth), department, radioPatient);
        
        myData.push(myPatient);
        //console.log(myData);
    }    

    function fillTableFields(arrayOfPatients){
        const patientTable = document.querySelector("#tbodyPatientsList");
        patientTable.innerHTML = "";

        for(const patient of arrayOfPatients) {
            const newRow = patientTable.insertRow(-1);

            const newCellPatientIdNo = newRow.insertCell(0);
            const strPatientIdNo = document.createTextNode(`${patient.patientId}`);
            newCellPatientIdNo.appendChild(strPatientIdNo);

            const newCellFirstName = newRow.insertCell(1);
            const strFirstName = document.createTextNode(`${patient.firstName}`);
            newCellFirstName.appendChild(strFirstName);
        
            const newCellMiddleInitial = newRow.insertCell(2);
            const strMiddleInitial = document.createTextNode(`${patient.midName}`);
            newCellMiddleInitial.appendChild(strMiddleInitial);
        
            const newCellLastName = newRow.insertCell(3);
            const strLastName = document.createTextNode(`${patient.lastname}`);
            newCellLastName.appendChild(strLastName);
        
            const newCellDateOfBirth = newRow.insertCell(4);
            const strDateOfBirth = document.createTextNode(`${patient.dateOfBirth.toLocaleDateString()}`);
            newCellDateOfBirth.appendChild(strDateOfBirth);
        
            const newCellDepartment = newRow.insertCell(5);
            const strDepartment = document.createTextNode(`${patient.department}`);
            newCellDepartment.appendChild(strDepartment);

            const newCellRadioPatient = newRow.insertCell(6);
            const strRadioIsOutPatient = document.createTextNode(`${patient.patientType}`);
            newCellRadioPatient.appendChild(strRadioIsOutPatient);
            
        }    
    }

    function filter(){
        //console.log("checked");
        const checkBoxElderPatient = document.querySelector("#chkElderlyPatients");
        const checkBoxNonElderPatient = document.querySelector("#chkShowOutPatients");

        if(checkBoxElderPatient.checked && checkBoxNonElderPatient.checked){
            fillTableFields(myData.filterBoth());
        }else if(checkBoxElderPatient.checked){
            fillTableFields(myData.filterElderlyPatient());
        }else if(checkBoxNonElderPatient.checked){
            fillTableFields(myData.filterOutPatient()); 
        }else{
            fillTableFields(myData); 
        }
    }
 });