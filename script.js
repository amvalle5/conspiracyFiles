// Poll submission handling
document.getElementById('pollForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the traditional way

    const selectedOption = document.querySelector('input[name="witness"]:checked');
    
    if (selectedOption) {
        const resultMessage = `You voted: ${selectedOption.value}`;
        document.getElementById('pollResult').textContent = resultMessage;
    } else {
        document.getElementById('pollResult').textContent = "Please select an option.";
    }
});

// Evidence submission handling
document.getElementById("evidenceForm").addEventListener("submit", function(event) {
    const fileInput = document.getElementById("evidence");

    if (!fileInput.value) {
        event.preventDefault();
        alert("Please upload an image before submitting your evidence!");
    }
});

