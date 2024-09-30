
// week 3 js file

// Create an Object refering to the <form> ID'd as contactMeForm
let myForm = document.querySelector("#theForm");

// Create an Event Listner to detect when Go is pressed
myForm.addEventListener("submit", function(event){doStuff(event);});

// Create the doStuff() method that actually does stuff (algorithm/subroutine)
function doStuff(event){
    event.preventDefault(); // stop default refresh - IMPORTANT for things to behave

    // Read what was typed into each <input> box and keep track of it
    let data01 = document.querySelector("#theInput").value;
    console.log(data01);
    let data02 = document.querySelector("#theText").value;
    console.log(data02);

    // combine them together
    let theVariable = data01 + "\n" + data02

    // To show exactly, literally a message, use "" (a String); to show Data/Object/Variable no ""
    //window.alert("Thank you Victor. We will respond to you at vcampos@campos.com and answer your question HELP");
    //window.alert(important_message);
    window.alert(theVariable);
    myForm.reset(); // Clear the form
};
