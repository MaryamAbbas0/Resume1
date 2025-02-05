const toggleButton = document.getElementById('toggle-skill') as HTMLButtonElement;
const skillsList = document.getElementById('skill-list') as HTMLElement;

// Initial display setup
skillsList.style.display = 'none'; // Skills list ko initially chhupana
toggleButton.style.display = 'block'; // Button ko show karna

toggleButton.addEventListener('click', () => {
    if (skillsList.style.display === 'none' || skillsList.style.display === '') {
        skillsList.style.display = 'block'; // Skills show karna
        toggleButton.innerHTML = 'Hide Skills'; // Button ka text change karna
    } else {
        skillsList.style.display = 'none'; // Skills hide karna
        toggleButton.innerHTML = 'Show Skills'; // Button ka text change karna
    }
});
