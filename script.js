function handleGetFormData() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const city = document.getElementById("city").value;
    const zipCode = document.getElementById("zip-code").value;
    const password = document.getElementById("password").value;
    const status = document.getElementById("status").checked;
    return {
        name,
        email,
        city,
        zipCode,
        password,
        status
    };
}

function isNumber(string){
    if (isNaN(string)==false){
        return true; 
        }else{
        return false; 
    }
}

function checkboxIsChecked(){
    var statusCheckbox = document.getElementById ("status");
    return statusCheckbox.checked;
}

function validateFormData(obj){
    const arr = ['name','city','email','zipCode','password','status']
    var zip = obj.zipCode;
if ((dataDiri !== null) && (isNumber(zip) == true) && ( checkboxIsChecked() == true)){
    return true ;
    }else{
    return false;
    }
}

function submit (){
    event.preventDefault();

if ( validateFormData(handleGetFormData()) == false){
    warning.textContent = "Periksa form anda sekali lagi";
} else {warning.textContent = " ";}
};

let form = document.getElementById("dataDiri");
    form.addEventListener("submit", submit);