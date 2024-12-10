
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const glossaryList = document.getElementById('glossary-list');
    const descriptionText = document.getElementById('description-text');

    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();
        const terms = glossaryList.querySelectorAll('li');
        terms.forEach(term => {
            if (term.textContent.toLowerCase().includes(query)) {
                term.style.display = '';
            } else {
                term.style.display = 'none';
            }
        });
    });

    glossaryList.addEventListener('click', event => {
        if (event.target.tagName === 'LI') {
            const description = event.target.getAttribute('data-description');
            descriptionText.textContent = description;
        }
    });
});
