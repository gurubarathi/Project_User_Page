// ********** Login Section *********//
const usersList=[
                {name:"Gurubarathi",password:12345,},
                {name:"velmurugan",password:54321,}
                ]
            console.log(usersList)
 

    const forms = document.getElementById("fors");
    const names=document.getElementById("name");
    const password=document.getElementById("password");
    const divs =document.getElementById("check"); 

function verifyUser(){
    const currentObject = usersList.find(e=> e.name === names.value);
   
    if(currentObject != undefined){
        if(names.value === currentObject.name && password.value==currentObject.password)
        {
            divs.innerHTML="Login  succeesfully"; 
            callPages();
            const tempory=[];
            displayProfile();
            document.getElementById("fors").reset();
        }
    }else{
        console.log("error 404")
        divs.innerHTML="Username/password is incorrect"; 
        document.getElementById("Newsign").className="displayBlock"
    }
}
function callPages(){
    const Log=document.getElementById("Log");
    const Main=document.getElementById("Main");
    Log.className="displayNone";
    Main.className="displayBlock";
}

function createAccount(){
    const Log=document.getElementById("Log");
    Log.className="displayNone";
    const Sign=document.getElementById("Sign");
    Sign.className="displayBlock";
}

function displayProfile(a){
    const profile=document.getElementById("profile");
    const cards=document.getElementById("cards");
    profile.innerHTML=a.name;
}

//******SignIn Section*******//

const newUSer={id:''};
const sName=document.getElementById("sname");
const sEmail=document.getElementById("email");
const sPassword=document.getElementById("spassword");
const cPassword=document.getElementById("cpassword");

function signUser(){
   newUSer.name=sName.value;
   newUSer.email=sEmail.value;
   newUSer.password=cPassword.value;
   console.log(newUSer);
   usersList.push(newUSer);
    console.log(usersList);
 document.getElementById("form2").reset();
 const Sign=document.getElementById("Sign");
 Sign.className="displayNone";
 const Log=document.getElementById("Log");
  Log.className="displayBlock";
  document.getElementById("fors").reset();
}
/************Main Page************/
