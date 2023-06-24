const includeLowercase = document.getElementById("lowercase");
const includeUppercase = document.getElementById("uppercase");
const includeSymbols = document.getElementById("symbols");
const includeNumbers = document.getElementById("numbers");
const generateBtn = document.getElementById("generate");
const sliderInput = document.querySelector(".passwd-length-input")
const sliderOutput = document.querySelector(".passwd-length-output")
const passwordText = document.getElementById("password");
const copyBtn = document.getElementById("copy");
const copySVGBtn = document.querySelector(".copy-svg-btn");

const shuffle = (chars) => {
    let charArray = chars.split('');
    let charLength = charArray.length;

    for (let i = 0; i < charLength-1; i++) {
        let ch = Math.floor(Math.random() * charLength)
        let temp = charArray[i];
        charArray[i] = charArray[ch];
        charArray[ch] = temp;
    }
    chars = charArray.join('');
    return chars;
}

const getInput = () => {
    const lowercase = "abcdefghijklmnopqrstuvwxyz"
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "\\/!@#$%(^&{*_-<+[=\">]})";
    let characters = "";
    if (includeLowercase.checked === false && 
        includeUppercase.checked === false &&
        includeNumbers.checked === false && 
        includeSymbols.checked === false) {
        return;
    }
    includeLowercase.checked ? (characters += lowercase) : "";
    includeUppercase.checked ? (characters += uppercase) : "";
    includeNumbers.checked ? (characters += numbers) : "";
    includeSymbols.checked ? (characters += symbols) : "";
    document.getElementById("password").value = generatePassword(sliderInput.value, characters);
}

generateBtn.addEventListener("click", () => {
    getInput();
});

const generatePassword = (length, characters) => {
    let password = "";
    shuffledCharacters = shuffle(characters);
    for (let i = 0; i < length; i++) {
        password += shuffledCharacters.charAt(
            Math.floor(Math.random() * characters.length)
        );
    }
    return password;
};

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
