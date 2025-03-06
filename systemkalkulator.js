const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        let value = button.innerText;
        if(value === "="){
            display.value = eval(display.value);
        }else if(value === "C"){
            display.value = "";
        }else{
            display.value += value;
        }
    });
});