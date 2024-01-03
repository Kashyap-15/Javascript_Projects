// blur
function checkblnk(blank,spanid){
    if(blank.value == "" || blank.value == null){
        document.getElementById(spanid).innerText = "Please fill this field";
    }
    else{
        document.getElementById(spanid).innerText = "";
    }
}
// keyboard
// first name
function fistname(){
    let fname = document.getElementById("fname").value;
    if (fname.length < 2) {
        document.getElementById("spanmsg").innerHTML = "Enter Valid name";
        return false
    }else
    {
        document.getElementById("spanmsg").innerHTML = "";
        return false
    }
}
// middle name
function middlename(){
    let mname = document.getElementById("mname").value;
    if (mname.length < 2) {
        document.getElementById("spanmsg1").innerHTML = "Enter Valid name";
        return false
    }else
    {
        document.getElementById("spanmsg1").innerHTML = "";
        return false
    }
}
// last name
function lastname(){
    let lname = document.getElementById("lname").value;
    if (lname.length < 2) {
        document.getElementById("spanmsg2").innerHTML = "Enter Valid name";
        return false
    }else
    {
        document.getElementById("spanmsg2").innerHTML = "";
        return false
    }
}
// addresss
function addresfun(){
    let addr = document.getElementById("addr").value;
    if (addr.length < 30) {
        document.getElementById("spanmsg3").innerHTML = "Enter address with min 30 words";
        return false
    }else
    {
        document.getElementById("spanmsg3").innerHTML = "";
        return false
    }
}
// mobile velidation
function mobcheck(){
    let mobn = document.getElementById("mobn").value;
    let regex = /^[0-9]*$/;
    let startex = /^[6-9]/;
    if(mobn.match(regex) && mobn.match(startex)){
        document.getElementById("spanmsg7").innerHTML = "";
        return false
    }else{
        document.getElementById("spanmsg7").innerHTML = "Enter Valid Mobile Number";
        return false
    }
}
// email velidation
function emailcheck(){
    let email = document.getElementById("email").value;
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/;

    if (email.match(regex)) {
        document.getElementById("spanmsg8").innerHTML = "";
        return false
    }else{
        document.getElementById("spanmsg8").innerHTML = "Enter Valid Email address";
        return false
    }
}
function passcheck(){
    let pass = document.getElementById("pass").value;
    let regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/

    if (regex.test(pass)) {
        document.getElementById("spanmsg9").innerHTML = "";
        return false
    }else{
        document.getElementById("spanmsg9").innerHTML = "Enter Valid Password";
        return false
    }
}

// onclick
function clickon(){
    // first name
    let fname = document.getElementById("fname").value;
    if (fname == "" || fname == null) {
        document.getElementById("spanmsg").innerHTML = "Enter First Name";
    }else{
        document.getElementById("spanmsg").innerHTML = "";

    }
    // second name
    let mname = document.getElementById("mname").value;
    if (mname == "" || mname == null) {
        document.getElementById("spanmsg1").innerHTML = "Enter Second Name";
    }else{
        document.getElementById("spanmsg1").innerHTML = "";
    }
    // Last name
    let lname = document.getElementById("lname").value;
    if (lname == "" || lname == null) {
        document.getElementById("spanmsg2").innerHTML = "Enter Last Name";
    }else{
        document.getElementById("spanmsg2").innerHTML = "";
    }
    //address
    let addr = document.getElementById("addr").value;
    if (addr == "" || addr == null) {
        document.getElementById("spanmsg3").innerHTML = "Enter address";
    }else{
        document.getElementById("spanmsg3").innerHTML = "";
    }
    // Date of birth
    let bdate = document.getElementById("bdate").value;
    if (bdate == "" || bdate == null) {
        document.getElementById("spanmsg4").innerHTML = "Enter yout Birth Date";
    }else{
        document.getElementById("spanmsg4").innerHTML = "";
    }
    // Gender
    let male = document.getElementById("male").checked;
    let female = document.getElementById("female").checked;
    let others = document.getElementById("others").checked;

    if (male == false && female == false && others == false) {
        document.getElementById("spanmsg5").innerHTML = "Select Gender";
    }else{
        document.getElementById("spanmsg5").innerHTML = "";
    }
    // experience
    let exp = document.getElementById("exp").value;

    if (exp == "-1") {
        document.getElementById("spanmsg6").innerHTML = "Select experience";
    }else{
        document.getElementById("spanmsg6").innerHTML = "";
    }
    // Mobile Number
    let mobn = document.getElementById("mobn").value;
    if (mobn == "" || mobn == null) {
        document.getElementById("spanmsg7").innerHTML = "Enter Mobile Number";
    }else{
        document.getElementById("spanmsg7").innerHTML = "";
    }   
    // email
    let email = document.getElementById("email").value;
    if (email == "" || email == null) {
        document.getElementById("spanmsg8").innerHTML = "Enter email";
    }else{
        document.getElementById("spanmsg8").innerHTML = "";
    }
    // create password
    let pass = document.getElementById("pass").value;
    if (pass == "" || pass == null) {
        document.getElementById("spanmsg9").innerHTML = "Create Password";
    }else{
        document.getElementById("spanmsg9").innerHTML = "";
    }
    return false;
}
function showpass(){
    let pass = document.getElementById("pass");
    if (pass.type == "password") {
        pass.type = "text";
        return true
    }else{
        pass.type = "password";
        return true
    }
}