let textInput = document.getElementById("InputText");
let message = document.getElementById("message");

textInput.addEventListener('keyup',(event)=>{
  if (event.key === "Enter") {
    message.textContent = "You pressed the enter key."
  }
}
    
let form = document.getElementById("getform");
let error = document.getElementById("error");

form.addEventListener("submit", (event)=>{
  let productId = document.getElementById("productId").value;
  if (productId ==="") {
    error.textContent = "Product Id cannot be blank"
    event.preventDefault();
  } else {
    error.textContent = "SUCESS";
    event.preventDefault()
  }
}
