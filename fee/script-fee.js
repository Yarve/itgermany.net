document.getElementById('calculate').addEventListener('click', function() {
    let totalPrice = 0;

    // Add prices from checkboxes
    document.querySelectorAll('input[name="services"]:checked').forEach(function(service) {
        totalPrice += parseInt(service.dataset.price);
    });

    // Add price from logo options
    const logoPrice = document.querySelector('input[name="logo"]:checked');
    if (logoPrice) {
        totalPrice += parseInt(logoPrice.value);
    }

    // Add price from text options
    const textPrice = document.querySelector('input[name="text"]:checked');
    if (textPrice) {
        totalPrice += parseInt(textPrice.value);
    }

    // Update the total price in the UI
    document.getElementById('total-price').textContent = `${totalPrice} €`;
});
