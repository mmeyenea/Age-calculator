// globall variables
const outputYear = document.querySelector('.output-year');
const outputMonth = document.querySelector('.output-month');
const outputDay = document.querySelector('.output-day');
const sumbitBtn = document.querySelector('.calculate-btn');
console.log(outputMonth);


// input element variables
const inputYear = document.querySelector('#year');
const inputMonth = document.querySelector('#month');
const inputDay = document.querySelector('#day');
console.log(inputDay);

// error variables
const errorYear = document.querySelector('.error-year');
const errorMonth = document.querySelector('.error-month');
const errorDay = document.querySelector('.error-day');
console.log(errorDay);

let invalid = false;
sumbitBtn.addEventListener('click', calculateDate);
// sumbitBtn.addEventListener("click", warningPop);
inputDay.addEventListener('input', e =>{
    if(+inputDay.value > 31){
        errorDay.textContent ="Must Be a Valid Date";
        invalid=false;
        return;
    }else{
        invalid= true;
        errorDay.textContent = "";
    }
    if(+inputDay.value === 0){
        invalid = false;
        errorDay.textContent = "this field is required";
        invalid = false;
        return;
    }else{
        errorDay.textContent = "";
    }
});

inputMonth.addEventListener('input', e =>{
    if(+inputMonth.value > 12){
        errorMonth.textContent ="Must Be a Valid Date";
        invalid=false;
        return;
    }else{
        invalid= true;
        errorMonth.textContent = "";
    }
    if(+inputMonth.value === 0){
        invalid = false;
        errorMonth.textContent = "This field is required";
        invalid = false;
        return;
    }else{
        errorMonth.textContent = "";
    }
});

inputYear.addEventListener('input', e =>{
    if(+inputYear.value > 2024){
        errorYear.textContent ="Must Be a Valid Date";
        invalid=false;
        return;
    }else{
        invalid= true;
        errorYear.textContent = "";
    }
    if(+inputYear.value === 0){
        invalid = false;
        errorYear.textContent = "this field is required";
        invalid = false;
        return;
    }else{
        errorYear.textContent = "";
    }
});


function calculateDate(){
    if (invalid){
        let birthDate = `${inputMonth.value}/${inputDay.value}/${inputYear.value}`;
        console.log(birthDate);
        let birthDateObj = new Date(birthDate);
        let ageDiffMili = Date.now()-birthDateObj;
        let ageDate =new Date(ageDiffMili);
        let ageYears = ageDate.getUTCFullYear()-1970;
        let ageMonth = ageDate.getUTCMonth();
        let ageDay = ageDate.getUTCDate() -1;
        // display output
        outputDay.textContent =ageDay;
        outputMonth.textContent = ageMonth;
        outputYear.textContent = ageYears;
    }else{
        alert('Oops not allowed');
    }
}



// function warningPop(birthDate) {
//     ageMonth = new Date();
//     const target = new Date(birthDate);

//     if (ageMonth < target) {
//         alert("The specified date and month have not yet been attained.");
//     }
// }

// // Example usage:
// const targetDate = "2024-12-25"; // Format: YYYY-MM-DD
// warningPop(targetDate);
