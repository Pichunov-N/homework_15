const form = document.forms[0];
const input = document.querySelector('input');
const button = document.querySelector('button');
const listNode = document.getElementById('list');

const submitButton = document.querySelector('button');
submitButton.classList.add('submit_button');

const errorMessage = document.createElement('div');
errorMessage.classList.add('error-text');
button.after(errorMessage);

form.onsubmit = (event) => {
    event.preventDefault();
    if (input.value.trim() === "") {
        errorMessage.innerHTML = 'Напишите что-нибудь';
        errorMessage.style.marginBottom = '-18px'
        input.classList.add('error-colors')
        errorMessage.classList.add('error-colors')
        input.focus();
        return
    } else {
        errorMessage.innerHTML = '';
        errorMessage.style.marginBottom = '0px'
    };

    const listItem = document.createElement('li');
    listItem.classList.add('li_item');

    const itemText = document.createElement('span')
    itemText.classList.add('li_item__text')
    itemText.innerHTML = input.value;

    const deleteItem = document.createElement('button');
    deleteItem.classList.add('li_item__delete');
    deleteItem.innerHTML = 'X';

    const listItemCheckbox = document.createElement('input');
    listItemCheckbox.type = 'checkbox';
    listItemCheckbox.classList.add('li_item__checkbox')

    listItemCheckbox.onchange = function (event) {
        const chosenCheckbox = event.target.closest('.li_item__checkbox');
        if (chosenCheckbox) {
            itemText.style.textDecoration = 'line-through';
        }
        chosenCheckbox.setAttribute("disabled", "disabled");
    }

    listNode.append(listItem);
    listItem.append(itemText)
    listItem.append(deleteItem);
    listItem.prepend(listItemCheckbox)

    form.reset();
}

input.oninput = function () {
    input.classList.remove('error-colors')
}

listNode.addEventListener('click', (event) => {
    const closeButton = event.target.className === 'li_item__delete';
    if (closeButton) {
        const liRow = event.target.closest('.li_item');
        liRow.remove();
    }
});