'use strict';
var nameError=document.getElementById("name_Error");
var emailError=document.getElementById("email_Error");
var phoneError=document.getElementById("phone_Error");
var companyError=document.getElementById("company_Error");
var messageError=document.getElementById("message_Error");
var submitError=document.getElementById("submit_Error")



function validateName()
{
    var name=document.getElementById("name").value;

    if(name.length==0){
        nameError.innerHTML='name is required';
        return false;
    }
    if(!name.match(/^[A-Za-z]+$/)){
        nameError.innerHTML="invalid Format";
        return false;
    }
    nameError.innerHTML='';
    return true;
}

function validateEmail()
{
    var email=document.getElementById("email").value;

    if(email.length==0){
        emailError.innerHTML='email is required';
        return false;
    }
    if(!email.match(/^[^@]+@\w+(\.\w+)+\w$/)){
        emailError.innerHTML="invalid Format";
        return false;
    }
    emailError.innerHTML='';
    return true;
}

function validatePhone()
{
    var phone=document.getElementById("phone").value;

    if(phone.length==0){
        phoneError.innerHTML='phone is required';
        return false;
    }
    if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML="invalid Format";
        return false;
    }
    phoneError.innerHTML='';
    return true;
}

function validateCompany()
{
    var company =document.getElementById("company").value;

    if(company.length==0){
        companyError.innerHTML='company name is required';
        return false;
    }
    if(!company.match(/^[a-zA-Z0-9\s\.\-]{2,50}$/)){
        companyError.innerHTML="invalid Format";
        return false;
    }
    companyError.innerHTML='';
    return true;
}

function validateMessage()
{
    var message =document.getElementById("message").value;

    if(message.length==0){
        messageError.innerHTML=' message is required';
        return false;
    }
    if(!message.match(/^[a-zA-Z0-9\s\.\-]{10,50}$/)){
        messageError.innerHTML="Message must be at least 10 characters long ,can only contain letters,numbers,spaces,periods and hyphens";
        return false;
    }
    messageError.innerHTML='';
    return true;
}

function validation()
{
 if(!validateName() || !validatePhone() || !validateEmail() || !validateCompany() || !validateMessage()){
    submitError.style.display='block';
    submitError.innerHTML="please fix the error to submit the form";
    setTimeout(function(){submitError.style.display='none';},3000);
    return false;
 }
 else{
    let formClass=document.getElementsByClassName("input-text")
console.log(formClass)
//Array.from(formClass).forEach((element)=>userData.push(element.value))
Array.from(formClass).forEach((element)=>(element.value=""));
alert("message has submitted successfully");
 }
 
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
    if (!validation()) {
        event.preventDefault();
    }
});

