// validation function
function validation(){

    // Assiging values
    var name = document.getElementById('Name').value;
    var phone = document.getElementById("Phone").value;
    var country = document.getElementById("Country").value;
    var pass = document.getElementById("Password").value;
    var pass1 = document.getElementById("Password1").value;
    
    
    // Checking name feild
    if(name == ""){
        document.getElementById('errorname').innerHTML = "Please Enter Your Name";
        return false;
    }
     if(name.length <=2){
        document.getElementById('errorname').innerHTML = "Please Check your Name";
        return false;
    }
     if(name.length >=20){
        document.getElementById('errorname').innerHTML = "Please Use Initials for First Name";
        return false; 
    }
    if(!isNaN(name)){
        document.getElementById('errorname').innerHTML = "Only Alphabets are allowed";
        return false; 
    }





    // Checking phone feild
    if(phone == ""){
        document.getElementById('errorphone').innerHTML = "Please Enter Your Mobile no";
        return false;
    }
    if(phone.length !=10){
        document.getElementById('errorphone').innerHTML = "Please Enter Your 10-Digit Mobile no";
        return false;
    }
     




    // Checking country feild
    if(country == ""){
        document.getElementById('errorcountry').innerHTML = "Please Select your country";
        return false;
    }

    // Checking password feild
    if(pass == ""){
        document.getElementById('errorpass').innerHTML = "Please Enter Your Password";
        return false;
    }
     if(pass.length <8){
        document.getElementById('errorpass').innerHTML = "Please Enter a password of 8 charcters";
        return false;
    }
     if(pass.length >=20){
        document.getElementById('errorpass').innerHTML = "Password Limit exceded ";
        return false; 
    }

    // Checking confirm password feild
    if(pass1 == ""){
        document.getElementById('errorpass1').innerHTML = "Please Enter Your Password again";
        return false;
    }


    // Checking  password feild with confirm password feild
     if(pass != pass1){
        document.getElementById('errorpass1').innerHTML = "Password is not matching";
        return false;
     }


}