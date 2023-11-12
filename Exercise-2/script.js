let user = prompt("Enter your choice \n S for snake, W for water & G for gun")

let computerIn = Math.floor(Math.random() * 3)

let computer = ["S", "W", "G"][computerIn]

const match = (user, computer) => {
    if (user === computer) {
        return "Match Drawn"
    } else if (user === "S" && computer === "W") {
        return "user"
    } else if (user === "S" && computer === "G") {
        return "computer"
    } else if (user === "W" && computer === "G") {
        return "user"
    } else if (user === "W" && computer === "S") {
        return "computer"
    } else if (user === "G" && computer === "S") {
        return "user"
    } else if (user === "G" && computer === "W") {
        return "computer"
    }
}

let result = match(user, computer)
document.write(`user: ${user} <br> cpu: ${computer} <br> The winner is ${result.toUpperCase()}`)