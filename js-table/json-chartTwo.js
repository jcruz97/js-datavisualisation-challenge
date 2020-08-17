let tableTwoId = document.getElementById("table2");
let jsonTwo = []; 
let headersTwo =[];

/*These lines will get data from the table in eahc row, then in each cell
It will be made in a specific order due to a lack of precision in the HTML table*/

for (let i = 0; i < tableTwoId.rows[0].cells.length; i++) {
  headersTwo[i] = tableTwoId.rows[0].cells[i].innerHTML.toLowerCase();
}

for (let i = 1; i < tableTwoId.rows.length; i++) {

    let tableRow = tableTwoId.rows[i];
    let rowData = {};

    for (let j = 1; j < tableRow.cells.length; j++) {
      rowData[headersTwo[j]] = tableRow.cells[j].innerHTML.replace(/\s+/g," ").replace(/<br>/g,"");
    }

    jsonTwo.push(rowData);
}

let labels = jsonTwo.map(function (element) {
  return element.country;
});

let valuesFirstDate = jsonTwo.map(function (element) {
  return element["2007–09"];
});

let valuesSecondDate = jsonTwo.map(function (element){
  return element["2010–12"];
});

let secondChart = chartTwo(labels, valuesFirstDate, valuesSecondDate, "chartTwo");


/*Control block for every data container (array...)
*  console.log(json);  
*  console.log(valuesSecondDate);
*  console.log(valuesFirstDate); 
*  console.log(labels);
*/