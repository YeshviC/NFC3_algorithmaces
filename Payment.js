document.getElementById('burger-menu').addEventListener('click', function() {
    var sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('open-sidebar');
});

document.querySelectorAll('.sidebar a').forEach(function(link) {
    link.addEventListener('click', function() {
        document.getElementById('sidebar').classList.remove('open-sidebar');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const upi = document.querySelector('.upi-details');
    const bank = document.querySelector('.bank-details');

    // Example logic to hide or show details
    // You can replace this with your own logic
    function togglePaymentDetails() {
        upi.style.display = 'block';
        bank.style.display = 'block'; // Or 'none' to hide if needed
    }

    togglePaymentDetails(); // Call the function to show details when page loads
});