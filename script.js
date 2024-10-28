const cards = document.querySelectorAll('.card');
let activeIndex = 0; // Start with the first card

// Function to set the active card
function setActiveCard(index) {
    removeActiveClasses(); // Remove 'active' class from all cards
    cards[index].classList.add('active'); // Add 'active' class to the current card
    activeIndex = index; // Update the active index
}

// Remove 'active' class from all cards
function removeActiveClasses() {
    cards.forEach(card => {
        card.classList.remove('active');
    });
}

// Auto-slide functionality
function startAutoSlide() {
    setInterval(() => {
        activeIndex = (activeIndex + 1) % cards.length; // Cycle to the next card
        setActiveCard(activeIndex); // Set it as active
    }, 3000); // Change every 3 seconds
}

// Start the automatic slide when the page loads
startAutoSlide();
