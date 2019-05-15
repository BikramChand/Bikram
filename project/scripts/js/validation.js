function validation(){
              
    var cell_no=document.getElementById('phone_validation').value;
    var name=document.getElementById('first_name').value;
    var verification=document.getElementById('code').value;
    var email=document.getElementById('emailid').value;
    var password=document.getElementById('pass').value;
    if(cell_no==""){
      document.getElementById('phoneid').innerHTML="**please enter your phone number";
      return false;
    }

    if(cell_no!==""){
      document.getElementById('phoneid').innerHTML="";
      
    }

    if(cell_no.length<10){
      document.getElementById('phoneid').innerHTML="Phone number must be ten digits";
    }

    if(isNaN(cell_no)||cell_no.indexOf(" ")!=-1)
 {
  document.getElementById('phoneid').innerHTML="Enter an numeric value";
    return false; 
 }

    
    if(name==""){
      document.getElementById('name_field').innerHTML="** please enter your full name";
      return false;
    }

    if(name!=""){
      document.getElementById('name_field').innerHTML="";
    }

    if(verification==""){
      document.getElementById('code_field').innerHTML="** please enter the sms verification code";
      return false;
    }

    if(verification!=""){
      document.getElementById('code_field').innerHTML="";
     
    }

    if(email==""){
      document.getElementById('email_field').innerHTML="** please enter your verified email address";
      return false;
    }

    if(email.indexOf('@')<=0){
            document.getElementById("email_field").innerHTML="**@ invalid position";
            return false;
          }

        if((email.charAt(email.length-4)!='.')&&(email.charAt(email.length-3)!='.')){
          document.getElementById("emailids").innerHTML="**invalid email address";
          return false;
          }

    if(email!=""){
      document.getElementById('email_field').innerHTML="";
      
    }

    if(password==""){
      document.getElementById('password_field').innerHTML="** please enter the password";
      return false;
    }

    if(password!=""){
      document.getElementById('password_field').innerHTML="";
      
    }

  
    
  }