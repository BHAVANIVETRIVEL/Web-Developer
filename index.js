function validate(){
    var username=document.getElementById("name");
    var password=document.getElementById("pass");
    if(username.value.trim()==""||password.value.trim()==""){
        alert("please enter the details");
        return false;
    }
    else if(username.value=="bhavani" && password.value=="2092000"){
        return true;
    }
    else{
        alert("Invalid password and username");
        return false;
    }
}