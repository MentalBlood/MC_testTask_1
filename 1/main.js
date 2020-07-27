function loadGists() {
    const data = fetch('https://api.github.com/gists/public')
        .then(response => response.json());
    return data;
}

function getFilesInfoFromGists(gists) {
    const filesInfo = [];
    for (const gist of gists) {
        if (gist["files"] === undefined)
            continue;
        for (const file of Object.values(gist["files"]))
            filesInfo.push({
                "filename": file["filename"],
                "type": file["type"],
                "raw_url": file["raw_url"]
            });
    }
    return filesInfo;
}

function writeFilesInfoToTable(filesInfo) {
    const tableElement = document.querySelector('.gistsTable');
    for (const fileInfo of filesInfo) {
        const newRow = document.createElement('tr');
        for (const key of ["filename", "type", "raw_url"]) {
            const newCell = document.createElement('td');
            newCell.innerText = fileInfo[key];
            newRow.appendChild(newCell);
        }
        tableElement.appendChild(newRow);
    }
}

loadGists()
    .then(getFilesInfoFromGists)
    .then(writeFilesInfoToTable);