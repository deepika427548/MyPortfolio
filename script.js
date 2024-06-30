

document.getElementById('contactForm').addEventListener('submit',(event)=>{
event.preventDefault();

//clear prev error messages

const errorElements=document.querySelectorAll('error-text');

errorElements.forEach((element)=>{
    element.textContent='';
})

const name=document.getElementById('name').value;
const email=document.getElementById('email').value;
const phone=document.getElementById('phone').value;
const company=document.getElementById('company').value;
const message=document.getElementById('message').value;

const regName=/^[A-Za-z ]{3,20}$/;
const regEmail= /^[^@]+@\w+(\.\w+)+\w$/;
const regPhone=/^[0-9]{10}$/;
const regCompany=/^[a-zA-Z0-9\s\.\-]{2,50}$/;
const regMessage=/^.{10,1000}$/;




let isValid=true;

if(name===''){
isValid=false;
document.getElementById('name_Error').textContent="Name is required";
}else if(!regName.test(name)) {
document.getElementById('name_Error').textContent="name is invalid";
isValid=false;
} else {
document.getElementById('name_Error').textContent = '';
}

if(email===''){
isValid=false;
document.getElementById('email_Error').textContent="Email is required";
}else if(!regEmail.test(email)) {
document.getElementById('email_Error').textContent="Invalid Email address";
isValid=false;
} else {
document.getElementById('email_Error').textContent = '';
}

if(phone===''){
isValid=false;
document.getElementById('phone_Error').textContent="phone number is required";
}else if(!regPhone.test(phone)) {
document.getElementById('phone_Error').textContent="invalid phone number";
isValid=false;
} else {
document.getElementById('phone_Error').textContent = '';
}

if(company===''){
isValid=false;
document.getElementById('company_Error').textContent="phone number is required";
}else if(!regCompany.test(company)) {
document.getElementById('company_Error').textContent="invalid phone number";
isValid=false;
}else {
document.getElementById('company_Error').textContent = '';
}

if(message===''){
isValid=false;
document.getElementById('message_Error').textContent="message is required";
}else if(!regMessage.test(message)) {
document.getElementById('message_Error').textContent="Message must be at least 10 characters long and can only contain letters, numbers, spaces, periods, and hyphens.";
isValid=false;
}else {
document.getElementById('message_Error').textContent = '';
}

//let userData=[];
if (isValid) {
let formClass=document.getElementsByClassName("input-text")
console.log(formClass)
//Array.from(formClass).forEach((element)=>userData.push(element.value))
Array.from(formClass).forEach((element)=>(element.value=""));
alert("message has submitted successfully");


}


});
