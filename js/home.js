document.addEventListener('DOMContentLoaded', (event) => {
    const copyBtn = document.getElementById('copyLachAnarchyIP');

    copyBtn.addEventListener('click', function() {
        const text = "LachCrafter.de";
        navigator.clipboard.writeText(text).then(() => {
            alert("Server IP copied to clipboard: " + text);
        }).catch(err => {
            console.error('Failed to copy text: ', err);
        });
    });
});
