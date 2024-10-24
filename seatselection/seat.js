// seatScript.js

document.addEventListener('DOMContentLoaded', () => {
    const seatGrid = document.getElementById('seatGrid');
    const seatList = document.getElementById('seatList');
    const confirmButton = document.getElementById('confirmButton');
    const totalAmount = document.getElementById('totalAmount'); // Element to display total amount

    const seatPrice = 800; // Price per seat
    
    // Create a 5x7 grid of seats
    for (let row = 1; row <= 10; row++) {
        for (let col = 1; col <= 3; col++) {
            const seat = document.createElement('div');
            seat.classList.add('seat');
            seat.textContent = `${String.fromCharCode(64 + row)}${col}`;
            seat.addEventListener('click', () => toggleSeatSelection(seat));
            seatGrid.appendChild(seat);
        }
    }
    
    function toggleSeatSelection(seat) {
        seat.classList.toggle('selected');
        updateSelectedSeats();
    }
    
    function updateSelectedSeats() {
        const selectedSeats = document.querySelectorAll('.seat.selected');
        seatList.innerHTML = '';
        selectedSeats.forEach(seat => {
            const listItem = document.createElement('li');
            listItem.textContent = seat.textContent;
            seatList.appendChild(listItem);
            const total = selectedSeats.length * seatPrice;
            totalAmount.textContent = `Total Amount: ₹${total}`;
        });
        
        
    }
    
    confirmButton.addEventListener('click', () => {
        const selectedSeats = document.querySelectorAll('.seat.selected');
        if (selectedSeats.length === 0) {
            alert('Please select at least one seat.');
            return;
        }
        const seatNumbers = Array.from(selectedSeats).map(seat => seat.textContent);
        alert(`You have selected the following seats: ${seatNumbers.join(', ')}`);
        window.location.href='sample.html';
    
    });
});
