function generateList(numberOfElements, depth, textPrefix) {
    const list = [];
    if (depth < 0)
        return list;
    for (let elementIndex = 0; elementIndex < numberOfElements; elementIndex++) {
        const printableNumber = textPrefix + (elementIndex+1).toString();
        const element = {
            text: printableNumber + ' ->',
            click: 0,
            next: generateList(numberOfElements, depth - 1, printableNumber + '.')
        }
        list.push(element);
    }
    return list;
}

const rootList = generateList(10, 3, '');

function renderList(target, list, listClasses = []) {
    target.innerHTML = '';
    const listObject = document.createElement('ul');
    listClasses.forEach(listClass => listObject.classList.add(listClass));
    if (list !== rootList) {
        const backButton = document.createElement('button');
        backButton.innerText = 'back';
        backButton.onclick = function() {
            path.pop();
            render();
        }
        target.appendChild(backButton);
    }
    for (let elementIndex = 0; elementIndex < list.length; elementIndex++) {
        const element = list[elementIndex];
        const elementObject = document.createElement('li');
        const elementButton = document.createElement('button');
        elementButton.innerText = '(' + element.click.toString() + ') ' + element.text;
        elementButton.onclick = function() {
            element.click += 1;
            path.push(elementIndex);
            render();
        }
        elementObject.appendChild(elementButton);
        listObject.appendChild(elementObject);
    }
    target.appendChild(listObject);
}

const path = [];
function getCurrentList() {
    let list = rootList;
    for (const index of path)
        list = list[index].next;
    return list;
}

const target = document.querySelector('.root');
function render() {
    renderList(target, getCurrentList(), ['list']);
}

render();