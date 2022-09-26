const passwordText = document.getElementById("password");
const includeLowercase = document.getElementById("lowercase");
const includeUppercase = document.getElementById("uppercase");
const includeSymbols = document.getElementById("symbols");
const length = document.getElementById("length");
const includeNumbers = document.getElementById("numbers");
const generateBtn = document.getElementById("generate");
let oldSlider = "";

generateBtn.addEventListener("click", () => {
    const lowercase = "abcdefghijklmnopqrstuvwxyz"
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "\\/!@#$%^&*_-+=\"";
    let characters = "";
    if (includeLowercase.checked === false && includeUppercase.checked === false &&
        includeNumbers.checked === false && includeSymbols.checked === false) {
        alert("Select at least one option.");
        return;
    }
    includeLowercase.checked ? (characters += lowercase) : "";
    includeUppercase.checked ? (characters += uppercase) : "";
    includeNumbers.checked ? (characters += numbers) : "";
    includeSymbols.checked ? (characters += symbols) : "";
    passwordText.value = generatePassword(slider.value, characters);
});

const generatePassword = (length, characters) => {
    let password = "";
    for (let i = 0; i < length; i++) {
        password += characters.charAt(
            Math.floor(Math.random() * characters.length)
        );
    }
    return password;
};

const slider = document.querySelector(".passwd-length-input")
const output = document.querySelector(".passwd-length-output")

output.textContent = slider.value;

slider.addEventListener("mousemove", () => {
    output.textContent = slider.value;
});

slider.addEventListener("touchstart", () => {
    output.textContent = slider.value;
});
slider.addEventListener("touchstart", () => {
    output.textContent = slider.value;
});

const copyBtn = document.getElementById("copy");
copyBtn.addEventListener("click", () => {
    passwordText.select();
    document.execCommand("copy");
});
