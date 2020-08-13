function tableDataRetriever(selectTable){

    let dataTable = document.getElementById(selectTable);

    let rowLength = dataTable.rows.length;

    for (let i=0; i < rowLength; i++){

        let tableCells = dataTable.rows.item(i).cells;

        let cellLength= tableCells.length;

        for (let j=0; j < cellLength; j++){

            let countryData = tableCells.item(j).innerHTML;
            //console.log(countryData);
        }
    }
}

tableDataRetriever("table2");