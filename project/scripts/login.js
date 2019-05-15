function login_validation(){
    var username=document.getElementById('phone').value;
    var password=document.getElementById('pass').value;
    if(username==""){
        document.getElementById("phone_field").innerHTML="**Please fill the field";
        return false;
    }

    if((username.length<=6)||(username.length>20)){
        document.getElementById("phone_field").innerHTML="**length must be between 6 to 20";
        return false;
    }

    if(password==""){
        document.getElementById("pass_field").innerHTML="**Please fill the field";
        return false;
    }

    if(username=="veekram"&&password=="assignment"){
        alert("You are successfully logged in");
    }
}

function forget(){
    alert("Check link on your mail box");
}