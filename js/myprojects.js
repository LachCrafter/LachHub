window.onload = function() {
    // Your existing JavaScript code
    function filterProjects() {
        const searchInput = document.getElementById('projectSearch');
        const filter = searchInput.value.toLowerCase();
        const projectContainers = document.querySelectorAll('.project-container');

        projectContainers.forEach((projectContainer) => {
            const projectName = projectContainer.querySelector('h2').innerText.toLowerCase();
            const projectDescription = projectContainer.querySelector('p').innerText.toLowerCase();

            if (projectName.includes(filter) || projectDescription.includes(filter)) {
                projectContainer.style.display = 'inline-block';
            } else {
                projectContainer.style.display = 'none';
            }
        });
    }

    // Attach the filterProjects function to the input's 'input' event
    const searchInput = document.getElementById('projectSearch');
    if (searchInput) {
        searchInput.addEventListener('input', filterProjects);
    }

    // Check server status on page load
    checkServerStatus();
};
