document.addEventListener('DOMContentLoaded', function() {
    const sparkleContainer = document.querySelector('.sparkle-container');
    if (sparkleContainer) {
        sparkleContainer.addEventListener('mousemove', function(e) {
            createSparkle(e.clientX - this.offsetLeft, e.clientY - this.offsetTop);
        });
    }

    // Call addItem() when the "Add Item" button is clicked
    const addButton = document.querySelector('button[onclick="addItem()"]');
    if (addButton) {
        addButton.addEventListener('click', addItem);
    }

    // Define your printList function here (if needed)
    function printList() {
        // Implement your logic to print the list items
        console.log("Print function called");
        const printContents = document.getElementById('shopping-list').innerHTML;
        const originalContents = document.body.innerHTML;

        document.body.innerHTML = printContents;
        window.print();
        document.body.innerHTML = originalContents;
    }
});

function createSparkle(x, y) {
    const sparkle = document.createElement('div');
    sparkle.classList.add('sparkle');
    sparkle.style.left = `${x + Math.random() * 20 - 10}px`;
    sparkle.style.top = `${y + Math.random() * 20 - 10}px`;
    document.body.appendChild(sparkle);

    setTimeout(() => {
        sparkle.remove();
    }, 1000);
}

function addItem() {
    const itemInput = document.getElementById('item-input');
    const itemText = itemInput.value.trim();
    if (itemText !== '') {
        const listItem = document.createElement('li');
        listItem.textContent = itemText;
        document.getElementById('list').appendChild(listItem);
        itemInput.value = '';
    }
}
document.getElementById('zip-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const zipCode = document.getElementById('zip-code').value;
    fetchStores(zipCode);
});

function fetchStores(zipCode) {
    const apiKey = 'AIzaSyBEEDGAc9ryRIzPiiNXjlD3MPgBOW13JoI'; // Place your API key here
    const apiUrl = `https://apigateway.googleapis.com/stores?zip=${zipCode}&api_key=${apiKey}`; // API key included in URL
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => displayStores(data.stores))
        .catch(error => console.error('Error:', error));
}

function displayStores(stores) {
    const storeResults = document.getElementById('store-results');
    storeResults.innerHTML = '';

    stores.forEach(store => {
        const storeItem = document.createElement('div');
        storeItem.classList.add('store-item');
        storeItem.innerHTML = `
            <h3>${store.name}</h3>
            <p>Address: ${store.address}</p>
            <p>Phone: ${store.phone}</p>
            <a href="${store.link}" target="_blank">Visit Store</a>
        `;
        storeResults.appendChild(storeItem);
    });
}