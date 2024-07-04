function addItem() {
    const itemInput = document.getElementById('item-input');
    const itemText = itemInput.value.trim();

    if (itemText !== '') {
        const listItem = document.createElement('li');
        listItem.textContent = itemText;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Remove';
        deleteButton.style.marginLeft = '10px';
        deleteButton.onclick = function() {
            listItem.remove();
        };

        listItem.appendChild(deleteButton);
        document.getElementById('list').appendChild(listItem);

        itemInput.value = '';
    }
}
