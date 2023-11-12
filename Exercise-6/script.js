let inputText = document.getElementById("inputText")
let submitBtn = document.getElementById("submitBtn")
let output = document.getElementById("output")


let index = localStorage.length

const setValue = (message) => {
    if (message !== "") {
        localStorage.setItem(`item${index}`, message)
        index++
    } else {
        alert("Please add task before saving")
    }
}

const deleteItem = (key) => {
    let ans = confirm("Are you sure to delete the tasks?")
    if (ans) {
        localStorage.removeItem(key)
        // updateValue()  //not working
        location.reload()
    }
}

const updateValue = () => {
    if (localStorage.length === 0) {
        output.hidden = false
    } else {
        output.innerHTML = ""
        for (let i = 0; i < localStorage.length; i++) {

            let key = localStorage.key(i);
            let value = localStorage.getItem(key);

            let newPara = document.createElement('p')
            newPara.className = "task"

            newPara.innerHTML = `<i class="fa-solid fa-trash" onclick = "deleteItem('${key}')"></i> ${i + 1}. ${value}`
            // console.log(index)

            output.append(newPara)
        }
    }
}

updateValue()

const getValue = () => {
    let inputValue = inputText.value

    setValue(inputValue)

    updateValue()

    // output.innerHTML = inputValue

    inputText.value = ""
}

// localStorage.clear()
