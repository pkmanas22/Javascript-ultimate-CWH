let contentSpace = document.getElementById("content")

const paragraph = (text) => {
    let para = document.createElement('p')
    para.textContent = text
    contentSpace.append(para)
}

// paragraph("Initialize hack program...")
// paragraph("Hacking twitter account of manas...")
// paragraph("Username found: pkmanas22...")
// paragraph("Connecting to Twitter...")
// paragraph("Your Account is successfully hacked...")

let messageArr = [
    "Initializing Hack tool...",
    "Connecting to Facebook...",
    "Connecting to server 1...",
    "Connection failed. Retrying...",
    "Connecting to server 2",
    "Connected Successfully...",
    "Username iamharry...",
    "Trying Brute Force...",
    "200K passwords tried...",
    "Match not found",
    "Another 200K passwords tried...",
    "Match not found...",
    "Another 200K passwords tried...",
    "Match not found...",
    "Another 200K passwords tried...",
    "Match found...",
    "Accessing Account...",
    "Hack Successful..."
]

// messageArr.forEach(element => {
//     paragraph(element)
// });

const sendMessage = (text, delay) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            paragraph(text)
            resolve()
        }, delay);
    })
}

const send = async () => {
    for (let index = 0; index < messageArr.length; index++) {
        const message = messageArr[index];
        await sendMessage(message, 500)
    }
}

send()
