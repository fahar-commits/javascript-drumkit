

let allButton = document.querySelectorAll("button") 
for (let i = 0; i < allButton.length; i++) {
    allButton[i].addEventListener("click", buttonAlert);
    
}

function buttonAlert() {
    alert("i got clicked")
}