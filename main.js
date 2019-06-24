// function createAlert() {
//   //  make a div with createElement using DOM Manipulation
//   let popup = document.createElement("DIV");
//   // Use DOM Manipulation to add alert and alert-primary classes from Bootstrap because this will add Bootstrap styling
//   popup.classList.add("alert", "alert-primary");
//   // Use DOM Manipulation to add text to the div
//   popup.innerText = "this is a test";
//   // append it to the body but you can append to other elements if you can refer to them in DOM
//   document.body.appendChild(popup);
// }

// document.getElementById("createAlert").onclick = function() {
//   myFunction();
// };
//
// function myFunction() {
//   document.getElementById("createAlert").innerHTML = "YOU CLICKED ME!";
// }

function displayName() {
  let firstName = document.forms["myForm"]["firstname"].value;
  let lastName = document.forms["myForm"]["lastname"].value;
  let fullname = `${firstName}  ${lastName}`;
  alert("Thanks " + fullname);
  let p = document.createElement("p");
  p.innerText = fullname;
  div.appendChild(p);
}
