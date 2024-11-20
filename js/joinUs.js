function requiresInputs() {
    const inputs = [
        document.getElementById("nameInput"),
        document.getElementById("emailInput"),
        document.getElementById("typeSelect"),
        document.getElementById("phoneInput")
    ];

    inputs.forEach(input => {
        input.addEventListener("input", updateValue(input));
    });
}
function updateValue(input) {
    if (input.id === "phoneInput") {
        input.value = input.value.replace(/\D/g, "");
        if (input.value.length > 10) {
            input.value = input.value.slice(0, 10);
        }
    }
    if (input.value.trim() === "") {
        input.style.border = "2px solid red";
        input.classList.add("shake-horizontal");
    } else {
        input.style.border = "";
    }
}
