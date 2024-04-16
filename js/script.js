// script.js
const lowercaseChars = document.getElementById("lowercase");
const uppercaseChars = document.getElementById("uppercase");
const symbolChars = document.getElementById("symbols");
const numberChars = document.getElementById("numbers");
const generateBtn = document.getElementById("generate");
const sliderInput = document.querySelector(".passwd-length-input")
const sliderOutput = document.querySelector(".passwd-length-output")
const passwordText = document.getElementById("password");
const copyBtn = document.getElementById("copy");
const copySVGBtn = document.querySelector(".copy-svg-btn");


// getInput gets input from the user.
const getInput = () => {
    const lowercase = "abcdefghijklmnopqrstuvwxyz"
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "@#$%!&*?._-+=";
    let characters = "";

    if (lowercaseChars.checked === false && uppercaseChars.checked === false && numberChars.checked === false && symbolChars.checked === false) {
        return;
    }

    lowercaseChars.checked ? (characters += lowercase) : "";
    uppercaseChars.checked ? (characters += uppercase) : "";
    numberChars.checked ? (characters += numbers) : "";
    symbolChars.checked ? (characters += symbols) : "";

    document.getElementById("password").value = generatePassword(sliderInput.value, characters);
}

// hasDuplicateAdjacentCharacters checks if the current character is the same as the next.
const hasDuplicateAdjacentCharacters = (string) => {
    for (let i = 0; i < string.length - 1; i++) {
        if (string[i] === string[i + 1]) {
            return true;
        }
    }

    return false;
}

// generatePassword generates a random password of a specified length.
const generatePassword = (length, characters) => {
    let password = "";

    for (let i = 0; i < length; i++) {
        let randomNumber = crypto.getRandomValues(new Uint32Array(1))[0];
        randomNumber = Math.floor(randomNumber / 0x100000000 * characters.length);
        password += characters[randomNumber];
    }

    if (hasDuplicateAdjacentCharacters(password)) {
        password = generatePassword(length, characters);
    }

    return password;
}

generateBtn.addEventListener("click", () => {
    getInput();
});

window.addEventListener("load", getInput)

sliderOutput.textContent = sliderInput.value;

sliderInput.addEventListener("mousemove", () => {
    sliderOutput.textContent = sliderInput.value;
});

sliderInput.addEventListener("touchstart", () => {
    sliderOutput.textContent = sliderInput.value;
});
sliderInput.addEventListener("touchstart", () => {
    sliderOutput.textContent = sliderInput.value;
});

copyBtn.addEventListener("click", () => {
    passwordText.select();
    passwordText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(passwordText.value);
});

copySVGBtn.addEventListener("click", () => {
    passwordText.select();
    passwordText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(passwordText.value);
});
