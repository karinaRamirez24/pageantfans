function requiresInputs() {
    const inputs = [
        document.getElementById("nameInput"),
        document.getElementById("emailInput"),
        document.getElementById("typeSelect"),
        document.getElementById("phoneInput")
    ];

    inputs.forEach(input => {
        input.addEventListener("input", updateValue(input));


        function updateValue(input) {
            if (input.value.trim() === "") {
                input.style.border = "2px solid red";
            } else {
                input.style.border = "";
            }
          }

 
    });
}
