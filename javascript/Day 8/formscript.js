function validateform(){  
    var fullname=document.myform.fname.value;
    var lastname=document.myform.lname.value;
    var firstpassword=document.myform.pass1.value;
    var secondpassword=document.myform.pass2.value;
    var gender=document.myform.gen.value;
    var skillsset=document.myform.skills
      
if (fullname.length < 3){  
    alert("Name should be grater than 3 characters");  
    return false;
}
if (lastname.length < 1) {
    alert("Last name should be more then 1 character")
    return false;
}
if(firstpassword.length < 3) {
    alert("Password must be at least 3 characters long.");  
    return false;
}
if(firstpassword != secondpassword){     
    alert("Password & Confirm Password must be same!");  
    return false;  
}  
if(gender.length < 1){
    alert('Gender should be selected');
    return false;
}
var flag = false;
for(var i=0; i < skillsset.length; i++){
    if(skillsset[i].checked){
        flag = true
    }
}
if(flag == false){
        alert('atleast one skill must be selected');
        return false;
    }
}