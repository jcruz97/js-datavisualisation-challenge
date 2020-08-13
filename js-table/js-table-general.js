function tableDataRetriever(selectTable){
    let dataTable = document.getElementById(selectTable);

    for (let i=1; i < dataTable.rows.length; i++){

        let tableCells = dataTable.rows.item(i).cells;

        for (let j=0; j < tableCells.length; j++){

            let countryData = tableCells.item(j).innerHTML;
            console.log(countryData);
        }
    }
}

tableDataRetriever("table2");