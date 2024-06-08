function calculateMembershipFee(event) {
    event.preventDefault(); 
    const selectedPackage = document.getElementById('package').value;
    let p = 0;
    switch (selectedPackage) {
      case 'daily':
        p = 0.99;
        break;
      case 'monthly':
        p = 25.99;
        break;
      case 'yearly':
        p = 120.99;
        break;
      default:
        p = 0;
    }
    const quantity = document.getElementById('quantity').value;
    const totalPrice = p * quantity;

    if (totalPrice >= 1) {
        document.getElementById('price').value = `$${totalPrice.toFixed(2)}`;
    }
}

document.getElementById('membershipForm').addEventListener('submit', calculateMembershipFee);
