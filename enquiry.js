function submitForm()
{
let name=document.getElementById("name").value;
let email=document.getElementById("email").value;
let country=document.getElementById("country").value;

if(name=="" || email=="" || country=="")
{
alert("Please fill all required fields");
return false;
}

alert("Thank you "+name+"! Your enquiry has been submitted.");
return true;
}
