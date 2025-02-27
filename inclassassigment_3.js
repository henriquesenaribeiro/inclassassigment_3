let textInput = document.getElementById("InputText");
let message = document.getElementById("message");

textInput.addEventListener('keyup',(event)=>{
  if (event.key === "Enter") {
    message.textContent = "You pressed the enter key."
  }
}
    
