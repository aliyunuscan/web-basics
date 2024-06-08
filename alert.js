document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.btn-primary');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            const alertContainer = document.getElementById('alert-container');
        const alert = `
            <div class="alert alert-success alert-dismissible fade show" role="alert">
                Item added to cart!
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        `;
        alertContainer.innerHTML = alert;
        });
    });
});