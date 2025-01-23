document.getElementById('searchButton').addEventListener('click', function() {
    const searchTerm = document.getElementById('search').value.toLowerCase();
    const bookItems = document.querySelectorAll('#bookList li');

    bookItems.forEach(item => {
        const bookTitle = item.textContent.toLowerCase();
        if (bookTitle.includes(searchTerm)) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
});