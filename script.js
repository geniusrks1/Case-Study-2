


// Function to handle idea click event
function handleIdeaClick(event) {
    const ideaTitle = event.currentTarget.querySelector('h2').textContent;
    alert(`You clicked on: ${ideaTitle}`);
}

// Add event listeners once the document is loaded
document.addEventListener('DOMContentLoaded', () => {
    const ideas = document.querySelectorAll('.idea');
    ideas.forEach((idea) => {
        idea.addEventListener('click', handleIdeaClick);
    });
});
