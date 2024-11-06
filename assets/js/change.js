// Function to update the text in the "change" class
function updateText() {
    // Get the input values from both fields
    const keyword = document.getElementById('keyword').value;
    const key = document.getElementById('key').value;

    // Check if either input field contains "candle"
    if (keyword.toLowerCase() === 'secret' || key.toLowerCase() === 'candle') {
        document.querySelector('.change').textContent = '"flag_{unlock_the_next_stage}" is the answer';
    } else {
        document.querySelector('.change').textContent = 'wrong Keyword';
    }
}
