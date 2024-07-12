document.getElementById('translateButton').addEventListener('click', function() {
    const inputText = document.getElementById('inputText').value;
    const outputText = document.getElementById('outputText');
    
    // Mock translation logic (replace with actual translation API logic)
    outputText.value = `Translated ${inputText}`;
});
