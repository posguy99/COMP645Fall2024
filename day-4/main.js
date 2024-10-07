
// week 3 js file

// Create an Object refering to the <form> ID'd as contactMeForm
let myForm = document.querySelector("#contactForm");

// Create an Event Listner to detect when Go is pressed
myForm.addEventListener("submit", function(event){doStuff(event);});

// Create the doStuff() method that actually does stuff (algorithm/subroutine)
function doStuff(event){
    event.preventDefault(); // stop default refresh - IMPORTANT for things to behave

    // Read what was typed into each <input> box and keep track of it
    let data01 = document.querySelector("#theName").value;
    console.log(data01);
    let data02 = document.querySelector("#theEmail").value;
    console.log(data02);
    let important_message = document.querySelector("#box-3").value;
    console.log(important_message);
    // To show exactly, literally a message, use "" (a String); to show Data/Object/Variable no ""
    //window.alert("Thank you Victor. We will respond to you at vcampos@campos.com and answer your question HELP");
    //window.alert(important_message);
    window.alert("Thank you " + data01 + ". \nWe will respond to you at " + data02 + "\nand answer your question: " + important_message);
    myForm.reset(); // Clear the form
};
