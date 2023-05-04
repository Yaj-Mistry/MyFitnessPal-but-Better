//Maintainace Calorie Set Up
let bodyWeight = document.getElementById("bodyWeight");
5.

let height = document.getElementById("height");

let age = document.getElementById("age");

let gender = document.getElementById("gender");

let OnSubmit = () => {
    alert(10 * bodyWeight + 6.25 * height - 5 * age + 5);
}


//Formulas
let maintainaceCal = () => {
    let maintainaceCalM = 10 * bodyWeight + 6.25 * height - 5 * age + 5;
    return maintainaceCalM;
}

/*if(gender == "Male") {
        //Male
        let maintainaceCalM = (10 * bodyWeight) + (6.25 * height) - (5 * age) + 5;
    } else if (gender == "Female"){
        //Female
        let maintainaceCalW = (10 * bodyWeight) + (6.25 * height) - (5 * age) + 161;
    } else {
        return "Please select a gender"
    }*/