
const canDrive = (age) => {
    return age >= 18 ? true : false
}

let runAgain = true

while (runAgain) {
    let age = prompt("Enter your age")
    age = Number.parseInt(age)

    if (age < 0) {
        console.error("Please enter valid age")
        break
    }
    
    if (canDrive(age)) {
        alert("You  can drive")
    } else {
        alert("You can't drive")
    }
    runAgain = confirm("Are you want to this screen again")
}

