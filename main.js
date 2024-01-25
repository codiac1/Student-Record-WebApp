
var row = 1; // row Element which increase by one when a student enrolled . 

//Defination of DisplayDetails Function
function DisplayInfo() {
    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let website=document.getElementById("website").value;
    let link=document.getElementById("img-link").value;
    let skills=document.querySelectorAll('input[type="checkbox"]');

    let male = document.getElementById("male");
    let female = document.getElementById("female");

    //Regular Expression for Validation of Website
    let WebLinkRegExp = /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/;
    let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    // form field validation
    if(name == ""){
        alert("Please enter your Name !");
        return ;
    }

    if(email == ""){
        alert("Please fill your Email Id field !");
        return  ;
    }

    if(!email.match(mailformat)){
        alert("Please Enter a valid email id !");
        return ;
    }

    if (!website){
        alert("Please provide your Website !");
        return  ;
    }

    if (!WebLinkRegExp.test(website)){
        alert("Please fill a Valid Website Address !");
        return  ;
    }

    if (!link){
        alert("Please insert the Image Link !");
        return  ;
    }

    if (!WebLinkRegExp.test(link)){
        alert("Please fill the Valid Image Link field !");
        return  ;
    }

    if(!(male.checked || female.checked)){
        alert("Please choose your Gender !");
        return  ;
    }

    let display=document.getElementById("display");
    let newRow=display.insertRow(row);   // creating a row dynnamically
    
    // to create a faded effect
    fadeIn(newRow); 

    let cell1=newRow.insertCell(0);     // add a column in that row  
    let cell2=newRow.insertCell(1);   

    // GenderString describes the gender of student
    let GenderString = ""; 
    if(male.checked == true){
        GenderString += "Male";
    }
    else{
        GenderString += "Female";
    }

    //SkillString is Describe All the Skills of User
    let skillString = "";
    for(let i=0;i<skills.length;i++){
        if(skills[i].checked)
        {  
            skillString+=skills[i].value + " ";      
        }
    } 

    //Create Image Element and Set Attribute Source to Link
    let imgg = document.createElement("IMG");
    imgg.setAttribute("src", link); 

    name="<b>"+name+"</b>"; //Bold 
    cell1.innerHTML=name+"<br>"+GenderString+'<br>'+email+'<br><a href="'+website+'" target="'+website+'">'+website+'</a><br>'+skillString;
    cell2.appendChild(imgg); 
    row++; 
    resetForm();    
}

// Clear All The Value in the form
function resetForm() {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("website").value = "";
    document.getElementById("img-link").value = "";

    let genDer = document.querySelector('input[type=radio][name=gender]:checked');
    if (genDer.checked) {
        genDer.checked = false;
    }

    let skills = document.querySelectorAll('input[type="checkbox"]');
    for (var i = 0; i < skills.length; i++) { 
        if (skills[i].checked) {
            skills[i].checked = false;
        }
    } 
}

//For Fade-In Transition
function fadeIn(elem){
    elem.classList.add('show');
    elem.classList.remove('hide');  
}
