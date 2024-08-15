function highlight() {
    // Get all the <strong> elements in the document
    const boldWords = document.querySelectorAll('strong');

    // Change the color of each <strong> element to green
    boldWords.forEach((word) => {
        word.style.color = 'green';
    });
}

function return_normal() {
    // Get all the <strong> elements in the document
    const boldWords = document.querySelectorAll('strong');

    // Revert the color of each <strong> element to black
    boldWords.forEach((word) => {
        word.style.color = 'black';
    });
}
