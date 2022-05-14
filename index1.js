function validate(){
	var name=document.getElementById("name").value;
    var email1=document.getElementById("email").value;
    var password=document.getElementById("pass").value;
    var mobile=document.getElementById("mno").value;
    var dob=document.getElementById("dob").value;
    var agree1=document.getElementById("agree").checked;
    var male=document.getElementById("male").checked;    
    var fmale=document.getElementById("fmale").checked;
    let regex1=/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 
    let regx=/^[6-9]\d{9}$/;


	if(name.trim()==""){
		alert("please enter the name");
		return false;
	}
	else if(!isNaN(name)){
		alert("please enter alphabets only");
		return false;
	}
	else if(email1.trim()==""){
		alert("enter the email");
		return false;
	}
	else if(!regex1.test(email1)){
		alert("enter email correctly");
		return false;
	}
    else if(password.trim()==""){
        alert("please enter the password");
        return false;
    }
    else if(password.length<=9){
        alert("please enter below 8 characters");
        return false;
    }
	else if(isNaN(mobile)){
		alert("Enter a phone number:");
		return false;
	}
	else if(mobile.trim()==""){
		alert("enter the mobile number");
		return false;
	}
	else if(!regx.test(mobile)){
		alert("enter mobilenumber correctly");
		return false;
	}

	else if(dob==""){
		alert("please fill your date of birth");
		return false;
	}
	else if(male==false && fmale==false){
		alert("please enter either male or female");
		return false;
	}
	
else if(agree1==false){
    alert("please accept terms & conditions");
    return false;
}
else{
	return true;
}
}