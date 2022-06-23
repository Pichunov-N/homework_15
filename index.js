const form = document.forms[0];
const input = document.querySelector('input');
const button = document.querySelector('button');
const listNode = document.getElementById('list');

const errorMessage = document.createElement('div');
button.after(errorMessage);

form.onsubmit = (event) => {
    event.preventDefault();
    if (input.value === "") {
        errorMessage.innerHTML = 'Напишите что-нибудь';
        input.classList.add('error-colors')
        errorMessage.classList.add('error-colors')
        input.focus();
        return
    } else errorMessage.innerHTML = '';

    const listItem = document.createElement('li');
    listItem.classList.add('li_item');
    listItem.innerHTML = input.value;

    const deleteItem = document.createElement('button');
    deleteItem.classList.add('delete_li');
    deleteItem.innerHTML = 'del';

    listNode.append(listItem);
    listItem.prepend(deleteItem);

    form.reset();
}

input.oninput = function () {
    input.classList.remove('error-colors')
}

listNode.addEventListener('click', (event) => {
    const closeButton = event.target.className === 'delete_li';
    if (closeButton) {
        const liRow = event.target.closest('.li_item');
        liRow.remove();
    }
});