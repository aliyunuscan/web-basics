document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("membershipForm").addEventListener("submit", function(event) {
        event.preventDefault();
        
        var quantityInput = parseFloat(document.getElementById("quantity").value);
        var errorMessage = document.getElementById("errorMessage");

        if (isNaN(quantityInput) || quantityInput < 1) {
            errorMessage.classList.remove("hidden");
            errorMessage.textContent = "*Quantity must be a positive number.";
        } else {
            errorMessage.classList.add("hidden");
        }
    });
});
