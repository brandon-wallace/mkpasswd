// script.js

const lowercaseChars = document.getElementById("lowercase");
const uppercaseChars = document.getElementById("uppercase");
const symbolChars = document.getElementById("symbols");
const numberChars = document.getElementById("numbers");
const generateBtn = document.getElementById("generate");
const sliderInput = document.querySelector(".passwd-length-input");
const sliderOutput = document.querySelector(".passwd-length-output");
const passwordText = document.getElementById("password");
const copyBtn = document.getElementById("copy");
const copySVGBtn = document.querySelector(".copy-svg-btn");

const characterSets = {
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numbers: "0123456789",
    symbols: "@#$%!&*?._-+="
};

// getInput gets input from the user.
const getInput = () => {
    let characters = "";

    if (
        lowercaseChars.checked === false &&
        uppercaseChars.checked === false &&
        numberChars.checked === false &&
        symbolChars.checked === false
    ) {
        showNotification("Please select one character set.");
        return;
    }

    lowercaseChars.checked ? (characters += characterSets.lowercase) : "";
    uppercaseChars.checked ? (characters += characterSets.uppercase) : "";
    numberChars.checked ? (characters += characterSets.numbers) : "";
    symbolChars.checked ? (characters += characterSets.symbols) : "";

    document.getElementById("password").value = generatePassword(sliderInput.value, characters);
};

// generatePassword generates a random password of a specified length.
const generatePassword = (length, characters) => {
    let password = "";

    for (let i = 0; i < length; i++) {
        let randomNumber = crypto.getRandomValues(new Uint32Array(1))[0];
        randomNumber = Math.floor(
            (randomNumber / 0x100000000) * characters.length,
        );
        password += characters[randomNumber];
    }

    return password;
};

// updateSliderOutput updates the value of the slider.
const updateSliderOutput = () => {
    sliderOutput.textContent = sliderInput.value;
}

// showNotification displays a notification for a specified duration.
const showNotification = (message, duration = 2500) => {
    const notification = document.getElementById("notification");
    const notificationMessage = document.getElementById("notification-message");
    notificationMessage.textContent = message;

    notification.classList.remove("hidden");
    notification.classList.add("visible");

    setTimeout(() => {
        notification.classList.remove("visible");
        notification.classList.add("hidden");
    }, duration);
}

generateBtn.addEventListener("click", () => {
    getInput();
});

window.addEventListener("load", () => {
    document.getElementById("password").value = generatePassword(sliderInput.value, Object.entries(characterSets).map(([k, v]) => `${v}`).join(''));
    updateSliderOutput();
});

sliderInput.addEventListener("mousemove", () => {
    sliderOutput.textContent = sliderInput.value;
});

sliderInput.addEventListener("input", updateSliderOutput);

copyBtn.addEventListener("click", () => {
    passwordText.select();
    passwordText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(passwordText.value).then(() => {
        showNotification("copied");
    });
});

copySVGBtn.addEventListener("click", () => {
    passwordText.select();
    passwordText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(passwordText.value).then(() => {
        showNotification("copied");
    });
});
