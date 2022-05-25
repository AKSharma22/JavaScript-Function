// creating an array for username, password and email
let username = document.getElementById("name");
let password = document.getElementById("password");
let email = document.getElementById("email");
let flag = 1;

function validate(){

    // for user name
    if(username.value == ""){

        document.getElementById("usererror").innerHTML ="username is empty";
        flag = 0;
    }
    else if(username.value.length <4){

        document.getElementById("usererror").innerHTML ="user name must be atleast 4 char";
        flag = 0;
    }
    else{
        
        document.getElementById("usererror").innerHTML ="";
        flag = 1;
    }


    //  for password
    if(password.value == ""){

        document.getElementById("passerror").innerHTML ="Password is empty";
        flag = 0;
    }
    else if(password.value.length <=3){

        document.getElementById("passerror").innerHTML ="Password must be atleast 4 char";
        flag = 0;
    }
    else{
        
        document.getElementById("passerror").innerHTML ="";
        flag = 1;
    }


    //  for email
    if(email.value == ""){

        document.getElementById("emailerror").innerHTML ="username is empty";
        flag = 0;
    }
    
    
    else{
        
        document.getElementById("emailerror").innerHTML ="";
        flag = 1;
    }
    // call function
    if(flag){

        return true;
    }
    else{

        return false;

    }
}