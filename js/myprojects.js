window.onload = function() {
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
    const searchInput = document.getElementById('projectSearch');
    if (searchInput) {
        searchInput.addEventListener('input', filterProjects);
    }
    checkServerStatus();
};
