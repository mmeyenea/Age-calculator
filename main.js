const day = document.querySelector('#day');
const month = document.querySelector('#month');
const year = document.querySelector('#year');
const btn = document.querySelector('button');

const newDate = document.querySelector('#newDate');
const newMonth = document.querySelector('#newMonth');
const newYear = document.querySelector('#newYear');


const date = new Date()    
btn.addEventListener('click' , ()=>{

    function generateAge() {
        const yob = date.getFullYear() 
        const cyob = yob - year.value
        newYear.innerHTML = cyob
        console.log(cyob);
        // console.log(yob);
    }
    function currentMonth() {    
        const mob = date.getMonth()
        const cmob = mob - month.value
        newMonth.innerHTML = cmob
        console.log(cmob);
        
        
    }
    function currentDate() {    
        const dob = date.getDate()
        const cdob = dob - day.value
        newDate.innerHTML = cdob
        console.log(cdob);
        
    }
    currentDate()
    currentMonth()
    generateAge()
})