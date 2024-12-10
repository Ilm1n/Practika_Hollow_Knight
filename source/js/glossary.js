document.addEventListener('DOMContentLoaded', () => {
    const glossaryData = [
        { term: "Рыцарь", description: "Герой игры. Маленький безымянный рыцарь." },
        { term: "Халлоунест", description: "Королевство, в котором разворачиваются события." },
        { term: "Лучезарность", description: "Главный враг Рыцаря." },
        { term: "Хорнет", description: "Спутник, помогающий в путешествии." },
        { term: "Зеленая тропа", description: "Огромный лес, полный опасностей." },
        { term: "Души", description: "Силы, которыми можно управлять." },
        { term: "Амулеты", description: "Заклинания и улучшения." },
        { term: "Скамья", description: "Точка сохранения прогресса." },
        { term: "Корнифер", description: "Место, где продаются карты." },
        { term: "Грязьмут", description: "Город в центре Hallownest." }
    ];

    const searchInput = document.getElementById('search-input');
    const glossaryList = document.getElementById('glossary-list');
    const descriptionText = document.getElementById('description-text');

    function displayGlossary(terms) {
        glossaryList.innerHTML = '';
        terms.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = item.term;
            listItem.addEventListener('click', () => {
                descriptionText.textContent = item.description;
            });
            glossaryList.appendChild(listItem);
        });
    }

    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();
        const filteredTerms = glossaryData.filter(item =>
            item.term.toLowerCase().includes(query)
        );
        displayGlossary(filteredTerms);
    });

    displayGlossary(glossaryData);
});
