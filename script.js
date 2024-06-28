// Dark Mode
const toggleSwitch = document.querySelector('.switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
  
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
        // document.querySelector('#mode').innerHTML = "Dark Mode";
    } else {
        // document.querySelector('#mode').innerHTML = "Light Mode";
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        // document.querySelector('#mode').innerHTML = "Dark Mode";
        localStorage.setItem('theme', 'dark');
    }
    else {        
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        // document.querySelector('#mode').innerHTML = "Light Mode";
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);
toggle.addEventListener('change', switchTheme, false);


// ScreenInput
const inp = document.getElementById("input");

function calculate(value) {
  const calculatedValue = eval(value || null);
  if (isNaN(calculatedValue)) {
    inp.value = "Can't divide 0 with 0";
    setTimeout(() => {
        inp.value = "";
    }, 1300);
  } else {
    inp.value = calculatedValue;
  }
}


// Displays entered value on screen.
function screenInput(enteredValue) {
  if (!inp.value) {
    inp.value = "";
  }
  inp.value += enteredValue;
}

//adding event handler on the document to handle keyboard inputs
document.addEventListener("keydown", keyboardInputHandler);

//function to handle keyboard inputs
function keyboardInputHandler(e) {
  // to fix the default behavior of browser,
  // enter and backspace were causing undesired behavior when some key was already in focus.
  e.preventDefault();
  //grabbing the liveScreen

  //numbers
  if (e.key === "0") {
    inp.value += "0";
  } else if (e.key === "1") {
    inp.value += "1";
  } else if (e.key === "2") {
    inp.value += "2";
  } else if (e.key === "3") {
    inp.value += "3";
  } else if (e.key === "4") {
    inp.value += "4";
  } else if (e.key === "5") {
    inp.value += "5";
  } else if (e.key === "6") {
    inp.value += "6";
  } else if (e.key === "7") {
    inp.value += "7";
  } else if (e.key === "7") {
    inp.value += "7";
  } else if (e.key === "8") {
    inp.value += "8";
  } else if (e.key === "9") {
    inp.value += "9";
  }

  //operators
  if (e.key === "+") {
    inp.value += "+";
  } else if (e.key === "-") {
    inp.value += "-";
  } else if (e.key === "*") {
    inp.value += "*";
  } else if (e.key === "/") {
    inp.value += "/";
  }

  //decimal key
  if (e.key === ".") {
    inp.value += ".";
  }

  //press enter to see result
  if (e.key === "Enter") {
    calculate(input.value);
  }

  //backspace for removing the last input
  if (e.key === "Backspace") {
    const resultInput = inp.value;
    //remove the last element in the string
    inp.value = resultInput.substring(0, inp.value.length - 1);
  }
}