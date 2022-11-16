"use strict"

const tenantForm = document.getElementById("tenantForm");
tenantForm.onsubmit = function(event){
    event.preventDefault();
    const bldgNoInput= document.getElementById("buildingNo");
    const titleInput= document.getElementById("title");
    const phoneNoInput= document.getElementById("phoneNo");
    const floorNoInput= document.getElementById("floorNo");
    const fullNameInput= document.getElementById("fullNames");
    const emailInput= document.getElementById("email");
    const aptNoInput= document.getElementById("apartmentNo");
    const licenceNoInput= document.getElementById("driversLicenceNo");

    let bldg = bldgNoInput.value;
    let title = titleInput.value;
    let phone = phoneNoInput.value;
    let floor = floorNoInput.value;
    let name = fullNameInput.value;
    let mail = emailInput.value;
    let apt = aptNoInput.value;
    let licence = licenceNoInput.value;
    
    window.alert(`
        Apartment Data:
        Building No: ${bldg}
        Floor No: ${floor}
        Apartment No: ${apt}
        Tenant information:
        Title: ${title}
        Full Name: ${name}
        Phone Number: ${phone}
        Email: ${mail}
        Drivers Licence: ${licence}
    `);

    bldgNoInput.value = "";
    titleInput.value = "";
    phoneNoInput.value = "";
    floorNoInput.value = "";
    fullNameInput.value = "";
    emailInput.value = "";
    aptNoInput.value = "";
    licenceNoInput.value = "";

}

for(let i=0; i< 10; i++){
    console.log(i);
}
console.log(i);
