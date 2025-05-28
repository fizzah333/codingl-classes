//Set the text in the output display//
function setoutput(value) {
    document.getElementById("output_value").innerText = value;
}
//Get the text from the output display
function getoutput() {
    return document.getElementById("output_value").innerText;
}
//Set the text in the history display//
function setHistory(value) {
    document.getElementById("history_value").innerText = value;
}
//Get the text from the history display
function getHistory() {
    return document.getElementById("history_value").innerText;
}
//when numbers from(0-9)are clicks//
let numberbuttons = document.getElementsByClassName("number")
for(let button of numberbuttons) {
    button.addEventListner("click" , function (){
        let output = getoutput();
        setoutput(output + this.id)
    })
}
//When operator buttons are clicked//
let operatorbuttons = document.getElementsByClassName("operator")
for (let button of operatorbuttons) {
    button.addEventListner("click", function () {
        let id = this.id

        if(id == "clear") {
            setoutput("");
            setHistory("");
        }
        else if (id == "backspace"){
            let output = getoutput();
            if(output) {
                setoutput(output.slice(0 , -1));
            }
        }
        else if (id == "=") {
            let history = getHistory();
            let output = getoutput();
            let expression = history + output;

            try {
                let result = eval(expression);
                setoutput(result);
                setHistory("");
            } catch (error) {
                setoutput("Error")
            }
        }
        else {
            let output = getoutput();
            if (output !== "") {
                let history = getHistory();
                let operator = convertoperator(id)
                setHistory(history + output + operator);
                setoutput("");
            }
        }
    })
}

function convertoperator(id) {
    if (id == "/") return "/";
    if (id == "x") return "*";
    if (id == "-") return "-";
    if (id == "+") return "+";
    if (id == "%") return "%";
    return "";
}