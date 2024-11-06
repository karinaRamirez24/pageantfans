
function requiresInputs() {
    const inputs = [
        document.getElementById("nameInput"),
        document.getElementById("emailInput"),
        document.getElementById("typeSelect"),
        document.getElementById("phoneInput")
    ];
 console.log(inputs);


    inputs.forEach(input => {
        input.addEventListener("input", updateValue);


        function updateValue(e) {
            if (input.value.trim() === "") {
                input.style.border = "2px solid red";
            } else {
                input.style.border = "";
            }
          }

 
    });
}
