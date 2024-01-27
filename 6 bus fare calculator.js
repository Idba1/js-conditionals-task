/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/


let age = 77;
const isStudent = true;
const regularTicket = 800;

if(age < 10){
    console.log('Your Ticket is free');
}
else if(age >= 60){
    let discountPrice15 = regularTicket *15  / 100 ;
    let payableAmmount15 = regularTicket - discountPrice15;
    console.log( payableAmmount15);
}
else if(isStudent){
    let discountPrice50 = regularTicket *50  / 100 ;
    let payableAmmount50 = regularTicket - discountPrice50;
    console.log( payableAmmount50);
}


else{
    console.log(regularTicket);
}