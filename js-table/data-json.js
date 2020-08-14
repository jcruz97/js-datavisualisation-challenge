
let table = document.getElementById("table2");
let json = []; // First row needs to be headers 
let headers =[];

for (let i = 0; i < table.rows[0].cells.length; i++) {
  headers[i] = table.rows[0].cells[i].innerHTML.toLowerCase();
}

for (let i = 1; i < table.rows.length; i++) {

    let tableRow = table.rows[i];
    let rowData = {};

    for (let j = 1; j < tableRow.cells.length; j++) {
      rowData[headers[j]] = tableRow.cells[j].innerHTML.replace(/\s+/g," ").replace(/<br>/g,"");
    }

    json.push(rowData);
}


let labels = json.map(function (element) {
  return element.country;
});

let valuesFirstDate = json.map(function (element) {
  return element["2007–09"];
});

let valuesSecondDate = json.map(function (element){
  return element["2010–12"];
});



let secondChart = BuildChart(labels, valuesFirstDate, valuesSecondDate, "chartTwo");


/*Control block for every data container (array...)*/
console.log(json);  
console.log(valuesSecondDate);
console.log(valuesFirstDate); 
console.log(labels);
console.log(ukCorrectString);
