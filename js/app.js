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
    let arr=[""]
    
    if(qustionValidate == "yes"){
        // let q1= console.log("yes ");
        arr.push("yes");
   
    }
    else if (qustionValidate == "no"){
        // let q2= console.log("no");
        arr.push("no")
        
    }
    else if (qustionValidate == ""){
        // let q3 = console.log("Invalid");
        arr.push("Invalid")
       
    }
    else if(qustionValidate !=="no" && qustionValidate !=="yes"){
        //  let q4 = console.log("not correct answer");
         arr.push("not correct answer");
    }
    console.log(arr)
}
function printAnswers(userAnswers){
   

}
// for(i=0;i<qustionValidate;i++){
    //     allAns [""] =allAns.push(userAnswers);
    // }
    