// var, let, const (Variables)
// strings, numbers, bool, null, undefined, symbol
//single element selectors
//multiple element selectors

const command_input = document.getElementById("commands");
const previous_inputs = [];

const textstart = document.getElementById("text");

command_input.addEventListener("keypress", OnEnter);

//Init
index = previous_inputs.length;

function OnEnter(e){
    if(e.key === "Enter"){
        previous_inputs.push(command_input.value);
        commandHandler(command_input.value);
    }
}

function commandHandler(cmd){
    switch(cmd.toLowerCase()){
        case "help":
            readLines(help, 500);
            break;
        case "aboutme":
            break;
        case "portfolio":
            break;
        case "socials":
            break;
        case "contact":
            break;
        case "clear":
            break;
        case "themes":
            break;
        default:
            console.log("This command does not exist")
    }
}

function addLines(text, time){
    var t = "";
    for (let i = 0; i < text.length; i++) {
        if (text.charAt(i) == " " && text.charAt(i + 1) == " ") {
            t += "&nbsp;&nbsp;";
            i++;
        } 
        else {
            t += text.charAt(i);
        }
    }
    setTimeout(function() {
    var next = document.createElement("p");
    next.innerHTML = t;

    textstart.parentNode.insertBefore(next, textstart);

    window.scrollTo(0, document.body.offsetHeight);
  }, time);

}


function readLines(command, time){
    command.forEach(function(text ,index) {
        addLines(text, index * time); 
    });
}









