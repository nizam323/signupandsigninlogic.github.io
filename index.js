// signUp

let user = [];

function signup(){

   let uName = document.getElementById("userName").value;
   let uEmail = document.getElementById("userEmail").value;
   let uPassword = document.getElementById("userPassword").value;
   let fuser = user.find(user => user.email==uEmail);
   
   if(uName&&uEmail&&uPassword){
       if(!fuser){
       user.push(
            {
                name: uName ,
                email:  uEmail ,
                password:  uPassword ,
            }
            );
            document.getElementById("userName").value="";
            document.getElementById("userEmail").value="";
            document.getElementById("userPassword").value="";
            
            window.alert("Signup successful");
            console.clear();
            console.log(...user);}
        else if(fuser){        
        window.alert("User Already Register Please Add New Email")
    }}
    else{
       window.alert("Please fill all the fields.");
    }};


// signIn

function signin(){
    regEmail = document.getElementById("regEmail").value;
    regPassword = document.getElementById("regPassword").value;
 
    if(regEmail&&regPassword){
    let foundUser = user.find(user => user.email==regEmail && user.password==regPassword)
    
    if(foundUser){
        window.alert("Signin Successful")
    }else{    
        window.alert("Signin Unsuccessful")    
    }
    regEmail = document.getElementById("regEmail").value="";
    regPassword = document.getElementById("regPassword").value="";
    }else{   
        window.alert("Please fill all the fields.");
    }

 
}