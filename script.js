document.addEventListener('DOMContentLoaded', function() {
        const sparkleContainer = 
document.querySelector('.sparkle-container').addEventListener('mousemove', function(e) {
    const sparkle = document.createElement('div');
    sparkle.classList.add('sparkle');
    sparkle.style.left = `${e.clientX - this.offsetLeft}px`;
    sparkle.style.top = `${e.clientY - this.offsetTop}px`;
    this.appendChild(sparkle);

    setTimeout(() => {
        sparkle.remove();
    }, 1000);
});

function createSparkle(x, y) {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.style.left = `${x + Math.random() * 20 - 10}px`;
    sparkle.style.top = `${y + Math.random() * 20 - 10}px`;
    document.body.appendChild(sparkle);

    setTimeout(() => {
        sparkle.remove();
    }, 1000);
}

const addButton = document.querySelector('button[onclick="addItem()"]');
if (addButton) {
    addButton.addEventListener('click', addItem);
}

const printButton = document.querySelector('button[onclick="printList()"]');
if (printButton) {
    printButton.addEventListener('click', printList);
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

function printList() {
    console.log("Print function called");
    const printContents = document.getElementById('shopping-list').innerHTML;
    const originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
}
