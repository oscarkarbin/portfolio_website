
var typedtext = document.getElementById("typed-text");
var input = document.getElementById("setter");

setTimeout(function() {
  readLines(banner, 60, "colorGreen");
  typedtext.focus();
}, 100);


input.addEventListener("keypress", function(e){
  if(e.keyCode === 13){
    e.preventDefault();
    addLines("website@website.com>>" +input.value);
    readCommand(input.value);
    input.value = "";
  }
} )

function readCommand(cmd){
  switch (cmd.toLowerCase()) {
    case "help":
      console.log("help")
      readLines(help, 60, "colorGray");
      break;
    case "aboutme":
      console.log("About me")
      readLines(aboutme, 60);
      break;
    case "socials":
      readLines(social, 60);
      break;
    case "contact":
      readLines(contact, 60);
      break;
    case "projects":
      readLines(projects, 60);
      break;
    default:
      console.log("default")
      addLines("Error 404; This command does not exist. Type 'help' for a list of commands")
      break;
  }
}

function addLines(text, time, attribute){
  var t = "";
  for(let i = 0; i < text.length; i++){
    if(text.charAt(i) == " " && text.charAt(i+1) == " "){
      t += "&nbsp;&nbsp;";
      i++;
    }
    else{
      t += text.charAt(i);
    }
  }
  setTimeout(function(){
    var next = document.createElement("p");
    next.innerHTML = t;
    next.id = attribute;
    typedtext.parentNode.insertBefore(next, typedtext);
    window.scrollTo(0, document.body.offsetHeight);
    
  }, time);

}

function readLines(text, time, attribute){
  text.forEach(function(item, index){
    addLines(item, index* time, attribute);
  });
}




 
 

  









