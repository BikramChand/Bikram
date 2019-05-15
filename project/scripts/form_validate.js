function validation(){
              
    var cell_no=document.getElementById('phone_validation').value;
    var name=document.getElementById('first_name').value;
    var verification=document.getElementById('code').value;
    var email=document.getElementById('emailid').value;
    var password=document.getElementById('pass').value;
    var confirm_password=document.getElementById('confirm').value;

    
    if(cell_no==""){
      document.getElementById('phoneid').innerHTML="**please enter your phone number";
      return false;
    }

    if(cell_no.length<10){
      document.getElementById('phoneid').innerHTML="**phone number must be ten digits";
      return false;
    }

    if(isNaN(cell_no)||cell_no.indexOf(" ")!=-1)
    {
     document.getElementById('phoneid').innerHTML="Enter an numeric value";
       return false; 
    }
    
    if(cell_no.length==10){
      document.getElementById('phoneid').innerHTML="";
     
    }

  
   
       
       if(name==""){
         document.getElementById('name_field').innerHTML="** please enter your full name";
         return false;
       }

       if((name.length<=6)||(name.length>20)){
				document.getElementById("name_field").innerHTML="**length must be between 6 to 20";
				return false;
			}
			if(!isNaN(name)){
				document.getElementById("name_field").innerHTML="**only characters are valid";
				return false;
			}
   
       if(name!=""){
         document.getElementById('name_field').innerHTML="";
       }
   
       if(verification==""){
         document.getElementById('code_field').innerHTML="** please enter the sms verification code";
         return false;
       }

       if(verification.length<5){
        document.getElementById('code_field').innerHTML="**Digits must be four";
        return false;
       }
       
       if(isNaN(verification)||verification.indexOf(" ")!=-1)
       {
        document.getElementById('code_field').innerHTML="Enter an numeric value";
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
   
         
       if(email!=""){
         document.getElementById('email_field').innerHTML="";
         
       }
   
       if(password==""){
         document.getElementById('password_field').innerHTML="** please enter the password";
         return false;
       }

       if((password.legth<=5)||(password.legth>30)){
				document.getElementById("passwords").innerHTML="**password length must be between 5 to 30";
				return false;
			}
   
       if(password!=""){
         document.getElementById('password_field').innerHTML="";
         
       }

       if(confirm_password==""){
         document.getElementById('confirm_field').innerHTML="**please fill the field";
         return false;
       }
       
       if(password!=confirm_password){
         document.getElementById('confirm_field').innerHTML="**password not matching";
         return false;
       }
       
       if(cell_no!=""&&name!=""&& verification!=""&&email!=""&&password!=""&&confirm_password!=""){
         alert("Now you are member of our family");
       }
  }