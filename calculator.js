let input = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");

let string = "";

function handleInput(value) {
    if (value === "=") {
        if (string !== "") {
            try {
                string = eval(string);
                if (!isFinite(string)) {
                    input.value = "Error";
                    string = "";
                } else {
                    input.value = string;
                }
            } catch (error) {
                input.value = "Error";
                string = "";
            }
        }
    } else if (value === "AC") {
        string = "";
        input.value = string;
    } else if (value === "DEL") {
        string = string.substring(0, string.length - 1);
        input.value = string;
    } else {
        const validChars = "0123456789+-*/.% 00";
        if (validChars.includes(value)) {
            string += value;
            input.value = string;
        }
    }
}
// key board support
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener("click", (e) => {
        handleInput(e.target.innerHTML);
    });
});

document.addEventListener("keydown", (e) => {
    e.preventDefault(); 
    let key = e.key; 

    if (key === "Enter") {
        handleInput("="); 
    } else if (key === "Escape") {
        handleInput("AC"); 
    } else if (key === "Backspace") {
        handleInput("DEL"); 
    } else {
        handleInput(key);
    }
});
