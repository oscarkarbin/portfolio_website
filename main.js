// var, let, const (Variables)
// strings, numbers, bool, null, undefined, symbol
//single element selectors
//multiple element selectors

const command_input = document.getElementById("commands");
const previous_inputs = [];

command_input.addEventListener("keypress", OnEnter);

//Init
index = previous_inputs.length;

function OnEnter(e){
    if(e.key === "Enter"){
        previous_inputs.push(command_input.value);
        commandHandler(command_input.value);
        console.log(command_input.value);
    }
}

function commandHandler(cmd){
    switch(cmd.toLowerCase()){
        case "help":
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



