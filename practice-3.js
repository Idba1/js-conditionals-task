/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/


// var mark = prompt ("Enter your marks:");
// if(mark > 90-100){
//     console.log('you got A grade');
// }



var mark = 100;
if(mark >= 90){
    console.log('you got A grade');
}
else if(mark >= 80){
    console.log('you got B grade');
}
else if(mark >= 70){
    console.log('you got C grade');
}
else if(mark >= 60){
    console.log('you got D grade');
}
else{
    console.log('you got F grade');
}




mark = 0;
if(mark >= 90){
    console.log('you got A grade');
}
else{
    if(mark >= 80){
        console.log('you got B grade');
    }
    else{
        if(mark >= 70){
            console.log('you got C grade');
        }
        else{
            if(mark >= 60){
                console.log('you got D grade');
            }
            else{
                console.log('you got F grade');
            }
        }
    }
}