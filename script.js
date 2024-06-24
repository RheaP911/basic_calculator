// Dark Mode
const toggleSwitch = document.querySelector('.switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
  
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
        document.querySelector('#mode').innerHTML = "Dark Mode";
    } else {
        document.querySelector('#mode').innerHTML = "Light Mode";
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        document.querySelector('#mode').innerHTML = "Dark Mode";
        localStorage.setItem('theme', 'dark');
    }
    else {        
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        document.querySelector('#mode').innerHTML = "Light Mode";
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);

toggle.addEventListener('change', switchTheme, false);


// Input numbers on screen
function showInputPoint() {
    var num7 = document.getElementById('num_point').value;
    document.getElementById('input').innerHTML = num7;
}

    // var num_point = document.getElementById('num_point').value;
    // var num0 = document.getElementById('num0').value;
    // var num1 = document.getElementById('num1').value;
    // var num2 = document.getElementById('num2').value;
    // var num3 = document.getElementById('num3').value;
    // var num4 = document.getElementById('num4').value;
    // var num5 = document.getElementById('num5').value;
    // var num6 = document.getElementById('num6').value;
    // var num8 = document.getElementById('num8').value;
    // var num9 = document.getElementById('num9').value;



// Clear numbers on screen
function clearInput() {
    document.getElementById('input').innerHTML = 0;
}


