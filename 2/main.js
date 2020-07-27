function generateList(numberOfElements, depth, textPrefix) {
    const list = [];
    if (depth < 0)
        return list;
    for (let elementNumber = 0; elementNumber < numberOfElements; elementNumber++) {
        const printableNumber = textPrefix + (elementNumber+1).toString();
        const element = {
            text: printableNumber + ' ->',
            click: 0,
            next: generateList(numberOfElements, depth - 1, printableNumber + '.')
        }
        list.push(element);
    }
    return list;
}

const list = generateList(10, 3, '');

function renderList(target, list, listClasses) {
    const listObject = document.createElement('ul');
    listClasses.forEach(listClass => listObject.classList.add(listClass));
    for (const element of list) {
        const elementObject = document.createElement('li');
        const elementButton = document.createElement('button');
        elementButton.innerText = '(' + element.click.toString() + ') ' + element.text;
        elementObject.appendChild(elementButton);
        listObject.appendChild(elementObject);
    }
    target.appendChild(listObject);
}

const target = document.querySelector('.root');
renderList(target, list, ['list']);