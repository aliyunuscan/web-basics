document.addEventListener('DOMContentLoaded', dataTable);

function dataTable() {
    fetch('http://localhost:5500/products')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const productTable = document.getElementById('productTable');
            productTable.innerHTML = '';
            const headers = ['Name', 'Description', 'Price', 'Category'];
            const thead = productTable.createTHead();
            const headerRow = thead.insertRow();
            headers.forEach(headerText => {
                const th = document.createElement('th');
                th.textContent = headerText;
                headerRow.appendChild(th);
            });
            const fragment = document.createDocumentFragment();
            data.forEach(item => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${escapeHTML(item.name)}</td>
                    <td>${escapeHTML(item.description)}</td>
                    <td>${escapeHTML(item.price)}</td>
                    <td>${escapeHTML(item.category)}</td>
                `;
                fragment.appendChild(row);
            });
            productTable.appendChild(fragment);
        })
        .catch(error => {
            console.error('Error loading products:', error);
            alert('An error occurred while loading products.');
        });
}

function escapeHTML(text) {
    const element = document.createElement('div');
    element.textContent = text;
    return element.innerHTML;
}
