
// Book Example:

function pakistan(grade) {
    switch (true) {
        case grade === "A+":
            console.log("You got an ", grade, ": زبردست")
            break;
        case grade === "A":
            console.log("You got an ", grade, ": بہت خوب ")
            break; 
        case grade === "B":
            console.log("You got an ", grade, ": عمدہ")
            break; 
        case grade === "C":
            console.log("You got an ", grade, ": شاباش")
            break; 
        case grade === "D":
            console.log("You got an ", grade, ": برا نہیں ہے")
            break; 
        default:
            console.log("Oops! " , "an ", grade, ": دوبارہ کوشش کریں")
    }
}

function unitedstates(grade) {
    switch (true) {
        case grade === "A+":
            console.log("You got an ", grade, ": Excellent")
            break;
        case grade === "A":
            console.log("You got an ", grade, ": Very Good")
            break; 
        case grade === "B":
            console.log("You got an ", grade, ": Good")
            break; 
        case grade === "C":
            console.log("You got an ", grade, ": Okay")
            break; 
        case grade === "D":
            console.log("You got an ", grade, ": Not bad, Work hard")
            break; 
        default:
            console.log("Oops! " , "an ", grade, "Try Again")
    }
}

function getGrade(percentage, callback){
    let grade;
    switch(true) {
    case percentage >=90:
        grade = "A+"
        break;
    case percentage >=80:
        grade = "A"
        break;
    case percentage >=70:
        grade = "B"
        break;
    case percentage >=60:
        grade = "C"
        break;
    case percentage >=50:
        grade = "D"
        break;
    default:
    grade = "F";
    }
    callback(grade);
}

getGrade(75, pakistan)
getGrade(75, unitedstates)

