function generateList(numberOfElements, depth, textPrefix) {
    const list = [];
    if (depth < 0)
        return list;
    for (let elementNumber = 0; elementNumber < numberOfElements; elementNumber++) {
        const printableNumber = textPrefix + (elementNumber+1).toString();
        const element = {
            text: printableNumber + " ->",
            click: 0,
            next: generateList(numberOfElements, depth - 1, printableNumber + '.')
        }
        list.push(element);
    }
    return list;
}

//const list = generateList(10, 3, '');