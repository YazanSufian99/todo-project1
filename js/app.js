// var userName = prompt("Enter your Name:");

// console.log(userName);

// var userGender = prompt("Enter your Gender:").toLowerCase();




// if(userGender =="male" || userGender == "female"){
//     console.log("user Gender : " + userGender);
// }
// else
// alert("Gender not Correct")

// var userAge = prompt("Enter your Age:");


// if(userAge<"18" || userAge =="0"){
//     alert("age less than 18");
    
// }
// else
// console.log("user Age : "+userAge);

// var askWelcoming = confirm( "Do you want a welcome masege ?");


// if(askWelcoming == true){

// if(userGender =="male" ){
//     var welcomeMassege = alert(`Hello Mr. ${userName}`)

//         // console.log(welcomeMassege)
//         console.log(`Hello mr. ${userName}`)
//     }
// else if (userGender == "female" ){
//         var welcomeMassege2 = alert(`Hello Ms. ${userName}`)

//         // console.log(welcomeMassege2)
//         console.log(`Hello mr. ${userName}`)
//     }

// else{
//     var welcomeMassege3 = alert(`Hello  ${userName} (Gender not defiend)`)

//         console.log(welcomeMassege3 )
//         console.log(`Hello  ${userName} + (Gender not defiend)`)
//     }
// }

// TASK 6 

let qustion1 = prompt("Are you student ?").toLowerCase();
aswaerValidate(qustion1);
let qustion2 = prompt("Are you studies CS or any IT filed ?").toLowerCase();
aswaerValidate(qustion2);
let qustion3 = prompt(" do you know about .NET ?").toLowerCase();
aswaerValidate(qustion3);

function aswaerValidate(qustionValidate){
    if(qustionValidate == "yes"){
        console.log("yes ");
       printAnswers(qustionValidate);
        //  printAnswers(q1);
    }
    else if (qustionValidate == "no"){
        console.log("no");
        printAnswers(qustionValidate);
        // printAnswers(q2);
    }
    else if (qustionValidate == ""){
        console.log("Invalid");
         printAnswers(qustionValidate);
        // printAnswers(q3);
    }
    else if(qustionValidate !=="no" && qustionValidate !=="yes"){
         console.log("not correct answer");
        printAnswers(qustionValidate);
        // printAnswers(q4);
    }
}
// function printAnswers(userAnswers){
    
    

// }
// for(i=0;i<qustionValidate;i++){
    //     allAns [""] =allAns.push(userAnswers);
    // }
    