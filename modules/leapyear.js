//Write a function that takes in a year and returns a boolean indicating if the year is a leap year. 
// Years that are divisible by 4 are leap years, but years that are divisible by 100 are not leap 
// years, but years that are divisible by 400 are leap years. 

const leapyear = function(value){
    if(value % 4 == 0 || value % 400 == 0){
        return 'yes';
    } 
    else if(value % 100 == 0){
        return 'no';
    }
    
    else {
        return 'no'
    }
}

// function leapyear(year)
// {
// return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
// }

module.exports = leapyear;
