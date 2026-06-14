
let users = JSON.parse(localStorage.getItem('users')) || [];
export const signUpHandar = (nameVal, numberVal, mailVal, passwordVal)=>{

    if(users.find(user=>user.nameVal === nameVal)){
        alert('UserName alredy exist.');
    }else if(users.find(user=>user.mailVal === mailVal)){
        alert('Email was alredy exist.')
    }else{
        users.push({nameVal, numberVal, mailVal, passwordVal});
        localStorage.setItem('users', JSON.stringify(users))
        alert("Signup successful. Please login.");
    }
}

export const loginHandar = (nameVal, passwordVal, navigate)=>{
    const user = users.find(user => user.nameVal === nameVal && user.passwordVal === passwordVal);
    if (user){
     
        localStorage.setItem("loginUser", JSON.stringify(user));
        navigate("/");
        // alert("login sugsesful");
        
        
    }else{
        alert("failed");
   
    }
}