function insert_Row() {
    // 1. Get the table by its ID
    const table = document.getElementById('sampleTable');

    // 2. Insert a new row at the top (index 0)
    const newRow = table.insertRow(0);

    // 3. Insert the left cell and set its value
    const leftCell = newRow.insertCell(0);
    leftCell.innerText = 'New Cell1';

    // 4. Insert the right cell and set its value
    const rightCell = newRow.insertCell(1);
    rightCell.innerText = 'New Cell2';
}