// Dark Mode
const toggleSwitch = document.querySelector('.switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
  
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {        
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);

// ScreenInput
const res = document.getElementById("result");
// const subres = document.getElementById("subresult");

function calculate(value) {
    const sanitizedValue = value.replace(/x/g, '*').replace(/÷/g, '/');
    const calculatedValue = eval(sanitizedValue || null);
    if (isNaN(calculatedValue)) {
        res.value = "Can't divide 0 with 0";
        setTimeout(() => {
            res.value = "";
        }, 1300);
    } else {
        res.value = +parseFloat((calculatedValue).toFixed(8));
    }
}

// Displays entered value on screen.
function screenInput(enteredValue) {
    if (!res.value) {
        res.value = "";
    }
    res.value += enteredValue;
}

function backSpace() {
    res.value = res.value.slice(0, -1);
}

function convertPercent() {
    res.value = res.value / 100;
}

function convertPercent() {
    res.value = res.value / 100;
}

function negateNum() {
    res.value = res.value * -1 ;
}

// Adding event handler on the document to handle keyboard inputs
document.addEventListener("keydown", keyboardInputHandler);

// Function to handle keyboard inputs
function keyboardInputHandler(e) {
    e.preventDefault();

    // Numbers
    if (!isNaN(e.key)) {
        res.value += e.key;
    }

    // Operators
    if (e.key === "+") {
        res.value += "+";
    } else if (e.key === "-") {
        res.value += "-";
    } else if (e.key === "*") {
        res.value += "*";
    } else if (e.key === "/") {
        res.value += "/";
    }

    // Decimal key
    if (e.key === ".") {
        res.value += ".";
    }

    // Press enter to see result
    if (e.key === "Enter") {
        calculate(res.value);
    }

    // Backspace for removing the last input
    if (e.key === "Backspace") {
        res.value = res.value.slice(0, -1);
    }
}
