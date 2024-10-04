document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.clickable-button');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            console.log('Button clicked:', this.textContent);
            // Uncomment the next line if you want to prevent default behavior for testing
            // e.preventDefault();
        });
    });
});
