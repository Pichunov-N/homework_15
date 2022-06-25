const form = document.forms[0];
const input = document.querySelector('input');
const button = document.querySelector('button');
const listNode = document.getElementById('list');

const errorMessage = document.createElement('div');
errorMessage.classList.add('error-text')
button.after(errorMessage);

form.onsubmit = (event) => {
    event.preventDefault();
    if (input.value === "") {
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
    // listItem.innerHTML = input.value;

    const itemText = document.createElement('span')
    itemText.classList.add('li_item__text')
    itemText.innerHTML = input.value;

    const deleteItem = document.createElement('button');
    deleteItem.classList.add('li_item__delete');
    deleteItem.innerHTML = 'del';

    const listItemCheckbox = document.createElement('input');
    listItemCheckbox.type = 'checkbox';
    listItemCheckbox.classList.add('li_item__checkbox')

    listItemCheckbox.onclick = function (event) {
        const checkedItem = event.target.className === 'li_item__checkbox'
        if (checkedItem) {
            const chosenItem = event.target.closest('.li_item');
            chosenItem.style.textDecoration = 'line-through';
            const chosenCheckbox = event.target.closest('.li_item__checkbox');
            chosenCheckbox.setAttribute("disabled", "disabled");
        }
        console.log(event.target)
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