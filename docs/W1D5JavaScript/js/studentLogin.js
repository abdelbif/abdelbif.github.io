"use strict";

window.onload = function(){
  const loginForm = document.getElementById("loginForm");
  loginForm.onsubmit = function(event){
    event.preventDefault();
    const emailInput = document.getElementById("EmailAddress");
    const passInput = document.getElementById("Password");
    const urlInput = document.getElementById("url");
    // const btn = document.getElementsById("btnSubmit");
    const email = emailInput.value;
    const pass = passInput.value;
    const url = urlInput.value;

    console.log(`The Email is: ${email}`);
    console.log(`The password is: ${pass}`);
    console.log(`The url is: ${url}`);

    //  document.getElementById("spnEmail").innerText=`The Email is: ${email}`;
    //  document.getElementById("spnPwd").innerText=`The password is: ${pass}`;
    //  document.getElementById("spnUrl").innerText=`The url is: ${url}`;

    emailInput.value = "";
    passInput.value = "";
    urlInput.value = "";

  }

}  

