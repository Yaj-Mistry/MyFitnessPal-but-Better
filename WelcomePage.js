//Maintainace Calorie Set Up
let bodyWeight = () =>{
    return document.getElementById("BW");
}
let height= () => {
    return document.getElementById("height");
}
let age = () => {
    return document.getElementById("age");
}
let gender = () => {
    return document.getElementById(gender);
}

let nBW;
let nH;
let nA;
let nG;

let onSubmit = () => {
    nBW = bodyWeight();
    nH = height();
    nA = age();
    nG = gender();
    console.log(nBW, nH, nA, nG);
}



//Formulas
let maintainaceCal = () => {
    if(gender == "Male") {
        //Male
        let maintainaceCalM = (10 * bodyWeight) + (6.25 * height) - (5 * age) + 5;
    } else if (gender == "Female"){
        //Female
        let maintainaceCalW = (10 * bodyWeight) + (6.25 * height) - (5 * age) + 161;
    } else {
        return "Please select a gender"
    }
}
