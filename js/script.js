welcomeMasage();
//welcome message function
function welcomeMessage(name) {
    //show popup
    let name = prompt("welcome to Syakib company,what is your name?");

    if (name == null || name.trim() ==="") {
        //if user cancel or input empty string
        name = "guest";
    }

    document.getElementById('welcome-speech').innerHTML = `Hello, ${name}! welcome to Syakib company`;
}
function validateForm() { }