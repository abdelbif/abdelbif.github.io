/**
 * census.js
 */
"use strict";

window.onload = () => {
    const censusForm = document.forms[0];
    censusForm.onsubmit = (event) => {
        event.preventDefault();
        // const rdoSeniorCitizen = document.getElementsByName("rdoSeniorCitizen");
        // let selectValue = null;
        // if(rdoSeniorCitizen[0].checked) {
        //     selectValue = "Yes";
        // } else {
        //     selectValue = "No";
        // }
        // alert(selectValue);
        const rdoSeniorCitizen = censusForm.elements["rdoSeniorCitizen"];
        alert(rdoSeniorCitizen.value);
        console.log(rdoSeniorCitizen.value);
    }
}