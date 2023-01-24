// ********** Login Section *********//
const usersList=[
                {name:"Gurubarathi",password:12345,email:"gurubarathi@gmail.com",age:26},
                {name:"velmurugan",password:54321,email:"velmurugan@gmail.com",age:26}
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
            displayProfile();
            document.getElementById("fors").reset();
        }
    }else{
        console.log("error 404")
        const check = document.getElementById("check");
        check.textContent="Username/password is incorrect"; 
        document.getElementById("Newsign").className="bottomL"
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
    Sign.className="sign_form";
}

function displayProfile(){
    const names=document.getElementById("name");
    const userObject = usersList.find(e=> e.name === names.value);
    console.log(userObject);
    const profile=document.getElementById("profile");
    profile.innerText="Hello! "+userObject.name;
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
var container=document.querySelector(".cards-container");
const cars=[
    {
        cate:"Sports Car",
        brand:"Ferrari",
        price:"2$ milion",
        path:"https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2Fyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
        cate:"Sports Car",
        brand:"Chevrolt",
        price:"1$ milion",
        path:"https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNhcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
    },
    {  
        cate:"Sports Car",
        brand:"Benz",
        price:"1$ milion",
        path:"https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"

    },
    {  
        cate:"Sports Car",
        brand:"Benz",
        price:"1$ milion",
        path:"https://images.unsplash.com/photo-1555353540-64580b51c258?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGNhcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"

    },
    {  
        cate:"Sports Car",
        brand:"Benz",
        price:"1$ milion",
        path:"https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGNhcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"

    },
    {  
        cate:"Sports Car",
        brand:"Benz",
        price:"1$ milion",
        path:"https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2Fyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"

    }
    
]
function showCars(){
    
            cars.forEach(e=>{
            let code= `<div class="card">
                                    <img src="${e.path}" alt="car">
                                    <div class="card-text">
                                        <h5 class="cate">${e.cate}</h5>
                                        <h2 class="brand">${e.brand}</h2>
                                        <p class="price">${e.price}</p>
                                    </div>
                                </div>`;
            container.innerHTML+=code;
            })
        }